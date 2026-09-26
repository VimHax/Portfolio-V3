import { data, Link, Outlet, useLocation } from "react-router";
import type { Route } from "./+types/layout";
import { getAllWork, getWork } from "./get-work.server";
import dateToString, {
  HeroType,
  nonNull,
  shuffle,
  stringToColor,
} from "~/util";
import Background from "~/components/background";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { MuxBackgroundVideo } from "@videojs/react/media/mux-background-video";
import OptimizedImage from "~/components/optimized-image";
import { twJoin } from "tailwind-merge";
import ArrowRightSVG from "~/svgs/arrow-right";
import Work from "~/components/work";
import ContactSection from "~/components/contact-section";
import FadeIn from "~/components/fade-in";
import Title from "~/components/title";
import FadeUp from "~/components/fade-up";
import generateMetadata from "~/metadata";

export async function loader({ url }: Route.LoaderArgs) {
  const segments = url.pathname.split("/").filter((x) => x.length !== 0);
  const notFoundError = () =>
    data("Work not found! URL: " + url, { status: 404 });
  if (segments.length !== 2) throw notFoundError();
  const id = segments[1];
  const work = getWork(id);
  if (work === null) throw notFoundError();

  const allWork = getAllWork();
  const related = Object.keys(allWork)
    .filter((x) => x !== id)
    .map((id) => ({
      id,
      work: nonNull(allWork[id]),
    }));

  return { id, ...work, related };
}

export function meta({ loaderData }: Route.MetaArgs) {
  return generateMetadata({
    route: `/work/${loaderData.id}`,
    title: `${loaderData.title.replace("\n", " ")} | VimHax`,
    description: loaderData.description,
    color: loaderData.color[1],
    embed: loaderData.embed,
    keywords: [...loaderData.tags],
  });
}

export function shouldRevalidate() {
  return true;
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  const [client, setClient] = useState(false);
  const location = useLocation();
  const related = useMemo(
    () => shuffle(loaderData.related).slice(0, 4),
    [location.key],
  );

  useEffect(() => setClient(true), []);

  return (
    <>
      <div
        key={location.key}
        className="full-wide-content -mt-navbar py-navbar relative flex w-full justify-center px-12 lg:mb-4 xl:mb-8"
      >
        <Background
          className="absolute top-0 left-0 h-full w-full"
          startColor={stringToColor(loaderData.color[0])}
          endColor={stringToColor(loaderData.color[1])}
        />

        <div className="my-sub-section max-w-wide z-10 flex w-full flex-col items-center text-white lg:flex-row lg:items-end lg:justify-between">
          <div>
            <FadeIn>
              <span className="-mt-1.75 mb-2 block text-center text-base font-semibold tracking-widest uppercase sm:-mt-2 sm:mb-4 sm:text-lg lg:mb-1 lg:text-left xl:mb-2 xl:text-xl">
                {dateToString(loaderData.date)}
              </span>
            </FadeIn>

            <h1
              className={twJoin(
                "font-title mb-6 text-center tracking-tight text-balance whitespace-pre sm:mb-8 sm:text-8xl sm:leading-21 lg:-mb-2.25 lg:-translate-x-1.5 lg:text-left lg:text-7xl lg:leading-16 xl:-mb-3 xl:text-8xl xl:leading-21",
                loaderData.title.includes(" ") || loaderData.title.length >= 9
                  ? "text-6xl leading-14"
                  : "text-7xl leading-16",
              )}
            >
              <Title title={loaderData.title} />
            </h1>
          </div>

          <FadeIn>
            <p className="-mb-0.75 max-w-sm text-center text-base leading-5 sm:max-w-xl sm:text-lg sm:text-balance lg:text-right xl:-mb-1 xl:text-xl xl:leading-6">
              {loaderData.description}
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeUp>
        <div className="hero-wide-content @content:aspect-cinematic -mt-navbar relative z-10 mb-12 flex aspect-video sm:mb-16 lg:-mt-[calc(var(--spacing-navbar)+var(--spacing-sub-section))]">
          <div
            className="loading-animation @content:rounded-4xl absolute top-0 left-0 h-full w-full shadow-2xl/25 sm:top-px sm:left-px sm:h-[calc(100%-2px)] sm:w-[calc(100%-2px)] sm:rounded-3xl"
            style={
              {
                "--tw-shadow-color": `color-mix(in oklab, ${loaderData.color[0]} var(--tw-shadow-alpha), transparent)`,
                "--loading-color-start": `hsl(from ${loaderData.color[0]} h s 5)`,
                "--loading-color-end": `hsl(from ${loaderData.color[0]} h s 10)`,
              } as CSSProperties
            }
          />
          {loaderData.hero.type === HeroType.Image ? (
            <OptimizedImage
              image={loaderData.hero.src}
              sizes={[
                { maxWidth: 1536, size: 100, unit: "vw" },
                { size: 1536, unit: "px" },
              ]}
              className="@content:rounded-4xl z-10 h-full w-full object-cover sm:rounded-3xl"
              alt="Hero image"
              style={{ objectPosition: loaderData.hero.position }}
              fetchPriority="high"
            />
          ) : (
            <MuxBackgroundVideo
              className="@content:rounded-4xl z-10 h-full w-full object-cover sm:rounded-3xl"
              src={`https://stream.mux.com/${loaderData.hero.src}.m3u8`}
              crossOrigin="anonymous"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              x-webkit-airplay="deny"
              style={{ objectPosition: loaderData.hero.position }}
            />
          )}
        </div>
      </FadeUp>

      <Outlet />

      <div className="full-wide-content mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide flex w-full items-end justify-between">
          <FadeIn>
            <h2 className="font-title text-5xl tracking-tight sm:text-7xl">
              Related
            </h2>
          </FadeIn>
          <FadeIn>
            <Link
              className="font-title border-b-2 border-solid text-2xl tracking-tight sm:mb-1 sm:text-5xl"
              to="/work"
              viewTransition
            >
              All work
              <ArrowRightSVG className="ml-3 inline-block size-6 sm:ml-5 sm:size-10" />
            </Link>
          </FadeIn>
        </div>
      </div>
      <div className="wide-content mb-section grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-8">
        {client
          ? related.map(({ id, work }, idx) => (
              <Work key={idx} url={`/work/${id}`} metadata={work} />
            ))
          : Array(4)
              .fill(null)
              .map((_, idx) => (
                <FadeUp key={idx}>
                  <div className="@container">
                    <div className="loading-animation @5xl:aspect-cinematic aspect-3/4 w-full rounded-3xl shadow-2xl/10 @2xl:aspect-video @2xl:rounded-4xl" />
                  </div>
                </FadeUp>
              ))}
      </div>

      <ContactSection />
    </>
  );
}

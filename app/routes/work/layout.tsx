import { data, Outlet } from "react-router";
import type { Route } from "./+types/layout";
import { getWork } from "./get-work.server";
import dateToString, { HeroType, stringToColor } from "~/util";
import Background from "~/components/background";
import type { CSSProperties } from "react";
import { MuxBackgroundVideo } from "@videojs/react/media/mux-background-video";
import OptimizedImage from "~/components/optimized-image";
import { twJoin } from "tailwind-merge";

export async function loader({ url }: Route.LoaderArgs) {
  const work = getWork(url.pathname.slice("/work/".length));
  if (work === null) throw data("Work not found! URL: " + url, { status: 404 });
  return work;
}

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `${loaderData.title} | VimHax` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="full-wide-content -mt-navbar py-navbar relative flex w-full justify-center px-12 lg:mb-4 xl:mb-8">
        <Background
          className="absolute top-0 left-0 h-full w-full"
          startColor={stringToColor(loaderData.color[0])}
          endColor={stringToColor(loaderData.color[1])}
        />

        <div className="my-sub-section max-w-wide z-10 flex w-full flex-col items-center text-white lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="-mt-1.75 mb-2 block text-center text-base font-semibold tracking-widest uppercase sm:-mt-2 sm:mb-4 sm:text-lg lg:mb-1 lg:text-left xl:mb-2 xl:text-xl">
              {dateToString(loaderData.date)}
            </span>

            <h1
              className={twJoin(
                "font-title mb-6 text-center tracking-tight text-balance sm:mb-8 sm:text-8xl sm:leading-21 lg:-mb-2.25 lg:-translate-x-1.5 lg:text-left lg:text-7xl lg:leading-16 xl:-mb-3 xl:text-8xl xl:leading-21",
                loaderData.title.includes(" ") || loaderData.title.length >= 9
                  ? "text-6xl leading-14"
                  : "text-7xl leading-16",
                loaderData.title.includes(" ") &&
                  "max-w-100 sm:max-w-180 lg:max-w-130 xl:max-w-180",
              )}
            >
              {loaderData.title}
            </h1>
          </div>

          <p className="-mb-0.75 max-w-sm text-center text-base leading-5 sm:max-w-xl sm:text-lg sm:text-balance lg:text-right xl:-mb-1 xl:text-xl xl:leading-6">
            {loaderData.description}
          </p>
        </div>
      </div>

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

      <Outlet />
    </>
  );
}

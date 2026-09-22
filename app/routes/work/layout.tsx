import { data, Outlet } from "react-router";
import type { Route } from "./+types/layout";
import { getWork } from "./get-work.server";
import dateToString, { HeroType, stringToColor } from "~/util";
import Background from "~/components/background";
import type { CSSProperties } from "react";
import { MuxBackgroundVideo } from "@videojs/react/media/mux-background-video";
import OptimizedImage from "~/components/optimized-image";

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
      <div className="full-wide-content -mt-navbar py-navbar relative flex w-full justify-center">
        <Background
          className="absolute top-0 left-0 h-full w-full"
          startColor={stringToColor(loaderData.color[0])}
          endColor={stringToColor(loaderData.color[1])}
        />

        <div className="my-sub-section w-wide z-10 flex items-end justify-between text-white">
          <div>
            <span className="mb-2 block text-lg font-semibold tracking-widest uppercase sm:mb-2 sm:text-xl">
              {dateToString(loaderData.date)}
            </span>

            <h1 className="font-title -mb-4 max-w-175 -translate-x-1.5 text-5xl leading-23 tracking-tight text-balance sm:text-8xl">
              {loaderData.title}
            </h1>
          </div>

          <p className="-mb-1 max-w-2xs text-right text-xl leading-6 text-balance sm:max-w-xl">
            {loaderData.description}
          </p>
        </div>
      </div>

      <div className="wide-content sm:mb-sub-section lg:aspect-cinematic relative z-10 -mt-29 mb-8 flex aspect-video">
        <div
          className="dark-loading-animation absolute top-px left-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-4xl shadow-2xl/25"
          style={
            {
              "--tw-shadow-color": `color-mix(in oklab, ${loaderData.color[0]} var(--tw-shadow-alpha), transparent)`,
            } as CSSProperties
          }
        />
        {loaderData.hero.type === HeroType.Image ? (
          <OptimizedImage
            image={loaderData.hero.src}
            sizes={[{ size: 1536, unit: "px" }]}
            className="z-10 h-full w-full rounded-4xl object-cover"
            alt="Hero image"
            style={{ objectPosition: loaderData.hero.position }}
            fetchPriority="high"
          />
        ) : (
          <MuxBackgroundVideo
            className="z-10 h-full w-full rounded-4xl object-cover"
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

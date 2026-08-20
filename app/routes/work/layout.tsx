import { data, Outlet } from "react-router";
import type { Route } from "./+types/layout";
import { getWork } from "./get-work.server";
import dateToString, { HeroType, stringToColor } from "~/util";
import Background from "~/components/background";

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
            <h2 className="mb-2 text-lg font-semibold tracking-widest uppercase sm:mb-2 sm:text-xl">
              {dateToString(loaderData.date)}
            </h2>

            <h1 className="font-title -mb-4 max-w-175 text-5xl leading-23 tracking-tight text-balance sm:text-8xl">
              {loaderData.title}
            </h1>
          </div>

          <p className="-mb-1 max-w-2xs text-right text-xl leading-6 text-balance sm:max-w-xl">
            {loaderData.description}
          </p>
        </div>
      </div>

      {loaderData.hero.type === HeroType.Image ? (
        <img
          className="wide-content sm:mb-sub-section lg:aspect-cinematic z-10 -mt-29 mb-8 aspect-video rounded-2xl object-cover shadow-xl sm:rounded-4xl lg:shadow-2xl"
          src={loaderData.hero.src}
          alt="Hero image"
          style={{ objectPosition: loaderData.hero.position }}
        />
      ) : (
        <video
          className="wide-content sm:mb-sub-section lg:aspect-cinematic z-10 -mt-29 mb-8 aspect-video rounded-2xl object-cover shadow-xl sm:rounded-4xl lg:shadow-2xl"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          preload="auto"
        >
          <source src={loaderData.hero.src} type="video/mp4" />
        </video>
      )}

      <Outlet />
    </>
  );
}

import { data, Outlet } from "react-router";
import type { Route } from "./+types/layout";
import getWork from "./get-work.server";

export async function loader({ url }: Route.LoaderArgs) {
  const work = getWork(url.pathname.slice("/work/".length));
  if (work === null) throw data("Work not found! URL: " + url, { status: 404 });
  return work;
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="wide-content mt-sub-section mb-5 flex items-end justify-between">
        <div>
          <h2 className="mb-2 text-lg font-semibold tracking-widest uppercase sm:mb-2 sm:text-xl">
            {loaderData.date.year}{" "}
            {
              [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ][loaderData.date.month - 1]
            }
          </h2>

          <h1 className="font-title max-w-175 text-5xl leading-23 tracking-tight text-balance sm:text-8xl">
            {loaderData.title}
          </h1>
        </div>

        <p className="mb-1 max-w-2xs text-right text-xl leading-6 opacity-50 sm:max-w-xl">
          {loaderData.description}
        </p>
      </div>

      <video
        className="wide-content sm:mb-sub-section lg:aspect-cinematic mb-8 aspect-video rounded-2xl object-cover shadow-xl sm:rounded-4xl lg:shadow-2xl"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        x-webkit-airplay="deny"
        preload="auto"
      >
        <source src="/video/mcprom.mp4" type="video/mp4" />
      </video>

      <Outlet />
    </>
  );
}

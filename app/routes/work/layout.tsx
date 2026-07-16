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
    <main className="work-grid sm:text-lg [&_code]:text-sm sm:[&_code]:text-base">
      <h2 className="mt-12 mb-2 text-center text-lg font-semibold tracking-widest uppercase sm:mt-16 sm:mb-4 sm:text-xl">
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

      <h1 className="font-title mb-8 text-center text-5xl tracking-tight text-balance sm:text-8xl">
        {loaderData.title}
      </h1>

      <p className="max-w-2xs justify-self-center text-center sm:max-w-2xl">
        {loaderData.description}
      </p>

      <video
        className="wide-content my-8 aspect-video rounded-2xl object-cover shadow-xl sm:my-16 sm:rounded-4xl lg:aspect-239/100 lg:shadow-2xl"
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

      <div className="mb-12 sm:mb-16">
        <Outlet />
      </div>
    </main>
  );
}

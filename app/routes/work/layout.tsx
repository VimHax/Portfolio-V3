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
    <main className="work-grid text-lg [&_code]:text-base">
      <h2 className="mt-16 mb-4 text-center text-xl">
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

      <h1 className="font-title mb-8 text-center text-8xl tracking-tight">
        {loaderData.title}
      </h1>

      <p className="max-w-2xl justify-self-center text-center">
        {loaderData.description}
      </p>

      <video
        className="wide-content my-16 aspect-239/100 rounded-4xl object-cover shadow-2xl"
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

      <div className="mb-16">
        <Outlet />
      </div>
    </main>
  );
}

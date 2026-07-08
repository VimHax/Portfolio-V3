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
    <main className="flex flex-col">
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

      <p className="mb-16 max-w-[50ch] self-center text-center text-lg">
        {loaderData.description}
      </p>

      {/* <img
        className="aspect-2/1 w-300 self-center rounded-2xl object-cover"
        src={HeroImg}
        alt="MCProm"
      /> */}
      <video
        className="mb-16 aspect-239/100 w-7xl self-center rounded-4xl object-cover shadow-2xl"
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
    </main>
  );
}

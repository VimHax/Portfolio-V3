import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VimHax" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative -mt-21 flex justify-center">
        <Hero className="absolute top-0 left-0 h-full w-full mix-blend-hard-light" />
        <h1 className="font-title z-20 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
          Every detail
          <br />
          accounted for.
        </h1>
        <div className="absolute top-0 left-0 h-full w-full">
          <h1 className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <h1 className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight opacity-20 select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </h1>
        </div>
      </div>

      <div className="w-full p-32">
        <div className="mb-8 flex items-end justify-between">
          <h1 className="font-title text-7xl tracking-tight">Work</h1>
          <h2 className="font-title text-6xl tracking-tight">All work -&gt;</h2>
        </div>

        <Link
          className="relative flex aspect-239/100 w-full items-end rounded-4xl bg-black/5 shadow-2xl"
          to="/work/mcprom"
        >
          <video
            className="absolute top-0 left-0 h-full w-full rounded-4xl object-cover"
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

          <div className="z-10 w-full rounded-b-4xl bg-white/75 p-10">
            <h1 className="font-title text-6xl">MCProm</h1>
          </div>
        </Link>
      </div>
    </main>
  );
}

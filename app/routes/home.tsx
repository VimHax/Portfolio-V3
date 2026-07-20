import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import RadialSVG from "~/svgs/radial";
import type { ReactNode } from "react";
import TechnologiesSection from "~/components/technologies-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VimHax" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-white px-1.75 pt-0.5 pb-0.75 text-xs font-semibold uppercase">
      {children}
    </span>
  );
}

function Work() {
  return (
    <Link
      className="relative flex aspect-9/16 w-full flex-col justify-between rounded-4xl bg-black/5 shadow-xl transition duration-500 hover:scale-102 hover:shadow-2xl/50"
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

      <RadialSVG className="absolute top-0 left-0 h-full w-full rounded-4xl text-[#d252f9]" />

      <div className="z-10 flex justify-end p-10">
        <div className="flex max-w-2/3 flex-wrap justify-end gap-2">
          <Tag>Minecraft</Tag>
          <Tag>Core Shaders</Tag>
          <Tag>GLSL</Tag>
          <Tag>Java</Tag>
          <Tag>Spigot</Tag>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col rounded-b-4xl p-10">
        <h2 className="mb-1 text-sm font-semibold tracking-widest text-white uppercase">
          2022 September
        </h2>
        <h1 className="font-title text-5xl text-balance text-white">MCProm</h1>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="page-grid">
      <div className="full-wide-content mb-sub-section -mt-navbar relative flex justify-center">
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

      <div className="wide-content mb-section">
        <div className="mb-8 flex items-end justify-between">
          <h1 className="font-title text-7xl tracking-tight">Work</h1>
          <h2 className="font-title text-5xl tracking-tight">View all -&gt;</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </div>

      <TechnologiesSection />
    </main>
  );
}

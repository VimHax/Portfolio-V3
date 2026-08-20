import Hero from "~/components/hero";
import Effect from "~/components/effect";
import type { Route } from "./+types/home";
import { Link, type To } from "react-router";
import { useState, type ReactNode } from "react";
import TechnologiesSection from "~/components/technologies-section";
import ContactSection from "~/components/contact-section";
import { getAllWork, type WorkMetadata } from "./work/get-work.server";
import dateToString, { HeroType, stringToColor } from "~/util";
import ArrowRightSVG from "~/svgs/arrow-right";
import { twJoin } from "tailwind-merge";

export async function loader({}: Route.LoaderArgs) {
  const work = getAllWork();
  return work;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VimHax" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-white px-2 py-0.75 font-semibold uppercase">
      {children}
    </span>
  );
}

function Work({ url, metadata }: { url: To; metadata: WorkMetadata }) {
  const [hovering, setHovering] = useState(false);

  return (
    <Link
      className="group aspect-cinematic relative flex w-full flex-col justify-between overflow-clip rounded-4xl bg-black p-16 shadow-2xl transition duration-250 hover:-translate-y-2 hover:shadow-2xl/50"
      to={url}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {metadata.hero.type === HeroType.Image ? (
        <img
          className="absolute top-0 left-0 h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
          src={metadata.hero.src}
          alt="Hero image"
          style={{ objectPosition: metadata.hero.position }}
        />
      ) : (
        <video
          className="absolute top-0 left-0 h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          preload="auto"
        >
          <source src={metadata.hero.src} type="video/mp4" />
        </video>
      )}

      <Effect
        className="absolute top-0 left-0 h-full w-full"
        startColor={stringToColor(metadata.color[0])}
        endColor={stringToColor(metadata.color[1])}
        hovering={hovering}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-4xl border-4 transition-opacity duration-250",
          !hovering && "opacity-0",
        )}
        style={{ borderColor: `${metadata.color[1]}80` }}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-4xl border-4 border-white mix-blend-overlay transition-opacity duration-250",
          !hovering && "opacity-0",
        )}
      />

      <div className="z-10 flex max-w-2/3 flex-wrap justify-end gap-3 self-end">
        {metadata.tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </div>

      <div className="z-10">
        <h4 className="mb-1 text-xl font-semibold tracking-widest text-white uppercase">
          {dateToString(metadata.date)}
        </h4>
        <h3 className="font-title -mb-4 max-w-175 text-8xl leading-23 tracking-tight text-balance text-white">
          {metadata.title}
        </h3>
      </div>
    </Link>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="full-wide-content mb-sub-section -mt-navbar relative flex justify-center">
        <Hero className="absolute top-0 left-0 h-full w-full mix-blend-hard-light" />

        <h1 className="font-title z-20 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
          Every detail
          <br />
          accounted for.
        </h1>

        <div className="absolute top-0 left-0 h-full w-full">
          <div className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-full">
          <div className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight opacity-20 select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </div>
        </div>
      </div>

      <div className="wide-content mb-section">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-title text-7xl tracking-tight">Work</h2>
          <Link
            className="font-title mb-1 border-b-2 border-solid text-5xl tracking-tight"
            to="/work"
          >
            All work
            <ArrowRightSVG className="ml-5 inline-block size-10" />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {Object.entries(loaderData).map(([id, metadata], idx) => (
            <Work key={idx} url={`/work/${id}`} metadata={metadata} />
          ))}
        </div>
      </div>

      <TechnologiesSection />

      <ContactSection />
    </>
  );
}

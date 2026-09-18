import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import TechnologiesSection from "~/components/technologies-section";
import ContactSection from "~/components/contact-section";
import { getAllWork } from "./work/get-work.server";
import ArrowRightSVG from "~/svgs/arrow-right";
import Work from "~/components/work";
import { nonNull } from "~/util";

export async function loader({}: Route.LoaderArgs) {
  const work = getAllWork();
  const selected = [
    "ares",
    "skyward",
    "notnexus-portfolio",
    "undercrowned",
    "akridia",
    "spiderverse-in-minecraft",
  ];
  return selected.map((id) => ({ id, work: nonNull(work[id]) }));
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VimHax" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
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
          {loaderData.map(({ id, work }, idx) => (
            <Work key={idx} url={`/work/${id}`} metadata={work} />
          ))}
        </div>
      </div>

      <TechnologiesSection />

      <ContactSection />
    </>
  );
}

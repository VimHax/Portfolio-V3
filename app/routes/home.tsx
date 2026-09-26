import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import TechnologiesSection from "~/components/technologies-section";
import ContactSection from "~/components/contact-section";
import { getAllWork } from "./work/get-work.server";
import ArrowRightSVG from "~/svgs/arrow-right";
import Work from "~/components/work";
import { nonNull } from "~/util";
import GalleryData from "./gallery/data";
import GalleryItem from "./gallery/item";
import Title from "~/components/title";
import FadeIn from "~/components/fade-in";
import FadeUp from "~/components/fade-up";

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

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="full-wide-content mb-sub-section -mt-navbar relative flex justify-center">
        <Hero className="absolute top-0 left-0 h-full w-full mix-blend-hard-light" />

        <div className="relative my-64 flex flex-col items-center">
          <h1 className="font-title pointer-events-none max-w-150 text-center text-7xl leading-15 tracking-tight text-balance mix-blend-overlay sm:max-w-200 sm:text-8xl sm:leading-19 xl:max-w-270 xl:text-9xl xl:leading-24">
            <Title title="Vimukthi Weerabahu" />
          </h1>

          <FadeUp>
            <p className="z-10 my-8 max-w-100 text-center text-lg leading-snug text-balance sm:max-w-150 xl:text-xl">
              Hello! I'm a full stack developer based in Sri Lanka. I have +5
              years of broad experience having worked on websites, backends,
              programming languages, shaders etc.
            </p>
          </FadeUp>

          <div className="z-10 flex gap-4">
            <FadeUp>
              <button
                className="flex h-13 cursor-pointer items-center rounded-2xl bg-white/50 px-5 text-lg shadow-2xl backdrop-blur-sm transition-colors duration-300 hover:bg-white xl:text-xl"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                Let's collaborate
              </button>
            </FadeUp>
            <FadeUp>
              <Link
                to="/about"
                className="flex h-13 items-center rounded-2xl bg-white/50 px-5 text-lg shadow-2xl backdrop-blur-sm transition-colors duration-300 hover:bg-white xl:text-xl"
              >
                Learn more
              </Link>
            </FadeUp>
          </div>

          <div className="absolute top-0 left-0 w-full">
            <div className="font-title pointer-events-none z-10 text-center text-7xl leading-15 tracking-tight text-balance mix-blend-overlay sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
              <Title title="Vimukthi Weerabahu" delay={0.2} />
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full">
            <div className="font-title z-20 text-center text-7xl leading-15 tracking-tight text-balance opacity-50 sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
              <Title title="Vimukthi Weerabahu" delay={0.4} />
            </div>
          </div>
        </div>
      </div>

      <TechnologiesSection />

      <div className="full-wide-content mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide flex w-full items-end justify-between">
          <FadeIn>
            <h2 className="font-title text-5xl tracking-tight sm:text-7xl">
              Work
            </h2>
          </FadeIn>
          <FadeIn>
            <Link
              className="font-title border-b-2 border-solid text-2xl tracking-tight sm:mb-1 sm:text-5xl"
              to="/work"
              viewTransition
            >
              All work
              <ArrowRightSVG className="ml-3 inline-block size-6 sm:ml-5 sm:size-10" />
            </Link>
          </FadeIn>
        </div>
      </div>
      <div className="wide-content mb-section flex flex-col gap-8">
        {loaderData.map(({ id, work }, idx) => (
          <Work key={idx} url={`/work/${id}`} metadata={work} />
        ))}
      </div>

      <div className="full-wide-content mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide flex w-full items-end justify-between">
          <FadeIn>
            <h2 className="font-title text-5xl tracking-tight sm:text-7xl">
              Gallery
            </h2>
          </FadeIn>
          <FadeIn>
            <Link
              className="font-title border-b-2 border-solid text-2xl tracking-tight sm:mb-1 sm:text-5xl"
              to="/gallery"
              viewTransition
            >
              All items
              <ArrowRightSVG className="ml-3 inline-block size-6 sm:ml-5 sm:size-10" />
            </Link>
          </FadeIn>
        </div>
      </div>
      <div className="wide-content mb-section grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        {GalleryData.slice(0, 4).map((item, idx) => (
          <GalleryItem key={idx} {...item} />
        ))}
      </div>

      <ContactSection />
    </>
  );
}

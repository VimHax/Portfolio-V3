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

        <div className="relative my-64">
          <h1 className="font-title z-20 text-center text-6xl leading-12 tracking-tight text-balance mix-blend-overlay sm:max-w-260 sm:text-8xl sm:leading-19 xl:max-w-350 xl:text-9xl xl:leading-24">
            <Title title="Every detail accounted for." />
          </h1>

          <div className="absolute top-0 left-0 h-full w-full">
            <div className="font-title z-10 text-center text-6xl leading-12 tracking-tight text-balance mix-blend-overlay select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
              <Title title="Every detail accounted for." delay={0.1} />
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-full">
            <div className="font-title z-10 text-center text-6xl leading-12 tracking-tight text-balance opacity-20 select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
              <Title title="Every detail accounted for." delay={0.1} />
            </div>
          </div>
        </div>
      </div>

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

      <TechnologiesSection />

      <ContactSection />
    </>
  );
}

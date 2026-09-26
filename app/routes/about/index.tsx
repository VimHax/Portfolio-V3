import type { Route } from "./+types";
import TechnologiesSection from "~/components/technologies-section";
import Content from "./content.mdx";
import ContactSection from "~/components/contact-section";
import OptimizedImage from "~/components/optimized-image";
import Title from "~/components/title";
import FadeIn from "~/components/fade-in";
import FadeUp from "~/components/fade-up";
import generateMetadata from "~/metadata";

import MeImg from "./me.png?img";
import EmbedImg from "./embed.png";

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    route: "/about",
    title: "About | VimHax",
    description: "Learn more information about me.",
    color: "#db004f",
    embed: EmbedImg,
    keywords: [],
  });
}

export default function AboutPage() {
  return (
    <>
      <div className="mt-sub-section full-wide-content mb-sub-section flex w-full justify-center px-12 @5xl:mb-4 @7xl:mb-8">
        <div className="max-w-wide flex w-full flex-col items-center @5xl:flex-row @5xl:items-end @5xl:justify-between">
          <h1 className="font-title -mt-2.75 mb-6 text-center text-8xl tracking-tight sm:-mt-3.75 sm:mb-8 sm:text-9xl @5xl:-mt-2.75 @5xl:-mb-4.5 @5xl:text-left @5xl:text-8xl @7xl:-mt-3.75 @7xl:-mb-6.25 @7xl:text-9xl">
            <Title title="About" />
          </h1>
          <FadeIn>
            <p className="text-light-blue -mb-0.75 max-w-60 text-center text-base leading-5 sm:max-w-75 sm:text-lg sm:text-balance @5xl:text-right @7xl:-mb-1 @7xl:text-xl @7xl:leading-6">
              A self-taught full-stack developer based in Sri Lanka.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeUp>
        <div className="hero-wide-content @5xl:aspect-cinematic @content:aspect-video @content:rounded-4xl relative mb-12 flex aspect-square bg-linear-to-r from-[#ebb5ab] to-[#ffc7a4] sm:mb-16 sm:rounded-3xl">
          <OptimizedImage
            image={MeImg}
            sizes={[{ size: 1536, unit: "px" }]}
            alt="Image of Vimukthi Weerabahu"
            className="absolute -top-14 left-1/2 h-[calc(100%+56px)] -translate-x-1/2 object-cover @5xl:-top-25 @5xl:h-[calc(100%+100px)]"
            fetchPriority="high"
          />
        </div>
      </FadeUp>

      <Content />

      <TechnologiesSection />

      <ContactSection />
    </>
  );
}

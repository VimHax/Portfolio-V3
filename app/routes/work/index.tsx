import { assert, nonNull } from "~/util";
import type { Route } from "./+types";
import { getAllWork } from "./get-work.server";
import Work from "~/components/work";
import ContactSection from "~/components/contact-section";
import Title from "~/components/title";
import generateMetadata from "~/metadata";

import EmbedImg from "./embed.png";

export async function loader({}: Route.LoaderArgs) {
  const work = getAllWork();
  const selected = [
    "ares",
    "skyward",
    "notnexus-portfolio",
    "undercrowned",
    "akridia",
    "spiderverse-in-minecraft",
    "eelios",
    "mcprom",
    "sonar",
    "journey-to-twitchcon",
  ];
  assert(selected.length === Object.entries(work).length);
  return selected.map((id) => ({ id, work: nonNull(work[id]) }));
}

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    route: "/work",
    title: "Work | VimHax",
    description: "Explore my professional and personal work.",
    color: "#db004f",
    embed: EmbedImg,
    keywords: [],
  });
}

export default function WorkPage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="full-wide-content mt-sub-section mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide w-full">
          <h1 className="font-title -mt-2 -mb-3.5 text-7xl tracking-tight sm:-mt-2.75 sm:-mb-4.5 sm:text-8xl xl:-mt-3.75 xl:-mb-6.25 xl:text-9xl">
            <Title title="Work" />
          </h1>
        </div>
      </div>

      <div className="wide-content mb-section">
        <div className="flex flex-col gap-4 sm:gap-8">
          {loaderData.map(({ id, work }, idx) => (
            <Work key={idx} url={`/work/${id}`} metadata={work} />
          ))}
        </div>
      </div>

      <ContactSection />
    </>
  );
}

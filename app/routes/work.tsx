import { assert, nonNull } from "~/util";
import type { Route } from "./+types/work";
import { getAllWork } from "./work/get-work.server";
import Work from "~/components/work";
import ContactSection from "~/components/contact-section";

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

export default function WorkPage({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="wide-content mt-sub-section mb-8 flex items-end justify-between">
        <h1 className="font-title -mb-6 text-9xl tracking-tight">Work</h1>
      </div>

      <div className="wide-content mb-section">
        <div className="flex flex-col gap-8">
          {loaderData.map(({ id, work }, idx) => (
            <Work key={idx} url={`/work/${id}`} metadata={work} />
          ))}
        </div>
      </div>

      <ContactSection />
    </>
  );
}

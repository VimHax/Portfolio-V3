import TechnologiesSection from "~/components/technologies-section";
import Content from "./content.mdx";

import MeImg from "./me.jpg";

export default function About() {
  return (
    <>
      <div className="wide-content mt-sub-section mb-5 flex items-end justify-between">
        <h1 className="font-title text-9xl leading-22 tracking-tight">About</h1>
        <p className="max-w-75 text-right text-xl leading-6 text-balance text-black/50">
          A self-taught full stack developer based in Sri Lanka.
        </p>
      </div>

      <img
        src={MeImg}
        alt="Image of Vimukthi Weerabahu"
        className="wide-content mb-sub-section aspect-cinematic rounded-4xl object-cover object-[100%_15%]"
      />

      <Content />

      <TechnologiesSection />
    </>
  );
}

import TechnologiesSection from "~/components/technologies-section";
import Content from "./content.mdx";
import ContactSection from "~/components/contact-section";

import MeImg from "./me.png";

export default function AboutPage() {
  return (
    <>
      <div className="wide-content mt-sub-section mb-8 flex items-end justify-between">
        <h1 className="font-title -mb-6 text-9xl tracking-tight">About</h1>
        <p className="text-light-blue -mb-1 max-w-75 text-right text-xl leading-6 text-balance">
          A self-taught full stack developer based in Sri Lanka.
        </p>
      </div>

      <div className="wide-content mb-sub-section aspect-cinematic relative rounded-4xl bg-linear-to-r from-[#ebb5ab] to-[#ffc7a4]">
        <img
          src={MeImg}
          alt="Image of Vimukthi Weerabahu"
          className="absolute -top-25 left-1/2 h-[calc(100%+100px)] -translate-x-1/2"
        />
      </div>

      <Content />

      <TechnologiesSection />

      <ContactSection />
    </>
  );
}

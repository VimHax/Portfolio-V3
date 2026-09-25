import ContactSection from "~/components/contact-section";
import GalleryData from "./data";
import GalleryItem from "./item";
import Title from "~/components/title";

export default function GalleryPage() {
  return (
    <>
      <div className="full-wide-content mt-sub-section mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide w-full">
          <h1 className="font-title -mt-2 -mb-3.5 text-7xl tracking-tight sm:-mt-2.75 sm:-mb-4.5 sm:text-8xl xl:-mt-3.75 xl:-mb-6.25 xl:text-9xl">
            <Title title="Gallery" />
          </h1>
        </div>
      </div>

      <div className="wide-content mb-section grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        {GalleryData.map((item, idx) => (
          <GalleryItem key={idx} {...item} />
        ))}
      </div>

      <ContactSection />
    </>
  );
}

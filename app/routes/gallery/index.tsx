import ContactSection from "~/components/contact-section";
import { MediaType, type GalleryItem } from "./types";
import GalleryData from "./data";
import OptimizedImage from "~/components/optimized-image";
import { VideoPlayer } from "@videojs/react/video";
import { VideoSkin } from "~/components/videojs/video/skin";
import { MuxVideo } from "@videojs/react/media/mux-video";

function GalleryItem({ title, description, media }: GalleryItem) {
  return (
    <div className="w-full rounded-3xl bg-white p-1 shadow-2xl/10 sm:rounded-4xl sm:p-2">
      {media.type === MediaType.Image ? (
        <OptimizedImage
          image={media.image}
          sizes={[
            { maxWidth: 768, size: 100, unit: "vw" },
            { size: 50, unit: "vw" },
          ]}
          className="loading-animation aspect-video w-full rounded-[20px] object-cover shadow-2xl sm:rounded-3xl"
          loading="lazy"
        />
      ) : (
        <VideoPlayer>
          <VideoSkin
            className="gallery-video aspect-video h-fit w-full shadow-2xl"
            hasAudio={media.video.audio}
            renderPoster={() => (
              <div className="loading-animation h-full w-full" />
            )}
          >
            <MuxVideo
              className="object-contain"
              source={{ playbackId: media.video.id }}
              crossOrigin="anonymous"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              x-webkit-airplay="deny"
            />
          </VideoSkin>
        </VideoPlayer>
      )}
      <div className="p-5 sm:p-6 lg:p-8">
        <h1 className="font-title mb-2 text-3xl tracking-tighter sm:mb-4 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-base sm:text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <div className="full-wide-content mt-sub-section mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide w-full">
          <h1 className="font-title -mt-2 -mb-3.5 text-7xl tracking-tight sm:-mt-2.75 sm:-mb-4.5 sm:text-8xl xl:-mt-3.75 xl:-mb-6.25 xl:text-9xl">
            Gallery
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

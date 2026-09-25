import OptimizedImage, { optimizeImageSrc } from "~/components/optimized-image";
import { MediaType, type GalleryItem } from "./types";
import { VideoPlayer } from "@videojs/react/video";
import { VideoSkin } from "~/components/videojs/video/skin";
import { MuxVideo } from "@videojs/react/media/mux-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import { twJoin } from "tailwind-merge";
import FadeUp from "~/components/fade-up";
import FadeIn from "~/components/fade-in";

export default function GalleryItem({
  title,
  description,
  media,
}: GalleryItem) {
  const [rounded, setRounded] = useState(true);
  return (
    <FadeUp>
      <div className="w-full rounded-3xl bg-white p-1 shadow-2xl/10 sm:rounded-4xl sm:p-2">
        {media.type === MediaType.Image ? (
          <Gallery
            options={{
              zoom: false,
              easing: "cubic-bezier(0.74, 0.0, 0.07, 1)",
              showAnimationDuration: 500,
              hideAnimationDuration: 500,
              zoomAnimationDuration: 500,
              paddingFn: (viewportSize) =>
                viewportSize.x < 640
                  ? { top: 0, bottom: 0, left: 0, right: 0 }
                  : { top: 50, bottom: 50, left: 50, right: 50 },
              mainClass: "pswp--custom-bg",
              secondaryZoomLevel: 1.5,
              wheelToZoom: true,
              closeSVG:
                '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>',
            }}
            onBeforeOpen={(instance) => {
              instance.on("beforeOpen", () => setRounded(false));
              instance.on("closingAnimationEnd", () => setRounded(true));
            }}
          >
            <Item
              original={optimizeImageSrc(media.image)}
              thumbnail={optimizeImageSrc(media.image)}
              width={media.image.width}
              height={media.image.height}
              cropped
            >
              {({ ref, open }) => (
                <OptimizedImage
                  ref={ref}
                  image={media.image}
                  sizes={[
                    { maxWidth: 768, size: 100, unit: "vw" },
                    { size: 50, unit: "vw" },
                  ]}
                  className={twJoin(
                    "loading-animation aspect-video w-full object-cover shadow-2xl transition-[border-radius]",
                    rounded && "rounded-[20px] sm:rounded-3xl",
                  )}
                  loading="lazy"
                  onClick={open}
                />
              )}
            </Item>
          </Gallery>
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
          <FadeIn>
            <h1 className="font-title mb-2 text-3xl tracking-tighter sm:mb-4 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-base sm:text-lg">{description}</p>
          </FadeIn>
        </div>
      </div>
    </FadeUp>
  );
}

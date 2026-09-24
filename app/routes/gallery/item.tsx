import OptimizedImage from "~/components/optimized-image";
import { MediaType, type GalleryItem } from "./types";
import { VideoPlayer } from "@videojs/react/video";
import { VideoSkin } from "~/components/videojs/video/skin";
import { MuxVideo } from "@videojs/react/media/mux-video";

export default function GalleryItem({
  title,
  description,
  media,
}: GalleryItem) {
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

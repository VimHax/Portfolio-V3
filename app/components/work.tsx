import { useState, type CSSProperties, type ReactNode } from "react";
import { Link, type To } from "react-router";
import type { WorkMetadata } from "~/routes/work/get-work.server";
import dateToString, { HeroType, stringToColor } from "~/util";
import Effect from "./effect";
import { twJoin } from "tailwind-merge";
import { MuxBackgroundVideo } from "@videojs/react/media/mux-background-video";
import OptimizedImage from "./optimized-image";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-white/85 px-2 py-0.75 font-semibold uppercase backdrop-blur-lg">
      {children}
    </span>
  );
}

export default function Work({
  url,
  metadata,
}: {
  url: To;
  metadata: WorkMetadata;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <Link
      className="group aspect-cinematic relative flex w-full flex-col justify-between rounded-4xl p-16 transition-transform duration-250 hover:-translate-y-2"
      to={url}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="loading-animation absolute top-0.75 left-0.75 h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-4xl shadow-2xl/25 transition-shadow duration-250 group-hover:shadow-2xl/50"
        style={
          {
            "--tw-shadow-color": `color-mix(in oklab, ${metadata.color[0]} var(--tw-shadow-alpha), transparent)`,
            "--loading-color-start": `hsl(from ${metadata.color[0]} h s 5)`,
            "--loading-color-end": `hsl(from ${metadata.color[0]} h s 10)`,
          } as CSSProperties
        }
      />

      <div className="absolute top-0.5 left-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)] overflow-clip rounded-4xl">
        {metadata.hero.type === HeroType.Image ? (
          <OptimizedImage
            image={metadata.hero.src}
            sizes={[{ size: 1536, unit: "px" }]}
            className="h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
            alt="Hero image"
            style={{ objectPosition: metadata.hero.position }}
          />
        ) : (
          <MuxBackgroundVideo
            className="h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
            src={`https://stream.mux.com/${metadata.hero.src}.m3u8`}
            crossOrigin="anonymous"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            x-webkit-airplay="deny"
            style={{ objectPosition: metadata.hero.position }}
          />
        )}
      </div>

      <Effect
        className="absolute top-px left-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-4xl"
        startColor={stringToColor(metadata.color[0])}
        endColor={stringToColor(metadata.color[1])}
        hovering={hovering}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-4xl border-4 transition-opacity duration-250",
          !hovering && "opacity-0",
        )}
        style={{ borderColor: `hsl(from ${metadata.color[1]} h s 60)` }}
      />

      <div className="z-10 flex max-w-2/3 flex-wrap justify-end gap-3 self-end">
        {metadata.tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </div>

      <div className="z-10 flex items-end justify-between">
        <div>
          <span className="mb-1 block text-xl font-semibold tracking-widest text-white uppercase">
            {dateToString(metadata.date)}
          </span>
          <span className="font-title -mb-4 block max-w-175 -translate-x-1.5 text-8xl leading-23 tracking-tight text-balance text-white">
            {metadata.title}
          </span>
        </div>
        <p className="-mb-1 text-right text-xl leading-6 text-balance text-white sm:max-w-xl">
          {metadata.description}
        </p>
      </div>
    </Link>
  );
}

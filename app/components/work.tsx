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
    <span className="rounded-lg bg-white/85 px-2 py-0.75 text-xs font-semibold uppercase backdrop-blur-lg sm:text-sm xl:text-base">
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
      className="group lg:aspect-cinematic relative flex aspect-3/4 w-full flex-col justify-between rounded-3xl p-8 transition-transform duration-250 hover:-translate-y-2 sm:aspect-video sm:rounded-4xl sm:p-8 md:p-12 xl:p-16"
      to={url}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="loading-animation absolute top-0.75 left-0.75 h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-3xl shadow-2xl/25 transition-shadow duration-250 group-hover:shadow-2xl/50 sm:rounded-4xl"
        style={
          {
            "--tw-shadow-color": `color-mix(in oklab, ${metadata.color[0]} var(--tw-shadow-alpha), transparent)`,
            "--loading-color-start": `hsl(from ${metadata.color[0]} h s 5)`,
            "--loading-color-end": `hsl(from ${metadata.color[0]} h s 10)`,
          } as CSSProperties
        }
      />

      <div className="absolute top-0.5 left-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)] overflow-clip rounded-3xl sm:rounded-4xl">
        {metadata.hero.type === HeroType.Image ? (
          <OptimizedImage
            image={metadata.hero.src}
            sizes={[
              { maxWidth: 1536, size: 100, unit: "vw" },
              { size: 1536, unit: "px" },
            ]}
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
        className="absolute top-px left-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-3xl sm:rounded-4xl"
        startColor={stringToColor(metadata.color[0])}
        endColor={stringToColor(metadata.color[1])}
        hovering={hovering}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-3xl border-4 transition-opacity duration-250 sm:rounded-4xl",
          !hovering && "opacity-0",
        )}
        style={{ borderColor: `hsl(from ${metadata.color[1]} h s 60)` }}
      />

      <div className="z-10 flex max-w-2/3 flex-wrap justify-end gap-1.5 self-end sm:gap-2 xl:gap-3">
        {metadata.tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </div>

      <div className="z-10 lg:flex lg:items-end lg:justify-between">
        <div className="mb-4 md:mb-6 lg:mb-0">
          <span className="mb-1 block text-sm font-semibold tracking-widest text-white uppercase md:text-lg xl:mb-2 xl:text-xl">
            {dateToString(metadata.date)}
          </span>
          <span
            className={twJoin(
              "font-title block tracking-tight text-balance text-white sm:-mt-1 sm:-mb-2.5 sm:text-6xl sm:leading-14 md:text-7xl md:leading-16 lg:-translate-x-1.5 xl:-mb-3 xl:text-8xl xl:leading-21",
              metadata.title.includes(" ") || metadata.title.length >= 9
                ? "-mt-1 -mb-1.75 text-4xl leading-9"
                : "-mt-0.75 -mb-1.75 text-5xl leading-11",
              metadata.title.includes(" ") &&
                "max-w-60 sm:max-w-110 md:max-w-130 xl:max-w-180",
            )}
          >
            {metadata.title}
          </span>
        </div>
        <p className="-mb-1 text-sm leading-5 text-balance text-white sm:max-w-xl sm:text-lg lg:text-right xl:text-xl xl:leading-6">
          {metadata.description}
        </p>
      </div>
    </Link>
  );
}

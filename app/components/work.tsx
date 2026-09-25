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
    <span className="rounded-lg bg-white/85 px-2 py-0.75 text-xs font-semibold uppercase backdrop-blur-lg @2xl:text-sm @7xl:text-base">
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

  const content = (
    <Link
      className="group @5xl:aspect-cinematic relative flex aspect-3/4 w-full flex-col justify-between rounded-3xl p-8 transition-transform duration-250 hover:-translate-y-2 @2xl:aspect-video @2xl:rounded-4xl @2xl:p-8 @3xl:p-12 @7xl:p-16"
      to={url}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="loading-animation absolute top-0.75 left-0.75 h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-3xl shadow-2xl/25 transition-shadow duration-250 group-hover:shadow-2xl/50 @2xl:rounded-4xl"
        style={
          {
            "--tw-shadow-color": `color-mix(in oklab, ${metadata.color[0]} var(--tw-shadow-alpha), transparent)`,
            "--loading-color-start": `hsl(from ${metadata.color[0]} h s 5)`,
            "--loading-color-end": `hsl(from ${metadata.color[0]} h s 10)`,
          } as CSSProperties
        }
      />

      <div className="absolute top-0.5 left-0.5 h-[calc(100%-4px)] w-[calc(100%-4px)] overflow-clip rounded-3xl @2xl:rounded-4xl">
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
        className="absolute top-px left-px h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-3xl @2xl:rounded-4xl"
        startColor={stringToColor(metadata.color[0])}
        endColor={stringToColor(metadata.color[1])}
        hovering={hovering}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-3xl border-4 transition-opacity duration-250 @2xl:rounded-4xl",
          !hovering && "opacity-0",
        )}
        style={{ borderColor: `hsl(from ${metadata.color[1]} h s 60)` }}
      />

      <div className="z-10 flex max-w-2/3 flex-wrap justify-end gap-1.5 self-end @2xl:gap-2 @7xl:gap-3">
        {metadata.tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </div>

      <div className="z-10 @5xl:flex @5xl:items-end @5xl:justify-between">
        <div className="mb-4 @3xl:mb-6 @5xl:mb-0">
          <span className="mb-2 block text-xs font-semibold tracking-widest text-white uppercase @2xl:text-base @3xl:text-lg @7xl:mb-2 @7xl:text-xl">
            {dateToString(metadata.date)}
          </span>
          <span
            className={twJoin(
              "font-title block tracking-tight text-balance text-white @2xl:-mt-1 @2xl:-mb-2.5 @2xl:text-6xl @2xl:leading-14 @3xl:text-7xl @3xl:leading-16 @5xl:-translate-x-1.5 @7xl:-mb-3 @7xl:text-8xl @7xl:leading-21",
              metadata.title.includes(" ") || metadata.title.length >= 9
                ? "-mt-1 -mb-1.75 text-[42px] leading-10"
                : "-mt-1 -mb-2.5 text-6xl leading-14",
              metadata.title.includes(" ") &&
                "max-w-60 @2xl:max-w-110 @3xl:max-w-130 @7xl:max-w-180",
            )}
          >
            {metadata.title}
          </span>
        </div>
        <p className="-mb-1 text-sm leading-5 text-balance text-white @2xl:max-w-xl @2xl:text-lg @5xl:text-right @7xl:text-xl @7xl:leading-6">
          {metadata.description}
        </p>
      </div>
    </Link>
  );

  return <div className="@container">{content}</div>;
}

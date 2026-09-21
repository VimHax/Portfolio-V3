import { useState, type CSSProperties, type ReactNode } from "react";
import { Link, type To } from "react-router";
import type { WorkMetadata } from "~/routes/work/get-work.server";
import dateToString, { HeroType, stringToColor } from "~/util";
import Effect from "./effect";
import { twJoin } from "tailwind-merge";
import { MuxBackgroundVideo } from "@videojs/react/media/mux-background-video";

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
      className="group aspect-cinematic relative flex w-full flex-col justify-between overflow-clip rounded-4xl bg-black p-16 shadow-2xl/25 transition duration-250 hover:-translate-y-2 hover:shadow-2xl/50"
      to={url}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={
        {
          "--tw-shadow-color": `color-mix(in oklab, ${metadata.color[0]} var(--tw-shadow-alpha), transparent)`,
        } as CSSProperties
      }
    >
      {metadata.hero.type === HeroType.Image ? (
        <img
          className="absolute top-0 left-0 h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
          src={metadata.hero.src}
          alt="Hero image"
          style={{ objectPosition: metadata.hero.position }}
        />
      ) : (
        <MuxBackgroundVideo
          className="absolute top-0 left-0 h-full w-full scale-105 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
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

      <Effect
        className="absolute top-0 left-0 h-full w-full"
        startColor={stringToColor(metadata.color[0])}
        endColor={stringToColor(metadata.color[1])}
        hovering={hovering}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-4xl border-4 transition-opacity duration-250",
          !hovering && "opacity-0",
        )}
        style={{ borderColor: `${metadata.color[1]}80` }}
      />

      <div
        className={twJoin(
          "absolute top-0 left-0 h-full w-full rounded-4xl border-4 border-white mix-blend-overlay transition-opacity duration-250",
          !hovering && "opacity-0",
        )}
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
        <p className="text-right text-xl leading-6 text-balance text-white sm:max-w-xl">
          {metadata.description}
        </p>
      </div>
    </Link>
  );
}

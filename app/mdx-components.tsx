import {
  Fragment,
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { EmbeddedTweet } from "./components/react-twitter";
import { useLoaderData } from "react-router";
import GitHubLogoSVG from "./svgs/github-logo";
import ArrowRightSVG from "./svgs/arrow-right";

declare global {
  type MDXProvidedComponents = ReturnType<typeof useMDXComponents>;
}

function MediaDescription({
  children,
}: {
  children?: ReactNode | null | undefined;
}) {
  if (!children) return;
  return (
    <div className="text-center text-sm opacity-50 not-last:mb-8 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
      {children}
    </div>
  );
}

export function useMDXComponents() {
  return {
    wrapper: ({ children }: { children: ReactNode }) => {
      return (
        <div className="mdx mb-section sm:text-lg [&_code]:text-sm sm:[&_code]:text-base">
          {children}
        </div>
      );
    },
    h2: (props: ComponentProps<"h2">) => (
      <h2
        className="font-title sm:mt-sub-section mt-12 mb-5 text-4xl tracking-tight sm:text-6xl"
        {...props}
      />
    ),
    h3: (props: ComponentProps<"h3">) => (
      <h3
        className="font-title mt-8 mb-5 text-2xl tracking-tight sm:mt-12 sm:text-4xl"
        {...props}
      />
    ),
    h4: (props: ComponentProps<"h4">) => (
      <h4
        className="font-title mt-8 mb-5 text-lg tracking-tight sm:mt-12 sm:text-2xl"
        {...props}
      />
    ),
    p: (props: ComponentProps<"p">) => (
      <p className="not-last:mb-5" {...props} />
    ),
    strong: (props: ComponentProps<"strong">) => (
      <strong className="font-semibold" {...props} />
    ),
    a: (props: ComponentProps<"a">) => (
      <a className="text-blue underline" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <ul className="list-inside list-disc not-last:mb-5" {...props} />
    ),
    ol: (props: ComponentProps<"ol">) => (
      <ol className="list-inside list-decimal not-last:mb-5" {...props} />
    ),
    li: (props: ComponentProps<"li">) => <li {...props} />,
    code: (props: ComponentProps<"code">) => (
      <code className="rounded-md bg-black/10 px-1" {...props} />
    ),
    MediaDescription: ({ children }: { children: ReactNode }) => (
      <MediaDescription>{children}</MediaDescription>
    ),
    Footnote: ({ children }: { children: ReactNode }) => (
      <div className="text-sm opacity-50 not-last:mb-5 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
        {children}
      </div>
    ),
    Diagram: ({
      children,
      description,
    }: {
      children: ReactNode;
      description?: boolean | null | undefined;
    }) => (
      <div
        className={twMerge(
          "mt-8 flex w-full justify-center rounded-2xl bg-black p-8 shadow-2xl sm:rounded-3xl",
          description ? "mb-3" : "not-last:mb-8",
        )}
      >
        {children}
      </div>
    ),
    Code: ({
      children,
      language,
      filename,
      description,
      output,
    }: {
      children: ReactNode;
      language: "eelios" | "ts";
      filename: string;
      description?: boolean | null | undefined;
      output: string[] | null;
    }) => (
      <div
        className={twMerge(
          "mt-8 flex w-full flex-col overflow-clip rounded-2xl bg-[black] shadow-2xl sm:rounded-3xl",
          description ? "mb-3" : "not-last:mb-8",
        )}
      >
        <div className="z-10 flex items-center justify-between bg-[#0000000f] px-3 py-2 text-sm text-white/50 backdrop-blur-lg">
          <span>{{ eelios: "Eelios", ts: "TypeScript" }[language]}</span>
          <span className="font-semibold">{filename}</span>
          <button>Copy</button>
        </div>
        {children}
        {output !== null && (
          <div className="border-t border-white/25 p-3">
            <span className="mb-2 block text-xs font-semibold text-white/50 uppercase">
              Output
            </span>
            <pre className="custom leading-[1.2]">
              <code className="custom font-medium text-white">
                {output.map((o, idx) => (
                  <Fragment key={idx}>
                    <span className="text-white/50">&gt;</span> {o}
                    {idx !== output.length - 1 && <br />}
                  </Fragment>
                ))}
              </code>
            </pre>
          </div>
        )}
      </div>
    ),
    GitHub: ({
      owner,
      repo,
      name,
      description,
      color,
    }: {
      owner: string;
      repo: string;
      name: string;
      description: string;
      color: string;
    }) => (
      <a
        href={`https://github.com/${owner}/${repo}`}
        className="group mt-8 flex w-full flex-col gap-8 rounded-3xl bg-linear-45 from-black to-white p-12 text-white shadow-2xl transition duration-250 not-last:mb-8 hover:-translate-y-2 hover:shadow-2xl/50"
        style={{ "--tw-gradient-to": color } as CSSProperties}
      >
        <div className="-mt-5.5 flex items-center justify-between">
          <div className="flex items-center gap-3 opacity-50">
            <GitHubLogoSVG className="w-5" />
            <span className="mt-px text-sm font-semibold tracking-widest uppercase">
              {owner} <span className="opacity-25">/</span> {repo}
            </span>
          </div>
          <ArrowRightSVG className="w-16 transition-transform duration-250 group-hover:translate-x-2" />
        </div>

        <div>
          <span className="font-title mb-2 block text-7xl tracking-tighter">
            {name}
          </span>
          <p className="max-w-100 leading-6 text-balance">{description}</p>
        </div>
      </a>
    ),
    Tweet: ({ id }: { id: string }) => {
      const data = useLoaderData();
      return (
        <EmbeddedTweet
          className="mt-8 shadow-2xl/15 not-last:mb-8"
          tweet={data[id]}
        />
      );
    },
    Image: ({
      className,
      src,
      children,
    }: {
      className?: string;
      src: string;
      children?: ReactNode | null | undefined;
    }) => (
      <>
        <img
          className={twMerge(
            "media-style aspect-video object-cover",
            children ? "mb-3" : "not-last:mb-8",
            className,
          )}
          src={src}
          loading="lazy"
        />
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
    Video: ({
      className,
      src,
      children,
    }: {
      className?: string;
      src: string;
      children?: ReactNode | null | undefined;
    }) => (
      <>
        <video
          className={twMerge(
            "media-style aspect-video object-cover",
            children ? "mb-3" : "not-last:mb-8",
            className,
          )}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          preload="auto"
        >
          <source src={src} type="video/mp4" />
        </video>
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
    YouTube: ({
      className,
      id,
      children,
    }: {
      className?: string;
      id: string;
      children?: ReactNode | null | undefined;
    }) => (
      <>
        <iframe
          className={twMerge(
            "media-style aspect-video",
            children ? "mb-3" : "not-last:mb-8",
            className,
          )}
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
    Twitch: ({
      className,
      id,
      children,
    }: {
      className?: string;
      id: string;
      children?: ReactNode | null | undefined;
    }) => (
      <>
        <iframe
          className={twMerge(
            "media-style aspect-video",
            children ? "mb-3" : "not-last:mb-8",
            className,
          )}
          src={`https://player.twitch.tv/?video=${id}&autoplay=false&parent=vimhax.com`}
          allowFullScreen
        ></iframe>
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
  };
}

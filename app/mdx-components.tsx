import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { EmbeddedTweet } from "./components/react-twitter";
import { useLoaderData } from "react-router";

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
        <div className="mb-section sm:text-lg [&_code]:text-sm sm:[&_code]:text-base">
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
    p: (props: ComponentProps<"p">) => (
      <p className="not-last:mb-5" {...props} />
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
      <code className="rounded-md bg-black/10 px-1 font-mono" {...props} />
    ),
    Tweet: ({ id }: { id: string }) => {
      const data = useLoaderData();
      return <EmbeddedTweet className="my-8 shadow-2xl/15" tweet={data[id]} />;
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

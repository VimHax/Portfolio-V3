import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

declare global {
  type MDXProvidedComponents = ReturnType<typeof useMDXComponents>;
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
    li: (props: ComponentProps<"li">) => <li {...props} />,
    code: (props: ComponentProps<"code">) => (
      <code className="bg-black/7.5 font-mono" {...props} />
    ),
    Video: ({
      className,
      src,
      children,
    }: {
      className?: string;
      src: string;
      children?: ReactNode | null | undefined;
    }) => {
      return (
        <>
          <video
            className={twMerge(
              "mt-8 aspect-video rounded-2xl object-cover shadow-2xl sm:rounded-3xl",
              children ? "mb-3" : "mb-8",
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
          {children && (
            <div className="mb-8 text-center text-sm opacity-50 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
              {children}
            </div>
          )}
        </>
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
    }) => {
      return (
        <>
          <img
            className={twMerge(
              "mt-8 aspect-video rounded-2xl object-cover shadow-2xl sm:rounded-3xl",
              children ? "mb-3" : "mb-8",
              className,
            )}
            src={src}
            loading="lazy"
          />
          {children && (
            <div className="mb-8 text-center text-sm opacity-50 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
              {children}
            </div>
          )}
        </>
      );
    },
  };
}

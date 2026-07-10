import type { ComponentProps, ReactNode } from "react";

export function useMDXComponents() {
  return {
    h2: (props: ComponentProps<"h2">) => (
      <h2
        className="font-title mt-12 mb-5 text-4xl tracking-tight sm:mt-16 sm:text-6xl"
        {...props}
      />
    ),
    h3: (props: ComponentProps<"h3">) => (
      <h3
        className="font-title mt-8 mb-5 text-2xl tracking-tight sm:mt-12 sm:text-4xl"
        {...props}
      />
    ),
    p: (props: ComponentProps<"p">) => <p className="mb-5" {...props} />,
    a: (props: ComponentProps<"a">) => (
      <a className="text-blue underline" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <ul className="mb-5 list-inside list-disc" {...props} />
    ),
    li: (props: ComponentProps<"li">) => <li {...props} />,
    code: (props: ComponentProps<"code">) => (
      <code className="bg-black/10 font-mono" {...props} />
    ),
    Video: ({ src, children }: { src: string; children: ReactNode }) => {
      return (
        <>
          <video
            className="mt-8 mb-3 aspect-video rounded-2xl object-cover shadow-xl sm:rounded-3xl"
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
          <div className="mb-8 text-center text-sm opacity-50 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
            {children}
          </div>
        </>
      );
    },
    Image: ({ src, children }: { src: string; children: ReactNode }) => {
      return (
        <>
          <img
            className="mt-8 mb-3 aspect-video rounded-2xl object-cover shadow-xl sm:rounded-3xl"
            src={src}
            loading="lazy"
          />
          <div className="mb-8 text-center text-sm opacity-50 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
            {children}
          </div>
        </>
      );
    },
  };
}

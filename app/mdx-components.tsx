import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
} from "react";
import { twJoin } from "tailwind-merge";
import { EmbeddedTweet } from "./components/react-twitter";
import { useLoaderData } from "react-router";
import GitHubLogoSVG from "./svgs/github-logo";
import ArrowRightSVG from "./svgs/arrow-right";
import CopySVG from "./svgs/copy";
import CheckSVG from "./svgs/check";
import {
  assert,
  resolveVideoData,
  validateResolution,
  type Image,
  type Resolution,
} from "./util";
import { MuxVideo } from "@videojs/react/media/mux-video";
import { VideoPlayer } from "@videojs/react/video";
import { VideoSkin } from "./components/videojs/video/skin";
import OptimizedImage, { optimizeImageSrc } from "./components/optimized-image";
import { Gallery, Item } from "react-photoswipe-gallery";
import FadeIn from "./components/fade-in";
import FadeUp from "./components/fade-up";

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
    <FadeIn>
      <div className="text-dark-blue text-center text-sm not-last:mb-8 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
        <div className="opacity-50">{children}</div>
      </div>
    </FadeIn>
  );
}

export function useMDXComponents() {
  return {
    wrapper: ({ children }: { children: ReactNode }) => {
      return (
        <div className="mdx mb-section text-base sm:text-lg [&_code]:text-sm sm:[&_code]:text-base">
          {children}
        </div>
      );
    },
    h2: (props: ComponentProps<"h2">) => (
      <FadeIn>
        <h2
          className="font-title mt-12 mb-8 text-4xl tracking-tight sm:mt-16 sm:text-6xl"
          {...props}
        />
      </FadeIn>
    ),
    h3: (props: ComponentProps<"h3">) => (
      <FadeIn>
        <h3
          className="font-title mt-8 mb-5 text-2xl tracking-tight sm:mt-12 sm:mb-8 sm:text-4xl"
          {...props}
        />
      </FadeIn>
    ),
    h4: (props: ComponentProps<"h4">) => (
      <FadeIn>
        <h4
          className="font-title mt-8 mb-5 text-lg tracking-tight sm:mt-12 sm:mb-8 sm:text-2xl"
          {...props}
        />
      </FadeIn>
    ),
    p: (props: ComponentProps<"p">) => (
      <FadeIn>
        <p className="not-last:mb-5" {...props} />
      </FadeIn>
    ),
    strong: (props: ComponentProps<"strong">) => (
      <strong className="font-semibold" {...props} />
    ),
    a: (props: ComponentProps<"a">) => (
      <a className="text-blue underline" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <FadeIn>
        <ul className="list-inside list-disc not-last:mb-5" {...props} />
      </FadeIn>
    ),
    ol: (props: ComponentProps<"ol">) => (
      <FadeIn>
        <ol className="list-inside list-decimal not-last:mb-5" {...props} />
      </FadeIn>
    ),
    li: (props: ComponentProps<"li">) => <li {...props} />,
    code: (props: ComponentProps<"code">) => (
      <code className="bg-off-white rounded-md px-1" {...props} />
    ),
    pre: (props: ComponentProps<"pre">) => <pre className="code" {...props} />,
    MediaDescription: ({ children }: { children: ReactNode }) => (
      <MediaDescription>{children}</MediaDescription>
    ),
    Footnote: ({ children }: { children: ReactNode }) => (
      <FadeIn>
        <div className="text-dark-blue text-sm not-last:mb-5 sm:text-base [&_code]:text-xs sm:[&_code]:text-sm">
          <div className="opacity-50">{children}</div>
        </div>
      </FadeIn>
    ),
    Diagram: ({
      children,
      description,
    }: {
      children: ReactNode;
      description?: boolean;
    }) => (
      <FadeUp>
        <div
          className={twJoin(
            "mt-8 flex max-h-[800px] w-full justify-center rounded-2xl bg-white p-4 shadow-2xl/10 sm:rounded-3xl sm:p-8",
            description ? "mb-3" : "not-last:mb-8",
          )}
        >
          {children}
        </div>
      </FadeUp>
    ),
    Code: ({
      children,
      language,
      filename,
      description,
      error,
      output,
    }: {
      children: ReactNode;
      language:
        | "ares"
        | "eelios"
        | "ts"
        | "tsx"
        | "llvm"
        | "c"
        | "shell"
        | "dart"
        | "css";
      filename: string;
      description?: boolean;
      error?: boolean;
      output: string[] | null;
    }) => {
      enum AnimationState {
        Empty,
        Copy,
        Check,
      }

      const mainRef = useRef<HTMLDivElement>(null);
      const timeoutRef = useRef<NodeJS.Timeout | null>(null);
      const [state, setState] = useState<AnimationState>(AnimationState.Copy);

      useEffect(
        () => () => {
          if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
        },
        [],
      );

      function onClick() {
        const el = mainRef.current;
        if (el === null) return;
        const codeEl = el.querySelector("pre > code");
        if (codeEl === null) return;
        void navigator.clipboard.writeText(codeEl.textContent);

        if (timeoutRef.current !== null) return;
        const emptyDuration = 250;
        const checkDuration = 2_000;
        setState(AnimationState.Empty);
        timeoutRef.current = setTimeout(() => {
          setState(AnimationState.Check);
          timeoutRef.current = setTimeout(() => {
            setState(AnimationState.Empty);
            timeoutRef.current = setTimeout(() => {
              timeoutRef.current = null;
              setState(AnimationState.Copy);
            }, emptyDuration);
          }, checkDuration);
        }, emptyDuration);
      }

      return (
        <FadeUp>
          <div
            id={filename}
            ref={mainRef}
            className={twJoin(
              "mt-8 flex w-full flex-col overflow-clip rounded-2xl bg-white shadow-2xl/10 sm:rounded-3xl",
              description ? "mb-3" : "not-last:mb-8",
            )}
          >
            <div
              className={twJoin(
                "z-10 grid h-9 grid-cols-3 text-xs backdrop-blur-lg sm:text-sm",
                error
                  ? "text-error bg-light-error/75"
                  : "text-light-blue bg-white/75",
              )}
            >
              <div className="flex h-full items-center">
                <span className="mt-0.5 ml-3">
                  {
                    {
                      ares: "Ares",
                      eelios: "Eelios",
                      ts: "TypeScript",
                      tsx: "TSX",
                      llvm: "LLVM IR",
                      c: "C",
                      shell: "Shell",
                      dart: "Dart",
                      css: "CSS",
                    }[language]
                  }
                </span>
              </div>
              <div className="flex h-full items-center justify-center">
                <span className="mt-0.5 font-semibold">{filename}</span>
              </div>
              <div className="flex h-full justify-end">
                <button
                  title="Copy"
                  className={twJoin(
                    "relative aspect-square h-full cursor-pointer transition-colors duration-250",
                    error ? "hover:bg-error/10" : "hover:bg-off-white",
                  )}
                  onClick={onClick}
                >
                  <CopySVG
                    className={twJoin(
                      "absolute top-1/2 left-1/2 size-4 -translate-1/2 scale-75 opacity-0 transition duration-250",
                      state === AnimationState.Copy && "scale-100 opacity-100",
                    )}
                  />
                  <CheckSVG
                    className={twJoin(
                      "absolute top-1/2 left-1/2 size-4 -translate-1/2 scale-75 opacity-0 transition duration-250",
                      !error && "text-green",
                      state === AnimationState.Check && "scale-100 opacity-100",
                    )}
                  />
                </button>
              </div>
            </div>
            {children}
            {output !== null && (
              <div className="p-3">
                <span className="text-light-blue mb-2 block text-[10px] font-semibold uppercase sm:text-xs">
                  Output
                </span>
                <div className="w-full overflow-x-auto">
                  <pre className="leading-[1.2]">
                    <code className="font-medium">
                      {output.map((o, idx) => (
                        <Fragment key={idx}>
                          <span className="text-light-blue">&gt;</span> {o}
                          {idx !== output.length - 1 && <br />}
                        </Fragment>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </FadeUp>
      );
    },
    Website: ({
      url,
      title,
      description,
      color,
      thumbnail,
      resolution = "1920x1080",
    }: {
      url: string;
      title: string;
      description: string;
      color: string;
      thumbnail: Image;
      resolution?: Resolution;
    }) => {
      validateResolution(thumbnail, resolution);
      return (
        <FadeUp>
          <div className="mt-8 not-last:mb-8">
            <a
              href={url}
              className="group relative block w-full rounded-2xl bg-white p-1 shadow-2xl/25 transition duration-250 hover:-translate-y-2 hover:shadow-2xl/50 sm:rounded-3xl sm:p-2"
              style={
                {
                  aspectRatio: `${thumbnail.width}/${thumbnail.height}`,
                  "--tw-shadow-color": `color-mix(in oklab, ${color} var(--tw-shadow-alpha), transparent)`,
                } as CSSProperties
              }
            >
              <OptimizedImage
                image={thumbnail}
                sizes={[
                  { maxWidth: 768, size: 100, unit: "vw" },
                  { size: 768, unit: "px" },
                ]}
                className="loading-animation aspect-video rounded-xl object-contain sm:rounded-2xl"
                loading="lazy"
              />
              <div className="rounded-b-2xl sm:rounded-b-3xl">
                <div className="p-4 sm:p-6">
                  <span
                    className="mb-2 block text-sm sm:text-base"
                    style={{ color }}
                  >
                    {new URL(url).hostname}
                  </span>
                  <span className="font-title -mt-1.5 mb-3 block text-2xl leading-6 tracking-tighter sm:text-3xl sm:leading-7">
                    {title}
                  </span>
                  <p className="text-sm leading-4 text-black/50 sm:text-base sm:leading-5">
                    {description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </FadeUp>
      );
    },
    GitHub: ({
      owner,
      repo,
      name,
      description,
      startColor,
      endColor,
    }: {
      owner: string;
      repo: string;
      name: string;
      description: string;
      startColor?: string;
      endColor: string;
    }) => (
      <FadeUp>
        <div className="mt-8 not-last:mb-8">
          <a
            href={`https://github.com/${owner}/${repo}`}
            className="group flex w-full flex-col gap-8 rounded-3xl bg-linear-45 from-black to-white p-8 text-white shadow-2xl/25 transition duration-250 hover:-translate-y-2 hover:shadow-2xl/50 sm:p-12"
            style={
              {
                "--tw-gradient-from": startColor ?? undefined,
                "--tw-gradient-to": endColor,
                "--tw-shadow-color": startColor
                  ? `color-mix(in oklab, ${startColor} var(--tw-shadow-alpha), transparent)`
                  : undefined,
              } as CSSProperties
            }
          >
            <div className="-mt-3.5 flex items-center justify-between sm:-mt-5.5">
              <div className="flex items-center gap-3 opacity-50">
                <GitHubLogoSVG className="w-4 sm:w-5" />
                <span className="mt-px text-xs font-semibold tracking-widest uppercase sm:text-sm">
                  {owner} <span className="opacity-25">/</span> {repo}
                </span>
              </div>
              <ArrowRightSVG className="w-12 transition-transform duration-250 group-hover:translate-x-2 sm:w-16" />
            </div>

            <div>
              <span className="font-title mb-2 block text-6xl tracking-tighter sm:text-7xl">
                {name}
              </span>
              <p className="max-w-100 text-sm leading-4 text-balance sm:text-lg sm:leading-6">
                {description}
              </p>
            </div>
          </a>
        </div>
      </FadeUp>
    ),
    Tweet: ({ id }: { id: string }) => (
      <FadeUp>
        <EmbeddedTweet
          className="mt-8 shadow-2xl/10 not-last:mb-8"
          tweet={useLoaderData()[id]}
        />
      </FadeUp>
    ),
    Image: ({
      src: image,
      resolution = "1920x1080",
      lightShadow = false,
      children,
    }: {
      src: Image;
      resolution?: Resolution;
      lightShadow?: boolean;
      children?: ReactNode | null | undefined;
    }) => {
      validateResolution(image, resolution);
      const [rounded, setRounded] = useState(true);
      return (
        <>
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
              original={optimizeImageSrc(image)}
              thumbnail={optimizeImageSrc(image)}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <FadeUp>
                  <OptimizedImage
                    ref={ref}
                    image={image}
                    sizes={[
                      { maxWidth: 768, size: 100, unit: "vw" },
                      { size: 768, unit: "px" },
                    ]}
                    className={twJoin(
                      "loading-animation mt-8 w-full object-contain transition-[border-radius]",
                      rounded && "rounded-2xl sm:rounded-3xl",
                      lightShadow ? "shadow-2xl/10" : "shadow-2xl",
                      children ? "mb-3" : "not-last:mb-8",
                    )}
                    style={{ aspectRatio: `${image.width}/${image.height}` }}
                    loading="lazy"
                    onClick={open}
                  />
                </FadeUp>
              )}
            </Item>
          </Gallery>
          <MediaDescription>{children}</MediaDescription>
        </>
      );
    },
    PaddedImage: ({
      src: image,
      children,
    }: {
      src: Image;
      children?: ReactNode | null | undefined;
    }) => (
      <>
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
        >
          <Item
            original={optimizeImageSrc(image)}
            thumbnail={optimizeImageSrc(image)}
            width={image.width}
            height={image.height}
          >
            {({ ref, open }) => (
              <FadeUp>
                <div
                  className={twJoin(
                    "mt-8 w-full rounded-2xl bg-white p-4 shadow-2xl/10 sm:rounded-3xl sm:p-8",
                    children ? "mb-3" : "not-last:mb-8",
                  )}
                  onClick={open}
                >
                  <OptimizedImage
                    ref={ref}
                    image={image}
                    sizes={[
                      { maxWidth: 768, size: 100, unit: "vw" },
                      { size: 768 - 32 * 2, unit: "px" },
                    ]}
                    className="object-contain"
                    style={{ aspectRatio: `${image.width}/${image.height}` }}
                    loading="lazy"
                  />
                </div>
              </FadeUp>
            )}
          </Item>
        </Gallery>
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
    Video: ({
      src,
      resolution = "1920x1080",
      lightShadow = false,
      children,
    }: {
      src: string;
      resolution?: Resolution;
      lightShadow?: boolean;
      children?: ReactNode | null | undefined;
    }) => {
      const data = resolveVideoData(src);
      validateResolution(data, resolution);
      assert(data.plus, `${src}, Needs to be plus quality!`);
      return (
        <>
          <VideoPlayer>
            <FadeUp>
              <VideoSkin
                className={twJoin(
                  "mt-8 h-fit w-full",
                  lightShadow ? "shadow-2xl/10" : "shadow-2xl",
                  children ? "mb-3" : "not-last:mb-8",
                )}
                style={{ aspectRatio: `${data.width}/${data.height}` }}
                hasAudio={data.audio}
                renderPoster={() => (
                  <div className="loading-animation h-full w-full" />
                )}
              >
                <MuxVideo
                  className="object-contain"
                  source={{ playbackId: data.id }}
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
            </FadeUp>
          </VideoPlayer>

          <MediaDescription>{children}</MediaDescription>
        </>
      );
    },
    YouTube: ({
      id,
      children,
    }: {
      id: string;
      children?: ReactNode | null | undefined;
    }) => (
      <>
        <FadeUp>
          <iframe
            className={twJoin(
              "loading-animation mt-8 aspect-video w-full rounded-2xl shadow-2xl sm:rounded-3xl",
              children ? "mb-3" : "not-last:mb-8",
            )}
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </FadeUp>
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
    Twitch: ({
      id,
      children,
    }: {
      id: string;
      children?: ReactNode | null | undefined;
    }) => (
      <>
        <FadeUp>
          <iframe
            className={twJoin(
              "loading-animation mt-8 aspect-video w-full rounded-2xl shadow-2xl sm:rounded-3xl",
              children ? "mb-3" : "not-last:mb-8",
            )}
            src={`https://player.twitch.tv/?video=${id}&autoplay=false&parent=${import.meta.env.VITE_DOMAIN}`}
            allowFullScreen
          ></iframe>
        </FadeUp>
        <MediaDescription>{children}</MediaDescription>
      </>
    ),
  };
}

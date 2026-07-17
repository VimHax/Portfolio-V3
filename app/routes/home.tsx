import Hero from "~/components/hero";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import RadialSVG from "~/svgs/radial";
import type { ReactNode } from "react";
import TypeScriptLogo from "~/svgs/typescript-logo";
import RustLogo from "~/svgs/rust-logo";
import OpenGLLogo from "~/svgs/opengl-logo";
import ReactRouterLogo from "~/svgs/react-router-logo";
import JavaLogo from "~/svgs/java-logo";
import NextJSLogo from "~/svgs/nextjs-logo";
import SanityLogo from "~/svgs/sanity-logo";
import ElixirLogo from "~/svgs/elixir-logo";
import CLogo from "~/svgs/c-logo";
import FlutterLogo from "~/svgs/flutter-logo";
import GSAPLogo from "~/svgs/gsap-logo";
import EffectLogo from "~/svgs/effect-logo";
import LinuxLogo from "~/svgs/linux-logo";
import VercelLogo from "~/svgs/vercel-logo";
import FigmaLogo from "~/svgs/figma-logo";
import SupabaseLogo from "~/svgs/supabase-logo";
import GleamLogo from "~/svgs/gleam-logo";

import SpigotImg from "./spigot.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VimHax" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-white px-1.75 pt-0.5 pb-0.75 text-xs font-semibold uppercase">
      {children}
    </span>
  );
}

function Work() {
  return (
    <Link
      className="relative flex aspect-9/16 w-full flex-col justify-between rounded-4xl bg-black/5 shadow-xl transition duration-500 hover:scale-102 hover:shadow-2xl/50"
      to="/work/mcprom"
    >
      <video
        className="absolute top-0 left-0 h-full w-full rounded-4xl object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        x-webkit-airplay="deny"
        preload="auto"
      >
        <source src="/video/mcprom.mp4" type="video/mp4" />
      </video>

      <RadialSVG className="absolute top-0 left-0 h-full w-full rounded-4xl text-[#d252f9]" />

      <div className="z-10 flex justify-end p-10">
        <div className="flex max-w-2/3 flex-wrap justify-end gap-2">
          <Tag>Minecraft</Tag>
          <Tag>Core Shaders</Tag>
          <Tag>GLSL</Tag>
          <Tag>Java</Tag>
          <Tag>Spigot</Tag>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col rounded-b-4xl p-10">
        <h2 className="mb-1 text-sm font-semibold tracking-widest text-white uppercase">
          2022 September
        </h2>
        <h1 className="font-title text-5xl text-balance text-white">MCProm</h1>
      </div>
    </Link>
  );
}

function Technology({
  url,
  icon,
  children,
}: {
  url: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      className="hover:bg-off-white flex aspect-square flex-col items-center justify-center gap-8 bg-white transition-colors duration-300 first:rounded-tl-3xl last:rounded-br-3xl nth-[6]:rounded-tr-3xl nth-last-[6]:rounded-bl-3xl"
      href={url}
    >
      <div className="flex h-20 items-center justify-center">{icon}</div>
      <h1 className="text-sm font-semibold uppercase">{children}</h1>
    </a>
  );
}

export default function Home() {
  return (
    <main className="page-grid">
      <div className="full-wide-content relative -mt-21 mb-16 flex justify-center">
        <Hero className="absolute top-0 left-0 h-full w-full mix-blend-hard-light" />
        <h1 className="font-title z-20 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
          Every detail
          <br />
          accounted for.
        </h1>
        <div className="absolute top-0 left-0 h-full w-full">
          <h1 className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <h1 className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight opacity-20 select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </h1>
        </div>
      </div>

      <div className="mb-32">
        <div className="mb-8 flex items-end justify-between">
          <h1 className="font-title text-7xl tracking-tight">Work</h1>
          <h2 className="font-title text-5xl tracking-tight">View all -&gt;</h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </div>

      <div className="mb-32">
        <h1 className="font-title mb-8 text-7xl tracking-tight">
          Technologies
        </h1>

        <div className="bg-off-white grid grid-cols-6 gap-px rounded-4xl shadow-2xl/10">
          <Technology
            url="https://typescriptlang.org"
            icon={<TypeScriptLogo className="h-20" />}
          >
            TypeScript
          </Technology>
          <Technology
            url="https://rust-lang.org"
            icon={<RustLogo className="h-20" />}
          >
            Rust
          </Technology>
          <Technology
            url="https://wikipedia.org/wiki/OpenGL_Shading_Language"
            icon={<OpenGLLogo className="h-15" />}
          >
            GLSL
          </Technology>
          <Technology
            url="https://reactrouter.com"
            icon={<ReactRouterLogo className="h-13" />}
          >
            React Router
          </Technology>
          <Technology
            url="https://java.com"
            icon={<JavaLogo className="h-20" />}
          >
            Java
          </Technology>
          <Technology
            url="https://spigotmc.org"
            icon={<img className="h-16" src={SpigotImg} />}
          >
            Spigot
          </Technology>
          <Technology
            url="https://nextjs.org"
            icon={<NextJSLogo className="h-20" />}
          >
            Next.js
          </Technology>
          <Technology
            url="https://sanity.io"
            icon={<SanityLogo className="h-10" />}
          >
            Sanity
          </Technology>
          <Technology
            url="https://elixir-lang.org"
            icon={<ElixirLogo className="h-20" />}
          >
            Elixir
          </Technology>
          <Technology
            url="https://wikipedia.org/wiki/C_(programming_language)"
            icon={<CLogo className="h-18" />}
          >
            C
          </Technology>
          <Technology
            url="https://flutter.dev"
            icon={<FlutterLogo className="h-18" />}
          >
            Flutter
          </Technology>
          <Technology
            url="https://gsap.com"
            icon={<GSAPLogo className="h-9" />}
          >
            GSAP
          </Technology>
          <Technology
            url="https://effect.website"
            icon={<EffectLogo className="h-15" />}
          >
            Effect
          </Technology>
          <Technology
            url="https://wikipedia.org/wiki/Linux"
            icon={<LinuxLogo className="h-20" />}
          >
            Linux
          </Technology>
          <Technology
            url="https://vercel.com"
            icon={<VercelLogo className="h-10" />}
          >
            Vercel
          </Technology>
          <Technology
            url="https://figma.com"
            icon={<FigmaLogo className="h-17" />}
          >
            Figma
          </Technology>
          <Technology
            url="https://supabase.com"
            icon={<SupabaseLogo className="h-18" />}
          >
            Supabase
          </Technology>
          <Technology
            url="https://gleam.run"
            icon={<GleamLogo className="h-18 -translate-x-2" />}
          >
            Gleam
          </Technology>
        </div>
      </div>
    </main>
  );
}

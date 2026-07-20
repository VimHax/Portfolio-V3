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

export default function TechnologiesSection() {
  return (
    <div className="wide-content mb-section">
      <h1 className="font-title mb-8 text-7xl tracking-tight">Technologies</h1>

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
        <Technology url="https://java.com" icon={<JavaLogo className="h-20" />}>
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
        <Technology url="https://gsap.com" icon={<GSAPLogo className="h-9" />}>
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
  );
}

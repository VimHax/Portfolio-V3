import type { ReactNode } from "react";

import TypeScriptLogo from "~/svgs/typescript-logo";
import RustLogo from "~/svgs/rust-logo";
import OpenGLLogo from "~/svgs/opengl-logo";
import ReactRouterLogo from "~/svgs/react-router-logo";
import JavaLogo from "~/svgs/java-logo";
import NextJSLogo from "~/svgs/nextjs-logo";
import SupabaseLogo from "~/svgs/supabase-logo";

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
      className="hover:bg-off-white flex aspect-square w-[236px] flex-col items-center justify-center gap-8 rounded-3xl bg-white p-4 shadow-2xl/10 transition-colors duration-300"
      href={url}
    >
      <div className="flex h-20 items-center justify-center">{icon}</div>
      <span className="text-sm font-semibold uppercase">{children}</span>
    </a>
  );
}

export default function TechnologiesSection() {
  return (
    <div className="wide-content mb-section">
      <h2 className="font-title mb-8 text-7xl tracking-tight">Technologies</h2>

      <div className="flex flex-wrap gap-6">
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
        <Technology url="https://java.com" icon={<JavaLogo className="h-16" />}>
          Java
        </Technology>
        <Technology
          url="https://wikipedia.org/wiki/OpenGL_Shading_Language"
          icon={<OpenGLLogo className="h-15" />}
        >
          GLSL
        </Technology>
        <Technology
          url="https://spigotmc.org"
          icon={<img className="h-16" src={SpigotImg} />}
        >
          Spigot
        </Technology>
        <Technology
          url="https://reactrouter.com"
          icon={<ReactRouterLogo className="h-13" />}
        >
          React Router
        </Technology>
        <Technology
          url="https://nextjs.org"
          icon={<NextJSLogo className="h-20" />}
        >
          Next.js
        </Technology>
        <Technology
          url="https://supabase.com"
          icon={<SupabaseLogo className="h-18" />}
        >
          Supabase
        </Technology>
      </div>
    </div>
  );
}

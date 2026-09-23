import type { ReactNode } from "react";

import TypeScriptLogo from "~/svgs/typescript-logo";
import RustLogo from "~/svgs/rust-logo";
import OpenGLLogo from "~/svgs/opengl-logo";
import ReactRouterLogo from "~/svgs/react-router-logo";
import JavaLogo from "~/svgs/java-logo";
import NextJSLogo from "~/svgs/nextjs-logo";
import SupabaseLogo from "~/svgs/supabase-logo";
import OptimizedImage from "./optimized-image";

import SpigotImg from "./spigot.png?img";

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
      className="hover:bg-off-white flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4 shadow-2xl/10 transition-colors duration-300 sm:gap-8 sm:rounded-3xl"
      href={url}
    >
      <div className="flex h-20 items-center justify-center">{icon}</div>
      <span className="text-xs font-semibold uppercase sm:text-sm">
        {children}
      </span>
    </a>
  );
}

export default function TechnologiesSection() {
  return (
    <>
      <div className="full-wide-content mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide w-full">
          <h2 className="font-title text-5xl tracking-tight sm:text-7xl">
            Technologies
          </h2>
        </div>
      </div>

      <div className="wide-content mb-section">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <Technology
            url="https://typescriptlang.org"
            icon={<TypeScriptLogo className="h-16 sm:h-20" />}
          >
            TypeScript
          </Technology>
          <Technology
            url="https://rust-lang.org"
            icon={<RustLogo className="h-16 sm:h-20" />}
          >
            Rust
          </Technology>
          <Technology
            url="https://java.com"
            icon={<JavaLogo className="h-16" />}
          >
            Java
          </Technology>
          <Technology
            url="https://wikipedia.org/wiki/OpenGL_Shading_Language"
            icon={<OpenGLLogo className="h-11 sm:h-15" />}
          >
            GLSL
          </Technology>
          <Technology
            url="https://spigotmc.org"
            icon={
              <OptimizedImage
                image={SpigotImg}
                sizes={[{ size: 88, unit: "px" }]}
                className="w-18 object-contain sm:w-22"
              />
            }
          >
            Spigot
          </Technology>
          <Technology
            url="https://reactrouter.com"
            icon={<ReactRouterLogo className="h-9 sm:h-13" />}
          >
            React Router
          </Technology>
          <Technology
            url="https://nextjs.org"
            icon={<NextJSLogo className="h-16 sm:h-20" />}
          >
            Next.js
          </Technology>
          <Technology
            url="https://supabase.com"
            icon={<SupabaseLogo className="h-14 sm:h-18" />}
          >
            Supabase
          </Technology>
        </div>
      </div>
    </>
  );
}

import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Transitioning from "./components/transitioning";
import { assert } from "./util";
import { Analytics } from "@vercel/analytics/react";
import generateMetadata from "./metadata";
import "./speed-insights";
import "photoswipe/dist/photoswipe.css";
import "katex/dist/katex.css";
import "./hljs.css";
import "./mdx.css";
import "./background.css";
import "./app.css";

import EmbedImg from "./embed.png";

export const links: Route.LinksFunction = () => [
  { rel: "icon", sizes: "32x32", href: "/favicon.ico" },
  { rel: "icon", type: "image/svg+xml", href: "/icon.svg" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
];

export function meta({}: Route.MetaArgs) {
  return generateMetadata({
    route: "",
    title: "VimHax",
    description: "A full-stack developer based in Sri Lanka.",
    color: "#db004f",
    embed: EmbedImg,
    keywords: [],
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  assert(import.meta.env.VITE_DOMAIN !== undefined, "VITE_DOMAIN is missing!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-body selection:bg-blue relative text-black selection:text-white">
        <main className="background-pattern page-grid @container isolate">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Transitioning />
        <ScrollRestoration />
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="wide-content flex h-128 items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-title mb-8 text-center text-9xl tracking-tighter">
          {message}
        </h1>
        <p className="mb-8 text-center text-xl">{details}</p>
        <Link
          to="/"
          className="flex h-13 w-fit items-center rounded-2xl bg-white/50 px-5 text-lg shadow-2xl backdrop-blur-sm transition-colors duration-300 hover:bg-white xl:text-xl"
        >
          Back to Home
        </Link>
        {stack && (
          <pre className="w-full overflow-x-auto p-4">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}

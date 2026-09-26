import {
  isRouteErrorResponse,
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
import { assert, nonNull } from "./util";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/remix";
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
  const title = "VimHax";
  const description = "A full-stack developer based in Sri Lanka.";
  const siteName = "VimHax";
  const domain = nonNull(import.meta.env.VITE_DOMAIN);
  const baseURL = `https://${domain}`;
  const twitterTag = `@VimHax`;
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    { name: "theme-color", content: "#db004f" },
    { tagName: "link", rel: "canonical", href: baseURL },
    // { name: "keywords", content: keywords.join(", ") },

    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:url", content: baseURL },
    { name: "og:image", content: baseURL + EmbedImg },
    { name: "og:site_name", content: siteName },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:site", content: twitterTag },
    { name: "twitter:creator", content: twitterTag },
    { name: "twitter:image", content: baseURL + EmbedImg },
  ];
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
        <SpeedInsights />
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
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

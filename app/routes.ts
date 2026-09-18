import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("work", "routes/work.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("about", "routes/about/index.tsx"),
  ...prefix("work", [
    layout("routes/work/layout.tsx", [
      route("mcprom", "routes/work/mcprom/index.mdx"),
      route(
        "journey-to-twitchcon",
        "routes/work/journey-to-twitchcon/index.mdx",
      ),
      route(
        "spiderverse-in-minecraft",
        "routes/work/spiderverse-in-minecraft/index.mdx",
      ),
      route("undercrowned", "routes/work/undercrowned/index.mdx"),
      route("skyward", "routes/work/skyward/index.mdx"),
      route("eelios", "routes/work/eelios/index.mdx"),
      route("ares", "routes/work/ares/index.mdx"),
      route("sonar", "routes/work/sonar/index.mdx"),
      route("notnexus-portfolio", "routes/work/notnexus-portfolio/index.mdx"),
    ]),
  ]),
] satisfies RouteConfig;

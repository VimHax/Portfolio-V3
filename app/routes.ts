import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about/index.tsx"),
  ...prefix("work", [
    layout("routes/work/layout.tsx", [
      route("mcprom", "routes/work/mcprom/index.mdx"),
      route(
        "journey-to-twitchcon",
        "routes/work/journey-to-twitchcon/index.mdx",
      ),
    ]),
  ]),
] satisfies RouteConfig;

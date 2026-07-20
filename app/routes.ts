import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  ...prefix("work", [
    layout("routes/work/layout.tsx", [
      route("mcprom", "routes/work/mcprom/index.mdx"),
    ]),
  ]),
] satisfies RouteConfig;

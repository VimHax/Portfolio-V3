import mdx from "@mdx-js/rollup";
import rehypeMdxImportMedia from "rehype-mdx-import-media";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [rehypeMdxImportMedia],
        providerImportSource: __dirname + "/app/mdx-components.tsx",
      }),
    },
    tailwindcss(),
    reactRouter(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});

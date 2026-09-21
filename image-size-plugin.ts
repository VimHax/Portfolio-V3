import sharp from "sharp";
import type { Plugin } from "vite";

// adapted from https://github.com/drwpow/vite-plugin-lqip/blob/7dcf8c73ce264ae7f88530a5cd6e07062b2d51f6/src/index.ts
export default function vitePluginImageSize(): Plugin {
  return {
    name: "vite-plugin-image-size",
    enforce: "pre",
    async load(id) {
      const [base, search] = id.split("?");
      if (!search) return null;

      const s = new URLSearchParams(search);
      if (!s.has("img")) return null;

      const img = sharp(base);
      const metadata = await img.metadata();

      if (metadata.width <= 0 || metadata.height <= 0) {
        throw new Error(`Invalid image, ${base}!`);
      }

      return `import src from '${base}?url';

export default {
  src,
  width: ${metadata.width},
  height: ${metadata.height},
};
`;
    },
  };
}

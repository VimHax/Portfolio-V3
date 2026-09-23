import { assert, Image } from "~/util";

const minDeviceSize = 320;
const imageSizes = [
  16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
  3840,
] as const;
const baseQuality = 85 as const;
const maxQuality = 100 as const;

type Widths = (typeof imageSizes)[number];

interface Size {
  readonly maxWidth?: number;
  readonly size: number;
  readonly unit: "px" | "vw";
}

type ImageProps = Omit<React.ComponentProps<"img">, "src" | "sizes"> & {
  image: Image;
  sizes: readonly [...Size[], Omit<Size, "maxWidth">];
};

function computeSizes(imageWidth: number, minWidth: number): Widths[] {
  return imageSizes.filter(
    (width, idx) =>
      width >= minWidth && (idx - 1 < 0 || imageSizes[idx - 1] < imageWidth),
  );
}

function generateURL(
  image: Image,
  quality: typeof baseQuality | typeof maxQuality,
  width: (typeof imageSizes)[number],
) {
  if (import.meta.env.DEV) return `${image.src}?q=${quality}&w=${width}`;
  return `/_vercel/image?url=${encodeURIComponent(image.src)}&q=${quality}&w=${width}`;
}

export function optimizeImageSrc(image: Image) {
  if (import.meta.env.DEV) return image.src;
  const finalSizes = computeSizes(image.width, 0);
  assert(finalSizes.length > 0);
  return generateURL(image, maxQuality, finalSizes[finalSizes.length - 1]);
}

export default function OptimizedImage({ image, sizes, ...props }: ImageProps) {
  assert(sizes.length > 0, "sizes is 0.");

  const minSize = Math.min(
    ...sizes.map(({ size, unit }) =>
      unit === "vw" ? minDeviceSize * size * 0.01 : size,
    ),
  );
  const finalSizes = computeSizes(image.width, minSize);
  const getURL = (size: Widths) => generateURL(image, baseQuality, size);

  return (
    <img
      sizes={sizes
        .map((entry) =>
          "maxWidth" in entry && entry.maxWidth !== undefined
            ? `(max-width: ${entry.maxWidth}px) ${entry.size}${entry.unit}`
            : `${entry.size}${entry.unit}`,
        )
        .join(", ")}
      srcSet={finalSizes.map((size) => `${getURL(size)} ${size}w`).join(", ")}
      src={getURL(finalSizes[finalSizes.length - 1])}
      {...props}
    />
  );
}

import z from "zod";
import VideoData from "./videos.json";

interface Video {
  readonly id: string;
  readonly audio: boolean;
  readonly plus: boolean;
  readonly width: number;
  readonly height: number;
}

export type Resolution = "1920x1080" | "1920x800" | readonly [number, number];

export type Color = readonly [number, number, number];
export type Subscription<T extends unknown[] = []> = (...args: T) => void;
export type Unsubscribe = () => void;

export const Image = z
  .strictObject({
    src: z.string().nonempty(),
    width: z.int().positive(),
    height: z.int().positive(),
  })
  .readonly();

export const DateMonth = z
  .strictObject({ year: z.int().positive(), month: z.int().min(1).max(12) })
  .readonly();

export type Image = z.infer<typeof Image>;

export type DateMonth = z.infer<typeof DateMonth>;

export enum HeroType {
  Image = "image",
  Video = "video",
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function dateToString({ year, month }: DateMonth) {
  return `${year} ${months[month - 1]}`;
}

export function stringToColor(color: string): Color {
  if (!/^#[a-f0-9]{6}$/.test(color)) {
    throw new Error("Invalid color.");
  }
  const hex = color.slice(1);
  const data = parseInt(hex, 16);
  return [
    (data >> (8 * 2)) & 0xff,
    (data >> (8 * 1)) & 0xff,
    (data >> (8 * 0)) & 0xff,
  ];
}

export function clamp(x: number, min: number, max: number): number {
  return Math.min(Math.max(x, min), max);
}

export function interpolate(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1);
}

export function interpolateColor(a: Color, b: Color, t: number): Color {
  return [
    interpolate(a[0], b[0], t),
    interpolate(a[1], b[1], t),
    interpolate(a[2], b[2], t),
  ];
}

export function assert(x: boolean, message?: string): asserts x {
  if (!x) {
    throw new Error(
      message ? `Assertion failed: ${message}` : "Assertion failed.",
    );
  }
}

export function nonNull<T>(x: T): NonNullable<T> {
  assert(x !== undefined && x !== null, "Value is null or undefined.");
  return x;
}

export function validateResolution(
  source: { readonly width: number; readonly height: number },
  resolution: Resolution,
) {
  if (resolution === "1920x1080") {
    assert(
      source.width === 1920 && source.height === 1080,
      `${source}, is not 1920x1080!`,
    );
    return;
  }

  if (resolution === "1920x800") {
    assert(
      source.width === 1920 && source.height === 800,
      `${source}, is not 1920x800!`,
    );
    return;
  }

  const [width, height] = resolution;
  assert(
    source.width === width && source.height === height,
    `${source}, is not ${width}x${height}!`,
  );
}

export function resolveVideoData(video: string): Video {
  const segments = video.split("/");
  const title = segments[segments.length - 1].split(".")[0];
  assert(title in VideoData, `${title} not in video data!`);
  return VideoData[title as keyof typeof VideoData];
}

export function getScaleFactor() {
  return (
    0.5 + 0.5 * (clamp(window.innerWidth - 640, 0, 1536 - 640) / (1536 - 640))
  );
}

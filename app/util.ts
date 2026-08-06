import z from "zod";

export type Color = readonly [number, number, number];

export const DateMonth = z
  .strictObject({ year: z.int().positive(), month: z.int().min(1).max(12) })
  .readonly();

export type DateMonth = z.infer<typeof DateMonth>;

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

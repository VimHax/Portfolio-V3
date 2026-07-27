import z from "zod";

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

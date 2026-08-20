import z from "zod";
import { DateMonth, HeroType } from "~/util";

const Hero = z.discriminatedUnion("type", [
  z
    .strictObject({
      type: z.literal(HeroType.Image),
      src: z.string().nonempty(),
      position: z.string().nonempty(),
    })
    .readonly(),
  z
    .strictObject({
      type: z.literal(HeroType.Video),
      src: z.string().nonempty(),
    })
    .readonly(),
]);

const WorkMetadata = z
  .object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    hero: Hero,
    color: z.tuple([z.string().nonempty(), z.string().nonempty()]).readonly(),
    date: DateMonth,
    tags: z.array(z.string().nonempty()).nonempty().readonly(),
  })
  .readonly();

export type WorkMetadata = z.infer<typeof WorkMetadata>;

export function getAllWork(): Readonly<Record<string, WorkMetadata>> {
  const modules = z
    .record(z.string().nonempty(), WorkMetadata)
    .readonly()
    .parse(
      import.meta.glob<unknown>(`./**/index.mdx`, {
        eager: true,
      }),
    );

  const mapped = Object.fromEntries(
    Object.entries(modules).map(([key, value]) => [
      key.slice("./".length, -"/index.mdx".length),
      value,
    ]),
  );

  return mapped;
}

export function getWork(id: string): WorkMetadata | null {
  const modules = getAllWork();
  return modules[id] ?? null;
}

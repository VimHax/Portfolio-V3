import z from "zod";
import { DateMonth } from "~/util";

const WorkMetadata = z
  .object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    video: z.string().nonempty(),
    color: z.string().nonempty(),
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

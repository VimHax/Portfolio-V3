import z from "zod";

const Metadata = z
  .object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    date: z
      .strictObject({ year: z.int().positive(), month: z.int().min(1).max(12) })
      .readonly(),
  })
  .readonly();

export default function getWork(id: string): z.infer<typeof Metadata> | null {
  const modules = z
    .record(z.string().nonempty(), Metadata)
    .readonly()
    .parse(
      import.meta.glob<unknown>(`./**/index.mdx`, {
        eager: true,
      }),
    );

  const path = `./${id}/index.mdx`;
  if (!(path in modules)) return null;

  return modules[path];
}

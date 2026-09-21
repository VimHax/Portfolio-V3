import z from "zod";
import {
  assert,
  DateMonth,
  HeroType,
  Image,
  resolveVideoData,
  validateResolution,
} from "~/util";

const Hero = z.discriminatedUnion("type", [
  z
    .strictObject({
      type: z.literal(HeroType.Image),
      src: Image.transform((image, ctx) => {
        try {
          validateResolution(image, "1920x1080");
          return image.src;
        } catch (err) {
          ctx.issues.push({
            code: "custom",
            message: "Not 1920x1080",
            input: image,
          });
          return z.NEVER;
        }
      }),
      position: z.string().nonempty(),
    })
    .readonly(),
  z
    .strictObject({
      type: z.literal(HeroType.Video),
      src: z
        .string()
        .nonempty()
        .transform((video, ctx) => {
          try {
            const data = resolveVideoData(video);
            validateResolution(data, "1920x1080");
            assert(!data.audio, "Cannot have audio!");
            assert(!data.plus, "Cannot be plus quality!");
            return data.id;
          } catch (err) {
            ctx.issues.push({
              code: "custom",
              message: "Invalid hero video",
              input: video,
            });
            return z.NEVER;
          }
        }),
      position: z.string().nonempty(),
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

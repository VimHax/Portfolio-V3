import Hero from "~/components/hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VimHax" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="relative -mt-21 flex justify-center">
        <Hero className="absolute top-0 left-0 h-full w-full mix-blend-screen" />
        <h1 className="font-title z-20 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
          Every detail
          <br />
          accounted for.
        </h1>
        <div className="absolute top-0 left-0 h-full w-full">
          <h1 className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight mix-blend-overlay select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </h1>
        </div>
        <div className="absolute top-0 left-0 h-full w-full">
          <h1 className="font-title z-10 my-64 text-center text-6xl leading-12 tracking-tight opacity-10 select-none sm:text-8xl sm:leading-19 xl:text-9xl xl:leading-24">
            Every detail
            <br />
            accounted for.
          </h1>
        </div>
      </div>

      {/* <p className="mt-16 mb-32 max-w-prose self-center text-center text-lg"></p> */}

      <div className="grid h-128 w-full grid-cols-3 gap-5 px-5">
        <div className="aspect-2/3 w-full rounded-4xl bg-black/0" />
        <div className="aspect-2/3 w-full rounded-4xl bg-black/0" />
        <div className="aspect-2/3 w-full rounded-4xl bg-black/0" />
      </div>
    </main>
  );
}

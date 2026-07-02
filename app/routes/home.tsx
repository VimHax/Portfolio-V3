import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1 className="font-title my-32 text-center text-9xl tracking-tight">
        Every detail accounted for.
      </h1>

      <div className="grid w-full grid-cols-3 gap-5 px-5">
        <div className="bg-red aspect-2/3 w-full rounded-4xl" />
        <div className="bg-red aspect-2/3 w-full rounded-4xl" />
        <div className="bg-red aspect-2/3 w-full rounded-4xl" />
      </div>
    </main>
  );
}

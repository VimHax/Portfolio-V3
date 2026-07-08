import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="font-title mt-32 text-center text-9xl leading-24 tracking-tight">
        Every detail
        <br />
        accounted for.
      </h1>

      <p className="mt-16 mb-32 max-w-prose self-center text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit neque
        dolore quidem exercitationem nobis dolor, eveniet quos, dolorum, ut
        asperiores veniam dolores similique nulla?
      </p>

      <div className="grid w-full grid-cols-3 gap-5 px-5">
        <div className="bg-red aspect-2/3 w-full rounded-4xl" />
        <div className="bg-red aspect-2/3 w-full rounded-4xl" />
        <div className="bg-red aspect-2/3 w-full rounded-4xl" />
      </div>
    </main>
  );
}

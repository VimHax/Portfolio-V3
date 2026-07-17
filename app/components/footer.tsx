import LogoSVG from "~/svgs/logo";

export default function Footer() {
  return (
    <footer className="mb-32 flex justify-center">
      <div className="flex w-full max-w-384 justify-between rounded-4xl bg-black p-16 text-white shadow-2xl">
        <div className="flex flex-col justify-between">
          <LogoSVG className="size-25" />
          <div>
            <h1 className="font-title mb-1 text-5xl">Vimukthi Weerabahu</h1>
            <p className="text-xl opacity-75">
              A self-taught full stack developer based in Sri Lanka.
            </p>
          </div>
        </div>

        <div className="flex gap-32">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold tracking-widest uppercase opacity-50">
              Navigation
            </h1>
            <a className="font-title text-5xl" href="">
              Home
            </a>
            <a className="font-title text-5xl" href="">
              Work
            </a>
            <a className="font-title text-5xl" href="">
              About
            </a>
            <a className="font-title text-5xl" href="">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="font-semibold tracking-widest uppercase opacity-50">
              Contact
            </h1>
            <a className="font-title text-5xl" href="">
              Email
            </a>
            <a className="font-title text-5xl" href="">
              GitHub
            </a>
            <a className="font-title text-5xl" href="">
              LinkedIn
            </a>
            <a className="font-title text-5xl" href="">
              X <span className="opacity-25">/</span> Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

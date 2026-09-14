import { NavLink, type To } from "react-router";
import LogoSVG from "~/svgs/logo";

function NavigationLink({ to, name }: { to: To; name: string }) {
  return (
    <NavLink className="font-title text-5xl" to={to}>
      {({ isActive }) => (
        <>
          {isActive && (
            <div className="mr-3 mb-3 -ml-5 inline-block size-2 rounded-full bg-white" />
          )}
          {name}
        </>
      )}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="wide-content mb-section flex w-full justify-between rounded-4xl bg-black p-16 text-white shadow-2xl">
      <div className="flex flex-col justify-between">
        <LogoSVG className="size-20" />
        <div>
          <span className="font-title mb-1 block text-5xl">
            Vimukthi Weerabahu
          </span>
          <p className="text-light-blue text-xl">
            A self-taught full stack developer based in Sri Lanka.
          </p>
        </div>
      </div>

      <div className="flex gap-32">
        <div className="flex flex-col gap-4">
          <span className="text-light-blue font-semibold tracking-widest uppercase">
            Navigation
          </span>
          <NavigationLink to="/" name="Home" />
          <NavigationLink to="/work" name="Work" />
          <NavigationLink to="/gallery" name="Gallery" />
          <NavigationLink to="/about" name="About" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-light-blue font-semibold tracking-widest uppercase">
            Social
          </span>
          <a className="font-title text-5xl" href="mailto:me@vimhax.com">
            Email
          </a>
          <a className="font-title text-5xl" href="https://github.com/VimHax">
            GitHub
          </a>
          <a
            className="font-title text-5xl"
            href="https://www.linkedin.com/in/vimukthi-weerabahu"
          >
            LinkedIn
          </a>
          <a className="font-title text-5xl" href="https://twitter.com/VimHax">
            X <span className="text-white/25">/</span> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

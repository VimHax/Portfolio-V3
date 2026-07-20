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
          <NavigationLink to="/" name="Home" />
          <NavigationLink to="/work" name="Work" />
          <NavigationLink to="/about" name="About" />
          <NavigationLink to="/contact" name="Contact" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold tracking-widest uppercase opacity-50">
            Social
          </h1>
          <a className="font-title text-5xl" href="mailto: me@vimhax.com">
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
            X <span className="opacity-25">/</span> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

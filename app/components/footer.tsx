import { NavLink, type To } from "react-router";
import LogoSVG from "~/svgs/logo";

function NavigationLink({ to, name }: { to: To; name: string }) {
  return (
    <NavLink className="font-title text-3xl sm:text-5xl" to={to} end>
      {({ isActive }) => (
        <>
          {isActive && (
            <div className="pointer-events-none mr-3 mb-1.5 -ml-5 inline-block size-1.5 rounded-full bg-white sm:mb-3 sm:size-2" />
          )}
          {name}
        </>
      )}
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer className="footer-wide-content xl:mb-section py-section flex w-full flex-col items-center justify-between gap-16 bg-black text-white shadow-2xl xl:flex-row xl:items-stretch xl:gap-0 xl:rounded-4xl xl:p-16">
      <div className="flex flex-col items-center gap-8 sm:gap-12 xl:items-start xl:justify-between xl:gap-0">
        <LogoSVG className="size-25 sm:size-30 xl:size-20" />
        <div className="flex flex-col items-center sm:block">
          <span className="font-title mb-1 block text-center text-3xl sm:text-5xl xl:text-left">
            Vimukthi Weerabahu
          </span>
          <p className="text-light-blue max-w-65 text-center text-base sm:max-w-none sm:text-xl xl:text-left">
            A self-taught full stack developer based in Sri Lanka.
          </p>
        </div>
      </div>

      <div className="flex gap-16 sm:gap-32">
        <div className="flex flex-col gap-2 sm:gap-4">
          <span className="text-light-blue text-sm font-semibold tracking-widest uppercase sm:text-base">
            Navigation
          </span>
          <NavigationLink to="/" name="Home" />
          <NavigationLink to="/work" name="Work" />
          <NavigationLink to="/gallery" name="Gallery" />
          <NavigationLink to="/about" name="About" />
        </div>

        <div className="flex flex-col gap-2 sm:gap-4">
          <span className="text-light-blue text-sm font-semibold tracking-widest uppercase sm:text-base">
            Social
          </span>
          <a
            className="font-title text-3xl sm:text-5xl"
            href="mailto:me@vimhax.com"
          >
            Email
          </a>
          <a
            className="font-title text-3xl sm:text-5xl"
            href="https://github.com/VimHax"
          >
            GitHub
          </a>
          <a
            className="font-title text-3xl sm:text-5xl"
            href="https://www.linkedin.com/in/vimukthi-weerabahu"
          >
            LinkedIn
          </a>
          <a
            className="font-title text-3xl sm:text-5xl"
            href="https://twitter.com/VimHax"
          >
            X <span className="text-white/25">/</span> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

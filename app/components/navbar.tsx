import { Link } from "react-router";
import LogoSVG from "~/svgs/logo";
import MenuSVG from "~/svgs/menu";

export default function Navbar() {
  return (
    <div className="pointer-events-none sticky top-0 z-50 flex w-full justify-center pt-4 sm:pt-8">
      <div className="pointer-events-auto flex h-13 w-full justify-between rounded-2xl bg-white/85 shadow-2xl/10 backdrop-blur-sm sm:max-w-125">
        <Link
          className="hover:bg-dark-blue/10 flex items-center rounded-l-2xl px-3.5 transition-colors duration-300"
          to="/"
        >
          <LogoSVG className="size-6" />
        </Link>
        <div className="font-title flex items-center font-bold uppercase">
          <span className="-mb-1">Vimukthi Weerabahu</span>
        </div>
        <button className="hover:bg-dark-blue/10 flex cursor-pointer items-center rounded-r-2xl px-3.5 transition-colors duration-300">
          <MenuSVG className="size-6" />
        </button>
      </div>
    </div>
  );
}

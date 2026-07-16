import { Link } from "react-router";
import LogoSVG from "~/svgs/logo";
import MenuSVG from "~/svgs/menu";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4 sm:px-8 sm:pt-8">
      <div className="flex h-13 w-full max-w-125 justify-between rounded-2xl bg-white/85 shadow-2xl/10 backdrop-blur-sm">
        <Link
          className="flex items-center rounded-l-2xl px-3.5 transition-colors duration-300 hover:bg-black/10"
          to="/"
        >
          <LogoSVG className="size-6" />
        </Link>
        <div className="font-title flex items-center font-bold uppercase">
          Vimukthi Weerabahu
        </div>
        <button className="flex cursor-pointer items-center rounded-r-2xl px-3.5 transition-colors duration-300 hover:bg-black/7.5">
          <MenuSVG className="size-6" />
        </button>
      </div>
    </div>
  );
}

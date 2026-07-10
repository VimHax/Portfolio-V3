import LogoSVG from "~/svgs/logo";
import MenuSVG from "~/svgs/menu";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4 sm:px-8 sm:pt-8">
      <div className="shadow-blue/15 flex w-full max-w-125 items-center justify-between rounded-2xl bg-white p-3.5 shadow-2xl">
        <LogoSVG className="size-6" />
        <span className="font-title font-bold uppercase">
          Vimukthi Weerabahu
        </span>
        <MenuSVG className="size-6" />
      </div>
    </div>
  );
}

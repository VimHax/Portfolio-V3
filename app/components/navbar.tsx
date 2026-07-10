import LogoSVG from "~/svgs/logo";
import MenuSVG from "~/svgs/menu";

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 mt-4 flex w-full justify-center px-4 sm:top-8 sm:mt-8 sm:px-8">
      <div className="flex w-full max-w-125 items-center justify-between rounded-2xl bg-white p-3.5 shadow-2xl/15">
        <LogoSVG className="size-6" />
        <span className="font-title font-bold uppercase">
          Vimukthi Weerabahu
        </span>
        <MenuSVG className="size-6" />
      </div>
    </div>
  );
}

import { Link, useLocation, useResolvedPath, type To } from "react-router";
import { twJoin, twMerge } from "tailwind-merge";
import LogoSVG from "~/svgs/logo";
import MenuSVG from "~/svgs/menu";
import { Dialog } from "@base-ui/react";
import XMarkSVG from "~/svgs/x-mark";
import type { ReactNode } from "react";
import MailSVG from "~/svgs/mail";
import GitHubLogoSVG from "~/svgs/github-logo";
import OptimizedImage from "./optimized-image";
import XLogoSVG from "~/svgs/x-logo";
import FadeUp from "./fade-up";
import FadeIn from "./fade-in";

import LinkedInImg from "./linkedin.png?img";

function NavigationLink({
  dialog,
  to,
  name,
}: {
  dialog: Dialog.Handle<unknown>;
  to: To;
  name: string;
}) {
  const path = useResolvedPath(to);
  const location = useLocation();
  const locationPathname = location.pathname.toLowerCase();
  const toPathname = path.pathname.toLowerCase();
  const isActive = locationPathname === toPathname;
  return (
    <FadeUp>
      <div className="flex w-65 items-center justify-stretch gap-2 opacity-0 sm:w-100 sm:gap-4">
        <Link
          className="font-title block w-fit text-5xl tracking-tighter sm:text-6xl"
          to={to}
          onClick={() => dialog.close()}
        >
          {isActive && (
            <div className="pointer-events-none mr-3 mb-3 -ml-5 inline-block size-1.5 rounded-full bg-black sm:mb-4 sm:size-2" />
          )}
          {name}
        </Link>
        <div
          className={twJoin(
            "w-full border-t",
            isActive ? "border-black" : "border-off-white",
          )}
        />
      </div>
    </FadeUp>
  );
}

function ContactLink({ icon, url }: { icon: ReactNode; url: string }) {
  return (
    <FadeIn>
      <a
        href={url}
        className="hover:bg-dark-blue/10 flex size-13 items-center justify-center rounded-2xl bg-white/85 opacity-0 shadow-2xl transition-colors duration-300"
      >
        {icon}
      </a>
    </FadeIn>
  );
}

function Inner({
  className,
  close,
}: {
  className?: string;
  close?: Dialog.Handle<unknown>;
}) {
  const dialog = close ?? Dialog.createHandle();
  return (
    <div
      className={twMerge(
        "flex h-13 w-full justify-between rounded-2xl bg-white/85 shadow-2xl/10 backdrop-blur-sm sm:max-w-125",
        className,
      )}
    >
      <Link
        className="hover:bg-dark-blue/10 flex items-center rounded-l-2xl px-3.5 transition-colors duration-300"
        to="/"
        onClick={() => close?.close()}
      >
        <LogoSVG className="size-6" />
      </Link>
      <div className="font-title flex items-center font-bold uppercase">
        <span className="-mb-1">Vimukthi Weerabahu</span>
      </div>
      {close ? (
        <Dialog.Close className="hover:bg-dark-blue/10 flex cursor-pointer items-center rounded-r-2xl px-3.5 transition-colors duration-300">
          <XMarkSVG className="size-6" />
        </Dialog.Close>
      ) : (
        <Dialog.Root handle={dialog}>
          <Dialog.Trigger className="hover:bg-dark-blue/10 flex cursor-pointer items-center rounded-r-2xl px-3.5 transition-colors duration-300">
            <MenuSVG className="size-6" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Popup className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-white">
              <div className="absolute top-0 left-0 flex w-full justify-center px-4 pt-4 sm:pt-8">
                <Inner close={dialog} />
              </div>

              <div className="absolute bottom-0 left-0 flex w-full justify-center gap-2 pb-4 sm:pb-8">
                <ContactLink
                  icon={<MailSVG className="size-6" />}
                  url="mailto:me@vimhax.com"
                />
                <ContactLink
                  icon={<GitHubLogoSVG className="size-6" />}
                  url="https://github.com/VimHax"
                />
                <ContactLink
                  icon={
                    <OptimizedImage
                      className="size-6 object-contain"
                      image={LinkedInImg}
                      sizes={[{ size: 24, unit: "px" }]}
                    />
                  }
                  url="https://www.linkedin.com/in/vimukthi-weerabahu"
                />
                <ContactLink
                  icon={<XLogoSVG className="size-5" />}
                  url="https://twitter.com/VimHax"
                />
              </div>

              <div className="flex flex-col items-stretch gap-4 sm:gap-8">
                <NavigationLink dialog={dialog} to="/" name="Home" />
                <NavigationLink dialog={dialog} to="/work" name="Work" />
                <NavigationLink dialog={dialog} to="/gallery" name="Gallery" />
                <NavigationLink dialog={dialog} to="/about" name="About" />
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-none sticky top-0 z-50 flex w-full justify-center pt-4 sm:pt-8">
      <Inner className="pointer-events-auto" />
    </div>
  );
}

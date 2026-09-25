import type { ReactNode } from "react";
import GitHubLogoSVG from "~/svgs/github-logo";
import MailSVG from "~/svgs/mail";
import XLogoSVG from "~/svgs/x-logo";
import OptimizedImage from "./optimized-image";
import FadeIn from "./fade-in";
import FadeUp from "./fade-up";

import LinkedInImg from "./linkedin.png?img";

function Contact({
  icon,
  name,
  value,
  url,
}: {
  icon: ReactNode;
  name: ReactNode;
  value: string;
  url: string;
}) {
  return (
    <a
      className="hover:bg-off-white flex h-24 items-center justify-between bg-white transition-colors duration-300 first:rounded-t-4xl last:rounded-b-4xl sm:h-28 lg:h-36"
      href={url}
    >
      <div className="flex h-full">
        <FadeIn>
          <div className="border-dark-blue/5 flex aspect-square h-full items-center justify-center border-r">
            {icon}
          </div>
        </FadeIn>
        <div className="ml-7 flex flex-col justify-center sm:ml-12">
          <FadeIn>
            <span className="font-title -mb-2 text-3xl sm:mb-0 sm:text-4xl lg:text-5xl">
              {name}
            </span>
          </FadeIn>
          <FadeIn>
            <span className="text-light-blue text-xl sm:hidden">{value}</span>
          </FadeIn>
        </div>
      </div>
      <FadeIn>
        <span className="text-light-blue hidden sm:mr-12 sm:block sm:text-2xl lg:text-3xl">
          {value}
        </span>
      </FadeIn>
    </a>
  );
}

export default function ContactSection() {
  return (
    <>
      <div className="full-wide-content mb-8 flex w-full justify-center px-4 sm:px-12">
        <div className="max-w-wide w-full">
          <FadeIn>
            <h2 className="font-title text-5xl tracking-tight sm:text-7xl">
              Contact
            </h2>
          </FadeIn>
        </div>
      </div>

      <FadeUp>
        <div className="wide-content mb-section flex flex-col rounded-4xl shadow-2xl/10">
          <Contact
            icon={<MailSVG className="size-10 lg:size-12" />}
            name="Email"
            value="me@vimhax.com"
            url="mailto:me@vimhax.com"
          />
          <hr className="border-dark-blue/5" />
          <Contact
            icon={<GitHubLogoSVG className="size-10 lg:size-12" />}
            name="GitHub"
            value="VimHax"
            url="https://github.com/VimHax"
          />
          <hr className="border-dark-blue/5" />
          <Contact
            icon={
              <OptimizedImage
                className="size-10 object-contain lg:size-12"
                image={LinkedInImg}
                sizes={[{ size: 48, unit: "px" }]}
              />
            }
            name="LinkedIn"
            value="Vimukthi Weerabahu"
            url="https://www.linkedin.com/in/vimukthi-weerabahu"
          />
          <hr className="border-dark-blue/5" />
          <Contact
            icon={<XLogoSVG className="size-8 lg:size-10" />}
            name={
              <>
                X <span className="text-dark-blue/25">/</span> Twitter
              </>
            }
            value="@VimHax"
            url="https://twitter.com/VimHax"
          />
        </div>
      </FadeUp>
    </>
  );
}

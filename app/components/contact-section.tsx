import type { ReactNode } from "react";
import GitHubLogoSVG from "~/svgs/github-logo";
import MailSVG from "~/svgs/mail";
import LinkedInImg from "./linkedin.png";
import XLogoSVG from "~/svgs/x-logo";

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
      className="hover:bg-off-white flex h-36 items-center justify-between bg-white transition-colors duration-300 first:rounded-t-4xl last:rounded-b-4xl"
      href={url}
    >
      <div className="flex h-full">
        <div className="border-off-white flex aspect-square h-full items-center justify-center border-r">
          {icon}
        </div>
        <div className="ml-12 flex items-center">
          <h2 className="font-title text-6xl">{name}</h2>
        </div>
      </div>
      <p className="mr-12 text-4xl opacity-50">{value}</p>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div className="wide-content mb-section">
      <h1 className="font-title mb-8 text-7xl tracking-tight">Contact</h1>

      <div className="bg-off-white flex flex-col gap-px rounded-4xl shadow-2xl/10">
        <Contact
          icon={<MailSVG className="size-12" />}
          name="Email"
          value="me@vimhax.com"
          url="mailto:me@vimhax.com"
        />
        <Contact
          icon={<GitHubLogoSVG className="size-12" />}
          name="GitHub"
          value="VimHax"
          url="https://github.com/VimHax"
        />
        <Contact
          icon={<img className="size-12 object-contain" src={LinkedInImg} />}
          name="LinkedIn"
          value="Vimukthi Weerabahu"
          url="https://www.linkedin.com/in/vimukthi-weerabahu"
        />
        <Contact
          icon={<XLogoSVG className="size-10" />}
          name={
            <>
              X <span className="opacity-25">/</span> Twitter
            </>
          }
          value="@VimHax"
          url="https://twitter.com/VimHax"
        />
      </div>
    </div>
  );
}

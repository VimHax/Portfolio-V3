import type { SVGProps } from "react";

const VercelLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 115 100" {...props}>
    <path
      fill="black"
      fillRule="evenodd"
      d="M57.5 0 115 100H0z"
      clipRule="evenodd"
    />
  </svg>
);

export default VercelLogo;

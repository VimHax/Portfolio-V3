import type { SVGProps } from "react";

const LogoSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 500 500"
    {...props}
  >
    <path
      fill="currentColor"
      d="M166.263 279.238 10.113 143.633l17.923 206.035 118.935 62.565 19.292-132.995ZM410.098 293.334 489.888 0 275.747 215.767 201.212 500l208.886-206.666Z"
    />
  </svg>
);

export default LogoSVG;

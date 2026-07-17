import type { SVGProps } from "react";

const FigmaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 400 600"
    {...props}
  >
    <path
      fill="#24CB71"
      d="M0 500c0-55.228 44.772-100 100-100h100v100c0 55.228-44.772 100-100 100S0 555.228 0 500Z"
    />
    <path
      fill="#FF7237"
      d="M200 0v200h100c55.228 0 100-44.772 100-100S355.228 0 300 0H200Z"
    />
    <path
      fill="#00B6FF"
      d="M299.167 400c55.228 0 100-44.772 100-100s-44.772-100-100-100-100 44.772-100 100 44.772 100 100 100Z"
    />
    <path
      fill="#FF3737"
      d="M0 100c0 55.228 44.772 100 100 100h100V0H100C44.772 0 0 44.772 0 100Z"
    />
    <path
      fill="#874FFF"
      d="M0 300c0 55.228 44.772 100 100 100h100V200H100C44.772 200 0 244.772 0 300Z"
    />
  </svg>
);

export default FigmaLogo;

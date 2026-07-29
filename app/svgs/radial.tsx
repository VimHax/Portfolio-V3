import { useId, type SVGProps } from "react";

const RadialSVG = (props: SVGProps<SVGSVGElement>) => {
  const radialGradientID = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 800"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <path fill={`url(#${radialGradientID})`} d="M0 0h450v800H0z" />
      <defs>
        <radialGradient
          id={radialGradientID}
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(666 0 0 270.923 0 800)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.612} stopColor="currentColor" />
          <stop offset={1} stopColor="currentColor" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RadialSVG;

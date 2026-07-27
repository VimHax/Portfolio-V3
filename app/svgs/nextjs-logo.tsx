import { useId, type SVGProps } from "react";

const NextJSLogo = (props: SVGProps<SVGSVGElement>) => {
  const maskID = useId();
  const linearGradient1ID = useId();
  const linearGradient2ID = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 180 180"
      {...props}
    >
      <mask
        id={maskID}
        width={180}
        height={180}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <circle cx={90} cy={90} r={90} fill="#000" />
      </mask>
      <g mask={`url(#${maskID})`}>
        <circle cx={90} cy={90} r={90} fill="#000" />
        <path
          fill={`url(#${linearGradient1ID})`}
          d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z"
        />
        <path fill={`url(#${linearGradient2ID})`} d="M115 54h12v72h-12z" />
      </g>
      <defs>
        <linearGradient
          id={linearGradient1ID}
          x1={109}
          x2={144.5}
          y1={116.5}
          y2={160.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={linearGradient2ID}
          x1={121}
          x2={120.799}
          y1={54}
          y2={106.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NextJSLogo;

import { SVGProps } from "react";

export const IconArrowUpRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
};

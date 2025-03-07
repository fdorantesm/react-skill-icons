import * as React from "react";
import type { SVGProps } from "react";
const MarkdownDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#242938" rx={60} />
    <path
      stroke="#fff"
      strokeWidth={10}
      d="M217 69H39c-5.523 0-10 4.477-10 10v98c0 5.523 4.477 10 10 10h178c5.523 0 10-4.477 10-10V79c0-5.523-4.477-10-10-10Z"
    />
    <path
      fill="#fff"
      d="M54 162V94h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zm125 0-30-33h20V94h20v35h20z"
    />
  </svg>
);
export { MarkdownDark };

import * as React from "react";
import type { SVGProps } from "react";
const CrystalDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="#000"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={5}
      d="m155.26 226.052 71.219-71.077c.285-.285.428-.57.143-.997l-26.067-97.144c0-.285-.284-.57-.712-.712l-97.286-26.066c-.285-.143-.712 0-.997.285l-71.22 71.077c-.284.285-.427.57-.284.997l26.209 97.143c0 .285.285.57.712.713l97.286 26.066c.285.142.712 0 .997-.285Z"
    />
    <path fill="#fff" d="m105.691 173.207-70.222-70.08 95.861-25.354z" />
  </svg>
);
export { CrystalDark };

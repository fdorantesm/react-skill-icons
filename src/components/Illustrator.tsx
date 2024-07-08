import * as React from "react";
import type { SVGProps } from "react";
const Illustrator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#300" rx={60} />
    <path
      fill="#FF9A00"
      d="M123.733 152.333h-39.68L75.946 177.4c-.213.96-1.066 1.6-2.026 1.493H53.866c-1.173 0-1.493-.64-1.173-1.92l34.347-98.88c.32-1.066.64-2.24 1.066-3.52.427-2.24.64-4.586.64-6.933-.106-.533.32-1.067.854-1.173h27.626c.854 0 1.28.32 1.387.853l38.933 109.867c.32 1.173 0 1.706-1.066 1.706h-22.294c-.746.107-1.493-.426-1.706-1.173zM90.24 130.68h27.093c-.64-2.24-1.493-4.907-2.453-7.68-.96-2.88-1.92-5.973-2.88-9.173-1.067-3.307-2.027-6.507-3.094-9.814-1.066-3.306-2.026-6.4-2.88-9.493-.853-2.986-1.6-5.76-2.346-8.32h-.214c-.96 4.587-2.133 9.174-3.626 13.76-1.6 5.12-3.2 10.453-4.907 15.787a209 209 0 0 1-4.693 14.933M181.333 85.133c-3.52.107-6.933-1.28-9.493-3.733-2.453-2.667-3.733-6.187-3.627-9.813-.106-3.627 1.28-7.04 3.84-9.494s5.974-3.733 9.494-3.733c4.16 0 7.36 1.28 9.706 3.733a13.46 13.46 0 0 1 3.52 9.494c.107 3.626-1.173 7.146-3.733 9.813-2.453 2.56-6.08 3.947-9.707 3.733m-11.946 92.587V95.587c0-1.067.426-1.494 1.386-1.494h21.12c.96 0 1.387.534 1.387 1.494v82.133c0 1.173-.427 1.707-1.387 1.707h-20.906c-1.067 0-1.6-.64-1.6-1.707"
    />
  </svg>
);
export { Illustrator };

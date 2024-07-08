import * as React from "react";
import type { SVGProps } from "react";
const Heroku = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#430098" rx={60} />
    <path
      fill="#fff"
      d="M70 218v-51.429l28.929 25.715zm90 0v-76.789c-.125-6.001-3.015-13.211-16.071-13.211-26.145 0-55.473 13.15-55.765 13.281L70 149.51V38h25.714v73c12.838-4.179 30.783-8.714 48.215-8.714 15.894 0 25.408 6.248 30.59 11.491 11.06 11.185 11.211 25.434 11.196 27.08V218zm6.429-138.214h-25.715C150.82 66.526 157.165 52.574 160 38h25.714c-1.735 14.606-7.656 28.607-19.285 41.786"
    />
  </svg>
);
export { Heroku };

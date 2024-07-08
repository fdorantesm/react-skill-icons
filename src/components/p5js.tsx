import * as React from "react";
import type { SVGProps } from "react";
const p5js = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#ED225D" rx={60} />
    <path
      fill="#fff"
      d="M176.532 145.884q-2.617-5.87-7.286-9.904t-10.965-6.155q-6.299-2.121-13.654-2.122c-1.793 0-3.797.097-6.014.282-2.217.192-4.126.52-5.73.993l.99-21.651h40.892v-15.28h-57.022l-1.699 54.756q2.262-1.129 5.164-2.123a79 79 0 0 1 5.943-1.766 54 54 0 0 1 6.226-1.204 46 46 0 0 1 6.014-.423q4.102 0 8.065.918 3.961.922 7.145 3.255c2.123 1.555 3.842 3.609 5.165 6.154q1.98 3.82 1.98 9.623 0 4.528-1.486 8.136c-.989 2.402-2.335 4.41-4.03 6.011q-2.548 2.408-5.945 3.679-3.395 1.277-7.217 1.275c-4.526 0-8.443-1.204-11.743-3.609q-4.953-3.606-7.076-9.551l-.188.07-12.288 11.514c2.485 4.053 5.689 7.444 9.647 10.137 5.753 3.912 12.827 5.872 21.225 5.872q7.498-.001 14.149-2.405 6.648-2.403 11.602-6.935 4.951-4.525 7.854-11.106 2.898-6.579 2.899-14.929c.001-5.094-.871-9.595-2.617-13.512M48.735 124.307v9.479h.425q1.272-1.98 3.325-4.032 2.05-2.05 5.024-3.68 2.97-1.623 6.72-2.688c2.498-.706 5.307-1.062 8.419-1.062q7.217.001 13.3 2.759 6.085 2.764 10.473 7.572 4.383 4.813 6.791 11.32 2.405 6.51 2.406 14.008 0 7.5-2.336 14.079c-1.555 4.386-3.775 8.206-6.65 11.461-2.879 3.254-6.367 5.852-10.471 7.781q-6.157 2.9-13.937 2.901-7.218 0-13.23-2.971-6.017-2.97-9.268-8.067h-.282v43.016h-16.98V124.307zm39.62 33.675q0-3.961-1.203-7.854-1.205-3.89-3.61-7.004-2.404-3.11-6.084-5.023-3.68-1.91-8.63-1.909-4.67 0-8.348 1.981-3.68 1.984-6.297 5.093-2.62 3.115-3.962 7.077-1.346 3.963-1.344 7.924-.002 3.963 1.344 7.851a21.9 21.9 0 0 0 3.962 7.007 20.4 20.4 0 0 0 6.297 5.021q3.677 1.91 8.348 1.909 4.95.001 8.63-1.979 3.678-1.982 6.085-5.095 2.404-3.111 3.609-7.075 1.202-3.962 1.203-7.924M212.068 101.955l10.787-3.256 2.118 6.517-10.742 3.665 6.668 9.455-5.621 4.077-7.019-9.289-6.837 9.045-5.458-4.158 6.668-9.13-10.825-3.908 2.121-6.522 10.868 3.503V90.711h7.274z"
    />
  </svg>
);
export { p5js };

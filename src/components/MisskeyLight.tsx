import * as React from "react";
import type { SVGProps } from "react";
const MisskeyLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#86B300"
      d="M50.232 54q-4.53 0-8.627 1.54-7.332 2.638-12.076 9.453-4.53 6.597-4.529 14.73v96.301q0 10.553 7.332 18.248 7.548 7.475 17.9 7.475 10.566 0 17.899-7.475 7.547-7.695 7.548-18.248v-17.512c.054-3.793 3.886-2.798 5.823 0 3.627 6.404 11.317 11.904 20.271 11.873 8.953-.032 16.39-4.545 20.271-11.873 1.47-1.768 5.614-4.78 6.039 0v17.512q0 10.553 7.332 18.248 7.547 7.475 17.899 7.475 10.567 0 17.899-7.475 7.548-7.695 7.548-18.248v-96.3q0-8.135-4.744-14.73-4.529-6.816-11.861-9.455Q157.843 54 153.53 54q-11.645 0-19.625 9.235l-25.606 30.551c-.575.44-2.48 3.802-6.527 3.802-4.046 0-5.735-3.362-6.31-3.802L69.639 63.235Q61.877 54 50.232 54m159.555 0q-9.058 0-15.527 6.596-6.254 6.375-6.254 15.61t6.254 15.83q6.469 6.375 15.527 6.376 9.057 0 15.527-6.376 6.47-6.596 6.47-15.83t-6.47-15.61Q218.844 54 209.787 54m.215 48.809q-9.057 0-15.527 6.596t-6.469 15.83v54.305q0 9.234 6.469 15.83 6.47 6.376 15.527 6.376t15.312-6.376q6.47-6.596 6.47-15.83v-54.305q0-9.234-6.47-15.83-6.255-6.596-15.312-6.596"
    />
  </svg>
);
export { MisskeyLight };

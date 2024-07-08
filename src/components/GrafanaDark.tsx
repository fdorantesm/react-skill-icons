import * as React from "react";
import type { SVGProps } from "react";
const GrafanaDark = (props: SVGProps<SVGSVGElement>) => (
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
      fill="url(#prefix__a)"
      d="M220.724 116.455c-.354-3.197-.71-7.105-2.131-11.368q-1.599-6.395-5.328-13.854-3.73-7.46-9.592-14.92c-1.421-1.777-3.197-3.908-5.328-5.684 2.841-11.368-3.552-20.96-3.552-20.96-10.658-.71-17.763 3.198-20.25 5.33-.355 0-.71-.356-1.421-.711-1.775-.71-3.552-1.421-5.683-2.132-2.131-.71-3.908-1.065-6.039-1.776-2.132-.355-4.264-.71-6.039-1.066h-1.066C149.676 34.394 136.177 28 136.177 28c-14.919 9.592-17.761 22.735-17.761 22.735v.71c-.711.356-1.777.356-2.487.711-1.066.355-2.132.71-3.553 1.066-1.065.355-2.131.71-3.552 1.421-2.131 1.066-4.618 2.131-6.749 3.197-2.132 1.066-4.263 2.487-6.395 3.908-.355 0-.355-.355-.355-.355-20.96-7.816-39.432 1.776-39.432 1.776-1.776 22.025 8.17 36.234 10.302 38.721-.355 1.421-1.065 2.842-1.42 4.263-1.422 4.973-2.843 10.302-3.553 15.631 0 .71-.355 1.42-.355 2.131C41.684 133.506 36 153.044 36 153.044c15.986 18.473 34.814 19.538 34.814 19.538 2.486 4.264 4.973 8.171 8.17 12.078 1.42 1.421 2.842 3.198 3.908 4.619-5.684 16.696.71 30.551.71 30.551 17.762.71 29.485-7.816 31.972-9.947 1.776.71 3.552 1.065 5.328 1.776 5.329 1.421 11.013 2.132 16.696 2.486h6.75C152.874 226.223 167.439 228 167.439 228c10.657-11.013 11.012-22.025 11.012-24.512v-.71c2.131-1.421 4.262-3.197 6.395-4.973 4.262-3.908 7.814-8.171 11.012-12.789.355-.356.71-.71.71-1.421 12.078.711 20.249-7.46 20.249-7.46-2.132-12.434-9.237-18.473-10.658-19.538h-.354v-14.921c-.356-1.42-.356-2.841-.711-3.907-1.421-5.328-3.197-10.302-6.039-14.92s-6.039-8.526-9.947-12.078c-3.908-3.553-8.17-6.039-12.788-8.171s-9.237-3.197-14.21-3.907c-2.487-.356-4.618-.356-7.105-.356h-3.552c-1.066 0-2.487.356-3.552.356-4.618.71-9.237 2.486-13.144 4.973s-7.46 5.329-10.302 8.526-4.974 7.105-6.395 11.012-2.131 7.815-2.486 11.723v5.684c.355 1.776.71 3.908 1.065 5.684 1.066 3.552 2.842 6.749 4.619 9.591 2.131 2.842 4.618 4.974 7.105 6.749 2.486 1.777 5.328 3.198 8.17 3.908 2.842.711 5.329 1.066 8.17 1.066h4.619c.354 0 .71 0 1.065-.355.71 0 1.066-.355 1.776-.355 1.066-.356 2.132-.711 3.198-1.421 1.065-.356 1.775-1.066 2.841-1.777.355 0 .356-.354.711-.71 1.066-.71 1.066-2.131.355-2.842-.71-.71-1.776-1.066-2.486-.355-.356 0-.356.355-.711.355-.71.355-1.421.711-2.487 1.065-.71.356-1.776.356-2.487.711h-5.683c-2.131-.355-3.908-.711-6.039-1.776-2.132-.71-3.908-2.131-5.685-3.552-1.775-1.422-3.196-3.553-4.262-5.329s-2.131-4.263-2.487-6.749c-.355-1.066-.355-2.487-.355-3.553v-1.776c0-.71 0-1.421.355-2.132 1.066-5.328 3.553-10.301 7.816-14.564 1.066-1.066 2.131-1.777 3.197-2.843 1.065-.71 2.487-1.42 3.552-2.131 1.421-.71 2.842-1.065 3.908-1.421 1.421-.355 2.842-.71 4.262-.71h4.264c1.421 0 3.196.355 4.617.71 3.198.711 6.039 1.777 8.882 3.552 5.683 3.198 10.301 8.172 13.499 13.855 1.421 2.842 2.487 6.039 3.197 9.236 0 .711.355 1.777.355 2.487v5.684c0 1.066 0 1.776-.355 2.842 0 .71-.355 1.776-.355 2.486s-.356 1.777-.711 2.487c-.356 1.776-1.066 3.553-1.776 4.973q-2.131 4.797-5.329 9.592c-4.263 5.684-9.946 10.657-16.696 13.499-3.197 1.421-6.749 2.487-10.302 3.197-1.776.356-3.552.356-5.329.71h-2.486c.355 0 0 0 0 0h-2.842c-3.907-.354-7.815-1.065-11.368-2.131s-7.46-2.487-10.657-4.262c-6.749-3.553-12.789-8.526-17.762-14.566-2.487-2.841-4.618-6.039-6.039-9.591q-2.664-5.328-4.263-10.657c-1.065-3.552-1.776-7.46-1.776-11.012v-6.75c0-1.776.355-3.907.355-5.684.355-1.776.71-3.908 1.066-5.683.355-1.777.71-3.908 1.42-5.685 1.067-3.552 2.488-7.104 3.909-10.657 3.197-6.75 7.104-12.788 12.078-17.406 1.065-1.066 2.486-2.487 3.907-3.553s2.842-2.131 4.263-2.842c1.421-1.065 2.842-1.776 4.263-2.486l2.132-1.066c.355 0 .71-.356 1.065-.356s.711-.355 1.066-.355c1.421-.71 3.197-1.065 4.618-1.776.355 0 .711-.355 1.066-.355s.711-.355 1.065-.355c.711-.356 1.777-.356 2.487-.71.355 0 .711-.356 1.421-.356.355 0 .711 0 1.421-.355.356 0 .711 0 1.421-.355h1.421c.355 0 .71 0 1.421-.356.355 0 1.066 0 1.421-.355h6.039s.355 0 0 0h6.394q4.796 0 9.592 1.066c6.039 1.065 11.723 3.197 17.052 5.684a55.4 55.4 0 0 1 13.853 9.236l.711.71.71.71c.356.356 1.066.711 1.421 1.422.356.71 1.066.71 1.422 1.42.355.711 1.065 1.066 1.421 1.422 1.775 1.776 3.196 3.552 4.618 5.683 2.842 3.553 5.329 7.46 7.104 11.013 0 .355.356.355.356.71 0 .356.355.356.355.711.355.355.355.71.71 1.421.356.355.356.71.71 1.421.356.355.356.71.711 1.421.711 1.776 1.422 3.197 1.776 4.617.711 2.487 1.421 4.619 1.777 6.395.355.711 1.065 1.421 1.776 1.066.71 0 1.421-.71 1.421-1.422 1.421-4.262 1.421-6.749 1.065-9.235"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={129.039}
        x2={129.039}
        y1={282.048}
        y2={50.683}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF100" />
        <stop offset={1} stopColor="#F05A28" />
      </linearGradient>
    </defs>
  </svg>
);
export { GrafanaDark };

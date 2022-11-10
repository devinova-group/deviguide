import * as React from "react";
import { SVGProps } from "react";

const SvgMagnifyingGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#magnifying-glass_svg__a)">
      <path d="M10.515-.015a.052.052 0 0 1-.036.015C4.699.01 0 4.717 0 10.5 0 16.29 4.71 21 10.5 21c1.576 0 3.13-.334 4.489-.979.29-.137.634-.066.881.139l3 3a3.06 3.06 0 1 0 4.32-4.32l-3-3c-.247-.247-.348-.626-.196-.94.643-1.34 1.036-2.85 1.036-4.43 0-5.783-4.698-10.489-10.479-10.5a.051.051 0 0 0-.036.015Zm-.03 3.03A.051.051 0 0 1 10.521 3 7.464 7.464 0 0 1 18 10.5c0 1.98-.72 3.81-1.98 5.16l-.09.09a3 3 0 0 0-.39.39c-1.32 1.2-3.12 1.89-5.07 1.89-4.17 0-7.5-3.33-7.5-7.5a7.464 7.464 0 0 1 7.479-7.5.052.052 0 0 0 .036-.015Z" />
    </g>
    <defs>
      <clipPath id="magnifying-glass_svg__a">
        <rect width={24} height={24} rx={2} />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMagnifyingGlass;

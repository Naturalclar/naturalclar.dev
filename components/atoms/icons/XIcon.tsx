import * as React from "react";
import type { IconProps } from "./types";

/**
 * Simple Icons (CC0) の x。
 * https://github.com/simple-icons/simple-icons
 *
 * AMP は外部スクリプトを禁止しているため、アイコンは JS を伴わないインライン
 * SVG で持つ。fill を currentColor にしてあるので、色は呼び出し側の color で決まる。
 */
const XIcon: React.FC<IconProps> = ({ size = 32, label }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden={label ? undefined : true}
    focusable="false"
  >
    {label ? <title>{label}</title> : null}
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
  </svg>
);

export default XIcon;

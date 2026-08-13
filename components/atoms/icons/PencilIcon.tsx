import * as React from "react";
import type { IconProps } from "./types";

/**
 * Bootstrap Icons (MIT) の pencil-fill。
 * https://github.com/twbs/icons
 *
 * AMP は外部スクリプトを禁止しているため、アイコンは JS を伴わないインライン
 * SVG で持つ。fill を currentColor にしてあるので、色は呼び出し側の color で決まる。
 */
const PencilIcon: React.FC<IconProps> = ({ size = 32, label }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={label ? undefined : true}
    focusable="false"
  >
    {label ? <title>{label}</title> : null}
    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
  </svg>
);

export default PencilIcon;

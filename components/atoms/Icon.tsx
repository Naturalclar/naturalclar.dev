import * as React from "react";
import { GithubIcon, PencilIcon, XIcon } from "./icons";

const icons = {
  github: GithubIcon,
  pencil: PencilIcon,
  x: XIcon,
};

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  href?: string;
  description?: string;
};

const Icon: React.FC<Props> = ({ name, href, description }) => {
  const Glyph = icons[name];

  // リンクで包む場合は a 側の aria-label が名前になるので、SVG は
  // aria-hidden のまま。単体で置く場合だけ SVG に名前を持たせる。
  return href ? (
    <a href={href} style={{ color: "gray", padding: 4 }} aria-label={description}>
      <Glyph />
    </a>
  ) : (
    <span style={{ color: "gray", padding: 4 }}>
      <Glyph label={description} />
    </span>
  );
};

export default Icon;

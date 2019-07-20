import React from "react";

type Props = {
  src: string;
  size?: number;
  isAmp?: boolean;
};

const Avatar = ({ src, size = 100, isAmp = false }: Props) => {
  const style = { width: size, height: size, borderRadius: size / 2 };
  return isAmp ? (
    <amp-img style={style} src={src} width={size} height={size} />
  ) : (
    <img style={style} src={src} />
  );
};
export default Avatar;

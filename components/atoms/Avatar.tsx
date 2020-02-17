import React from "react";

type Props = {
  alt?: string;
  src: string;
  size?: number;
  isAmp?: boolean;
};

const Avatar = ({ alt = "", src, size = 60, isAmp = false }: Props) => {
  const style = { width: size, height: size, borderRadius: size / 2, opacity: 0.5 };
  return isAmp ? (
    <amp-img style={style} src={src} width={size} height={size} alt={alt} />
  ) : (
    <img style={style} src={src} alt={alt} />
  );
};
export default Avatar;

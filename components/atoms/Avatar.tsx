type Props = {
  alt?: string;
  src: string;
  size?: number;
};

const Avatar = ({ alt = "", src, size = 60 }: Props) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    opacity: 0.5,
  };
  // next/image は output: "export" ではローダーが無いため使えない。
  // oxlint の nextjs/no-img-element を切ってあるのはそのため。
  return (
    <img style={style} src={src} alt={alt} width={size} height={size} />
  );
};

export default Avatar;

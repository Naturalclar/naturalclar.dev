import React from "react";

type Props = {
  name: string;
  href?: string;
  description?: string;
};

const Heading: React.FC<Props> = ({ name, href, description }) =>
  href ? (
    <a href={href} style={{ color: "gray" }} aria-label={description}>
      <i className={`fa fa-${name} fa-2x`} />
    </a>
  ) : (
    <i style={{ color: "gray" }} className={`fa fa-${name} fa-2x`} />
  );

export default Heading;

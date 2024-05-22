import * as React from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
  bold?: boolean;
  size?: number;
};

const Heading: React.FC<Props> = ({
  children,
  color = "#222",
  bold = false,
  size = 24,
}) => (
  <h1
    style={{
      color,
      fontWeight: bold ? "bold" : "normal",
      fontSize: size,
      padding: 0,
      margin: 0,
      marginBottom: 24,
    }}
  >
    {children}
  </h1>
);

export default Heading;

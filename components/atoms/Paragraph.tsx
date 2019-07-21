import React from "react";

type Props = {
  color?: string;
  bold?: boolean;
  size?: number;
};

const Paragraph: React.FC<Props> = ({
  children,
  color = "#666",
  bold = false,
  size = 16
}) => (
  <p
    style={{
      color,
      fontWeight: bold ? "bold" : "normal",
      fontSize: size,
      padding: 0,
      margin: 0
    }}
  >
    {children}
  </p>
);

export default Paragraph;

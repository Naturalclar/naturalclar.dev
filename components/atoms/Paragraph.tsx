import * as React from "react";

type Props = {
  children: React.ReactNode;
  color?: string;
  bold?: boolean;
  size?: number;
};

export const Paragraph: React.FC<Props> = ({
  children,
  color = "#666",
  bold = false,
  size = 16,
}) => (
  <p
    style={{
      color,
      fontWeight: bold ? "bold" : "normal",
      fontSize: size,
      padding: 0,
      margin: 0,
      marginBottom: 8,
    }}
  >
    {children}
  </p>
);

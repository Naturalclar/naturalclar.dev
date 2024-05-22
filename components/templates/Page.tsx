import * as React from "react";

const style = {
  container: {
    position: "absolute" as "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: "Source Sans Pro",
  },
};

type Props = {
  children: React.ReactNode;
  color?: string;
};

const Page: React.FC<Props> = ({ children, color = "aliceblue" }) => (
  <main style={{ ...style.container, backgroundColor: color }}>{children}</main>
);

export default Page;

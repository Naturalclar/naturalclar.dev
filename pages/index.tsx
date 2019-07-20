import { NextPage } from "next";
import { useAmp } from "next/amp";
import { Avatar } from "../components/atoms";

export const config = { amp: "hybrid" };

const Index: NextPage<{}> = () => {
  const isAmp = useAmp();
  return (
    <>
      <Avatar src="/static/cat_square.jpg" isAmp={isAmp} />
      <p>
        Welcome to the {isAmp ? "AMP" : "normal"} version of the Index page!!
      </p>
    </>
  );
};

export default Index;

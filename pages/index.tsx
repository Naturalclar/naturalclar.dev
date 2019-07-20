import { NextPage } from "next";
import { useAmp } from "next/amp";
import { Avatar } from "../components/atoms";
import { Meta } from "../head";
export const config = { amp: "hybrid" };

const Index: NextPage<{}> = () => {
  const isAmp = useAmp();
  return (
    <>
      <Meta />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar src="/static/cat_square.jpg" isAmp={isAmp} />
        <h2>Naturalclar</h2>
        <p>Front-end Developer at CureApp, Inc.</p>
        <p>Node.js, TypeScript, ReactNative</p>
        <div style={{ display: "flex" }}>
          <i className="fa fa-twitter fa-lg" />
          <i className="fa fa-github fa-lg" />
        </div>
      </section>
    </>
  );
};

export default Index;

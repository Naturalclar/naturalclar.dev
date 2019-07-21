import { NextPage } from "next";
import { useAmp } from "next/amp";
import { Avatar, Paragraph, Heading } from "../components/atoms";
import { Page } from "../components/templates";

export const config = { amp: "hybrid" };

const Index: NextPage<{}> = () => {
  const isAmp = useAmp();
  return (
    <Page>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: 24
        }}
      >
        <Avatar src="/static/cat_square.jpg" isAmp={isAmp} alt="MyIcon" />
        <Heading>Naturalclar</Heading>
        <Paragraph>Front-end Developer at CureApp, Inc.</Paragraph>
        <Paragraph>Node.js, TypeScript, React, React-Native</Paragraph>
        <div style={{ display: "flex" }}>
          <i className="fa fa-twitter fa-lg" />
          <i className="fa fa-github fa-lg" />
        </div>
      </section>
    </Page>
  );
};

export default Index;

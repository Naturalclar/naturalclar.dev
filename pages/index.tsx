import { NextPage } from "next";
import { useAmp } from "next/amp";
import { Avatar, Paragraph, Heading, Icon } from "../components/atoms";
import { Page } from "../components/templates";

export const config = { amp: "amp" };

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
          padding: 48
        }}
      >
        <Avatar src="/static/cat_square.jpg" isAmp={isAmp} alt="MyIcon" />
        <Heading>Naturalclar</Heading>
        <Paragraph>Front-end Developer at CureApp, Inc.</Paragraph>
        <Paragraph>Node.js, TypeScript, React, React-Native</Paragraph>
        <div
          style={{
            display: "flex",
            padding: 12,
            justifyContent: "space-between"
          }}
        >
          <Icon
            name="twitter"
            href="https://twitter.com/natural_clar"
            description="Link to Naturalclar's twitter account"
          />
          <Icon
            name="github"
            href="https://github.com/Naturalclar"
            description="Link to Naturalclar's github account"
          />
        </div>
      </section>
    </Page>
  );
};

export default Index;

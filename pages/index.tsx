import { NextPage } from "next";
import { Avatar, Paragraph, Heading, Icon } from "../components/atoms";
import { Page } from "../components/templates";
import { Meta } from "../head";

// このページは完全に静的で、クライアント側の状態も操作も無い。ハイドレーション
// 用のバンドルは何も仕事をしないので、production では出力しない。
// Next.js 16 系にも残っている Pages Router の設定 (server/render.tsx)。
export const config = { unstable_runtimeJS: false };

const Index: NextPage<{}> = () => {
  return (
    <Page>
      <Meta />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          position: "relative",
          padding: 24
        }}
      >
        <div style={{ display: "flex", width: 320, position: "relative" }}>
          <Heading size={48}>Naturalclar</Heading>
          <div style={{ position: "absolute", right: 30, top: 0 }}>
            <Avatar src="/static/cat_square.jpg" alt="MyIcon" />
          </div>
        </div>
        <Paragraph>Full Stack Open Source Developer</Paragraph>
        <Paragraph>
          Member of react-native-community, reason-react-native, asdf-community.
        </Paragraph>
        <Paragraph>
          Maintainer for Japanese Translation of Gatsby.js, TypeScript Website.
        </Paragraph>
        <div
          style={{
            display: "flex"
          }}
        >
          <Icon
            name="pencil"
            href="https://blog.naturalclar.dev"
            description="Link to Naturalclar's blog"
          />
          <Icon
            name="x"
            href="https://twitter.com/natural_clar"
            description="Link to Naturalclar's X account"
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

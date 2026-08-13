import { NextPage } from "next";
import Link from "next/link";
import { Heading, Paragraph } from "../components/atoms";
import { Page } from "../components/templates";

// 既定の 404 は Next.js のバンドルを読み込む。ここも静的なので、index と同じく
// ランタイム JS を出力しない。これで out/ から JS が完全に無くなる。
export const config = { unstable_runtimeJS: false };

const NotFound: NextPage<{}> = () => (
  <Page>
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 24,
      }}
    >
      <Heading size={48}>404</Heading>
      <Paragraph>This page could not be found.</Paragraph>
      {/* ランタイム JS が無いので Link は素の <a> として出力される。 */}
      <Link href="/" style={{ color: "gray" }}>
        Back to naturalclar.dev
      </Link>
    </section>
  </Page>
);

export default NotFound;

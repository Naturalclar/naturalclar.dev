import Head from "next/head";

const Meta = () => (
  <Head>
    <title>Naturalclar</title>
    <link rel="icon" type="image/png" href="/static/favicon.ico" sizes="32x32" />
    <meta name="Description" content="Naturalclar's portfolio site" />
    <meta charSet="utf-8" />
    <meta name="twitter:description" content={"Naturalclar's portfolio site"} />
    <meta property="og:description" content={"Naturalclar's portfolio site"} />
    <meta property="og:locale" content={"en_US"} />
    <meta property="og:title" content={"Naturalclar"} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://naturalclar.dev/`} />
    <meta
      property="og:image"
      content={`https://naturalclar.dev/static/cat_square.jpg`}
    />
    <meta
      property="article:published_time"
      content={new Date("2019/07/20").toISOString()}
    />
    <meta property="article:author" content="naturalclar" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="NaturalClar" />
    <meta
      name="twitter:image"
      content={`https://naturalclar.dev/static/twitter_card.png`}
    />
    <link
      rel="alternate"
      type="application/json+oembed"
      href={`https://naturalclar.dev/`}
      title={"Naturalclar"}
    />
    {/** Font Awesome */}
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossOrigin="anonymous"
    />
    {/** Google Fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default Meta;

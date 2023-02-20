import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="MyApp" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@500&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
import { roboto, serif } from "./_app";

export default function Document() {
  return (
    <Html lang="en" className={`${roboto.variable} ${serif.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

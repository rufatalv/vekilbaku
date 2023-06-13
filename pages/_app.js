import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";

import { Roboto, Source_Serif_Pro } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const serif = Source_Serif_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["200", "300", "400", "600", "700", "900"],
});
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

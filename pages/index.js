import { About, Contacts, Hero, Testimonials, Videos } from "@/components/Home";
import Footer from "@/components/Layout/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Vekil Emin Kiçikbəyov. Peşəkar vekil xidmeti və huquq xidmetleri.
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Videos />
      <Testimonials />
      <Contacts />
    </>
  );
}

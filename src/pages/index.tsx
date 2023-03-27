import Features from "@/comps/Features";
import Hero from "@/comps/Hero";
import NFTGrid from "@/comps/NFTGrid";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nfters</title>
        <meta name="description" content="NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Features />
        <NFTGrid />
      </main>
    </>
  );
}

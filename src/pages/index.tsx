import FeaturedCollection from "@/comps/FeaturedCollection/FeaturedCollection";
import CallToAction from "@/comps/CallToAction/CallToAction";
import Features from "@/comps/Features";
import Hero from "@/comps/Hero/Hero";
import NFTGrid from "@/comps/NFTGrid/NFTGrid";
import TopCollections from "@/comps/TopCollections/TopCollections";
import Head from "next/head";

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
        <TopCollections />
        <FeaturedCollection />
        <CallToAction />
        <NFTGrid />
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}

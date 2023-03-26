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
      <main className="p-10">
        <h1 className={`font-averta text-3xl font-bold underline text-red-500`}>
          Hello world!
        </h1>
        <h2 className={`font-integral`}>HI</h2>
        <h2 className={`font-dm-sans font-bold`}>Hey</h2>
      </main>
    </>
  );
}

import NFTCard from "./NFTCard";
import NFTGridTags from "./NFTGridTags";

interface NFTCardProps {
  name: string;
  image: string;
  price: number;
  quantity: string;
  timeLeft: string;
}

const NFTs = [
  {
    name: "ArtCrypto",
    image: "/images/nft-2.jpg",
    price: 0.25,
    quantity: "1 of 321",
    timeLeft: "3h 50m 2s",
  },
  {
    name: "This NFT",
    image: "/images/nft-2.jpg",
    price: 0.25,
    quantity: "1 of 321",
    timeLeft: "3h 50m 2s",
  },
  {
    name: "ArtCrypto",
    image: "/images/nft-2.jpg",
    price: 0.25,
    quantity: "1 of 321",
    timeLeft: "3h 50m 2s",
  },
  {
    name: "This NFT",
    image: "/images/nft-2.jpg",
    price: 0.25,
    quantity: "1 of 321",
    timeLeft: "3h 50m 2s",
  },
];

const NFTGrid = () => {
  return (
    <section className="bg-nft-gray bg-opacity-40">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold font-integral mb-12">
          Discover more NFTs
        </h1>

        <NFTGridTags />
        <div className="flex flex-wrap w-full justify-center lg:justify-evenly xl:justify-between">
          {NFTs.map((nft: NFTCardProps, index: number) => (
            <NFTCard
              key={index}
              name={nft.name}
              image={nft.image}
              price={nft.price}
              quantity={nft.quantity}
              timeLeft={nft.timeLeft}
            />
          ))}
        </div>

        <button className="mt-10 block mx-auto text-xl text-nft-light-purple border-2 border-nft-light-purple px-8 py-5 rounded-full">
          More NFTs
        </button>
      </div>
    </section>
  );
};

export default NFTGrid;

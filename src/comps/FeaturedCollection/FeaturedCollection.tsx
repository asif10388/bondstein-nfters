import CollectionCard from "./FeaturedCollectionCard";

const FeaturedCollection = () => {
  return (
    <section className="bg-nft-gray bg-opacity-20">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <h2 className="text-2xl font-bold font-integral mb-10">
          Collection Featured NFTs
        </h2>

        <div className="flex flex-col -m-4 md:flex-row flex-wrap w-full">
          <CollectionCard
            imgURL="/images/nft-4.jpg"
            imgArr={[
              "/images/nft-1.jpg",
              "/images/nft-5.jpg",
              "/images/nft-6.jpg",
            ]}
          />
          <CollectionCard
            imgURL="/images/nft-2.jpg"
            imgArr={[
              "/images/nft-5.jpg",
              "/images/nft-1.jpg",
              "/images/nft-3.jpg",
            ]}
          />
          <CollectionCard
            imgURL="/images/nft-7.jpg"
            imgArr={[
              "/images/nft-8.jpg",
              "/images/nft-9.jpg",
              "/images/nft-1.jpg",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

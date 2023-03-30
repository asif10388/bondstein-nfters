import TopFeaturedCollection from "./TopFeaturedCollection";
import TopCollectionUserCard from "./TopCollectionUserCard";
import TopCollectionUsers from "./TopCollectionStats";

const collectionStats = [
  {
    name: "CryptoFunks",
    eth: "19,769.39",
    percentage: "+26.52%",
    imageURL: "/images/nftpfp-1.jpg",
    profitIncrease: true,
    verified: true,
  },
  {
    name: "Cryptix",
    eth: "2,769.39",
    percentage: "+10.52%",
    imageURL: "/images/nftpfp-2.jpg",
    profitIncrease: false,
    verified: false,
  },
  {
    name: "Frensware",
    eth: "9,232.39",
    percentage: "+2.52%",
    imageURL: "/images/nftpfp-3.jpg",
    profitIncrease: true,
    verified: false,
  },
  {
    name: "PunkArt",
    eth: "3,769.39",
    percentage: "+1.52%",
    imageURL: "/images/nftpfp-4.jpg",
    profitIncrease: true,
    verified: true,
  },
  {
    name: "Art Crypto",
    eth: "10,769.39",
    percentage: "+2.52%",
    imageURL: "/images/nftpfp-5.jpg",
    profitIncrease: false,
    verified: false,
  },
];
const TopCollections = () => {
  return (
    <section>
      <div className="container px-5 py-12 mx-auto">
        <div className="grid auto-rows-max grid-cols-12">
          <div className="row-start-1 col-span-12 lg:col-span-4 mb-6 lg:mb-0">
            <TopFeaturedCollection />
          </div>
          <div className="row-start-2 lg:row-start-1 col-span-12 lg:col-span-5 flex flex-col lg:items-center justify-between lg:border-r border-gray-200">
            <TopCollectionUserCard imgURL="/images/nft-8.jpg" />
            <TopCollectionUserCard imgURL="/images/nft-7.jpg" />
            <TopCollectionUserCard imgURL="/images/nft-9.jpg" />
          </div>

          <div className="row-start-3 lg:row-start-1 col-span-12 lg:col-span-3 flex flex-col justify-between ml-6 mt-4 lg:mt-0">
            <div className="flex flex-col lg:ml-5">
              <h2 className="font-integral sm:text-xl text-2xl font-bold mb-4">
                Top Collections over
              </h2>
              <span className="font-dm-sans text-nft-light-purple font-bold mb-3">
                Last 7 days
              </span>
            </div>
            {collectionStats.map((collection, index) => (
              <TopCollectionUsers
                key={index}
                id={index}
                name={collection.name}
                eth={collection.eth}
                percentage={collection.percentage}
                imgURL={collection.imageURL}
                profitIncrease={collection.profitIncrease}
                verified={collection.verified}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollections;

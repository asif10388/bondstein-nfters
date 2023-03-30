import Image from "next/image";

const FeaturedCollectionCard = ({
  imgURL,
  imgArr,
}: {
  imgURL: string;
  imgArr: string[];
}) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full mb-6 lg:mb-0 ml-3 md:ml-0">
      <div className="flex flex-col lg:flex-row p-2">
        <div className="aspect-square mb-5 lg:mb-0 rounded-lg max-w-full lg:max-w-[348px]">
          <Image
            src={imgURL}
            width={310}
            height={350}
            alt="NFT"
            className="rounded-2xl object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex justify-between lg:flex-col lg:flex-wrap lg:pl-2">
          {imgArr.map((img, i) => (
            <div key={i} className="mr-2 lg:mr-0">
              <Image
                src={img}
                width={100}
                height={100}
                alt="NFT"
                className={`rounded-lg w-36 h-24 object-cover object-center ${
                  i === 2 ? `mb-0` : `mb-2`
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 font-dm-sans">
        <h2 className="text-xl font-bold mb-2">Amazing Collection</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/pfp.jpg"
              height={28}
              width={28}
              alt="PFP"
              className="w-8 h-8 flex-shrink-0 object-cover object-center rounded-full mr-4"
            />

            <h2 className="font-medium">by Arkhan</h2>
          </div>

          <button className="transition-colors ease-in duration-200 hover:bg-nft-blue hover:text-white text-sm border-2 border-nft-blue rounded-full px-3 py-2 text-nft-blue font-bold ">
            Total 54 Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollectionCard;

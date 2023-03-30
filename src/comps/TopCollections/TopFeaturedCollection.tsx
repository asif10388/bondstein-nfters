import Image from "next/image";

const TopFeaturedCollection = () => {
  return (
    <section>
      <div className="font-dm-sans p-4 lg:p-0">
        <div className="w-full lg:h-[550px] mb-5 lg:mb-0 rounded-lg">
          <Image
            src="/images/nft-4.jpg"
            width={500}
            height={500}
            alt="NFT"
            className="rounded-2xl object-cover object-center h-full w-full"
          />
        </div>
        <div className="font-dm-sans h-full flex items-center p-4">
          <Image
            src="/images/pfp.jpg"
            width={100}
            height={100}
            className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            alt="NFT"
          />
          <div className="flex-grow">
            <h2 className="font-medium ml-1">The Futr Abstr</h2>
            <p className="text-gray-500 font-bold">10 in the stock</p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-500 mb-2 ml-1">
              Highest bid
            </span>
            <div className="flex items-center">
              <Image
                src="/images/ethereum-black.svg"
                width={5}
                height={5}
                className="w-5 h-5 object-contain object-center mr-2"
                alt="NFT"
              />
              <p className="text-gray-700 font-bold">0.25 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFeaturedCollection;

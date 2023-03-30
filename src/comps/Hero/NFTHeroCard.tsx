import Image from "next/image";

const NFTHeroCard = ({
  imgURL,
  classNames,
}: {
  imgURL: string;
  classNames?: string;
}) => {
  return (
    <div
      className={`relative font-dm-sans w-80 h-[22rem] p-4 text-white flex flex-col justify-between ${classNames}`}
    >
      <Image
        src={`/images/${imgURL}`}
        height={500}
        width={500}
        alt="NFT"
        className="absolute top-0 left-0 z-[-1] rounded-3xl w-full h-full object-cover object-center"
      />

      <Image
        src="/images/auction.png"
        height={100}
        width={100}
        alt="PFP"
        className="w-32 h-32 flex-shrink-0 object-cover object-center rounded-full absolute top-[38%] left-[-10%] md:left-[-15%] z-50"
      />
      <div>
        <h1 className="sm:text-2xl text-xl font-bold mb-3">
          Abstr Gradient NFT
        </h1>
        <div className="flex items-center">
          <Image
            src="/images/pfp.jpg"
            height={28}
            width={28}
            alt="PFP"
            className="w-8 h-8 flex-shrink-0 object-cover object-center rounded-full mr-4"
          />

          <h2 className="font-medium">Arkhan17</h2>
        </div>
      </div>
      <div
        className={`${
          imgURL === "nft-3.jpg" ? `text-black` : `text-white`
        } p-4 bg-nft-gray bg-opacity-40 backdrop-blur rounded-lg grid grid-cols-2 gap-2`}
      >
        <div className="flex flex-col">
          <span className="text-xs mb-2">Current Bid</span>
          <div className="flex font-bold items-center">
            <Image
              src={`/images/${
                imgURL === "nft-3.jpg"
                  ? `ethereum-black.svg`
                  : `ethereum-white.svg`
              }`}
              width={12}
              height={12}
              alt="Ethereum Logo"
              className="mr-2"
            />
            <span className="text-sm">0.25 ETH</span>
          </div>
        </div>
        <div className={` flex flex-col`}>
          <span className="text-xs mb-2">Ends In</span>
          <span className="text-sm">
            <span className="font-bold">12</span>
            <span className="font-normal">h</span>
            <span className="ml-2 font-bold">43</span>
            <span className="font-normal">m</span>
            <span className="ml-2 font-bold">42</span>
            <span className="font-normal">s</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NFTHeroCard;

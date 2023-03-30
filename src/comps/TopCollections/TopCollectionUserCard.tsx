import Image from "next/image";
import Button from "../Shared/Button";

const TopCollectionUserCard = ({ imgURL }: { imgURL: string }) => {
  return (
    <div className="px-4 font-averta mb-4 lg:mb-0">
      <div className="h-full flex sm:flex-row flex-col sm:justify-start justify-center">
        <Image
          src={imgURL}
          width={500}
          height={500}
          alt="NFT"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
        />
        <div className="flex-grow sm:pl-4">
          <h2 className="font-dm-sans font-medium text-lg mb-3">
            The Futr Abstr
          </h2>
          <div className="flex items-center">
            <Image
              src="/images/pfp.jpg"
              width={100}
              height={100}
              className="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              alt="NFT"
            />

            <div></div>
            <button className="flex items-center border-2 border-green-500 px-3 py-1 rounded">
              <Image
                src="/images/ethereum.svg"
                width={16}
                height={16}
                className="w-4 h-4 object-contain object-center flex-shrink-0 mr-2"
                alt="NFT"
              />
              <span className="text-sm text-green-500">0.25 ETH</span>
            </button>
            <span className="text-gray-400 ml-3">1 of 8</span>
          </div>
          <Button primary classNames="mt-3">
            Place a bid
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionUserCard;

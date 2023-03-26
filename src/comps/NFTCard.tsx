import Image from "next/image";

interface NFTCardProps {
  name: string;
  image: string;
  price: number;
  quantity: string;
  timeLeft: string;
}

const NFTCard = ({ name, image, price, quantity, timeLeft }: NFTCardProps) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="bg-white w-full p-4 rounded-xl">
        <a className="block relative h-48 rounded-lg overflow-hidden">
          <Image
            priority
            src={image}
            width={380}
            height={260}
            className="object-cover object-center w-full h-full"
            alt="NFT Image"
          />
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <div className="mt-2 pb-4 border-b-2 border-gray-100 flex font-dm-sans justify-between items-center font-medium">
            <div className="flex">
              <Image
                src="/images/ethereum.svg"
                width={12}
                height={12}
                alt="Ethereum Logo"
              />
              <p className="ml-2 text-green-500 text-xs">{price} ETH</p>
            </div>

            <p className="text-xs text-gray-400">{quantity}</p>
          </div>

          <div className="font-dm-sans mt-4 flex justify-between text-nft-light-purple">
            <span className="font-medium text-xs px-3 py-2 bg-gray-100 rounded-full">
              {timeLeft} left
            </span>
            <button>Place a bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;

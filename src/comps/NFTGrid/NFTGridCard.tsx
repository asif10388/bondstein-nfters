import Image from "next/image";

interface NFTCardProps {
  name: string;
  image: string;
  price: number;
  quantity: string;
  timeLeft: string;
}

const pfps = [
  "/images/pfp.jpg",
  "/images/pfp.jpg",
  "/images/pfp.jpg",
  "/images/pfp.jpg",
];

const NFTCard = ({ name, image, price, quantity, timeLeft }: NFTCardProps) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 max-w-xl mb-4 p-4 font-dm-sans">
      <div className="bg-white w-full rounded-2xl p-3">
        <a
          href="#"
          className="block min-w-[20rem] max-w-[20rem] md:min-w-fit h-64 rounded-2xl overflow-hidden"
        >
          <Image
            priority
            src={image}
            width={300}
            height={300}
            className="object-cover object-center w-full h-full"
            alt="NFT Image"
          />
        </a>
        <div className="ml-4 flex -mt-5 z-50">
          {pfps.map((pfp, index) => (
            <Image
              key={index}
              alt="PFP"
              width={100}
              height={100}
              src={pfp}
              className={`transition-all ease-in duration-200 hover:scale-[1.3] w-10 h-10 rounded-full object-cover ${
                index > 0 && `-ml-3`
              }`}
            />
          ))}
        </div>
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

          <div className="mt-4 flex items-center justify-between text-nft-light-purple">
            <span className="font-medium text-xs px-3 py-2 bg-gray-100 rounded-full">
              {timeLeft} left
            </span>
            <button className="font-medium hover:text-white hover:bg-nft-light-purple transition-colors ease-in duration-200 rounded-lg px-3 py-2">
              Place a bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;

import Image from "next/image";

interface ICollectionStatProps {
  id: number;
  name: string;
  eth: string;
  percentage: string;
  imgURL: string;
  profitIncrease?: boolean;
  verified?: boolean;
}
const TopCollectionUsers = ({
  id,
  name,
  eth,
  percentage,
  imgURL,
  profitIncrease,
  verified,
}: ICollectionStatProps) => {
  return (
    <div className="flex flex-col h-full pr-4">
      <div className="relative font-dm-sans h-full flex items-center py-4 border-b border-gray-200">
        <div className={`${id === 0 ? `mr-6` : `mr-4`}`}>
          <span className="font-bold text-3xl">{id + 1}</span>
        </div>
        <div className="relative min-w-[65px] max-w-[65px] min-h-[65px] max-h-[65px] h-full mr-6">
          <Image
            src={imgURL}
            width={500}
            height={500}
            className="w-full h-full bg-gray-100 object-cover object-center flex-shrink-0 rounded-full"
            alt="NFT"
          />
          {verified && (
            <Image
              src="/images/verify.svg"
              width={5}
              height={5}
              className="absolute -top-1 left-10 w-7 h-7 object-contain object-center "
              alt="Verify"
            />
          )}
        </div>
        <div className="flex-grow">
          <h2 className="font-medium ml-1">{name}</h2>
          <div className="flex items-center">
            <Image
              src="/images/ethereum-black.svg"
              width={5}
              height={5}
              className="w-5 h-5 object-contain object-center mr-2"
              alt="NFT"
            />
            <p className="text-gray-600 font-bold">{eth}</p>
          </div>
        </div>

        <div className="ml-4">
          <span
            className={`font-bold ${
              profitIncrease ? `text-green-500` : `text-red-500`
            } `}
          >
            {percentage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopCollectionUsers;

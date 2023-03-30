import Image from "next/image";

const NFTWithPfp = ({
  imgURL,
  classNames,
}: {
  imgURL: string;
  classNames?: string;
}) => {
  return (
    <div className={`relative pb-4 ${classNames}`}>
      <Image
        src={`${imgURL}`}
        height={500}
        width={500}
        alt="NFT"
        className="absolute top-0 left-0 z-[-1] rounded-lg w-full h-full object-cover object-center"
      />
      <Image
        alt="PFP"
        width={100}
        height={100}
        src={"/images/pfp.jpg"}
        className={
          "hover:scale-[1.3] transition-all ease-in duration-200 border-4 border-white absolute bottom-[-10%] -right-8 md:right-[-10%] w-16 h-16 rounded-full object-cover z-50"
        }
      />
    </div>
  );
};

export default NFTWithPfp;

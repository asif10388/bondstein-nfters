import Image from "next/image";

const Features = () => {
  return (
    <section className="bg-nft-gray bg-opacity-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <h2 className="text-2xl font-bold font-integral mt-5">
              The amazing NFT art of the world here
            </h2>
          </div>
          <div className="flex items-start p-4 md:w-1/3 sm:mb-0 mb-6">
            <Image
              priority
              src="/images/card.svg"
              height={28}
              width={28}
              alt="Card-tick"
            />
            <div className="ml-3 font-dm-sans">
              <h2 className="text-xl font-bold">Fast Transaction</h2>
              <p className="text-base mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          <div className="flex items-start p-4 md:w-1/3 sm:mb-0 mb-6">
            <Image
              priority
              src="/images/chart.svg"
              height={28}
              width={28}
              alt="Card-tick"
            />
            <div className="ml-3 font-dm-sans">
              <h2 className="text-xl font-bold">Growth Transaction</h2>
              <p className="text-base mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

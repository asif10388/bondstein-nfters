import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              Discover, and collect Digital Art NFTs
            </h1>
            <div className="leading-relaxed">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </div>
          </div>
          <div>
            <Button tertiary>Explore Now</Button>
          </div>
          <div className="flex">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                98k+
              </h2>
              <p className="leading-relaxed">Artwork</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                12k+
              </h2>
              <p className="leading-relaxed">Auction</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                12k+
              </h2>
              <p className="leading-relaxed">Artist</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://dummyimage.com/600x300"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

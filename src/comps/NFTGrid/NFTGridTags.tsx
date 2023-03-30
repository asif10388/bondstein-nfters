import Image from "next/image";
import { useState } from "react";

const tags = [
  {
    name: "All Categories",
  },
  {
    name: "Art",
  },
  {
    name: "Celebrities",
  },
  {
    name: "Gaming",
  },
  {
    name: "Sport",
  },
  {
    name: "Music",
  },
  {
    name: "Crypto",
  },
];

const NFTGridTags = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between font-dm-sans font-medium mb-5">
      <nav className="flex flex-col lg:flex-row">
        {tags.map((tag, index) => (
          <button
            id={tag.name}
            key={index}
            className={`hover:bg-nft-gray transition-colors ease-in duration-200 bg-nft-gray bg-opacity-40 focus:text-white focus:bg-nft-purple px-5 py-3 rounded-full md:mr-5 inline-block  mb-4 lg:mb-0 whitespace-nowrap`}
          >
            {tag.name}
          </button>
        ))}
      </nav>

      <button className="hover:bg-nft-gray whitespace-nowrap inline-flex justify-center lg:justify-start items-center font-bold text-nft-light-purple bg-nft-gray bg-opacity-40 px-5 py-3 rounded-full transition-colors ease-in duration-200">
        <Image
          src="/images/filter.svg"
          width={16}
          height={16}
          alt="Filter Icon"
          className="mr-2"
        />
        <span>All Filters</span>
      </button>
    </div>
  );
};

export default NFTGridTags;

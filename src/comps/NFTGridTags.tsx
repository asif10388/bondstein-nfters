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
          <a
            href="#"
            key={index}
            className={`${
              index === 0
                ? `bg-nft-blue text-white`
                : `bg-nft-gray bg-opacity-40`
            } px-5 py-3 rounded-full mr-5 inline-block  mb-4 lg:mb-0 whitespace-nowrap`}
          >
            {tag.name}
          </a>
        ))}
      </nav>

      <button className="whitespace-nowrap inline-block font-bold text-nft-light-purple bg-nft-gray bg-opacity-40 px-5 py-3 rounded-full">
        All Filters
      </button>
    </div>
  );
};

export default NFTGridTags;

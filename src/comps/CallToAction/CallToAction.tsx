import Button from "../Shared/Button";
import NFTWithPfp from "./NFTWithPfp";

const CallToAction = () => {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center">
        <div className="lg:w-1/2 w-full mb-10 md:mb-0 grid gap-4 grid-cols-1 md:grid-cols-2 ">
          <NFTWithPfp
            imgURL="/images/nft-2.jpg"
            classNames="min-w-[190px] max-w-[300px] h-[300px]"
          />
          <NFTWithPfp
            imgURL="/images/nft-1.jpg"
            classNames="lg:mt-40 min-w-[190px] max-w-[240px] h-[260px] lg:ml-10 md:-ml-14"
          />
          <NFTWithPfp
            imgURL="/images/nft-3.jpg"
            classNames="lg:-mt-20 lg:row-start-2 w-[190px] h-[210px] lg:mx-auto"
          />
        </div>
        <div className="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-10 lg:mt-0">
          <h1 className="font-integral sm:text-4xl text-3xl mb-4 font-bold">
            CREATE AND
            <br className="hidden lg:inline-block" />
            SELL YOUR NFTS
          </h1>
          <p className="mb-8 leading-relaxed text-gray-500 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <div className="flex justify-center">
            <Button primary>Sign Up Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

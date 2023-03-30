import Button from "../Shared/Button";
import NFTHeroCard from "./NFTHeroCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Hero = () => {
  return (
    <section>
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-col flex-wrap xl:w-1/2 lg:w-2/3 w-full">
          <div className="w-full mb-6">
            <h1 className="font-integral font-medium text-2xl md:text-4xl mb-2 text-center lg:text-left">
              Discover, and collect <br /> Digital Art NFTs
            </h1>
            <div className="p-2 leading-relaxed text-gray-600 w-full lg:w-3/4 text-center lg:text-left">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </div>
          </div>
          <div className="order-last lg:order-none mx-auto lg:mx-0 mb-6 lg:mb-0">
            <Button primary classNames="font-averta text-lg">
              Explore Now
            </Button>
          </div>
          <div className="flex font-integral font-medium justify-center lg:justify-start -mt-6 lg:-mt-0">
            <div className="p-4">
              <h2 className="text-3xl text-gray-900">98k+</h2>
              <p className="leading-relaxed">Artwork</p>
            </div>
            <div className="p-4">
              <h2 className="text-3xl text-gray-900">12k+</h2>
              <p className="leading-relaxed">Auction</p>
            </div>
            <div className="p-4 ml-3">
              <h2 className="text-3xl text-gray-900">12k+</h2>
              <p className="leading-relaxed">Artist</p>
            </div>
          </div>
        </div>
        <div className="-ml-3 md:-ml-0 xl:w-1/2 lg:w-1/3 w-full rounded-lg flex order-first lg:order-none mb-10 lg:mb-0">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            cardsEffect={{
              rotate: false,
              perSlideOffset: 12,
            }}
          >
            <SwiperSlide>
              <NFTHeroCard imgURL="nft-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <NFTHeroCard imgURL="nft-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <NFTHeroCard imgURL="nft-3.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
{
}
export default Hero;

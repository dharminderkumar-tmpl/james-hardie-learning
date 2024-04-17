import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HeroSection() {
  const data = [
    {
      id: 1,
      image: "./images/HomePageBanner.webp",
    },
    {
      id: 2,
      image: "./images/HomePageBanner2.webp",
    },

    {
      id: 3,
      image: "./images/HomePageBanner4.webp",
    },
    {
      id: 4,
      image: "./images/HomePageBanner2.webp",
    },
  ];
  return (
    <div className="">
      <Carousel
        opts={{
          loop: true,
        }}
        className=""
      >
        <CarouselContent className="h-full">
          {data.map((item: any) => (
            <CarouselItem className="relative h-[calc(90vh)]" key={item.id}>
              <img src={item.image} className="object-cover max-[500px]:h-60" />
              <div
                className={`border-2 w-[409px] h-[345px] px-10 pt-[45px] pb-14 bg-white absolute sm:top-1/3 max-md:h-[262px]  sm:absolute max-sm:w-[calc(100%-1.5rem)] max-sm:my-2 max-sm:mx-1 max-sm:p-4 max-sm:justify-center max-sm:flex max-sm:flex-col ${
                  item.id % 2 !== 0 ? "sm:left-32 " : "sm:right-32"
                } `}
              >
                <h1 className="font-bold font-montserrat text-gray-900 text-2xl max-sm:text-xl max-sm:text-center">
                  Hardie™ Architectural Collection
                </h1>

                <p className="font-sans font-normal text-gray-900 text-base leading-6 mt-5 max-sm:text-center">
                  Practical advice, support, and inspiration
                </p>

                <button className="border-2 border-black p-8 mt-5 hover:bg-gray-50 max-sm:p-4 text-center mx-auto">
                  <b className="font-bold font-montserrat text-xl uppercase  leading-[8px] max-sm:text-base">
                    LEARN MORE
                  </b>
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-12 top-1/2 max-sm:hidden">
          <CarouselNext />
        </div>
        <div className="absolute left-12 top-1/2 max-sm:hidden">
          <CarouselPrevious />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;

"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CardSwiper from "@/components/ui/card-swiper";
import KorcomptenzImage from "@/components/korcomptenz-image";

const MediaSlider = ({ data }: { data: MediaSliderSectionType }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  const onThumbClick = (index: number) => {
    api?.scrollTo(index);
  };

  // React.useEffect(() => {
  //   if (!api) {
  //     return
  //   }
  //   api.on("select", () => {
  //     // Do something on select.
  //     console.log(api.selectedScrollSnap())
  //   })
  // }, [api])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Carousel className="w-full " setApi={setApi}>
        <CarouselContent>
          {data?.list?.map((slide, index) => (
            <CarouselItem key={index} className="aspect-video relative">
              <KorcomptenzImage
                src={slide.image || "/placeholder.svg"}
                width={100}
                height={100}
                className="w-full h-full "
              />

              <div className="absolute inset-0 bottom-0 sm:bottom-4 flex items-end justify-center">
                <div className="bg-primary opacity-80 p-8 w-full sm:w-3/4 rounded-md">
                  <h2 className="text-white text-center text-2xl md:text-3xl font-semibold text-balance">
                    {slide.description}
                  </h2>
                </div>
              </div>

              {/* Play icon if needed */}
              {slide?.isVideo && (
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                    <svg
                      className="w-7 h-7 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="-left-5 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
        <CarouselNext
          className="-right-5 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
      </Carousel>
      <div className="relative mt-4">
        <div className="overflow-hidden">
          <div className="flex gap-4">
            <CardSwiper disableAutoSlide>
              {data?.list.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => onThumbClick(index)}
                  className={`flex-[0_0_40%] md:flex-[0_0_22%] min-w-0 rounded-2xl overflow-hidden transition-all duration-200 `}
                >
                  <KorcomptenzImage
                    src={slide.image}
                    width={20}
                    height={20}
                    className="w-full h-full "
                  />
                </button>
              ))}
            </CardSwiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSlider;

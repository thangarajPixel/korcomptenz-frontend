import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";
import KorCareSliderCard from "./Kor-care-slider-card";

const KorCareSlider = ({
  manuelSliderData,
}: {
  manuelSliderData: KorCareSliderType;
}) => {
  return (
    <Carousel
      className="container-md overflow-hidden  py-10"
      data-debug={"page-componets.dark-slider-list"}
    >
      <div className={"flex flex-col gap-4 py-5 "}>
        <div className="col-span-18 lg:col-span-8 flex flex-col gap-10">
          <h2
            className={cn(
              "text-center text text-6xl md:text-7xl font-bold leading-tight text-[#1E293B] mb-5"
            )}
          >
            {manuelSliderData?.title}
          </h2>
        </div>
        <div className={cn("px-5 lg:px-10")}>
          <CarouselContent>
            {manuelSliderData?.list?.map((slide, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  `min-w-3/4  pl-4 pr-1 relative py-4 ,
                  
                   ${
                     index === manuelSliderData?.list?.length - 1
                       ? "mr-[100px]"
                       : ""
                   },
                   ${
                     manuelSliderData?.isPerRowFive
                       ? "md:min-w-[20%] md:max-w-[20%]"
                       : "md:min-w-[25%] md:max-w-[25%]"
                   }`
                )}
              >
                <KorCareSliderCard slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden lg:flex">
            <CarouselPrevious
              className="left-0 top-1/2 size-12 hover:bg-primary hover:text-white "
              variant={"default"}
            />
            <CarouselNext
              className="right-0 top-1/2 hover:bg-primary hover:text-white size-12"
              variant={"default"}
            />
          </div>
          <div className="flex lg:hidden ">
            <CarouselPrevious
              className="left-0 top-1/2 size-8 hover:bg-primary hover:text-white "
              variant={"default"}
            />
            <CarouselNext
              className="right-0 top-1/2 hover:bg-primary hover:text-white size-8"
              variant={"default"}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex lg:hidden w-full justify-center items-center gap-4 mt-8">
        <CarouselPrevious
          className="relative left-0 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
        <CarouselNext
          className="relative left-0 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
      </div> */}
    </Carousel>
  );
};

export default KorCareSlider;

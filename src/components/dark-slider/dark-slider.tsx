"use client";
import React from "react";
import SliderCard from "./_utils/slider-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { cn } from "@/lib/utils";

const DarkSlider = ({
  manuelSliderData,
}: {
  manuelSliderData: DarkSliderType;
}) => {
  const isSwap = manuelSliderData?.isSwap;

  return (
    <Carousel
      className="container-md overflow-hidden"
      data-debug={"page-componets.dark-slider-list"}
    >
      <div
        className={
          !isSwap
            ? "grid grid-cols-1 lg:grid-cols-24 gap-4"
            : "flex flex-col gap-4"
        }
      >
        <div className="col-span-18 lg:col-span-8 flex flex-col gap-5">
          <h5
            className={cn(
              "text-5xl md:text-7xl font-bold leading-tight text-black md:px-5 lg:px-0 mb-5 lg:mb-0",
              isSwap && "text-center"
            )}
          >
            {manuelSliderData?.heading}
          </h5>
          {manuelSliderData?.descripition && (
            <p className="text-left">{manuelSliderData?.descripition}</p>
          )}

          {!isSwap && (
            <div className="hidden lg:flex ms-5 lg:ms-0  items-center gap-4">
              <CarouselPrevious
                className="relative left-0 hover:bg-primary hover:text-white size-12"
                variant={"default"}
              />
              <CarouselNext
                className="relative left-0 hover:bg-primary hover:text-white size-12"
                variant={"default"}
              />
            </div>
          )}
        </div>
        <div
          className={cn(!isSwap ? "col-span-24 lg:col-span-16" : "md:px-10 ")}
        >
          <CarouselContent className="sm:pr-5">
            {manuelSliderData?.slides?.map((slide, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  !isSwap
                    ? `min-w-3/4 w-[20%]  md:min-w-[45%] md:max-w-[45%] pl-4 pr-1 relative ${
                        index === manuelSliderData?.slides?.length - 1
                          ? "lg:mr-25"
                          : ""
                      }`
                    : cn(
                        "md:basis-1/4",

                        manuelSliderData?.isPerRowThree
                          ? "md:basis-1/3"
                          : "lg:basis-1/4"
                      )
                )}
              >
                <SliderCard slide={slide} isSwap={isSwap} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {isSwap && (
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
          )}
        </div>
      </div>
      <div className="flex lg:hidden w-full justify-center items-center gap-4 mt-8">
        <CarouselPrevious
          className="relative left-0 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
        <CarouselNext
          className="relative left-0 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
      </div>
    </Carousel>
  );
};

export default DarkSlider;

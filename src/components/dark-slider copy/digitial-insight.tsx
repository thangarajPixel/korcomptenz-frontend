"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { cn } from "@/lib/utils";
import DigitialSliderCard from "./_utils/slider-card";
import ButtonLink from "../ui/button-link";

const DigitialInsightSlider = ({
  manuelSliderData,
}: {
  manuelSliderData: DigitialInsightType;
}) => {
  return (
    <div
      className={cn(
        "bg-[#f7f8f8] py-12 ",
        manuelSliderData?.noPadding && "-mb-12 md:-mb-24",
      )}
      id="success-stories"
    >
      <Carousel
        className="container-md overflow-hidden "
        autoPlay
        autoPlayDelay={4000}
        data-debug={"page-componets.dark-slider-list"}
      >
        <div className={"flex flex-col gap-4"}>
          <div className="col-span-18 lg:col-span-8 flex flex-col gap-5">
            <h2
              className={cn(
                "text-5xl md:text-7xl font-bold leading-tight text-foreground  lg:px-0 mb-5 lg:mb-0 md:mx-12",
              )}
            >
              {manuelSliderData?.title}
            </h2>

            {/* <div className="hidden lg:flex ms-5 lg:ms-0  items-center gap-4">
            <CarouselPrevious
              className="relative left-0 hover:bg-primary hover:text-white size-12"
              variant={"default"}
            />
            <CarouselNext
              className="relative left-0 hover:bg-primary hover:text-white size-12"
              variant={"default"}
            />
          </div> */}
          </div>
          <div className={cn("col-span-24 lg:col-span-16 md:px-10")}>
            <CarouselContent className="sm:pr-5 ">
              {manuelSliderData?.list?.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className={cn("md:basis-1/3 pl-4 pr-1 relative ")}
                >
                  <DigitialSliderCard slide={slide} />
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
      <div className="flex justify-center">
        {manuelSliderData?.buttonText && (
          <ButtonLink
            link={manuelSliderData?.buttonLink || "#"}
            isTargetNew={manuelSliderData?.isTarget ? true : false}
            buttonProps={{
              variant: "default",
              size: "xl",
              className:
                "bg-primary text-primary-foreground shadow-xs border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary  transition-all duration-300 ease-out",
              arrow: true,
            }}
          >
            {manuelSliderData?.buttonText}
          </ButtonLink>
        )}
      </div>
    </div>
  );
};

export default DigitialInsightSlider;

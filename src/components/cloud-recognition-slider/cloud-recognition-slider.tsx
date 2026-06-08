"use client";

import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { DangerousHtml } from "../ui/dangerous-html";

const CloudRecognitionSlider = ({
  data,
}: {
  data: CloudRecognitionSliderType;
}) => {
  const images = data?.list?.map((item) => item?.image);

  return (
    <div className="container-md px-16">
      <Carousel
        autoPlay
        autoPlayDelay={3000}
        data-debug="component.logo-slider"
        className="[&>*]:rounded-none"
      >
        {data.title && (
          // <h2 className="text-center text-foreground text-5xl font-semibold mb-10">
          //   {data?.title}
          // </h2>
          <DangerousHtml
            className="text-center text-foreground text-5xl font-semibold mb-10"
            html={data?.title}
            as="h2"
          />
        )}
        <CarouselPrevious
          fontSize="size-8"
          className="hidden lg:block absolute -left-10 top-[60%] -translate-y-1/2 z-10 size-10 bg-primary !rounded-full hover:bg-white  text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10"
          variant="default"
        />
        <CarouselNext
          fontSize="size-8"
          className="hidden lg:block absolute -right-10 top-[60%] -translate-y-1/2 z-10 size-10  bg-primary !rounded-full hover:bg-white  text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10"
          variant="default"
        />

        <CarouselContent className="items-center md:justify-between">
          {images?.map((img, index) => (
            <CarouselItem
              key={index}
              className="
              basis-full
            md:basis-1/3
            flex items-center justify-center
            px-4
            "
            >
              <>
                <div className="hidden md:flex items-center justify-center w-full">
                  <KorcomptenzImage
                    src={img}
                    width={img?.width && img?.width < 320 ? img?.width : 320}
                    height={120}
                    className="
  
   
    object-contain
  "
                  />
                </div>
                <div className="flex  md:hidden items-center justify-center -ml-3">
                  <KorcomptenzImage
                    src={img}
                    width={img?.width && img?.width < 250 ? img?.width : 250}
                    height={120}
                    className="
  
   
    object-contain
  "
                  />
                </div>
              </>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex lg:hidden w-full justify-center items-center gap-4 ">
          <CarouselPrevious
            className="relative left-0 top-10 hover:bg-primary hover:text-white size-12"
            variant={"default"}
          />
          <CarouselNext
            className="relative left-0  top-10 hover:bg-primary hover:text-white size-12"
            variant={"default"}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CloudRecognitionSlider;

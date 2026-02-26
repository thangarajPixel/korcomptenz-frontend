"use client";

import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface AchievementSectionProps {
  data: AchievementsType;
}

const LogoSlider: React.FC<AchievementSectionProps> = ({ data }) => {
  if (!data || !data.logo?.length) return null;

  const images = data.logo.map((item) => item.image);

  return (
    <Carousel
      className="container-md"
      autoPlay
      autoPlayDelay={3000}
      data-debug="component.logo-slider"
    >
      {data.title && (
        <h2 className="text-center text-foreground text-5xl font-semibold mb-10">
          {data.title}
        </h2>
      )}

      <CarouselContent className="items-center ml-3">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="
              basis-auto
              flex items-center justify-center
              px-2
            "
          >
            <div className="flex items-center justify-center">
              <KorcomptenzImage
                src={img}
                width={img?.width && img?.width < 260 ? img?.width : 260}
                height={120}
                className="
    w-auto
   
    object-contain
  "
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoSlider;

"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import KorcomptenzImage from "../korcomptenz-image";
import { useMobile } from "@/utils/custom-hooks";
import CardSwiper from "../ui/card-swiper";
import { APP_CONFIG } from "@/utils/app-config";

export default function SlidingSection({
  slides,
}: {
  slides: SlidingSectionType[];
}) {
  const isMobile = useMobile();
  

  return (
    <CardSwiper>
      {slides.map((slide) => (
        <div
          key={`sliding-section-${slide.id}`}
          className="embla__custom_slide"
        >
          <div
            className="relative w-full md:h-auto h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)]"
            // style={{
            //   background: `url(${isMobile ? slide.mobileImage : slide.image || "/placeholder.svg"})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   objectFit: "cover"
            // }}
          >
            <KorcomptenzImage
              src={
                isMobile
                  ? APP_CONFIG.APP_URL_IMAGE + slide.mobile_image?.url
                  : APP_CONFIG.APP_URL_IMAGE + slide.image?.url ||
                    "/placeholder.svg"
              }
              alt={slide?.image?.alternativeText}
              width={1000}
              height={1000}
              priority={true}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  flex items-start mt-12 md:mt-0 md:items-center">
              <div className="container-md">
                <div className="max-w-2xl text-white">
                  <div
                    className={`whitespace-pre-wrap font-bold mb-4 leading-tight text-balance ${
                      slide.subtitle
                        ? "text-4xl md:text-9xl"
                        : "text-lg md:text-7xl font-medium"
                    }`}
                  >
                    {slide.subtitle || slide.subtitle2}
                  </div>

                  <h2 className="text-6xl md:text-7xl whitespace-pre-wrap font-semibold mb-4 leading-tight text-balance">
                    {slide.title}
                  </h2>
                  {!slide.description && <div className="h-0 md:h-16 " />}
                  <p className="text-3xl md:text-5xl mb-8 leading-tight  text-pretty">
                    {slide.description}
                  </p>
                  <Button
                    size="xl"
                    variant="white"
                    className="hover:bg-transparent text-md md:text-lg hover:text-primary border hover:border-primary"
                    arrow={true}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CardSwiper>
  );
}

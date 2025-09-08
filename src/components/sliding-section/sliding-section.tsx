"use client";

import React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import { jsonData } from "@/utils/helper";
import KorcomptenzImage from "../korcomptenz-image";
import { useMobile } from "@/utils/custom-hooks";

export default function SlidingSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const isMobile = useMobile();
  const [_, setSelectedIndex] = React.useState(0);

  const onInit = React.useCallback((emblaApi?: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0);
  }, []);

  const onSelect = React.useCallback((emblaApi?: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0);
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect();
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const autoSlide = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => clearInterval(autoSlide);
  }, [emblaApi]);
  // container-lg p-0 
  return (
    <section className="w-full rounded-none">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {jsonData.slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full md:h-auto h-[calc(100vh-100px)] lg:h-auto">
                  <KorcomptenzImage
                    src={isMobile ? slide.mobileImage : slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    width={1000}
                    height={1000}
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  flex items-start mt-12 md:mt-0 md:items-center">
                    <div className="container-md">
                      <div className="max-w-2xl text-white">
                        <div
                          className={`whitespace-pre-wrap font-bold mb-4 leading-tight text-balance ${slide.subtitle ? "text-lg md:text-5xl" : "text-sm md:text-3xl font-medium"
                            }`}
                        >
                          {slide.subtitle || slide.subtitle2}
                        </div>


                        <h2 className="text-2xl md:text-4xl whitespace-pre-wrap font-semibold mb-4 leading-tight text-balance">
                          {slide.title}
                        </h2>
                        {!slide.description && <div className="h-0 md:h-16 " />}
                        <p className="text-lg md:text-xl mb-8 leading-tight  text-pretty">
                          {slide.description}
                        </p>
                        <Button
                          size="xl"
                          variant="white"
                          className="hover:bg-transparent text-xs md:text-sm hover:text-primary border hover:border-primary"
                          arrow={true}
                        >
                          {slide.buttonText}
                        </Button>
                      </div>
                    </div >
                  </div >
                </div >
              </div >
            ))
            }
          </div >
        </div >
      </div >
    </section >
  );
}

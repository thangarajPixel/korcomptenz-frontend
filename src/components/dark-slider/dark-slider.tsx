"use client";
import React from "react";

import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import SliderCard from "./_utils/slider-card";

const DarkSlider = ({ manuelSliderData }: { manuelSliderData: DarkSliderType }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(true);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="container-md overflow-hidden" data-debug={"page-componets.dark-slider-list"}>
      <div className="grid grid-cols-1 lg:grid-cols-24 gap-4">
        <div className="col-span-18 lg:col-span-8 flex flex-col gap-10">

          <h1 className="text-6xl md:text-9xl font-bold leading-tight text-black px-5 lg:px-0 mb-5 lg:mb-0">
            {manuelSliderData.heading}
          </h1>


          <div className="hidden lg:flex  items-center gap-4">
            <Button
              size="icon"
              className={`rounded-full size-14 hover:bg-primary hover:text-white  ${!prevBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button
              size="icon"
              className={`rounded-full size-14 hover:bg-primary hover:text-white ${!nextBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        <section className="col-span-24 lg:col-span-16">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex flex-row gap-6">
              {manuelSliderData.slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`min-w-3/4 md:min-w-[45%] md:max-w-[45%] pl-4 pr-1 relative ${index === manuelSliderData.slides.length - 1
                    ? "mr-[100px]"
                    : ""
                    }`}
                >
                  <SliderCard slide={slide} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DarkSlider;

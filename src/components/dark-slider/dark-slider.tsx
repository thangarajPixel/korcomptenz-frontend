"use client";
import React from "react";

import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import SliderCard from "./_utils/slider-card";

const manuelSliderData = {
  heading:
    "Our services ensure that you have a connected and efficient ecosystem",
  slides: [
    {
      id: 1,
      image: "/assets/services/slider1.png",
      alt: "ai image",
      title: "Ai",
      description:
        "You need to predict demand, reduce downtime, and make faster decisions. Our AI solutions bring advanced insights to optimize production, automate processes, and improve quality to drive greater efficiency, lower costs, and smarter operations.",
    },
    {
      id: 2,
      image: "/assets/services/slider2.png",
      alt: "cloud image",
      title: "Cloud",
      description:
        "Scaling operations and accessing data anywhere is critical for your business. We help you move to the cloud securely and seamlessly, enabling faster collaboration and real-time visibility, empowering you with higher agility, resilience, and a future-ready infrastructure.",
    },
    {
      id: 3,
      image: "/assets/services/slider1.png",
      alt: "cybersecurity image",
      title: "Cybersecurity",
      description:
        "In today's digital landscape, protecting your data and systems is paramount. Our cybersecurity services safeguard your business from threats, ensuring compliance and building trust with your customers through robust security measures.",
    },
    {
      id: 4,
      image: "/assets/services/slider1.png",
      alt: "data analytics image",
      title: "Data Analytics",
      description:
        "In today's digital landscape, protecting your data and systems is paramount. Our cybersecurity services safeguard your business from threats, ensuring compliance and building trust with your customers through robust security measures.",
    },
  ],
};

const DarkSlider = () => {
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
    <div className="container-md my-20 overflow-hidden ">
      <div className="grid grid-cols-1 lg:grid-cols-24 gap-4">
        <div className="col-span-18 lg:col-span-8 flex flex-col gap-10">
       
            <h1 className="text-2xl md:text-5xl font-bold leading-tight text-[#000000] px-5 lg:px-0 mb-5 lg:mb-0">
              {manuelSliderData.heading}
            </h1>
        

          <div className="hidden lg:flex  items-center gap-4">
            <Button
              size="icon"
              className={`rounded-full h-14 w-14 ${
                !prevBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-20 h-20" />
            </Button>
            <Button
              size="icon"
              className={`rounded-full h-14 w-14 ${
                !nextBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight height={20} width={20} />
            </Button>
          </div>
        </div>

        <section className="col-span-24 lg:col-span-16">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex flex-row gap-6">
              {manuelSliderData.slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`min-w-3/4 md:min-w-[45%] md:max-w-[45%] pl-4 pr-1 relative ${
                    index === manuelSliderData.slides.length - 1
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
    </div>
  );
};

export default DarkSlider;

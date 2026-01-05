"use client";

import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";
import Link from "next/link";

const LightSlider = ({ data }: { data: LightSliderType }) => {
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
    <section
      className="container-md"
      data-debug={"page-componets.light-slider-list"}
    >
      <div className=" mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-12">
          <div className="grid gap-3">
            <h2 className="text-6xl md:text-9xl font-semibold text-foreground leading-tight max-w-2xl">
              {data?.title}
            </h2>

            <h2 className="text-custom-gray-9 text-md md:text-lg leading-relaxed">
              {data?.description}
            </h2>
          </div>

          {/* Navigation Arrows */}
          {data?.list?.length > 1 && (
            <div className="hidden lg:flex items-center gap-4 mt-4">
              <Button
                size="icon"
                className={`rounded-full size-12  hover:bg-primary hover:text-white  ${
                  !prevBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="size-6" />
              </Button>
              <Button
                size="icon"
                className={`rounded-full size-12  hover:bg-primary hover:text-white ${
                  !nextBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="size-6" />
              </Button>
            </div>
          )}
        </div>

        {/* Solutions Content */}
        <div className="grid lg:grid-cols-2 gap-9 items-start">
          {/* Left: Business Meeting Image */}
          <div className="rounded-3xl overflow-hidden">
            <KorcomptenzImage
              src={data?.image}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Solutions List */}

          <div ref={emblaRef} className=" overflow-hidden">
            <div className="flex flex-row gap-4">
              {data?.list?.map((slide, index) => (
                <div
                  key={`slide-${slide?.id}`}
                  className={`min-w-full pl-4 pr-1 relative ${
                    index === data?.list?.length - 1 ? "mr-[0px]" : ""
                  }`}
                >
                  <div className="space-y-4">
                    {slide?.solutions?.map((solution, solutionIndex) => (
                      <div
                        key={`solution-${solution?.id}`}
                        className="space-y-2"
                      >
                        <h3 className="text-4xl mg:text-5xl font-semibold text-foreground">
                          {solution?.title}
                        </h3>
                        <DangerousHtml
                          html={solution?.description}
                          className="text-custom-gray-9 text-md md:text-lg leading-relaxed"
                        />

                        {solution?.buttonText && (
                          <Link href={solution?.link || "#"}>
                            <button className="inline-flex items-center gap-2 text-primary hover:text-primary hover:opacity-40 font-medium transition-colors">
                              {solution?.buttonText}
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </Link>
                        )}
                        {solutionIndex < slide?.solutions?.length - 1 && (
                          <hr className="border-gray-200 mt-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightSlider;

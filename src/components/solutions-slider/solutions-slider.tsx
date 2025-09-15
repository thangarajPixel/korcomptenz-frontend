"use client";

import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const solutionsData = {
  title: " Solutions that elevate outcomes for your business",
  image: "/assets/services/solutionimage.png",
  alt: "Solutions Image",

  slideContent: [
    {
      id: 1,
      solutions: [
        {
          title: "SAP IBP",
          description:
            "Optimize your supply chain with SAP Integrated Business Planning to get real-time insights and advanced tools for better forecasting and inventory management.",
        },
        {
          title: "SAP Merger and Divestiture",
          description:
            "Streamline M&A and spin-off processes by automating data separation, regulatory compliance, and integration to reduce risk.",
        },
        {
          title: "Joule AI",
          description:
            "Harness generative AI to empower users with instant contextual insights, natural-language queries, and smart recommendations directly within SAP.",
        },
      ],
    },
    {
      id: 2,
      solutions: [
        {
          title: "Business Suite on Public Cloud",
          description:
            "Run your SAP applications on a shared cloud environment for rapid rollout, enhanced scalability, and lower infrastructure costs with minimal IT overhead.",
        },
        {
          title: "Business Suite on Private Cloud",
          description:
            "Use a dedicated cloud environment for speed and flexibility, while ensuring tighter control and enhanced security.",
        },
        {
          title: "BTP Platform",
          description:
            "Integrate, innovate, and extend applications with comprehensive data management, analytics, AI capabilities, and cloud services for business agility and efficiency.",
        },
      ],
    },
  ],
};

const SolutionsSlider = () => {
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
    <div className="container-md py-10">
      {/* Solutions Carousel Section */}
      <section >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-12">
            <h2 className="text-2xl md:text-5xl font-semibold text-foreground leading-tight max-w-2xl">
              {solutionsData.title}
            </h2>

            {/* Navigation Arrows */}
            <div className="hidden lg:flex items-center gap-4 mt-4">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className={`w-12 h-12 rounded-full ${
                  !prevBtnEnabled
                    ? "bg-primary opacity-45"
                    : "bg-primary hover:bg-primary"
                } transition-colors flex items-center justify-center text-white`}
                aria-label="Previous solutions"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className={`w-12 h-12 rounded-full ${
                  !nextBtnEnabled
                    ? "bg-primary opacity-45"
                    : "bg-primary hover:bg-primary"
                } transition-colors flex items-center justify-center text-white`}
                aria-label="Next solutions"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Solutions Content */}
          <div className="grid lg:grid-cols-2 gap-9 items-start">
            {/* Left: Business Meeting Image */}
            <div className="rounded-3xl overflow-hidden">
              <KorcomptenzImage
                src={solutionsData.image}
                alt={solutionsData.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right: Solutions List */}

            <div ref={emblaRef} className=" overflow-hidden">
              <div className="flex flex-row gap-4">
                {solutionsData.slideContent.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`min-w-full pl-4 pr-1 relative ${
                      index === solutionsData.slideContent.length - 1
                        ? "mr-[0px]"
                        : ""
                    }`}
                  >
                    <div className="space-y-4">
                      {slide.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="space-y-2">
                          <h3 className="text-lg mg:text-xl font-semibold text-foreground">
                            {solution.title}
                          </h3>
                          <p className="text-[#363636] text-xs md:text-sm leading-relaxed">
                            {solution.description}
                          </p>
                          <button className="inline-flex items-center gap-2 text-primary hover:text-primary hover:opacity-40 font-medium transition-colors">
                            Learn more
                            <ChevronRight className="w-4 h-4" />
                          </button>
                          {solutionIndex < slide.solutions.length - 1 && (
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
    </div>
  );
};

export default SolutionsSlider;

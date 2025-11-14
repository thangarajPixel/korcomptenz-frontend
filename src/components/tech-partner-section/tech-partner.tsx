import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import CardSwiper from "../ui/card-swiper";
import TechCard from "./_utils/tech-card";
import { Button } from "../ui/button";

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const TechPartner = ({ techData }: { techData: TechPartnerSectionType }) => {
  if (!techData) return null;

  const { heading, techslides = [], image, mobileimage, alt } = techData;
  const slidesInPairs = chunkArray(techslides, 2);

  return (
    <section
      data-debug="page-componets.tech-data"
      className="container-md my-10"
    >
      <div className="bg-secondary rounded-none lg:rounded-4xl grid grid-cols-12">
        {/* Content */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4 p-8 lg:pr-20">
          {/* Heading */}
          <div className="lg:pr-20">
            <h1 className="text-6xl md:text-9xl border-b-4 border-custom-white-1 leading-10 lg:leading-16 pb-8 font-semibold text-background">
              {heading}
            </h1>
          </div>

          {/* Desktop Swiper */}
          <div className="hidden lg:block">
            <CardSwiper disableAutoSlide>
              {slidesInPairs?.map((pair, index) => (
                <div
                  key={`tech-card-${index}`}
                  className="embla__slide flex-none w-full flex flex-col lg:flex-row gap-6"
                >
                  {pair?.map((slide) => (
                    <TechCard
                      key={`tech-card-${slide?.id}`}
                      data={slide}
                      className="flex-1"
                    />
                  ))}
                </div>
              ))}
            </CardSwiper>
          </div>

          {/* Mobile Swiper */}
          <div className="lg:hidden col-span-12">
            <CardSwiper disableAutoSlide>
              {slidesInPairs?.map((pair, index) => (
                <div
                  key={`tech-card-${index}`}
                  className="embla__slide flex-none w-full flex flex-col gap-6"
                >
                  {pair?.map((slide) => (
                    <div
                      key={`tech-card-${slide?.id}`}
                      className="flex flex-col gap-2"
                    >
                      <h1 className="text-2xl font-normal text-background">
                        {slide?.title}
                      </h1>
                      <p className="text-sm font-normal text-background">
                        {slide?.description}
                      </p>
                      {slide?.buttonText && (
                        <Button
                          arrow
                          className="bg-secondary text-sm text-white flex justify-start items-center -ms-4"
                        >
                          {slide?.buttonText}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </CardSwiper>
          </div>
        </div>

        {/* Images */}
        <div className="col-span-12 lg:col-span-4 h-full">
          {/* Mobile */}
          <div className="lg:hidden h-full">
            <KorcomptenzImage
              src={mobileimage}
              alt={alt}
              width={500}
              height={500}
              className="object-cover h-full w-full p-8 rounded-4xl"
            />
          </div>
          {/* Desktop */}
          <div className="hidden lg:block h-full">
            <KorcomptenzImage
              src={image}
              alt={alt}
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartner;

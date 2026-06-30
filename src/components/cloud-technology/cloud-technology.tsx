"use client";

import KorcomptenzImage from "../korcomptenz-image";
import ButtonLink from "../ui/button-link";
import { DangerousHtml } from "../ui/dangerous-html";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CloudTechnology = ({ data }: { data: CloudTechnologyType }) => {
  const isSlider = data?.list?.length > 4;

  return (
    <section className="bg-[#EDF6FF] py-8 md:py-12">
      <div className="container-md">
        {/* Heading */}
        <div className="mb-8 md:mb-10">
          {data?.subHeading && (
            <DangerousHtml
              className="inline-flex items-center justify-center text-[12px] md:text-[16px] text-[#151515] border border-[#4C4C4C] rounded-full px-4 py-2 mb-4"
              html={data?.subHeading}
            />
          )}

          {data?.title && (
            <DangerousHtml
              as="h2"
              html={data?.title}
              className="text-[#020202] mb-4"
            />
          )}

          {data?.description && (
            <DangerousHtml
              html={data?.description}
              className="text-[#242424] text-base md:text-lg leading-7"
            />
          )}
        </div>

        {/* ✅ Partner Logos */}
        {isSlider ? (
          <div className="px-8 md:px-10">
            <Carousel autoPlay autoPlayDelay={3000}>
              {/* arrows */}

              <CarouselContent className="items-center">
                {data?.list?.map((partner, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
                  >
                    <ButtonLink
                      link={partner.link}
                      isTargetNew={partner.isTargetNew}
                      buttonProps={{
                        arrow: false,
                        className:
                          "p-0 border-0 bg-transparent shadow-none hover:shadow-none",
                      }}
                    >
                      <span
                        className="
                        flex items-center justify-center
                        rounded-full
                        w-full
                        max-w-[200px]
                        min-h-[70px]
                        px-4
                        transition-all duration-300
                        hover:bg-[#E8F5FF]
                        group
                      "
                      >
                        <KorcomptenzImage
                          src={partner?.image}
                          width={200}
                          height={100}
                          className="object-contain"
                        />
                      </span>
                    </ButtonLink>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* mobile arrows */}

              <div className="flex justify-center items-center space-x-6">
                <CarouselPrevious className="size-10" />
                <CarouselNext className="size-10" />
              </div>
            </Carousel>
          </div>
        ) : (
          // ✅ Normal layout
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-8 max-w-5xl">
            {data?.list?.map((partner, index) => (
              <ButtonLink
                key={index}
                link={partner.link}
                isTargetNew={partner.isTargetNew}
                buttonProps={{
                  arrow: false,
                  size: "xl",
                  className:
                    "p-0 border-0 bg-transparent shadow-none hover:shadow-none w-full md:w-auto",
                }}
              >
                <KorcomptenzImage
                  src={partner?.image}
                  width={200}
                  height={100}
                  className="w-[120px] md:w-[160px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CloudTechnology;

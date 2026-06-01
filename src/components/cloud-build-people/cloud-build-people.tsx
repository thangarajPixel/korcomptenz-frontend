"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { DangerousHtml } from "../ui/dangerous-html";
import CloudSliderCard from "./_utils/cloud-build-slider";

const CloudBuildPeople = ({ data }: { data: CloudBuildPeopleType }) => {
  const length = data?.list?.length ?? 0;
  return (
    <section className="container-md ">
      {/* Heading */}
      <div className="">
        {data?.subHeading && (
          <DangerousHtml
            className="inline-flex items-center justify-center text-[16px] md:text-[18px] leading-7.5 font-normal text-[#151515] border-2 border-[#4C4C4C] rounded-full px-4 md:px-6 mb-4 bg-transparent md:pt-3 pt-2"
            html={data?.subHeading}
          />
        )}

        {data?.title && (
          <DangerousHtml
            as="h2"
            html={data?.title}
            className="text-[#020202] mb-1"
          />
        )}

        {data?.description && (
          <DangerousHtml
            html={data?.description}
            className="text-[#242424] text-md md:text-[21px] leading-7 break-words"
          />
        )}
      </div>

      {/* Cards Section */}
      {data?.list?.length > 0 && (
        <Carousel data-debug="page-componets.cloud-built-people">
          <div className="flex flex-col gap-4 md:px-0 mt-6">
            <div className="">
              <CarouselContent firstItemClassName="rounded-none">
                {data.list.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 pr-1 relative md:max-w-[33%] rounded-none"
                  >
                    <CloudSliderCard item={item} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Desktop arrows */}
              {length > 0 && (
                <div className="hidden lg:flex">
                  <CarouselPrevious
                    fontSize="size-8"
                    className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-primary !rounded-full hover:bg-white text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10"
                  />
                  <CarouselNext
                    fontSize="size-8"
                    className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-primary !rounded-full hover:bg-white text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Mobile arrows */}
          {length > 0 && (
            <div className="flex lg:hidden w-full justify-center items-center gap-4 mt-8">
              <CarouselPrevious
                className="relative left-0 hover:bg-primary hover:text-white size-12"
                variant="default"
              />
              <CarouselNext
                className="relative left-0 hover:bg-primary hover:text-white size-12"
                variant="default"
              />
            </div>
          )}
        </Carousel>
      )}
    </section>
  );
};

export default CloudBuildPeople;

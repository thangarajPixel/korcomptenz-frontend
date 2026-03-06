"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { GlobalForm } from "@/components/global-form";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function ContactUsForm({
  data,
}: {
  data: ContactUsFormSectionType;
}) {
  return (
    <section
      data-debug="contact-us.contact-us-form-section"
      className="relative w-full min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${data?.backgroundImage?.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container-md py-12 lg:py-16">
        <h5 className="text-white mb-10 text-[36px] md:text-[50px] font-semibold  leading-11 md:leading-13.75">
          {data?.title}
        </h5>

        {/* MAIN GRID — stats | divider | form */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* LEFT SIDE – STATS (30%) */}
          <div className="flex flex-col justify-start gap-10 lg:w-[30%] pr-0 lg:pr-8">
            {data?.listLeft?.map((partner, index) => (
              <div key={index} className="text-white">
                <p className="text-[50px] md:text-[80px] leading-10 md:leading-15 font-bold mb-1">
                  {partner?.title}
                </p>
                <DangerousHtml
                  html={partner?.description}
                  className="text-base md:text-lg leading-[1.6] text-white"
                />
              </div>
            ))}
          </div>

          {/* VERTICAL WHITE DIVIDER */}
          <div className="hidden lg:block w-0.75 bg-white self-stretch mx-8 flex-shrink-0" />

          {/* RIGHT SIDE – FORM CARD (70%) */}
          <div className="flex justify-end items-end lg:w-[60%] ml-auto mt-6 md:mt-0">
            <div
              className="
                w-full bg-transparent md:bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-10"
            >
              <GlobalForm form={data?.form} />
            </div>
          </div>
        </div>

        {/* LOGO STRIP */}
        {/* MOBILE ONLY */}
        <div className="mt-14 md:hidden">
          <div className="mt-14 md:hidden">
            <Carousel
              className="relative w-full overflow-visible [&>*]:rounded-none"
              autoPlay
              autoPlayDelay={3000}
              opts={{ align: "start" }}
            >
              <CarouselContent className="-ml-2">
                {data.images.slice(0, 6).map((partner) => (
                  <CarouselItem
                    key={partner.id}
                    className="basis-1/2 pl-2 min-w-0"
                  >
                    <div className="bg-white rounded-lg flex items-center justify-center h-20 w-full">
                      <KorcomptenzImage
                        src={partner.image}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex lg:hidden w-full justify-center items-center gap-4 ">
                <CarouselPrevious
                  className="relative left-0 top-10 hover:bg-primary hover:text-white size-12"
                  variant={"default"}
                />
                <CarouselNext
                  className="relative left-0  top-10 hover:bg-primary hover:text-white size-12"
                  variant={"default"}
                />
              </div>
            </Carousel>
          </div>
        </div>

        {/* DESKTOP & TABLET */}
        <div className="mt-14 hidden md:block px-12">
          <Carousel
            className="w-full [&>*]:rounded-none "
            autoPlay
            autoPlayDelay={3000}
          >
            <CarouselPrevious
              fontSize="size-8"
              className={cn(
                "hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-primary !rounded-full hover:bg-white  text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10 ",
              )}
            />
            <CarouselNext
              fontSize="size-8"
              className={cn(
                "hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-primary !rounded-full hover:bg-white  text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10 ",
              )}
            />
            <CarouselContent className="items-center">
              {data.images.slice(0, 6).map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="md:basis-1/4 lg:basis-1/5 px-3 ml-2"
                >
                  <div className="bg-white rounded-lg flex items-center justify-center h-26">
                    <KorcomptenzImage
                      src={partner.image}
                      width={120}
                      height={65}
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

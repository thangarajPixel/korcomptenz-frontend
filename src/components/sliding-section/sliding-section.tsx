"use client";

import { Button } from "@/components/ui/button";

import KorcomptenzImage from "../korcomptenz-image";
import { useMobile } from "@/utils/custom-hooks";

import Link from "next/link";
import CardSwiperArrowWhite from "./_utils/card-swiper-arrow";

export default function SlidingSection({
  slides,
}: {
  slides: SlidingSectionType[];
}) {
  const isMobile = useMobile();

  return (
    <CardSwiperArrowWhite data-debug={"home.hero-section-one"}>
      {slides?.map((slide, index) => (
        <div
          key={`sliding-section-${slide?.id}`}
          className="embla__custom_slide"
        >
          <div
            className="relative w-full md:h-auto h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)]"
            // style={{
            //   background: `url(${isMobile ? slide.mobileImage : slide.image || "/assets/placeholder.png"})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   objectFit: "cover"
            // }}
          >
            {slide?.design === "video" && (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={slide?.video?.url}
                autoPlay
                loop
                muted
                playsInline
              />
            )}

            {slide?.design === "image" && (
              <KorcomptenzImage
                src={isMobile ? slide?.mobile_image : slide?.image}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            )}
            {slide?.design === "bgcolor" && (
              <div className="relative w-full h-full">
                {/* Background Image */}
                <KorcomptenzImage
                  src={slide?.backgroundImage}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />

                {/* Overlay / Banner Image */}
                <div className="absolute top-24 right-32 w-[300px] h-[300px]">
                  <KorcomptenzImage
                    src={slide?.bannerImage}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}

            <div className="absolute inset-0  flex items-start mt-12 md:mt-0 md:items-center">
              <div className="container-md">
                <div className="max-w-2xl text-white ml-12">
                  {/* {slide?.logo && (
                    <KorcomptenzImage
                      src={slide?.logo}
                      width={300}
                      height={300}
                      className="w-[300px] h-[300px] object-contain"
                    />
                  )} */}
                  <div
                    className={`whitespace-pre-wrap font-bold mb-4 leading-tight text-balance ${
                      slide?.subtitle
                        ? "text-4xl md:text-9xl"
                        : "text-lg md:text-7xl font-medium"
                    }`}
                  >
                    {slide?.subtitle || slide?.subtitle2}
                  </div>
                  {slide?.logo && (
                    <KorcomptenzImage
                      src={slide?.logo}
                      width={350}
                      height={350}
                      className=" object-contain bg-white rounded-xl mb-2"
                    />
                  )}
                  {index === 0 ? (
                    <h1 className="text-6xl md:text-7xl  font-semibold mb-4 leading-tight ">
                      {slide?.title}
                    </h1>
                  ) : (
                    <h1 className="text-6xl md:text-7xl  font-semibold mb-4 leading-tight ">
                      {slide?.title}
                    </h1>
                  )}
                  {!slide?.description && <div className="h-0 md:h-16 " />}
                  <p className="text-3xl md:text-5xl mb-8 leading-tight  text-pretty">
                    {slide?.description}
                  </p>
                  {slide?.buttonText && (
                    <Link href={slide?.link || "#"}>
                      <Button
                        size="xl"
                        variant="white"
                        className="hover:bg-transparent text-md md:text-lg hover:text-primary border hover:border-primary"
                        arrow={true}
                      >
                        {slide?.buttonText}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CardSwiperArrowWhite>
  );
}

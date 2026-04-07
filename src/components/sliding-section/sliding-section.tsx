"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import KorcomptenzImage from "../korcomptenz-image";
import Link from "next/link";
import CardSwiperArrowWhite from "./_utils/card-swiper-arrow";
import { DangerousHtml } from "../ui/dangerous-html";

export default function SlidingSection({
  slides,
}: {
  slides: SlidingSectionType[];
}) {
  return (
    <CardSwiperArrowWhite data-debug={"home.hero-section-one"}>
      {slides?.map((slide, index) => (
        <div
          key={`sliding-section-${slide?.id}`}
          className="embla__custom_slide"
        >
          <div className="relative w-full md:h-auto h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)]">

            {slide?.design === "video" && (
              <>
                {/* Mobile video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover block lg:hidden"
                  src={slide?.mobileVideo?.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={index === 0 ? "auto" : "none"}
                />
                {/* Desktop video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover hidden lg:block"
                  src={slide?.video?.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={index === 0 ? "auto" : "none"}
                />
              </>
            )}

            {slide?.design === "image" && (() => {
              const mobileUrl = (slide?.mobile_image as ImageType)?.url ?? (slide?.mobile_image as string) ?? "";
              const desktopUrl = (slide?.image as ImageType)?.url ?? (slide?.image as string) ?? "";
              const mobileAlt = (slide?.mobile_image as ImageType)?.alternativeText ?? "";
              const desktopAlt = (slide?.image as ImageType)?.alternativeText ?? "";
              return (
                <>
                  {/* Mobile image — shown on small screens */}
                  {mobileUrl && (
                    <Image
                      src={mobileUrl}
                      alt={mobileAlt}
                      fill
                      sizes="100vw"
                      className="object-cover block lg:hidden"
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      placeholder="empty"
                    />
                  )}
                  {/* Desktop image — shown on large screens */}
                  {desktopUrl && (
                    <Image
                      src={desktopUrl}
                      alt={desktopAlt}
                      fill
                      sizes="100vw"
                      className="object-cover hidden lg:block"
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      placeholder="empty"
                    />
                  )}
                </>
              );
            })()}

            {slide?.design === "bgcolor" && (() => {
              const bgUrl = (slide?.backgroundImage as ImageType)?.url ?? (slide?.backgroundImage as string) ?? "";
              const bgAlt = (slide?.backgroundImage as ImageType)?.alternativeText ?? "";
              const bannerUrl = (slide?.bannerImage as ImageType)?.url ?? (slide?.bannerImage as string) ?? "";
              const bannerAlt = (slide?.bannerImage as ImageType)?.alternativeText ?? "";
              return (
                <div className="relative w-full h-full">
                  {bgUrl && (
                    <Image
                      src={bgUrl}
                      alt={bgAlt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      placeholder="empty"
                    />
                  )}
                  {bannerUrl && (
                    <div className="absolute top-24 right-32 w-[300px] h-[300px]">
                      <Image
                        src={bannerUrl}
                        alt={bannerAlt}
                        width={300}
                        height={300}
                        sizes="300px"
                        className="w-full h-full object-contain"
                        priority={index === 0}
                        placeholder="empty"
                      />
                    </div>
                  )}
                </div>
              );
            })()}

            <div className="absolute inset-0 flex items-start mt-12 md:mt-0 md:items-center">
              <div className="container-md">
                <div className="max-w-2xl text-white ml-12">
                  <div
                    className={`whitespace-pre-wrap font-bold mb-4 leading-tight text-balance ${slide?.subtitle
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
                      className="object-contain bg-white rounded-xl mb-2"
                      placeholder="empty"
                    />
                  )}
                  <h1 className="text-6xl md:text-7xl font-semibold mb-4 leading-tight">
                    {slide?.title}
                  </h1>
                  {!slide?.description && <div className="h-0 md:h-16" />}
                  <DangerousHtml
                    html={slide?.description}
                    className="text-3xl md:text-5xl mb-8 leading-tight text-pretty"
                  />
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

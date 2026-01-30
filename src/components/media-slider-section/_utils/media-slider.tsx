"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import KorcomptenzImage from "@/components/korcomptenz-image";
import type { CarouselApi } from "@/components/ui/carousel";

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function isVimeo(url: string) {
  return url.includes("vimeo.com");
}

function getVideoEmbed(url: string) {
  if (isYouTube(url)) {
    const id = url.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }

  if (isVimeo(url)) {
    const id = url.split("/").pop();
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }

  return url;
}

const MediaSlider = ({ data }: { data: MediaSliderSectionType }) => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /** Disable scroll + zoom when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [open]);

  /** Track active slide */
  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      {/* ================= THUMB GRID ================= */}
      <div className="container-md ">
        <div className="grid grid-cols-3 gap-4">
          {data?.list?.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => {
                setStartIndex(i);
                setActiveIndex(i);
                setOpen(true);
              }}
              className="relative aspect-video overflow-hidden rounded-xl"
            >
              <KorcomptenzImage
                src={slide.image}
                width={400}
                height={225}
                priority={i < 6}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================= FULLSCREEN OVERLAY ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90">
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-6 text-white text-4xl z-50"
          >
            ✕
          </button>

          <Carousel
            opts={{ startIndex }}
            className="h-screen w-screen"
            setApi={setApi}
          >
            <CarouselContent>
              {data?.list?.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <CarouselItem
                    key={index}
                    className="flex flex-col items-center justify-center h-screen w-screen gap-6"
                  >
                    {/* ===== IMAGE ===== */}
                    {!slide.isVideo && (
                      <KorcomptenzImage
                        src={slide.image}
                        width={1920}
                        height={1080}
                        priority={isActive}
                        className="max-h-[80vh] max-w-[90%] object-contain select-none pointer-events-none"
                      />
                    )}

                    {/* ===== VIDEO (ONLY ACTIVE SLIDE) ===== */}
                    {slide.isVideo && slide.videoLink && isActive && (
                      <div className="w-[90%] h-[80vh] flex items-center justify-center">
                        {isYouTube(slide.videoLink) ||
                        isVimeo(slide.videoLink) ? (
                          <iframe
                            src={getVideoEmbed(slide.videoLink)}
                            className="w-full h-full"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            src={slide.videoLink}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                    )}
                    {/* {slide?.description && (
                      <div className="absolute bottom-4 inset-x-0 flex justify-center">
                       
                        <div className="bg-primary/80 p-6 rounded-md max-w-4xl">
                      
                          <h3 className="text-white text-center text-xl md:text-2xl font-semibold">
                         
                            {slide.description}{" "}
                          </h3>{" "}
                        </div>{" "}
                      </div>
                    )} */}

                    {/* ===== DESCRIPTION (BELOW MEDIA) ===== */}
                    {slide.description && (
                      <div className="bg-primary p-6 rounded-md max-w-4xl">
                        <h3 className="text-white text-center text-xl md:text-2xl font-semibold">
                          {slide.description}{" "}
                        </h3>
                      </div>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-6 text-white bg-transparent hover:bg-transparent hover:text-white" />
            <CarouselNext className="right-6 text-white bg-transparent hover:bg-transparent hover:text-white" />
          </Carousel>
        </div>
      )}
    </>
  );
};

export default MediaSlider;

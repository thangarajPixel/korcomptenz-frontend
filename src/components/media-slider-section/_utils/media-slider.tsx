"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { VideoPopup } from "@/components/video-popup";

const MediaSlider = ({ data }: { data: MediaSliderSectionType }) => {
  const [isCarouselOpen, setIsCarouselOpen] = React.useState(false);
  const [startIndex, setStartIndex] = React.useState(0);

  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  const onThumbClick = (index: number, slide: MediaSliderCardType) => {
    if (slide?.isVideo && slide?.videoLink) {
      setIsVideoOpen({
        open: true,
        link: slide.videoLink,
      });
      return;
    }

    setStartIndex(index);
    setIsCarouselOpen(true);
  };

  return (
    <>
      {/* ================= INLINE THUMBNAILS ================= */}
      <div className="w-full container-md mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-4">
          {data?.list?.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => onThumbClick(index, slide)}
              className="relative aspect-video rounded-2xl overflow-hidden group"
            >
              <KorcomptenzImage
                src={slide.image}
                width={400}
                height={225}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================= POPUP CAROUSEL ================= */}
      {isCarouselOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center ">
          {/* Modal content wrapper */}
          <div className="relative w-full max-w-5xl px-4">
            {/* Close button - independent of carousel */}
            <button
              onClick={() => setIsCarouselOpen(false)}
              className="absolute top-0 right-0 z-50 text-white text-3xl"
            >
              ✕
            </button>

            {/* Carousel */}
            <Carousel className="w-full" opts={{ startIndex }}>
              <CarouselContent>
                {data?.list?.map((slide, index) => (
                  <CarouselItem
                    key={index}
                    className="relative flex justify-center items-center aspect-video"
                  >
                    {/* Centered Image */}
                    <KorcomptenzImage
                      src={slide.image || "/placeholder.svg"}
                      width={1000}
                      height={1000}
                      className="w-full h-screen object-contain rounded-xl"
                    />

                    {/* Description */}
                    {slide?.description && (
                      <div className="absolute bottom-4 inset-x-0 flex justify-center">
                        <div className="bg-primary/80 p-6 rounded-md max-w-4xl">
                          <h3 className="text-white text-center text-xl md:text-2xl font-semibold">
                            {slide.description}
                          </h3>
                        </div>
                      </div>
                    )}

                    {/* Video overlay button */}
                    {slide?.isVideo && (
                      <button
                        className="absolute inset-0 flex items-center justify-center z-20"
                        onClick={() =>
                          setIsVideoOpen({
                            open: true,
                            link: slide?.videoLink || null,
                          })
                        }
                      >
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition">
                          <svg
                            className="w-7 h-7 text-black ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="-left-10 bg-transparent text-white size-12 border-none hover-border-none hover:bg-transparent hover:text-white" />
              <CarouselNext className="-right-10 bg-transparent text-white size-12 border-none hover-border-none hover:bg-transparent hover:text-white" />
            </Carousel>
          </div>
        </div>
      )}

      {/* ================= VIDEO POPUP ================= */}
      {isVideoOpen.open && isVideoOpen.link && (
        <VideoPopup
          isOpen={isVideoOpen.open}
          onClose={() => setIsVideoOpen({ open: false, link: null })}
          videoSrc={isVideoOpen.link}
        />
      )}
    </>
  );
};

export default MediaSlider;

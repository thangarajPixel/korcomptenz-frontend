"use client";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  PauseIcon,
  PlayIcon,
  RestartIcon,
  ShareIcon,
} from "../../../../public/svg/all-svg";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

import ButtonLink from "@/components/ui/button-link";
import { X } from "lucide-react";
import Link from "next/link";

export default function StatusCarousel({
  carouselData,
}: {
  carouselData: WebStoriesType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    setKey((prev) => prev + 1);
    setProgress(0);

    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [currentIndex, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const restart = () => {
    setCurrentIndex(0);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentItem.title,
        text: currentItem.description,
      });
    } else {
      alert("Share feature not supported on this device");
    }
  };

  const currentItem = carouselData[currentIndex];
  const isLastSlide = currentIndex === carouselData.length - 1;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentItem.image})` }}
      />

      <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-b from-gray-900/70 via-gray-800/60 to-gray-900/80" />

      <div className="absolute inset-0 bg-indigo-950/10" />
      <Link href="/insights/webstories">
        <X className="w-5 h-5 text-gray-400" />
      </Link>
      <div className="relative z-10 lg:max-w-xl w-full mx-auto h-full flex items-center py-0  justify-center md:px-4">
        <div className="flex items-center md:gap-6 gap-0 max-w-5xl w-full mx-auto justify-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex cursor-pointer flex-shrink-0 w-14 h-14 rounded-full bg-white/90 hover:bg-white  items-center justify-center transition-all shadow-xl hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          {/* Card Container */}
          <div
            className="relative w-full md:flex-1 md:max-w-md h-[100vh] md:h-[calc(100vh-50px)] md:rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={goToNext}
          >
            {/* Progress Bars */}
            <div className="absolute top-0 left-0 right-0 z-30 p-4">
              <div className="flex gap-1.5">
                {carouselData.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-white transition-all duration-200 ease-linear"
                      style={{
                        width:
                          i === currentIndex
                            ? `${progress}%`
                            : i < currentIndex
                            ? "100%"
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Top Controls */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPaused(!isPaused);
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md transition-all"
                  aria-label={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? <PlayIcon /> : <PauseIcon />}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare();
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md transition-all"
                  aria-label="Share"
                >
                  <ShareIcon />
                </button>
              </div>
            </div>

            {/* Main Image */}
            <KorcomptenzImage
              src={currentItem.image}
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottom Content Area with Wave Shape */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
              {/* Wave Container */}
              <div className="relative">
                {/* Wave Background with dynamic height */}
                <div className="relative">
                  {/* Wavy top border using SVG */}
                  <div
                    className="absolute bottom-0 left-0 right-0 text-white "
                    style={{
                      backgroundColor: currentItem?.id
                        ? "rgba(57, 41, 175, 0.70)"
                        : "",
                      paddingTop: "20px",

                      clipPath:
                        "path('M0,90 C90,10 170,40 250,70 C330,100 420,50 500,90 L500,300 L0,600 Z')",
                    }}
                  >
                    {/* Main content area with solid bottom */}
                    <div
                      className={
                        currentItem?.id ? "bg-[rgba(88,28,135,0.85)]" : ""
                      }
                      style={{ paddingTop: "80px" }}
                    >
                      {/* Additional dark overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

                      {/* Text Content inside wave */}
                      <div className="relative z-10 px-6 pt-4 pb-8">
                        <div className="space-y-3">
                          <h2
                            key={`title-${key}`}
                            className="text-white text-3xl font-bold leading-tight animate-in slide-in-from-left duration-700"
                          >
                            {currentItem.title}
                          </h2>
                          {/* <p
                            key={`desc-${key}`}
                            className="text-white/95 text-base leading-relaxed animate-in slide-in-from-right duration-700 delay-150"
                          >
                            {currentItem.description} */}
                          {/* </p> */}
                          {currentItem?.buttonText ? (
                            <ButtonLink
                              link={currentItem?.link || "#"}
                              buttonProps={{
                                className:
                                  " bg-[#b06] whitespace-normal text-center break-words hover:bg-[#b06] hover:text-white/90 border-none",
                                size: "xl",
                              }}
                            >
                              {currentItem?.buttonText}
                            </ButtonLink>
                          ) : (
                            <DangerousHtml
                              key={`html-${key}`}
                              html={currentItem?.description}
                              className="text-white/95 text-base leading-relaxed animate-in slide-in-from-right duration-700 delay-150"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Right Arrow / Restart Button */}
          <button
            onClick={isLastSlide ? restart : goToNext}
            className=" hidden md:flex cursor-pointer flex-shrink-0 w-14 h-14 rounded-full bg-white/90 hover:bg-white  items-center justify-center transition-all shadow-xl hover:scale-110"
            aria-label={isLastSlide ? "Restart" : "Next"}
          >
            {isLastSlide ? <RestartIcon /> : <ChevronRight />}
          </button>
        </div>
      </div>
    </div>
  );
}

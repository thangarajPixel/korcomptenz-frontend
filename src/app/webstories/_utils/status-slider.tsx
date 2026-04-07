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
  }, [currentIndex]);

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
  const currentImageUrl = typeof currentItem.image === "string"
    ? currentItem.image
    : (currentItem.image as { url?: string })?.url ?? "";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style>{`
        @keyframes progress-fill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
      {/* Blurred background — shows image color only */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: currentImageUrl ? `url(${currentImageUrl})` : undefined,
          filter: "blur(40px) saturate(1.5)",
          transition: "background-image 0.7s ease",
        }}
      />
      {/* Dark overlay to keep it subtle */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Close Button - Top Right */}
      <Link 
        href="/insights/webstories"
        className="absolute top-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
      >
        <X className="w-5 h-5 text-white" />
      </Link>
      <div className="relative z-10 lg:max-w-xl w-full mx-auto h-full flex items-center py-0  justify-center md:px-4">
        <div className="flex items-center md:gap-6 gap-0 max-w-5xl w-full mx-auto justify-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex cursor-pointer shrink-0 w-14 h-14 rounded-full bg-white/90 hover:bg-white items-center justify-center transition-all shadow-xl hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          {/* Card Container */}
          <div
            className="relative w-full md:flex-1 md:max-w-md h-screen md:h-[calc(100vh-50px)] md:rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
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
                      key={i === currentIndex ? `bar-${key}` : i}
                      className="h-full bg-white"
                      style={
                        i === currentIndex
                          ? {
                              width: "100%",
                              transformOrigin: "left",
                              transform: "scaleX(0)",
                              animation: isPaused
                                ? "none"
                                : `progress-fill 5s linear forwards`,
                              animationPlayState: isPaused ? "paused" : "running",
                            }
                          : { width: i < currentIndex ? "100%" : "0%" }
                      }
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

            {/* Bottom Content Area — wave top + solid content below */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
              {/* Wave shape — smooth elegant curve with taller height */}
              <svg
                viewBox="0 0 500 120"
                preserveAspectRatio="none"
                className="w-full block"
                style={{ height: "120px", display: "block" }}
              >
                <path
                  d="M0,120 L0,110 Q125,30 250,65 T500,85 L500,220 Z"
                  fill="rgba(83,31,137,0.90)"
                />
              </svg>
              {/* Solid content area — extends with content */}
              <div style={{ backgroundColor: "rgba(83,31,137,0.90)",  }}>
                <div className="px-6 pb-8" >
                  <div className="space-y-3">
                    {currentItem.title && (
 <h4
                      key={`title-${key}`}
                      className="text-white text-3xl font-normal animate-in slide-in-from-left duration-700 text-[28px] leading-8.5"
                    >
                      {currentItem.title}
                    </h4>
                    )}
                   
                    {currentItem?.buttonText ? (
                      <ButtonLink
                        link={currentItem?.link || "#"}
                        buttonProps={{
                          className:
                            "bg-[#b06] whitespace-normal text-center break-words hover:bg-[#b06] hover:text-white/90 border-none",
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

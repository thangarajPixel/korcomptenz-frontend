"use client";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
const carouselData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop",
    title: "5 Steps to Take Your Business to the Next Level",
    description:
      "Smart strategies to grow sustainably—with the right tools to scale, smarter.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop",
    title: "Unlock Your Team's Potential",
    description:
      "Discover innovative ways to boost productivity and collaboration in your workplace.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop",
    title: "Digital Transformation Made Easy",
    description:
      "Navigate the digital landscape with confidence using proven strategies and tools.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop",
    title: "Digital Transformation Made Easy",
    description:
      "Navigate the digital landscape with confidence using proven strategies and tools.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop",
    title: "Digital Transformation Made Easy",
    description:
      " Navigate the digital landscape with confidence using . Navigate the digital landscape with confidence using  Navigate the digital landscape with confidence using  Navigate the digital landscape with confidence using  Navigate the digital landscape with confidence using ",
  },
];

export default function StatusCarousel() {
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
    }, 100);

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
      {/* Background with image reflection */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentItem.image})` }}
      />

      {/* Blur + Gradient Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-b from-gray-900/70 via-gray-800/60 to-gray-900/80"></div>

      {/* Secondary color tint overlay */}
      <div className="absolute inset-0 bg-indigo-950/10"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-lg mx-auto h-full flex items-center justify-center px-4">
        <div className="flex items-center gap-6 max-w-5xl w-full">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          {/* Card Container */}
          <div
            className="relative flex-1 max-w-md h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
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
                      className="h-full bg-white transition-all duration-100 ease-linear"
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
                  {isPaused ? (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare();
                  }}
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/25 hover:bg-white/35 backdrop-blur-md transition-all"
                  aria-label="Share"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Image */}
            <img
              src={currentItem.image}
              alt={currentItem.title}
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
                      backgroundColor: "rgba(57, 41, 175, 0.70)",
                      paddingTop: "20px",

                      clipPath:
                        "path('M0,90 C90,10 170,40 250,70 C330,100 420,50 500,90 L500,300 L0,600 Z')",
                    }}
                  >
                    {/* Main content area with solid bottom */}
                    <div
                      className=" bg-[rgba(88,28,135,0.85)] "
                      style={{ paddingTop: "80px" }}
                    >
                      {/* Additional dark overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

                      {/* Text Content inside wave */}
                      <div className="relative z-10 px-6 pt-4 pb-8">
                        <div className="space-y-3">
                          <h2
                            key={`title-${key}`}
                            className="text-white text-2xl font-bold leading-tight animate-in slide-in-from-left duration-700"
                          >
                            {currentItem.title}
                          </h2>
                          <p
                            key={`desc-${key}`}
                            className="text-white/95 text-base leading-relaxed animate-in slide-in-from-right duration-700 delay-150"
                          >
                            {currentItem.description}
                          </p>
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
            className="flex-shrink-0 w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
            aria-label={isLastSlide ? "Restart" : "Next"}
          >
            {isLastSlide ? (
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            ) : (
              <ChevronRight />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

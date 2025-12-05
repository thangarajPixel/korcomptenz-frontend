"use client";
import React, { useEffect, useRef, useState } from "react";

import { Play, Pause } from "lucide-react";

const PodcastSection = ({ data }: { data: InsightResponse }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Wrapper with flex for mobile reordering */}
        <div className="flex flex-col">
          {/* Title - First on desktop, Second on mobile */}
          <h2 className="text-2xl md:text-[75px] font-medium text-center mb-4 md:mb-6 text-gray-900 leading-tight md:leading-[118%] order-2 md:order-1">
            {data?.podcast?.title}
          </h2>

          {/* Description - Second on desktop, Third on mobile */}
          <p className="text-center text-[#3C3C3C] text-sm md:text-[29px] font-normal mx-auto leading-relaxed md:leading-[40px] px-4 mb-8 md:mb-16 order-3 md:order-2">
            {data?.podcast?.description}
          </p>

          {/* Card Container - Third on desktop, First on mobile */}
          <div className="relative max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-12 mb-8 md:mb-0 order-1 md:order-3 w-full">
            {/* Waveform and Avatar Container */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-3 md:gap-6 mb-3 md:mb-4 h-1/2 w-full">
                <div className="w-full h-1/2">
                  <video
                    ref={videoRef}
                    className="w-full lg:h-[300px] h-full md:h-[200px] object-cover"
                    controls
                    autoPlay={false}
                    playsInline
                  >
                    <source src={data?.podcast?.podcastLink} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Speaker Info */}
              <div className="text-center">
                <h3 className="text-lg md:text-[28px] font-bold mb-0.5 md:mb-1 text-[#24A07B]">
                  {data?.author?.name}
                </h3>
                <p className="text-sm md:text-[18px] font-normal text-[#020202]">
                  {data?.author?.role}
                </p>
              </div>
            </div>

            {/* Play Button - Positioned at bottom right corner of card */}
            <button
              onClick={handlePlayPause}
              className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-all shadow-lg z-10"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="white"
                />
              ) : (
                <Play
                  className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5"
                  fill="white"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;

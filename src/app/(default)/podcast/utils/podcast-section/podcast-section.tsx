"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface PodcastSectionProps {
  title: string;
  description: string;
  speakerName: string;
  speakerTitle: string;
  speakerImage: string;
  waveformImage?: string;
  audioUrl?: string;
}

const PodcastSection = ({
  title,
  description,
  speakerName,
  speakerTitle,
  speakerImage,
  waveformImage = "/assets/waveform.png",
}: PodcastSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Wrapper with flex for mobile reordering */}
        <div className="flex flex-col">
          {/* Title - First on desktop, Second on mobile */}
          <h2 className="text-2xl md:text-[75px] font-medium text-center mb-4 md:mb-6 text-gray-900 leading-tight md:leading-[118%] order-2 md:order-1">
            {title}
          </h2>

          {/* Description - Second on desktop, Third on mobile */}
          <p className="text-center text-[#3C3C3C] text-sm md:text-[29px] font-normal mx-auto leading-relaxed md:leading-[40px] px-4 mb-8 md:mb-16 order-3 md:order-2">
            {description}
          </p>

          {/* Card Container - Third on desktop, First on mobile */}
          <div className="relative max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-12 mb-8 md:mb-0 order-1 md:order-3">
            {/* Waveform and Avatar Container */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-3 md:gap-6 mb-3 md:mb-4 w-full">
                {/* Left Waveform Image */}
                <div className="flex-1 flex items-center justify-end">
                  <Image
                    src={waveformImage}
                    alt="Audio waveform left"
                    width={300}
                    height={80}
                    className="object-contain w-full max-w-[120px] md:max-w-[300px] h-auto"
                  />
                </div>

                {/* Speaker Avatar with gradient background */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 p-[4px] md:p-[5px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-[3px] md:p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={speakerImage}
                          alt={speakerName}
                          width={144}
                          height={144}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Waveform Image */}
                <div className="flex-1 flex items-center justify-start">
                  <Image
                    src={waveformImage}
                    alt="Audio waveform right"
                    width={300}
                    height={80}
                    className="object-contain w-full max-w-[120px] md:max-w-[300px] h-auto"
                  />
                </div>
              </div>

              {/* Speaker Info - Close to avatar */}
              <div className="text-center">
                <h3 className="text-lg md:text-[28px] font-bold mb-0.5 md:mb-1 text-[#24A07B]">
                  {speakerName}
                </h3>
                <p className="text-sm md:text-[18px] font-normal text-[#020202]">
                  {speakerTitle}
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
                <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" fill="white" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;

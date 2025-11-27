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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-[75px] font-medium text-center mb-6 text-gray-900 leading-[118%]">
          {title}
        </h2>

        {/* Description */}
        <p className="text-center text-[#3C3C3C] text-base md:text-[29px] font-normal  mx-auto mb-16 leading-[40px] px-4">
          {description}
        </p>

        {/* Card Container */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12">
          {/* Waveform and Avatar Container */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-6 mb-4 w-full">
              {/* Left Waveform Image */}
              <div className="flex-1 flex items-center justify-end">
                <Image
                  src={waveformImage}
                  alt="Audio waveform left"
                  width={300}
                  height={80}
                  className="object-contain w-full max-w-[300px] h-auto"
                />
              </div>

              {/* Speaker Avatar with gradient background */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 p-[5px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
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
                  className="object-contain w-full max-w-[300px] h-auto"
                />
              </div>
            </div>

            {/* Speaker Info - Close to avatar */}
            <div className="text-center">
              <h3 className="text-2xl md:text-[28px] font-bold mb-1 text-[#24A07B]">
                {speakerName}
              </h3>
              <p className="text-base md:text-[18px] font-normal text-[#020202]">
                {speakerTitle}
              </p>
            </div>
          </div>

          {/* Play Button - Positioned at bottom right corner of card */}
          <button
            onClick={handlePlayPause}
            className="absolute bottom-6 ltr:right-6 rtl:left-6 w-14 h-14 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-all shadow-lg z-10"
            style={{ right: '24px', bottom: '24px' }}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" fill="white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
            )}
          </button>
        </div>


      </div>
    </section>
  );
};

export default PodcastSection;

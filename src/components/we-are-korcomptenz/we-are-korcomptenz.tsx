'use client'
import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";
import { VideoPopup } from "../video-popup/video-popup";

const WeAreKorcomptenzSection = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false)
  return (
    <div className="container-md md:mt-24">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-32 items-start mb-10 md:mb-16">
        {/* Left Column - Company Name */}
        <div className="lg:w-full">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            We are
            <br />
            <span className="text-2xl md:text-3xl font-semibold">Korcomptenz</span>
          </h1>
        </div>

        {/* Right Column - Description */}
        <div className="space-y-5">
          <p className="font-outfit font-normal text-xs md:text-lg leading-[24px] md:leading-[34px] tracking-[0%] text-pretty ">
            {`We lead with expertise - in technology and domain to deliver solutions that align with your business\ngoals.`}
          </p>
          <p className="font-outfit font-normal text-xs md:text-lg leading-[24px] md:leading-[34px] tracking-[0%] text-pretty ">
            {`We leverage our experience and robust partner\necosystem to elevate your processes, powering your\ntransformation journey toward impactful growth`}
          </p>
        </div>
      </div>

      <div className="relative m-1 md:m-0   cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        <KorcomptenzImage
          src="/assets/home/video-thumb.jpg"
          className="w-full h-[280px] md:h-[500px] object-cover  rounded-4xl"
          alt="video-thumb"
          width={1112}
          height={500}
        />

        <div className="absolute inset-0 bg-black/40 rounded-4xl" />

        <div className="absolute inset-0 flex items-center justify-center">
          <KorcomptenzImage
            src="/assets/home/Play button.png"
            className="w-12 h-12"
            alt="play-icon"
            width={54}
            height={54}
          />
        </div>
      </div>
      {isVideoOpen && <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/placeholder-video.mp4"
      />}
    </div>
  );
};

export default WeAreKorcomptenzSection;

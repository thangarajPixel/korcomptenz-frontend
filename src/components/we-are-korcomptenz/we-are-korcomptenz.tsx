"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";
import { VideoPopup } from "../video-popup/video-popup";

const WeAreKorcomptenzSection = ({
  weAreKorcomptenzData,
}: {
  weAreKorcomptenzData: WeAreKorcomptenzSectionType;
}) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  return (
    <section className="container-md" data-debug="home.we-are-korcomptenz">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-32 items-start mb-10 md:mb-16">
        <div className="lg:w-full">
          {weAreKorcomptenzData?.titleH1 && (
            <h2 className="text-6xl md:text-8xl font-bold leading-tight">
              {weAreKorcomptenzData?.titleH1}
              <br />
              <span className="text-6xl md:text-7xl font-semibold">
                {weAreKorcomptenzData?.titleSpan}
              </span>
            </h2>
          )}
        </div>
        <div className="space-y-5">
          <p className="font-outfit font-normal text-md md:text-4xl leading-[24px] md:leading-[34px] tracking-[0%] text-pretty ">
            {weAreKorcomptenzData?.p1}
          </p>
          <p className="font-outfit font-normal text-md md:text-4xl leading-[24px] md:leading-[34px] tracking-[0%] text-pretty ">
            {weAreKorcomptenzData?.p2}
          </p>
        </div>
      </div>

      <div
        className="relative cursor-pointer"
        onClick={() => setIsVideoOpen(true)}
      >
        <KorcomptenzImage
          src={weAreKorcomptenzData?.image}
          className="w-full h-[280px] md:h-[600px] object-cover  rounded-4xl"
          width={1112}
          height={500}
          // This section's own wrapping `container-md` caps content width at
          // 1376px (max-w-[90rem] minus px-8 padding) from the xl breakpoint
          // up, so it never actually reaches 100vw on larger screens.
          sizes="(min-width: 1280px) 1376px, 100vw"
        />

        <div className="absolute inset-0 bg-black/40 rounded-4xl" />

        <div className="absolute inset-0 flex items-center justify-center">
          <KorcomptenzImage
            src="/assets/play-button.png"
            className="w-12 h-12"
            alt="play-icon"
            width={54}
            height={54}
          />
        </div>
      </div>
      {isVideoOpen && weAreKorcomptenzData?.link && (
        <VideoPopup
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc={weAreKorcomptenzData?.link}
        />
      )}
    </section>
  );
};

export default WeAreKorcomptenzSection;

"use client";

import React from "react";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { VideoPopup } from "@/components/video-popup";

const SummarySection = ({ data }: { data: SummaryType }) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {data?.thumbnail ? (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold mb-4 text-[#313941]">
                {data?.title}
              </h2>
              <p className="text-custom-blue-1 leading-[25px] text-[18px] font-normal">
                {data?.description}
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <KorcomptenzImage
                src={data?.thumbnail}
                fill
                className="object-cover"
                onClick={() =>
                  setIsVideoOpen({ link: data?.videoLink || "#", open: true })
                }
              />
            </div>
          </div>
        ) : (
          <div className="">
            <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold mb-6 text-[#313941]">
              {data?.title}
            </h2>
            <p className="text-custom-blue-1 leading-[28px] text-[16px] md:text-[18px] font-normal">
              {data?.description}
            </p>
          </div>
        )}
      </div>
      <VideoPopup
        isOpen={isVideoOpen.open}
        onClose={() => {
          setIsVideoOpen({ link: null, open: false });
        }}
        videoSrc={data.videoLink || ""}
      />
    </section>
  );
};

export default SummarySection;

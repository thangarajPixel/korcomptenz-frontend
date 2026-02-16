"use client";
import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "../ui/dangerous-html";
import { VideoPopup } from "../video-popup";

const FabconSmartForge = ({ data }: { data: FabconSmartForgeType }) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-blue-950"
        style={{ backgroundImage: `url(${data?.backgroundImage?.url})` }}
      />

      <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6 text-white max-w-md mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            {data?.title1}{" "}
            <span className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
              {data?.title2}
            </span>{" "}
            {data?.title3}
          </h2>

          {/* Description */}
          <DangerousHtml
            html={data?.description}
            className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl"
          />
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Circle Image */}
          <div className="relative w-[280px] h-[280px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden border-4 border-primary">
            <KorcomptenzImage
              src={data?.image}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Play Button */}
          <div className="absolute md:-bottom-8  md:-left-4  -bottom-16 left-12">
            <div className="w-[100px] h-[100px] md:w-[230px] md:h-[230px] rounded-full bg-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition">
              <div className="text-foreground rounded-full border-[#e7e7e7] border-2">
                <KorcomptenzImage
                  src={data?.buttonImage}
                  width={200}
                  height={200}
                  className="object-cover"
                  onClick={() =>
                    setIsVideoOpen({
                      link: data?.videoLink || "#",
                      open: true,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPopup
        isOpen={isVideoOpen.open}
        onClose={() => {
          setIsVideoOpen({ link: null, open: false });
        }}
        videoSrc={data?.videoLink || ""}
      />
    </section>
  );
};

export default FabconSmartForge;

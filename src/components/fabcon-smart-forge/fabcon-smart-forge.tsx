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
    <section className="relative  py-24">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-[#07003B]"
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
        <div className="relative flex justify-center lg:justify-end ">
          {/* Circle Image */}
          <div className="relative w-[280px] h-[280px] md:w-[600px] md:h-[600px] rounded-full  ">
            <KorcomptenzImage
              src={data?.image}
              width={600}
              height={600}
              className="w-full h-full object-contain"
            />

            {/* Play Button – locked to circle */}
            <div className="absolute bottom-0 left-0 translate-x-[-8px] translate-y-[8px]">
              {/* OUTER CIRCLE */}
              <div
                className="
      w-[80px] h-[80px]
      md:w-[170px] md:h-[170px]
     
      rounded-full bg-white
      flex items-center justify-center
      shadow-xl cursor-pointer
      hover:scale-105 transition
    "
              >
                {/* MIDDLE RING */}
                <div className="w-[80%] h-[80%] rounded-full border-2 border-[#e7e7e7] flex items-center justify-center">
                  {/* INNER PLAY ICON */}
                  <KorcomptenzImage
                    src={data?.buttonImage}
                    width={200}
                    height={200}
                    className="w-[100%] h-[100%] object-contain"
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

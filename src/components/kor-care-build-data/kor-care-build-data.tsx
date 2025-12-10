"use client";
import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";

import KorcomptenzImage from "../korcomptenz-image";
import { cn } from "@/lib/utils";
import { VideoPopup } from "../video-popup";
import { YouTubeIcon } from "../../../public/svg/all-svg";

const KorCareBuildData = ({
  buildData,
}: {
  buildData: BuildConnectSectionType;
}) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  return (
    <div>
      <section data-debug="">
        <div className="container-md  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
            {/* IMAGE SECTION */}
            <div className="order-2 lg:order-1">
              {/* Desktop Image */}
              <div className="p-5 hidden lg:block relative">
                <KorcomptenzImage
                  src={buildData?.thumbnail}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-4xl"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() =>
                    setIsVideoOpen({
                      link: buildData?.videoLink || "",
                      open: true,
                    })
                  }
                >
                  <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </button>
              </div>

              {/* Mobile Image */}
              <div className="mt-2 lg:hidden relative">
                <KorcomptenzImage
                  src={buildData?.thumbnail}
                  width={500}
                  height={500}
                  className={cn(
                    "w-full h-auto object-cover rounded-4xl",
                    buildData?.rightSection?.content === "video" &&
                      "cursor-pointer"
                  )}
                />
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() =>
                    setIsVideoOpen({
                      link: buildData?.videoLink || "",
                      open: true,
                    })
                  }
                >
                  <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                    <YouTubeIcon />
                  </div>
                </button>
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="md:px-5 space-y-3 flex flex-col justify-center order-1 lg:order-2">
              <h3 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
                {buildData?.title}
              </h3>

              <DangerousHtml
                html={buildData?.description}
                className="text-xs md:text-2xl text-foreground leading-7 break-words"
              />
            </div>
          </div>
        </div>
        {isVideoOpen.open && isVideoOpen.link && (
          <VideoPopup
            isOpen={isVideoOpen.open}
            onClose={() => {
              setIsVideoOpen({ link: null, open: false });
            }}
            videoSrc={isVideoOpen.link || ""}
          />
        )}
      </section>
    </div>
  );
};

export default KorCareBuildData;

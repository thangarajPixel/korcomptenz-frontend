"use client";
import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { VideoPopup } from "../video-popup";

const PanchatattvaSection = ({
  buildData,
}: {
  buildData: PanchatattvaSectionType;
}) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div className="container-md  flex flex-col gap-12 ">
        <div className="text-center space-y-5 ">
          <h2 className="text-8xl font-semibold">{buildData?.title}</h2>
          <p className="text-lg px-2">{buildData?.titleDescription}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative cursor-pointer"
          >
            <KorcomptenzImage
              src={buildData?.image}
              width={1000}
              height={1000}
            />
            <button
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center  transition-colors">
                <svg
                  className="w-7 h-7 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex flex-col justify-center ">
            <h2 className="text-4xl text-primary font-semibold mb-5">
              {buildData?.descriptionTitle}
            </h2>
            <p className="text-lg">{buildData?.description}</p>
          </div>
        </div>
        <KorcomptenzImage
          src={buildData?.mainImage}
          width={1000}
          height={1000}
          className="size-full"
        />
      </div>

      {isVideoOpen && (
        <VideoPopup
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoSrc={buildData?.videoLink || ""}
        />
      )}
    </React.Fragment>
  );
};

export default PanchatattvaSection;

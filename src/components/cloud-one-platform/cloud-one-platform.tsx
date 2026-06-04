"use client";
import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";
import { VideoPopup } from "../video-popup";

const CloudOnePlatform = ({ data }: { data: FabconAboutType }) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  return (
    <div className="container-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-10 gap-y-10 items-start">
        {" "}
        {/* IMAGE SECTION */}
        {data?.image && (
          <div
            className=" order-2 lg:order-1 relative h-[400px] self-start cursor-pointer"
            onClick={() =>
              setIsVideoOpen({
                link: data?.videoUrl || "#",
                open: true,
              })
            }
            style={{
              paddingBottom: "2rem",
              paddingRight: "2rem",
            }}
          >
            <div
              className="absolute bottom-0 right-0 z-0 "
              style={{
                backgroundColor: "#14007E",
                width: "35%",
                height: "50%",
              }}
            />

            <KorcomptenzImage
              src={data?.image}
              width={510}
              height={500}
              className="relative z-10 w-full h-full object-cover rounded-2xl hidden md:block"
            />
            <KorcomptenzImage
              src={data?.mobileImage}
              width={510}
              height={400}
              className="relative z-10 w-full h-full object-cover rounded-2xl md:hidden "
            />
          </div>
        )}
        {/* CONTENT SECTION */}
        <div className="order-1 lg:order-2 lg:px-5">
          {data?.subHeading && (
            <DangerousHtml
              className="inline-flex items-center justify-center text-[16px] md:text-[18px] leading-7.5 font-normal text-[#151515] border-2 border-[#4C4C4C] rounded-full px-4 md:px-6 mb-4 bg-transparent md:pt-3 pt-2"
              html={data?.subHeading}
            />
          )}
          {data?.title && (
            <div className="flex items-center gap-2 max-w-4xl">
              <DangerousHtml
                as="h2"
                html={data?.title}
                className="text-[#020202]"
              />
            </div>
          )}
          {data?.description && (
            <DangerousHtml
              html={data?.description}
              className="text-md md:text-lg text-[#242424] leading-7.5 break-words"
            />
          )}
          {data?.buttonText && (
            <div className="pt-2">
              <ButtonLink
                link={data?.buttonLink || "#"}
                isTargetNew={data?.isTarget}
                buttonProps={{ size: "xl", arrow: true }}
              >
                {data?.buttonText || "Watch Now"}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
      <VideoPopup
        isOpen={isVideoOpen.open}
        onClose={() =>
          setIsVideoOpen({
            link: null,
            open: false,
          })
        }
        videoSrc={isVideoOpen.link || ""}
      />
    </div>
  );
};

export default CloudOnePlatform;

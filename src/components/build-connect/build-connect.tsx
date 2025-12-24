"use client";
import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

import BookDemoSection from "../book-demo-section";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";
import { VideoPopup } from "../video-popup";

const BuildConnect = ({
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
    <section data-debug="page-componets.build-data" id="our-mission-and-vision">
      <div className="container-md  ">
        {buildData?.isSwap && (
          <h3 className=" text-6xl md:text-7xl font-bold text-foreground leading-10 lg:leading-15">
            {buildData?.title}
          </h3>
        )}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 space-x-12 ",
            buildData?.isSwap && "mt-3"
          )}
        >
          <div
            className={cn("md:pl-5 space-y-3 ", buildData?.isSwap && "order-2")}
          >
            {!buildData?.isSwap && (
              <h3 className="text-6xl md:text-7xl font-bold text-foreground leading-10 lg:leading-12">
                {buildData?.title}
              </h3>
            )}
            {buildData?.description && (
              <DangerousHtml
                html={buildData?.description}
                className="text-md md:text-2xl text-foreground leading-6 break-words"
              />
            )}
            {buildData?.descriptionButtonText && (
              <ButtonLink
                link={buildData?.descriptionButtonLink || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                  className: "items-center",
                }}
              >
                <span className="w-42 md:w-full truncate">
                  {buildData?.descriptionButtonText || "Watch Now"}
                </span>
              </ButtonLink>
            )}
          </div>

          {(buildData?.rightSection?.content === "image" ||
            buildData?.rightSection?.content === "video") && (
            <div>
              <div className="p-5 hidden lg:block">
                <KorcomptenzImage
                  src={buildData?.rightSection?.responsiveImage?.image}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-4xl"
                />
                {buildData?.imageCaption && (
                  <div className="flex flex-col items-center gap-4 lg:mt-5">
                    <p className="text-3xl">{buildData?.imageCaption}</p>
                    {buildData?.rightSection?.content === "image" && (
                      <ButtonLink
                        link={buildData?.link || "#"}
                        buttonProps={{
                          size: "xl",
                          arrow: true,
                          className: "items-center",
                        }}
                      >
                        {buildData?.buttonText}
                      </ButtonLink>
                    )}
                    {buildData?.rightSection?.content === "video" && (
                      <Button
                        className="items-center"
                        onClick={() =>
                          setIsVideoOpen({
                            link: buildData?.rightSection?.videoLink || "",
                            open: true,
                          })
                        }
                      >
                        {buildData?.rightSection?.videoButtonText ||
                          "Watch Now"}
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <div className="p-5 lg:hidden ">
                <KorcomptenzImage
                  src={buildData?.rightSection?.responsiveImage?.mobileImage}
                  width={500}
                  height={500}
                  className={cn(
                    "w-full h-auto object-cover rounded-4xl",
                    buildData?.rightSection?.content === "video" &&
                      "cursor-pointer"
                  )}
                />
                {buildData?.imageCaption && (
                  <div className="flex flex-col items-center gap-2 lg:mt-5">
                    <p className="text-md text-center">
                      {buildData?.imageCaption}
                    </p>
                    {buildData?.rightSection?.content === "image" && (
                      <ButtonLink
                        link={buildData?.link || "#"}
                        buttonProps={{
                          size: "xl",
                          arrow: true,
                          className: "items-center",
                        }}
                      >
                        {buildData?.buttonText}
                      </ButtonLink>
                    )}
                    {buildData?.rightSection?.content === "video" && (
                      <Button
                        className="items-center"
                        onClick={() =>
                          setIsVideoOpen({
                            link: buildData?.rightSection?.videoLink || "",
                            open: true,
                          })
                        }
                      >
                        {buildData?.rightSection?.videoButtonText ||
                          "Watch Now"}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {buildData?.rightSection?.content === "description" && (
            <div
              className={`${buildData?.rightSection?.isBgGray || ""} ${
                buildData?.rightSection?.isBgGray
                  ? "bg-gray-100 p-10 rounded-3xl"
                  : ""
              }`}
            >
              <DangerousHtml
                html={buildData?.rightSection?.description}
                className=""
              />
            </div>
          )}

          {buildData?.rightSection?.content === "customDescription" && (
            <div className="flex flex-col items-start">
              {buildData?.rightSection?.customDescription?.map(
                (item, index) => (
                  <div key={index} className="flex gap-3 justify-end">
                    {/* Blue arrow icon */}
                    <div className="flex-shrink-0 pt-2">
                      <KorcomptenzImage
                        src="/assets/thumbnail_arrow_f6130cd06d.png"
                        width={24}
                        height={24}
                      />
                    </div>

                    {/* Benefit text */}
                    <DangerousHtml
                      html={item?.description}
                      className="text-gray-700 text-2xl font-sans leading-relaxed mb-5"
                    />
                  </div>
                )
              )}
            </div>
          )}

          {buildData?.rightSection?.content === "form" && (
            <BookDemoSection
              essential={
                buildData?.rightSection?.form?.forms[0] as BookDemoFormType
              }
            />
          )}
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
  );
};

export default BuildConnect;

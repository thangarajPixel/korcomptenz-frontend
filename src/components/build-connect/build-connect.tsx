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
    <section data-debug="page-componets.build-data">
      <div className="container-md  ">
        {buildData?.isSwap && (
          <h3 className=" text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
            {buildData?.title}
          </h3>
        )}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-x-20",
            buildData?.isSwap && "mt-3"
          )}
        >
          <div
            className={cn("px-5 space-y-3 ", buildData?.isSwap && "order-2")}
          >
            {!buildData?.isSwap && (
              <h3 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
                {buildData?.title}
              </h3>
            )}
            <DangerousHtml
              html={buildData?.description}
              className="text-xs md:text-2xl text-foreground leading-7 break-words"
            />
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
            <DangerousHtml
              html={buildData?.rightSection?.description}
              className=""
            />
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

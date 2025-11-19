import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

import BookDemoSection from "../book-demo-section";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";

const BuildConnect = ({
  buildData,
}: {
  buildData: BuildConnectSectionType;
}) => {
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
              className="text-md md:text-2xl text-foreground leading-7 break-words"
            />
            {buildData?.descriptionButtonText && (
              <ButtonLink
                link={buildData?.descriptionButtonLink || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                  className: "items-center"
                }}>
                {buildData?.descriptionButtonText || "Watch Now"}
              </ButtonLink>
            )}
          </div>

          {buildData?.rightSection?.content === "image" && (
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
                    <ButtonLink
                      link={buildData?.link || "#"}
                      buttonProps={{
                        size: "xl",
                        arrow: true,
                        className: "items-center"
                      }}>
                      {buildData?.buttonText || "Watch Now"}
                    </ButtonLink>

                  </div>
                )}
              </div>
              <div className="p-5 lg:hidden ">
                <KorcomptenzImage
                  src={buildData?.rightSection?.responsiveImage?.mobileImage}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-4xl"
                />
                {buildData?.imageCaption && (
                  <div className="flex flex-col items-center gap-2 lg:mt-5">
                    <p className="text-md text-center">
                      {buildData?.imageCaption}
                    </p>
                    <Button className="items-center">
                      {buildData?.buttonText || "Watch Now"}
                    </Button>
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
    </section>
  );
};

export default BuildConnect;

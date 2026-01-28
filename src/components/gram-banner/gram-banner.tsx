import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";

import { DangerousHtml } from "../ui/dangerous-html";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";

const GramBanner = ({ gramData }: { gramData: GramBannerType }) => {
  return (
    <section
      className={` grid grid-cols-1 lg:grid-cols-1  ${
        gramData?.theme === "dark"
          ? "bg-custom-black py-10 "
          : gramData?.theme === "light"
            ? "bg-custom-gray-6 py-10 "
            : gramData?.theme === "default"
              ? "bg-white"
              : ""
      }`}
      data-debug="page-components.build-data"
    >
      <div
        className={` space-y-3 container-md p-2 ${
          gramData?.theme === "default"
            ? "bg-custom-gray-6 rounded-2xl py-12"
            : ""
        }  `}
      >
        {gramData?.title && (
          <h2
            className={cn(
              "text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15  lg:px-10",
              gramData?.theme === "dark" ? "text-white" : "",
              gramData?.isTitleLeft ? "text-left" : "text-center",
            )}
          >
            {gramData?.title}
          </h2>
        )}

        <DangerousHtml
          html={gramData?.description}
          className={cn(
            `text-md md:text-2xl text-foreground leading-7 break-words text-center lg:px-10 `,
            gramData?.theme === "dark" && "[&>span]:!text-white text-white",
            gramData?.isDescriptionLeft ? "text-left mb-10" : "text-center",
          )}
        />
        {gramData?.buttonText && (
          <div className="flex justify-center items-center">
            {gramData?.theme === "dark" ? (
              <ButtonLink
                link={gramData?.buttonLink || "#"}
                isTargetNew={gramData?.isTargetBlank}
                buttonProps={{
                  arrow: true,
                  className:
                    " flex items-center justify-center hover:bg-transparent hover:border hover:border-white hover:text-white",
                  size: "xl",
                }}
              >
                {gramData?.buttonText}
              </ButtonLink>
            ) : (
              <ButtonLink
                link={gramData?.buttonLink || "#"}
                isTargetNew={gramData?.isTargetBlank}
                buttonProps={{
                  arrow: true,
                  className: " flex items-center justify-center",
                  size: "xl",
                }}
              >
                {gramData?.buttonText}
              </ButtonLink>
            )}
          </div>
        )}
      </div>
      {gramData?.image && (
        <div className="p-5 hidden lg:flex items-center justify-center w-full h-full container-md">
          <KorcomptenzImage
            src={gramData?.image}
            width={gramData?.image?.width || 500}
            height={gramData?.image?.height || 500}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="p-5 lg:hidden ">
        {gramData?.mobileImage && (
          <KorcomptenzImage
            src={gramData?.mobileImage}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        )}

        {gramData?.imageCaption && (
          <div className="flex flex-col items-center gap-2 lg:mt-5">
            <p className="text-md text-center">{gramData?.imageCaption}</p>
            <Button className="items-center">
              {gramData?.buttonText || "Watch Now"}
            </Button>
          </div>
        )}
      </div>

      {gramData?.isFooter && (
        <div className="bg-custom-black py-10 -mt-1.5  ">
          {/* <DangerousHtml
          html={gramData?.description}
          className={cn(
            `text-md md:text-2xl text-foreground leading-7 break-words text-center lg:px-10 `,
            gramData?.theme === "dark" && "[&>span]:!text-white ",
            gramData?.isDescriptionLeft ? "text-left mb-10" : "text-center",
          )}
          
        /> */}

          {/* <h2 className="text-5xl md:text-8xl text-foreground leading-7 break-words font-bold text-center lg:px-10 text-white">
          {gramData?.footerDescription}
        </h2> */}

          <DangerousHtml
            html={gramData?.footerDescription}
            className="text-5xl md:text-8xl text-foreground leading-7 break-words font-bold text-center lg:px-10 text-white mb-8"
          />
          <div className="flex justify-center items-center">
            <ButtonLink
              link={gramData?.footerButtonLink || "#"}
              isTargetNew={gramData?.isTargetBlank}
              buttonProps={{
                className: " flex items-center justify-center",
                size: "xl",
              }}
            >
              {gramData?.FooterbuttonText || "Know More"}
            </ButtonLink>
          </div>
        </div>
      )}
    </section>
  );
};

export default GramBanner;

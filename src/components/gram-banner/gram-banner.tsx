import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";

import { DangerousHtml } from "../ui/dangerous-html";
import { cn } from "@/lib/utils";

const GramBanner = ({ gramData }: { gramData: GramBannerType }) => {
  return (
    <section
      className={` grid grid-cols-1 lg:grid-cols-1  ${
        gramData?.theme === "dark"
          ? "bg-custom-black "
          : gramData?.theme === "light"
          ? "bg-custom-gray-6 py-5"
          : gramData?.theme === "default"
          ? "bg-white"
          : ""
      }`}
      data-debug="page-components.build-data"
    >
      <div
        className={` space-y-3 container-md p-2 ${
          gramData?.theme === "default"
            ? "bg-custom-gray-6 rounded-2xl py-5"
            : ""
        }  `}
      >
        {gramData?.title && (
          <h3
            className={`text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15 text-center lg:px-10 ${
              gramData?.theme === "dark" ? "text-white" : ""
            }`}
          >
            {gramData?.title}
          </h3>
        )}

        <DangerousHtml
          html={gramData?.description}
          className={cn(
            `text-md md:text-2xl text-foreground leading-7 break-words text-center lg:px-10 `,
            gramData?.theme === "dark" && "[&>span]:!text-white "
          )}
        />
        {gramData?.buttonText && (
          <div className="flex justify-center items-center">
            <Button
              size="xl"
              arrow
              className="flex items-center justify-center"
            >
              {gramData?.buttonText}
            </Button>
          </div>
        )}
      </div>
      {gramData?.image && (
        <div className="p-5 hidden lg:flex items-center justify-center w-full h-full">
          <KorcomptenzImage
            src={gramData?.image}
            width={500}
            height={500}
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
    </section>
  );
};

export default GramBanner;

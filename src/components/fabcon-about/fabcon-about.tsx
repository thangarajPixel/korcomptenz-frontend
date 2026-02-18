import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";

const FabconAbout = ({ data }: { data: FabconAboutType }) => {
  return (
    <div className="container-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-10 gap-y-10">
        {/* IMAGE SECTION */}
        <div className="relative md:pb-16 md:pr-10">
          <div className="relative inline-block w-full">
            {/* Foreground image (on top) */}
            <KorcomptenzImage
              src={data?.image}
              width={500}
              height={500}
              className="relative z-10 w-full h-auto object-cover rounded-2xl"
            />

            {/* Purple accent block — anchored to bottom-right of image */}
            <div
              className="absolute -bottom-8 -right-9 z-0 hidden md:block w-[55%] h-[40%] "
              style={{ backgroundColor: "#2D2B8F" }}
            />

            {/* Background texture/image on top of purple block */}
            {data?.backgroundImage && (
              <div className="absolute -bottom-8 -right-9 z-[5] hidden md:block w-[55%] h-[40%] rounded-2xl overflow-hidden opacity-70">
                <KorcomptenzImage
                  src={data?.backgroundImage}
                  width={500}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="lg:px-5 space-y-4 md:mt-8">
          {/* Title */}
          <div className="grid md:flex items-center gap-2 md:whitespace-nowrap">
            <h2 className="text-foreground">{data?.title1}</h2>
            <h2 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
              {data?.title2}
            </h2>
          </div>

          {/* Description */}
          <DangerousHtml
            html={data?.description}
            className="text-md md:text-lg text-foreground leading-7.5 break-words"
          />

          {/* Button */}
          {data?.buttonText && (
            <div className="pt-2">
              <ButtonLink
                link={data?.buttonLink || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                }}
              >
                {data?.buttonText || "Watch Now"}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FabconAbout;

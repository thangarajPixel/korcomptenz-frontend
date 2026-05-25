import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";

const IndustryAbout = ({ data }: { data: FabconAboutType }) => {

  return (
    <div className="container-md">
      <div className="grid grid-cols-1 lg:grid-cols-[52%_45%] md:gap-x-10 gap-y-10">
        {" "}
        {/* CONTENT SECTION */}
        <div className="lg:px-5 space-y-2 md:mt-8">
          {/* Title */}
          <DangerousHtml className="text-[24px] leading-[28px] font-semibold font-foreground"
           html={data?.subHeading}
          />
          <div className="flex items-center gap-2  max-w-4xl">
            <DangerousHtml
              as="h2"
              html={data?.title}
              className="text-foreground"
            />
          </div>

          {/* Description */}
          <DangerousHtml
            html={data?.description}
            className="text-md md:text-lg text-[#242424] leading-7.5 break-words"
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
        {/* IMAGE SECTION */}
        <div className="relative md:pb-16 md:pr-3">
          <div className="relative inline-block w-full">
            {/* Foreground image (on top) */}
            <KorcomptenzImage
              src={data?.image}
              width={510}
              height={500}
              className="relative z-10 w-[510px] h-auto object-cover rounded-2xl md:ml-7"
            />

            {/* Purple accent block — anchored to bottom-right of image */}
            <div
              className="absolute -bottom-8 -right-9 z-0 hidden md:block w-[300px] h-[280px] rounded-2xl mr-[40px]"
              style={{ backgroundColor: "#5647D8" }}
            />

            {/* Background texture/image on top of purple block */}
            {/* {data?.backgroundImage && (
              <div className="absolute -bottom-8 -right-9 z-[5] hidden md:block w-[55%] h-[40%] rounded-2xl overflow-hidden opacity-70">
                <KorcomptenzImage
                  src={data?.backgroundImage}
                  width={500}
                  height={450}
                  className="w-[500px] h-full object-cover"
                />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryAbout;

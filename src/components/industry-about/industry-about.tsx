import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";

const IndustryAbout = ({ data }: { data: FabconAboutType }) => {
  return (
    <div className="container-md">
      <div className="grid grid-cols-1 lg:grid-cols-[52%_45%] md:gap-x-10 gap-y-10">

        {/* CONTENT SECTION */}
        <div className="lg:px-5 md:mt-8">
          {data?.subHeading && (
            <DangerousHtml
              className="text-[24px] leading-[28px] font-semibold font-foreground"
              html={data?.subHeading}
            />
          )}
          {data?.title && (
            <div className="flex items-center gap-2 max-w-4xl">
              <DangerousHtml
                as="h2"
                html={data?.title}
                className="text-foreground"
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

        {/* IMAGE SECTION */}
        {data?.image && (
          <div
            className="relative"
            style={{
              // Reserve space for the purple block offset at the bottom & right
              paddingBottom: "2rem",
              paddingRight: "2rem",
            }}
          >
            {/* Purple accent block — sized relative to the wrapper, always behind the image */}
            <div
              className="absolute bottom-0 right-0 z-0 rounded-2xl"
              style={{
                backgroundColor: "#5647D8",
                // Use percentages so it scales with the column width on every breakpoint
                width: "60%",
                height: "75%",
              }}
            />

            {/* Foreground image — pushes the purple block to bottom-right naturally */}
            <KorcomptenzImage
              src={data?.image}
              width={510}
              height={500}
              className="relative z-10 w-full h-auto object-cover rounded-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryAbout;
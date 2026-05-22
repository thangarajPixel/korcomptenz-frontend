import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";

const IndustrySpotlight = ({ data }: { data: IndustrySpotlightType }) => {
  return (
    <section className="container-md py-10 lg:py-16">
      {/* Heading Section */}
      <div className="space-y-2 max-w-5xl">
        {/* Sub Heading */}
        <DangerousHtml
          className="text-[24px] leading-[28px] font-semibold font-foreground"
          html={data?.subHeading}
        />

        {/* Main Title */}
        <DangerousHtml as="h2" html={data?.title} className="text-foreground" />

        {/* Description */}
        <DangerousHtml
          html={data?.description}
          className="text-[#242424] text-base md:text-lg leading-7 break-words"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        {data?.list?.map((item, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={item?.id}
              className={`rounded-[28px] p-6 md:p-8 flex flex-col justify-between 
                ${
                  isFirst
                    ? "bg-[#2E3743] border-2 border-[#2D9CFF]"
                    : "bg-[#25A87B]"
                }`}
            >
              {/* Top Content */}
              <div>
                {/* Logo */}
                {item?.image && (
                  <KorcomptenzImage
                    src={item?.image}
                    alt="solution-logo"
                    width={180}
                    height={60}
                    className="h-[50px] w-auto object-contain mb-3"
                  />
                )}

                {/* Title */}
                <DangerousHtml
                  as="h3"
                  html={item?.title}
                  className={`max-w-lg text-[24px] md:text-[28px] leading-[33px] font-semibold
                    ${isFirst ? "text-[#2D9CFF]" : "text-white"}`}
                />

                {/* Description */}
                <DangerousHtml
                  html={item?.description}
                  className="text-white text-base md:text-lg leading-7 mt-3 max-w-[480px]"
                />
              </div>

              {/* Button */}
              {item?.buttonText && (
                <div className="mt-3">
                  <ButtonLink
                    link={item?.buttonLink || "#"}
                    isTargetNew={item?.isTarget}
                    buttonProps={{
                      size: "xl",
                      arrow: true,
                      className:
                        " bg-transparent hover:bg-transparent text-white  hover:text-white  border-none hover:border-none -ml-8",
                    }}
                  >
                    {item?.buttonText}
                  </ButtonLink>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustrySpotlight;

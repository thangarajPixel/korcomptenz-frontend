import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "@/components/ui/button-link";

const FullWidthGramSection = ({ data }: { data: CTABannerType }) => {
  return (
    <div
      className="overflow-hidden"
      style={
        data?.isBgImage && data?.backroundImage?.url
          ? {
              backgroundImage: `url(${data.backroundImage.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {
              background: data?.bgColor || "#5548E5",
            }
      }
    >
      <div className="grid lg:grid-cols-[1.8fr_1fr] items-center">
        {/* Content */}
        <div className="px-8 py-12 lg:px-16">
          {data?.Title && (
            <h2
              className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6"
              style={{
                color: data?.TitleColor || "#ffffff",
              }}
            >
              {data.Title}
            </h2>
          )}

          {data?.description && (
            <div
              className="max-w-2xl text-base lg:text-xl mb-8"
              style={{
                color: data?.DescriptionColor || "#ffffff",
              }}
            >
              <DangerousHtml
                className="text-3xl md:text-5xl leading-tight font-normal text-white my-4  max-w-2xl"
                html={data?.description}
              />
            </div>
          )}

          {data?.buttonText && (
            <ButtonLink
              link={data?.buttonLink || "#"}
              buttonProps={{
                arrow: true,
                size: "xl",
                className: "hover:bg-transparent",
                style: {
                  background: data?.buttonBgColor || "#ffffff",
                  color: data?.ButtonTextColor || "#00A88E",
                },
              }}
            >
              {data?.buttonText}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullWidthGramSection;

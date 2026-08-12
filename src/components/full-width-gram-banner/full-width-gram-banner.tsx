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
              background: data?.bgColor || "#ffffff",
            }
      }
    >
      <div className="flex flex-col h-full">
        {data?.Title && (
          <h2
            className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6"
            style={{
              color: data?.TitleColor || "#000",
            }}
          >
            {data.Title}
          </h2>
        )}

        {data?.description && (
          <div
            className="flex-1"
            style={{
              color: data?.DescriptionColor || "#000",
            }}
          >
            <DangerousHtml
              className="text-black my-4"
              html={data?.description}
            />
          </div>
        )}

        {data?.buttonText && (
          <div className="mt-6">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default FullWidthGramSection;

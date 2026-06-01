"use client";

import { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";

const CloudAiPowered = ({ data }: { data: CloudAiPoweredType }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data?.list?.[activeIndex];

  // Resolve background image URL from Strapi media object
  const bgImageUrl = activeItem?.bgImage?.url
    ? activeItem.bgImage.url.startsWith("http")
      ? activeItem.bgImage.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}${activeItem.bgImage.url}`
    : null;

  const hasBgColor = !!activeItem?.bgColor;
  const hasBgImage = !!bgImageUrl;
  const hasColoredBg = hasBgColor || hasBgImage;

  return (
    <section className="container-md">
      {/* ── Section heading ── */}
      <div className="flex flex-col items-center text-center mb-6 md:mb-8">
        {data?.subHeading && (
          <DangerousHtml
            className="inline-flex items-center justify-center text-[16px] md:text-[18px] leading-7.5 font-normal text-[#151515] border-2 border-[#4C4C4C] rounded-full px-4 md:px-6 mb-4 bg-transparent md:pt-3 pt-2"
            html={data?.subHeading}
          />
        )}
        {data?.title && (
          <DangerousHtml
            as="h2"
            html={data?.title}
            className="text-[#020202] mb-1"
          />
        )}
        {data?.description && (
          <DangerousHtml
            html={data?.description}
            className="text-[#242424] text-md md:text-lg leading-7 break-words"
          />
        )}
      </div>

      {/* ── Tab bar: horizontal scroll on both mobile & desktop ── */}
      <div
        className="flex gap-10 overflow-x-auto mb-3 mx-15  items-center justify-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data?.list?.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative shrink-0 px-4 md:px-6 py-3 text-[14px] md:text-[16px] font-medium whitespace-nowrap transition-colors duration-200 border-b-2
              
                ${
                  isActive
                    ? "border-b-[#2AAC94] text-[#242424]"
                    : "border-b-transparent text-[#242424]"
                }`}
            >
              <DangerousHtml
                html={item?.tabTitle}
                className={`[&_p]:!pb-0 [&_p]:text-[18px] md:[&_p]:text-[21px] [&_p]:font-medium [&_p]:whitespace-nowrap
                  ${isActive ? "[&_p]:text-[#020202]" : "[&_p]:text-[#242424]"}`}
              />
            </button>
          );
        })}
      </div>

      {/* ── Content box ── */}
      {activeItem && (
        <div className="rounded-[16px] border border-[#E0E0E0] overflow-hidden">
          {/* Split layout: left (bg panel) + right (stats) */}
          <div className="flex flex-col md:flex-row min-h-[380px] md:min-h-[460px]">
            {/* ── LEFT panel: strictly 50% width ── */}
            <div
              className="relative flex flex-col justify-center p-6 md:p-10 w-full md:w-1/2 md:shrink-0"
              style={{
                backgroundColor: hasBgColor
                  ? activeItem.bgColor
                  : hasBgImage
                    ? "transparent"
                    : "#ffffff",
                minHeight: "280px",
              }}
            >
              {/* Background image with teal overlay */}
              {hasBgImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgImageUrl})` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: hasBgColor
                        ? `${activeItem.bgColor}33`
                        : "rgba(42,172,148,0.60)",
                    }}
                  />
                </div>
              )}

              {/* Corner dots — only shown when there's a coloured/image bg */}

              <div className="relative z-10 flex flex-col gap-4 max-w-lg md:py-12">
                {activeItem?.title && (
                  <DangerousHtml
                    html={activeItem.title}
                    className={`[&_p]:font-semibold   [&_p]:text-[28px] md:[&_p]:text-[35px] [&_p]:leading-[1.25] [&_p]:!pb-0
                      ${hasColoredBg ? "[&_p]:text-white" : "[&_p]:text-[#020202]"}`}
                  />
                )}
                {activeItem?.description && (
                  <DangerousHtml
                    html={activeItem.description}
                    className={`[&_p]:text-[16px] md:[&_p]:text-[18px] [&_p]:leading-[1.65] [&_p]:!pb-0
                      ${hasColoredBg ? "[&_p]:text-white/85" : "[&_p]:text-[#444]"}`}
                  />
                )}
                {activeItem?.buttonText && (
                  <a
                    href={activeItem?.buttonLink ?? "#"}
                    target={activeItem?.isTarget ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`self-start mt-2 px-5 py-2 rounded-full border text-[18px] font-medium transition-colors duration-200
                      ${
                        hasColoredBg
                          ? "border-white text-white hover:bg-white hover:text-[#2AAC94]"
                          : "border-[#2AAC94] text-[#2AAC94] hover:bg-[#2AAC94] hover:text-white"
                      }`}
                  >
                    {activeItem.buttonText}
                  </a>
                )}
              </div>
            </div>

            {/* ── RIGHT panel: strictly 50% width, always white ── */}
            {activeItem?.subList?.length > 0 && (
              <div className="bg-[#FAFCFF] flex flex-col justify-center md:px-10 py-6 md:py-8 w-full md:w-1/2 md:shrink-0 px-6">
                {activeItem.subList.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="py-4 border-b border-[#E0E0E0]"
                  >
                    {subItem?.title && (
                      <DangerousHtml
                        html={subItem.title}
                        className="[&_p]:text-[#242424] [&_p]:text-[28px] md:[&_p]:text-[34px] [&_p]:font-bold [&_p]:leading-tight [&_p]:!pb-0"
                      />
                    )}

                    {subItem?.description && (
                      <DangerousHtml
                        html={subItem.description}
                        className="[&_p]:text-[#242424] [&_p]:text-[16px] md:[&_p]:text-[18px] [&_p]:leading-[1.5] [&_p]:!pb-0 mt-1"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CloudAiPowered;

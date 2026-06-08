"use client";

import React, { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const IndustryServicePortfolio = ({
  data,
}: {
  data: IndustryServicePortfolioType;
}) => {
  const tabs = data?.list?.list ?? [];
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = tabs[activeIdx];

  return (
    <section className="container-md ">
      {/* ── Top header ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
        <div className=" max-w-4xl">
          {data?.subHeading && (
            <DangerousHtml
              className="text-[#5648D8] text-[20px] md:text-[24px] font-semibold"
              html={data.subHeading}
            />
          )}
          {data?.title && (
            <DangerousHtml
              as="h2"
              html={data.title}
              className="text-[#020202]"
            />
          )}
          {data?.description && (
            <DangerousHtml
              html={data.description}
              className="text-[#242424] text-base md:text-lg leading-7.5"
            />
          )}
        </div>

        {data?.buttonText && (
          <div className="shrink-0 mt-12">
            <ButtonLink
              link={data.buttonLink || "#"}
              isTargetNew={!!data.isTarget}
              buttonProps={{ arrow: true, size: "xl" }}
            >
              {data.buttonText}
            </ButtonLink>
          </div>
        )}
      </div>

      {/* ── Card ── */}
      <div className="bg-[#EAF3FF] rounded-2xl grid grid-cols-1 lg:grid-cols-[50%_50%] gap-6 lg:gap-8">
        {/* LEFT — list title + description + tabs */}
        <div className="flex flex-col gap-3 mt-10 p-6 lg:p-12">
          {data?.list?.title && (
            <DangerousHtml
              as="h3"
              html={data.list.title}
              className="text-xl lg:text-[35px] font-bold leading-snug text-[#020202]"
            />
          )}
          {data?.list?.description && (
            <DangerousHtml
              html={data.list.description}
              className="text-[#0D0D0D] text-base md:text-lg leading-7.5 "
            />
          )}

          {/* Tabs */}
          <div className="flex flex-col gap-4 mt-5 md:mb-0 mb-10 ">
            {tabs.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative flex items-center px-4 py-5 md:py-7.5 rounded-xl text-left w-full  cursor-pointer
        ${activeIdx === idx ? "bg-white " : "bg-[#EAF3FF] hover:bg-white/60 border border-black rounded-2xl"}`}
              >
                {/* Short center green line */}
                <span className="absolute left-0 top-10 -translate-y-1/2 w-[5px] h-[45%] bg-[#1EBFA1] rounded-r-sm rounded-l-sm z-10" />

                {item?.tabTitle && (
                  <DangerousHtml
                    className={cn(
                      "text-base text-[24px] md:text-[28px] font-semibold text-foreground leading-7.5 -mb-2 cursor-pointer md:px-4",
                      activeIdx === idx
                        ? "text-[#5648D8]"
                        : "text-muted-foreground",
                    )}
                    html={item.tabTitle}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — image + subList */}
        <div className="flex flex-col gap-5 md:mx-0 bg-[#F3F7F4]">
          {activeItem?.image && (
            <div className=" overflow-hidden aspect-video w-full">
              <KorcomptenzImage
                src={activeItem.image}
                width={640}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* {activeItem?.subList && activeItem.subList.length > 0 && ( */}
          <div className="rounded-xl px-8 md:px-10 bg-[#F3F7F4] pb-10 pt-6">
            <DangerousHtml
              html={activeItem?.subList?.title}
              className="text-[#5648D8] text-[24px] font-semibold mb-4"
            />

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 bg-[#F3F7F4]">
              {activeItem?.subList?.descriptionList?.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Link
                    href={service?.link || "#"}
                    target={service?.isTarget ? "_blank" : "_self"}
                  >
                    <DangerousHtml
                      html={service?.description}
                      className="text-base md:text-lg leading-7.5 text-foreground  cursor-pointer transition-colors underline"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServicePortfolio;

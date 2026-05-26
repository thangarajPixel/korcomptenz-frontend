"use client";

import React, { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";
import { cn } from "@/lib/utils";

const IndustryServicePortfolio = ({
  data,
}: {
  data: IndustryServicePortfolioType;
}) => {
  const tabs = data?.list?.list ?? [];
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = tabs[activeIdx];

  return (
    <section className="container-md py-10 lg:py-16">
      {/* ── Top header ── */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
        <div className=" max-w-2xl">
          {data?.subHeading && (
            <DangerousHtml
              className="text-[#1EBFA1] text-[20px] md:text-[24px] font-semibold"
              html={data.subHeading}
            />
          )}
          {data?.title && (
            <DangerousHtml
              as="h2"
              html={data.title}
              className="text-foreground"
            />
          )}
          {data?.description && (
            <DangerousHtml
              html={data.description}
              className="text-muted-foreground text-base md:text-lg leading-7.5"
            />
          )}
        </div>

        {data?.buttonText && (
          <div className="shrink-0 mt-1">
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
      <div className="bg-[#EAF3FF] rounded-2xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-6 lg:gap-8">
        {/* LEFT — list title + description + tabs */}
        <div className="flex flex-col gap-3 mt-10">
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
              className="text-muted-foreground text-base md:text-lg leading-7.5 "
            />
          )}

          {/* Tabs */}
          <div className="flex flex-col gap-2 mt-5 md:mb-0 mb-10">
            {tabs.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`relative flex items-center px-4 py-6 rounded-xl overflow-hidden text-left w-full 
        ${activeIdx === idx ? "bg-white " : "bg-[#EAF3FF] hover:bg-white/60"}`}
              >
                {/* Short center green line */}
                <span className="absolute left-0 top-10 -translate-y-1/2 w-[3px] h-[45%] bg-[#1EBFA1] rounded-r-sm" />

                {item?.tabTitle && (
                  <DangerousHtml
                    className={cn(
                      "text-base text-[24px] md:text-[28px] font-semibold text-foreground leading-7.5 -mb-2 ",
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
        <div className="flex flex-col gap-5 -mt-8 md:mx-0 -mx-6">
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
          <div className="bg-[#EAF3FF] rounded-xl p-5">
            <DangerousHtml
              html={activeItem?.subList?.title}
              className="text-[#1EBFA1] text-[24px] font-semibold mb-4"
            />

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {activeItem?.subList?.description?.map((service, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <DangerousHtml
                    html={service?.description}
                    className="text-base md:text-lg leading-7.5 text-foreground  cursor-pointer hover:text-[#1EBFA1] transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default IndustryServicePortfolio;

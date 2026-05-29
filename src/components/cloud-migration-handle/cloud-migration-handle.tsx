"use client";

import { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import KorcomptenzImage from "../korcomptenz-image";

const CloudMigrationHandle = ({ data }: { data: CloudMigrationType }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data?.list?.[activeIndex];
  return (
    <section className="container-md ">
      {/* Heading */}
      <div className="">
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

      {/* Tab + Content layout */}
      <div className="flex md:hidden flex-col rounded-[16px] border border-[#E0E0E0] overflow-hidden">
        {/* Mobile: horizontal scrollable tab buttons with gap + padding */}
        <div
          className="flex bg-[#EAF5F2] gap-2 px-3 py-3 overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {data?.list?.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 px-4 py-2 text-[24px] font-semibold rounded-[8px] whitespace-nowrap transition-colors
        duration-200
        ${
          isActive
            ? "bg-[#2AAC94] "
            : "bg-white text-[#4A4A4A] border border-[#E0E0E0]"
        }`}
              >
                <DangerousHtml
                  html={item?.tabTitle}
                  className={`[&_p]:text-[24px] [&_p]:font-semibold [&_p]:whitespace-nowrap [&_p]:!pb-0 ${
                    isActive ? "[&_p]:text-white" : "[&_p]:text-[#4A4A4A]"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Mobile content */}
        {activeItem && (
          <div className="bg-white p-5 flex flex-col gap-3">
            {activeItem?.title && (
              <DangerousHtml
                html={activeItem.title}
                className="text-[#020202] text-[20px] font-semibold leading-[1.3]
                  [&_p]:font-semibold [&_p]:text-[#020202]"
              />
            )}
            {activeItem?.description && (
              <DangerousHtml
                html={activeItem.description}
                className="text-[#020202] text-[14px] font-normal leading-[1.6]
                  [&_p]:text-[#020202]"
              />
            )}
            {activeItem?.subList?.length > 0 && (
              <ul className="flex flex-col gap-2">
                {activeItem.subList.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-start gap-3">
                    {activeItem?.image && (
                      <div className="shrink-0 mt-1">
                        <KorcomptenzImage
                          src={activeItem.image}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <DangerousHtml
                      html={subItem?.description}
                      className="text-[#020202] text-[14px] font-normal leading-[1.6]
                        [&_p]:text-[#020202]"
                    />
                  </li>
                ))}
              </ul>
            )}
            {activeItem?.disclaimer && (
              <div className="mt-2 bg-[#F5F5F5] rounded-[8px] px-4 py-3 flex items-start gap-2">
                <span className="text-[#888] text-[16px] shrink-0 mt-0.5">
                  ⓘ
                </span>
                <DangerousHtml
                  html={activeItem.disclaimer}
                  className="text-[#242424] text-[13px] font-normal leading-[1.5]
                    [&_p]:text-[#242424]
                    [&_a]:text-[#2AAC94] [&_strong]:text-[#2AAC94]"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:flex rounded-[16px] border border-[#E0E0E0] overflow-hidden min-h-[500px] mt-10">
        {/* Desktop: vertical sidebar — wider + padded like Figma */}
        <div className="w-[320px] shrink-0 bg-[#EAF5F2] flex flex-col p-4 gap-1 justify-between">
          {data?.list?.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 py-4 text-[16px] font-semibold rounded-[13px] transition-colors duration-200
        ${
          isActive
            ? "bg-[#2AAC94] text-white"
            : "text-[#4A4A4A] hover:bg-[#D5EDE8]"
        }`}
              >
                <DangerousHtml
                  html={item?.tabTitle}
                  className={`font-semibold [&_p]:!pb-0 ${isActive ? "text-white" : "text-[#4A4A4A]"}`}
                />
              </button>
            );
          })}
        </div>

        {/* Desktop content panel */}
        {activeItem && (
          <div className="flex-1 bg-white p-8 flex flex-col gap-4">
            {activeItem?.title && (
              <DangerousHtml
                html={activeItem.title}
                className="text-[#020202] text-[36px] font-semibold leading-[1.18]
                  [&_p]:font-semibold [&_p]:text-[#020202]"
              />
            )}
            {activeItem?.description && (
              <DangerousHtml
                html={activeItem.description}
                className="text-[#020202] text-[18px] font-normal leading-[1.6]
                  [&_p]:text-[#020202]"
              />
            )}
            {activeItem?.subList?.length > 0 && (
              <ul className="flex flex-col gap-3 mt-1 pl-5">
                {activeItem.subList.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-start gap-3">
                    {activeItem?.image && (
                      <div className="shrink-0 mt-1">
                        <KorcomptenzImage
                          src={activeItem.image}
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <DangerousHtml
                      html={subItem?.description}
                      className="text-[#020202] text-[18px] font-normal leading-[1.6]
                        [&_p]:text-[#020202]"
                    />
                  </li>
                ))}
              </ul>
            )}
            {activeItem?.disclaimer && (
              <div className="mt-auto bg-[#F5F5F5] rounded-[8px] px-4 py-3 flex items-start gap-3 pl-5">
                <span className="text-[#888] text-[18px] shrink-0 mt-0.5">
                  ⓘ
                </span>
                <DangerousHtml
                  html={activeItem.disclaimer}
                  className="text-[#242424] text-[15px] font-normal leading-[1.5]
                    [&_p]:text-[#242424]
                    [&_a]:text-[#2AAC94] [&_strong]:text-[#2AAC94]"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CloudMigrationHandle;

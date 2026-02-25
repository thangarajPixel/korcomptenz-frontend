"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import KorcomptenzImage from "../korcomptenz-image";

export const groupByYear = (data: NewsEventListSectionType[]) => {
  const groups: Record<
    string,
    { date: string; item: NewsEventListSectionType[] }
  > = {};

  data.forEach((item) => {
    const date = item?.date || item?.createdAt.split("T")[0];
    const year = dayjs(date).format("YYYY");
    if (!groups[year]) {
      groups[year] = {
        date: date,
        item: [],
      };
    }
    groups[year].item.push(item);
  });

  // Convert object → array for UI mapping
  return Object.entries(groups).map(([year, value]) => ({
    id: year,
    date: value.date,
    item: value.item,
  }));
};

const NewsEventListSectionItem = ({
  data: item,
}: {
  data: NewsEventListSectionType;
}) => {
  const date = item?.date || item?.createdAt.split("T")[0];

  return (
    <div key={`section-item-${item.id}`} className="bg-white ">
      <div className="relative aspect-[4/3] w-full rounded-4xl mb-3">
        <KorcomptenzImage
          src={item?.image}
          height={1000}
          width={1000}
          className=" size-full rounded-4xl"
          priority={false}
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 ">{item.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {dayjs(date).format("MMM D, YYYY")}
      </p>
      <p className="text-gray-600 text-sm mb-2 leading-relaxed">
        {item?.description}
      </p>
      <Link
        href={item?.buttonLink || "#"}
        className="text-primary font-semibold text-sm hover:text-primary transition-colors"
      >
        {item?.buttonText}
      </Link>
    </div>
  );
};
export default function NewsEventListSection({
  data,
}: {
  data: NewsEventListSectionType[];
}) {
  const [activeSection, setActiveSection] = useState(`${data?.[0]?.id}` || "");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("[data-section]");
      let currentActive = activeSection;
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentActive =
            element.getAttribute("data-section") || data?.[0]?.id || "";
        }
      });
      setActiveSection(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  const handleSectionClick = (sectionId: string) => {
    const sectionElement = document.querySelector(
      `[data-section="${sectionId}"]`,
    );
    if (!sectionElement) return;
    const offset = 100;
    const elementTop =
      sectionElement.getBoundingClientRect().top + window.scrollY;
    const scrollTo = elementTop - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
  };

  return (
    <div className="relative flex flex-col lg:flex-row bg-white container-md">
      {data?.[0]?.isEvent && (
        <div className="w-full lg:w-64">
          <div className="space-y-2 sticky top-32">
            {groupByYear(data)
              ?.sort((a, b) => dayjs(b.date).year() - dayjs(a.date).year())
              .map((section) => (
                <button
                  key={`section-button-${section.id}`}
                  onClick={() => handleSectionClick(section.id)}
                  className={cn(
                    `w-full text-left cursor-pointer font-semibold px-4 py-2 text-xl transition-all text-foreground duration-200  hover:text-primary `,
                    activeSection === `${section.id}` && "text-primary",
                  )}
                >
                  {dayjs(section?.date).format("YYYY")}
                </button>
              ))}
          </div>
        </div>
      )}
      {/* Right Content Area */}
      <div ref={contentRef} className="flex-1 overflow-y-auto md:pl-4">
        {/* Content Sections */}
        {data?.[0]?.isEvent ? (
          groupByYear(data)
            ?.sort((a, b) => dayjs(b.date).year() - dayjs(a.date).year())
            .map((section, index) => (
              <div
                key={`section-content-${section.id}`}
                data-section={section.id}
                className={cn(
                  "mb-6 pb-6 border-b border-gray-200",
                  index === section.item.length - 1 && "border-b-0",
                )}
              >
                <p className="text-7xl font-semibold text-foreground mb-8">
                  {dayjs(section?.date).format("YYYY")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section?.item?.map((item) => (
                    <NewsEventListSectionItem
                      key={`section-item-${item.id}`}
                      data={item}
                    />
                  ))}
                </div>
              </div>
            ))
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((item) => (
              <NewsEventListSectionItem
                key={`section-item-${item.id}`}
                data={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

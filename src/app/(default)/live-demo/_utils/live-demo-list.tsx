"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import Link from "next/link";

export default function LiveDemoList({ data }: { data: DemoListType }) {
  const [activeSection, setActiveSection] = useState(
    `${data?.list[0]?.id}` || "",
  );

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("[data-section]");
      let currentActive = activeSection;
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentActive =
            element.getAttribute("data-section") || data?.list[0]?.id || "";
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
      {/* Left Sidebar Navigation */}

      <div className="w-full lg:w-64">
        <div className="space-y-2 sticky top-32">
          {data?.list?.map((section) => (
            <button
              key={`section-button-${section.id}`}
              onClick={() => handleSectionClick(section.id)}
              className={cn(
                `w-full text-left cursor-pointer font-semibold px-4 py-2 text-xl transition-all text-foreground duration-200  hover:text-primary `,
                activeSection === `${section.id}` && "text-primary",
              )}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div ref={contentRef} className="flex-1 overflow-y-auto pl-4">
        {/* Content Sections */}
        {data?.list?.map((section, index) => (
          <div
            key={`section-content-${section.id}`}
            data-section={section.id}
            className={cn(
              "mb-6 pb-6 border-b border-gray-200",
              index === section.length - 1 && "border-b-0",
            )}
          >
            <h2 className="text-7xl font-semibold text-foreground mb-8">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {section?.item?.map((item) => (
                <div key={`section-item-${item.id}`} className="bg-white ">
                  <div className="min-h-24 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {dayjs(item.date).format("MMM D, YYYY")}
                    </p>
                  </div>
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

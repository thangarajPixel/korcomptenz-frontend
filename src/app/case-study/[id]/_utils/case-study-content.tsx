"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import DangerousHtml from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import React from "react";

export default function CaseStudyContent({
  data,
}: {
  data: CaseStudyData;
}) {
  const handleDescription = React.useCallback((descriptionKey: CaseStudyData['rightSection'][number]["descripitionKey"]) => {
    switch (descriptionKey) {
      case "region":
        return data?.regions?.map((item) => item.label).join(", ");
      case "service":
        return data?.services?.map((item) => item.label).join(", ");
      case "technology":
        return data?.technologies?.map((item) => item.label).join(", ");
      case "industry":
        return data?.case_industries?.map((item) => item.label).join(", ");
      default:
        return "";
    }
  }, [data])

  return (
    <main className="container-md">
      <div className="mx-auto max-w-7xl h-full px-6 py-8 md:py-10">
        {/* Layout: stack on mobile, 50/50 split on md+ */}
        <div className="flex h-full flex-col md:flex-row gap-8">
          {/* LEFT: One section only (title + description text) */}
          <div className="md:basis-1/2 md:pr-2 overflow-y-auto">
            <article>
              {data?.descriptionSection?.map((item, index) => (
                <section
                  aria-labelledby="content-title"
                  className="space-y-4 py-5"
                  key={index}
                >
                  <h2
                    id="content-title"
                    className="text-7xl text-primary  font-semibold tracking-tight"
                  >
                    {item.title}
                  </h2>

                  <DangerousHtml html={item.description} />
                </section>
              ))}
            </article>
          </div>

          {/* RIGHT: Static image exactly like provided */}
          <div className="md:basis-1/2 md:pl-2 flex justify-end items-start">
            <div className="bg-[#5A36E9] text-white rounded-[25px] p-8 w-full max-w-sm">
              {data?.rightSection?.map((section, sectionIndex) => (
                <div key={`right-section-${section?.id}`} className="mb-6 last:mb-0">
                  <div
                    className={cn(`grid 
                      ${(sectionIndex === 0 || ((data?.rightSection.length === sectionIndex + 1) ? !(sectionIndex % 2 === 0) : false))
                        ? "grid-cols-1 gap-6"
                        : "grid-cols-2 gap-6"
                      }
                      `)}
                  >
                    <div className="flex flex-col space-y-1">
                      <div className="grid items-center gap-2">
                        <KorcomptenzImage
                          src={section.icon}
                          width={20}
                          height={20}
                        />
                        <h3 className="text-5xl font-semibold">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-lg text-white/80">
                        {section.isCustomDescripition ? section?.descripition : handleDescription(section.descripitionKey)}
                      </p>
                    </div>
                  </div>
                  {((sectionIndex === 0 || ((data?.rightSection.length === sectionIndex + 1) ? !(sectionIndex % 2 === 0) : false)) && <div className="border-t border-white/30 mt-6 pt-6" />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

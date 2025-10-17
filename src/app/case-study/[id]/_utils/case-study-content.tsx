"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import DangerousHtml from "@/components/ui/dangerous-html";
import React from "react";
import { ShareButton } from "./share-button";

export default function CaseStudyContent({ data }: { data: CaseStudyData }) {
  const handleDescription = React.useCallback(
    (
      descriptionKey: CaseStudyData["rightSection"][number]["descripitionKey"]
    ) => {
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
    },
    [data]
  );

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
          <div className="md:basis-1/2 md:pl-2  justify-end items-start grid">
            <div className="bg-[#5A36E9] text-white rounded-[25px] p-8 w-full max-w-sm">
              {data?.rightSection?.length &&
                (() => {
                  const items = data?.rightSection || [];
                  const rows: CaseStudyData["rightSection"][] = [];

                  // Split into rows: 1 in first row, then 2 in second, then handle remaining
                  if (items.length > 0) {
                    // First row → 1 item
                    rows.push([items[0]]);
                    // Second row → next 2 items if available
                    if (items.length > 1) rows.push(items.slice(1, 3));
                    // Remaining items (last row)
                    if (items.length > 3) rows.push(items.slice(3));
                  }

                  return rows.map((row, rowIndex) => (
                    <div key={`row-${rowIndex}`} className="mb-6 last:mb-0">
                      <div
                        className={`grid ${
                          row.length === 1 ? "grid-cols-1" : "grid-cols-2"
                        } gap-6`}
                      >
                        {row.map((section) => (
                          <div
                            key={section?.id}
                            className="flex flex-col space-y-1"
                          >
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
                              {section.isCustomDescripition
                                ? section?.descripition
                                : handleDescription(section.descripitionKey)}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Divider between rows */}
                      {rowIndex !== rows.length - 1 && (
                        <div className="border-t border-white/30 mt-6 pt-6" />
                      )}
                    </div>
                  ));
                })()}
            </div>
            <div className="mt-5">
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

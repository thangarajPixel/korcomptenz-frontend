"use client";

import React, { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import KorcomptenzImage from "@/components/korcomptenz-image";


const TabSection = ({ data }: { data: TabSectionType }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = data?.tablist || [];
  const activeContent = tabs[activeTab];

  return (
    <section className="bg-[#EDF6FF]">
      <div className="container-md py-16">
        <div className="space-y-12">
          {(data?.highlighttext || data?.title) && (
            <div className="text-center space-y-6">
              {data?.highlighttext && (
                <p className="text-sm font-semibold uppercase tracking-[4px] text-[#5648D8]">
                  {data.highlighttext}
                </p>
              )}

              {data?.title && (
                <h2 className="font-semibold">
                  {data.title}
                </h2>
              )}
            </div>
          )}

          {tabs.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`rounded-xl px-6 py-3 text-xl font-medium transition-all duration-300 ${activeTab === index
                      ? "bg-[#5648D8] text-white"
                      : "border border-[#E5E7EB] bg-white text-[#475467] hover:border-[#5648D8] hover:text-[#5648D8]"
                    }`}
                >
                  {tab.tabtitle}
                </button>
              ))}
            </div>
          )}

          {activeContent && activeContent.tablistdetails.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeContent.tablistdetails.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-2">
                    {item?.image && (
                      <KorcomptenzImage
                        className="w-18 h-18 object-contain"
                        width={48}
                        height={48}
                        src={item.image}
                      />
                    )}
                  </div>

                  <div className="space-y-4">
                    {item?.title && (
                      <h3 className="text-3xl font-semibold">
                        {item.title}
                      </h3>
                    )}

                    {item?.description && (
                      <div className="leading-7">
                        <DangerousHtml html={item.description} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
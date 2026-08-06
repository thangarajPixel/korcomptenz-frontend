"use client";

import { useState } from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "../ui/dangerous-html";

const ChecklistSection = ({
  data,
}: {
  data: ChecklistSectionType;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section>
        <div className="container-md py-16">
          <div className="relative overflow-hidden rounded-[32px] border border-[#E6EEF7] bg-gradient-to-br from-white via-[#F8FCFF] to-[#F2FBF8] shadow-xl">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#26A17C]/10 blur-3xl"></div>
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#0B5ED7]/10 blur-3xl"></div>
            <div className="relative grid items-center gap-14 px-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-14">
              <div className="flex flex-col gap-6">
                {data?.title && (
                  <h2 className="max-w-3xl text-[#1F2B45]">
                    {data.title}
                  </h2>
                )}
                {data?.description && (
                  <div className="blog-content max-w-2xl text-[#4B5563]">
                    <DangerousHtml html={data.description} />
                  </div>
                )}
                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-3 rounded-full bg-[#26A17C] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#208A6A]"
                  >
                    {data.buttonText}
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#26A17C]/10 blur-3xl"></div>
                <div className="absolute -left-6 bottom-0 h-40 w-40 rounded-full bg-[#0B5ED7]/10 blur-3xl"></div>
                <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
                  <KorcomptenzImage
                    src={data.image}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
            style={{ maxHeight: "90vh" }}
          >
            <div className="flex items-start justify-between px-8 py-8">
              {data?.title && <h2>{data.title}</h2>}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl font-light text-gray-600 transition-all hover:bg-[#26A17C] hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="overflow-y-auto px-8 pb-8">
              <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-8">
                {data?.altiarisgridlist?.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[15px] rounded-[12px] border-l-[5px] border-[#0B5ED7] bg-[#EDF6FF] px-[18px] py-[15px]"
                  >
                    <div className="flex h-[38px] w-[38px] min-w-[38px] items-center justify-center rounded-full bg-[#0B5ED7] text-white">
                      <span className="text-[16px] font-bold leading-none">
                        {item.number}
                      </span>
                    </div>
                    <div className="flex-1 text-[16px] font-medium leading-[1.5] text-[#333333]">
                      {item?.description && (
                        <DangerousHtml
                          html={item.description}
                          className="[&>p]:m-0 [&>p]:inline [&>p]:text-[16px] [&>p]:font-medium [&>p]:leading-[1.5] [&_span]:text-inherit"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChecklistSection;
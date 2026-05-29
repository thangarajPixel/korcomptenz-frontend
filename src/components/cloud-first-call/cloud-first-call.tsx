"use client";

import { useRef, useState, useEffect } from "react";
import { DangerousHtml } from "../ui/dangerous-html";

const STEPS_KEY = ["listOne", "listTwo", "listThree", "listFour", "listFive"] as const;

const CloudFirstCall = ({ data }: { data: CloudFirstCallType }) => {
  const steps = STEPS_KEY.map((key) => data?.[key]).filter(Boolean);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineWidth(100);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);
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

      {/* ── DESKTOP: horizontal timeline ── */}
      <div ref={lineRef} className="hidden md:block mt-8 px-10 mb-14">
        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
        >
          {/* Row 1: Circles with ONE full-width line */}
          <div
            className="relative col-span-5 flex items-center justify-between"
            style={{ gridColumn: `1 / -1` }}
          >

            {/* ✅ Single animated line — grows left to right */}
            <div className="absolute top-1/2 h-px -translate-y-1/2 overflow-hidden" style={{
              left: `calc(${100 / steps.length /
                2}%)`, right: `calc(${100 / steps.length / 2}%)`
            }}>
              <div className="h-full bg-[#5A5A5A] transition-all duration-[2000ms] ease-in-out" style={{
                width: `${lineWidth}%`
              }} />
            </div>

            {/* Circles evenly spaced */}
            {steps.map((step, index) => {
              const isFirst = index === 0;
              return (
                <div key={`circle-${index}`} className="relative z-10 flex justify-center py-4"
                  style={{ width: `${100 / steps.length}%` }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-[18px] font-semibold border
                ${isFirst
                        ? "bg-[#2AAC94] text-white border-[#2AAC94]"
                        : "bg-white text-[#242424] border-[#242424]"
                      }`}
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Content */}
          {steps.map((step, index) => (
            <div key={`content-${index}`} className="flex flex-col items-center text-center px-3 pt-2">
              {step?.title && (
                <DangerousHtml
                  html={step.title}
                  className="text-[#242424] text-[20px] font-semibold -mb-1
              [&_p]:font-semibold [&_p]:text-[#242424]"
                />
              )}
              {step?.description && (
                <DangerousHtml
                  html={step.description}
                  className="text-[#242424] text-[15px] font-normal leading-[1.5] mb-3 max-w-[180px]
              [&_p]:text-[#242424]"
                />
              )}
              {step?.duration && (
                <DangerousHtml
                  html={step.duration}
                  className="inline-flex [&_p]:inline-flex [&_p]:items-center [&_p]:justify-center
              [&_p]:text-[#5647D8] [&_p]:text-[13px] [&_p]:font-semibold
              [&_p]:bg-[#EEF0FF] [&_p]:rounded-full [&_p]:px-3 [&_p]:py-1"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: vertical timeline ── */}
      <div className="flex md:hidden flex-col mt-8">
        {steps.map((step, index) => {
          const isFirst = index === 0;
          const isLast = index === steps.length - 1;
          return (
            <div key={step?.id ?? index} className="flex gap-4">
              {/* Left: circle + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[16px] font-semibold border shrink-0
                    ${isFirst
                      ? "bg-[#2AAC94] text-white border-[#2AAC94]"
                      : "bg-white text-[#242424] border-[#242424]"
                    }`}
                >
                  {index + 1}
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-[#242424] my-1 min-h-[40px]" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 flex-1">
                {step?.title && (
                  <DangerousHtml
                    html={step.title}
                    className="text-[#242424] text-[18px] font-semibold mb-1
                      [&_p]:font-semibold [&_p]:text-[#242424]"
                  />
                )}
                {step?.description && (
                  <DangerousHtml
                    html={step.description}
                    className="text-[#242424] text-[14px] font-normal leading-[1.6] mb-3
                      [&_p]:text-[#242424]"
                  />
                )}
                {step?.duration && (
                  <DangerousHtml
                    html={step.duration}
                    className="inline-flex [&_p]:inline-flex [&_p]:items-center [&_p]:justify-center
                      [&_p]:text-[#5647D8] [&_p]:text-[13px] [&_p]:font-semibold
                      [&_p]:bg-[#EEF0FF] [&_p]:rounded-full [&_p]:px-3 [&_p]:py-1"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CloudFirstCall;

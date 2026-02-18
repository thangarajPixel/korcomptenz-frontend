"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { DangerousHtml } from "../ui/dangerous-html";
import KorcomptenzImage from "../korcomptenz-image";

const FabconComposableIntelligence = ({
  data,
}: {
  data: ComposableIntelligenceType;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = data?.list[activeIndex];
  const inactiveItems = data?.list?.filter((_, i) => i !== activeIndex);

  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-[#07003B]"
        style={{ backgroundImage: `url(${data?.backgroundImage})` }}
      />

      <div className="container-md">
        {/* Title */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 text-center">
          <h2 className="text-white">{data?.title1}</h2>
          <h2 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
            {data?.title2}
          </h2>
          <h2 className="text-white">{data?.title3}</h2>
        </div>

        {/* ───────────────── MOBILE LAYOUT ───────────────── */}
        <div className="md:hidden space-y-6">
          {/* Active card */}
          <div className="relative h-[360px] rounded-3xl overflow-hidden">
            <KorcomptenzImage
              src={activeItem?.mainImage}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                {activeItem?.title}
              </h3>
              <DangerousHtml
                html={activeItem?.description}
                className="text-base leading-7"
              />
            </div>
          </div>

          {/* Slider cards */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {inactiveItems?.map((item) => {
              const index = data?.list?.indexOf(item);

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative min-w-[220px] h-[140px] rounded-2xl overflow-hidden flex-shrink-0"
                >
                  <KorcomptenzImage
                    src={item?.subImage}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                    {item?.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ───────────────── DESKTOP LAYOUT ───────────────── */}
        <div className="hidden md:flex gap-6 h-[420px]">
          {data?.list?.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500",
                  isActive ? "flex-[3]" : "flex-[1]",
                )}
              >
                <KorcomptenzImage
                  src={isActive ? item.mainImage : item.subImage}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {isActive ? (
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-3xl font-semibold mb-2">
                      {item?.title}
                    </h3>
                    <DangerousHtml
                      html={item.description}
                      className="text-lg leading-7"
                    />
                  </div>
                ) : (
                  <div className="absolute inset-x-0 bottom-6 flex justify-center items-end">
                    <span
                      className="text-white text-[32px] font-semibold whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {item?.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FabconComposableIntelligence;

"use client";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

export default function SmartForgeBuild({
  data,
}: {
  data: WhyKorcomptenzType;
}) {
  return (
    <section className="container-md ">
      {/* Header */}
      <div className="text-center md:mb-10">
        <h2 className="text-5xl md:text-6xl font-semibold text-[#1e2939]  leading-8 mb-8">
          {data?.title}
        </h2>
        <p className="text-md md:text-lg font-normal  mb-2 text-[#1e2939]">
          {data?.subtitle}
        </p>
      </div>

      {/* Cards Grid */}
      <div className={cn("grid grid-cols-2 md:grid-cols-5  gap-5 ")}>
        {data.list.map((card) => (
          <div
            className="shadow-lg rounded-2xl p-2 py-5 md:p-8 space-y-3 "
            key={`${card?.id}-${card?.title}`}
          >
            {card?.image && (
              <div className="flex items-center justify-center">
                <KorcomptenzImage
                  src={card?.image}
                  width={100}
                  height={100}
                  className="size-20 "
                />
              </div>
            )}

            {card?.title && (
              <h3 className="text-md md:text-xl font-semibold text-[#1e2939] text-left">
                {card?.title}
              </h3>
            )}

            {card?.description && (
              <DangerousHtml
                html={card?.description}
                className="text-left leading-7.5 text-md md:text-lg text-[#1e2939]"
              />
            )}

            {card?.buttontext && (
              <Button
                variant="ghost"
                arrow
                className="text-primary hover:text-primary justify-start text-md hover:bg-transparent p-0"
              >
                {card.buttontext}
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

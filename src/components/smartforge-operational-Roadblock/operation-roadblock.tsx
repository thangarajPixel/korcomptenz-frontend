"use client";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

export default function OperationalRoadblock({
  data,
}: {
  data: WhyKorcomptenzType;
}) {
  return (
    <section
      data-debug="page-componets.smart-forge-operational-roadblock"
      className={
        data?.isBgGrey ? "bg-[#e7e7e7] py-12 container-nav " : "container-md"
      }
    >
      {/* Header */}
      <div className="text-center md:mb-10">
        <h2 className="text-5xl md:text-6xl font-semibold text-[#1e2939] mb-2 leading-8">
          {data.title}
        </h2>
        <p className="text-xl font-normal text-[#1e2939] mb-2">
          {data.description}
        </p>
      </div>

      {/* Cards Grid */}
      {/* Cards Grid */}
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-6",
          data?.isBgGrey ? "md:container-md" : "",
        )}
      >
        {data.list.map((card) => (
          <div
            key={`${card?.id}-${card?.title}`}
            className={cn(
              " rounded-2xl p-6 flex gap-6 items-start",
              data?.isBgGrey ? "bg-white" : "bg-[#E9EEEA]",
            )}
          >
            {card?.number && (
              <span className="text-[60px] font-normal text-foreground leading-none">
                {card?.number}
              </span>
            )}

            {/* Content */}
            <div className="space-y-2">
              {card?.title && (
                <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-snug">
                  {card?.title}
                </h3>
              )}

              <DangerousHtml
                html={card?.description}
                className="text-[#1e2939] text-md md:text-lg leading-7.5"
              />

              {card?.buttontext && (
                <Button
                  variant="ghost"
                  arrow
                  className="text-primary hover:text-primary justify-start text-sm hover:bg-transparent p-0"
                >
                  {card.buttontext}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

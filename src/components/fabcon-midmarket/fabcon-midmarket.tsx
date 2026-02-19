"use client";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

export default function FabconMidMarket({
  data,
}: {
  data: WhyKorcomptenzType;
}) {
  return (
    <section className=" bg-muted py-12 ">
      <div className="container-md">
        {/* Header */}
        <div className="text-start md:mb-6">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-2 leading-8 mb-8">
            {data?.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className={cn("grid grid-cols-2 md:grid-cols-4  gap-4 ")}>
          {data.list.map((card) => (
            <div
              className="rounded-2xl py-5  space-y-3 "
              key={`${card?.id}-${card?.title}`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center size-24 rounded-full border border-white">
                <KorcomptenzImage
                  src={card?.image}
                  width={65}
                  height={65}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-md md:text-xl font-semibold text-[#1e2939] text-left">
                {card?.title}
              </h3>

              {/* Description */}
              <DangerousHtml
                html={card?.description}
                className="text-left leading-7.5 text-md md:text-lg text-[#1e2939]"
              />

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
      </div>
    </section>
  );
}

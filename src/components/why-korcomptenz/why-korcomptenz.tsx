"use client";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

export default function WhyKorcomptenz({ data }: { data: WhyKorcomptenzType }) {
  return (
    <section
      data-debug="page-componets.why-we-are"
      className={`container-md ${
        data?.isBgGray ? "bg-gray-100 py-10 md:p-10 rounded-3xl" : ""
      }`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h5 className="text-5xl md:text-6xl font-semibold text-foreground mb-2">
          {data.title}
        </h5>
        <p className="text-xl font-normal text-foreground mb-2">
          {data.description}
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-5  gap-5 ",
          data.isPerRowFive ? "md:grid-cols-5" : "md:grid-cols-3"
        )}
      >
        {data.list.map((card) => (
          <div
            className="hover:bg-light-gray rounded-2xl p-3  py-5 md:p-5 space-y-3"
            key={`${card?.id}-${card?.title}`}
          >
            {/* Icon */}
            <div>
              <KorcomptenzImage
                src={card?.image}
                width={100}
                height={100}
                className="size-20 "
              />
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-black">{card?.title}</h3>

            {/* Description */}
            <DangerousHtml html={card?.description} />

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

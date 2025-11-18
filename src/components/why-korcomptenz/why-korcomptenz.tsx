"use client";
import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";
import { DangerousHtml } from "../ui/dangerous-html";

export default function WhyKorcomptenz({ data }: { data: WhyKorcomptenzType }) {
  return (
    <div className="container-md">
      {/* Header */}
      <div className="text-center mb-16">
        <h5 className="text-5xl md:text-5xl font-semibold text-foreground mb-2">
          {data.title}
        </h5>
        <p className="text-xl font-normal text-foreground mb-2">
          {data.description}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5  gap-5 ">
        {data.list.map((card, index) => (
          <div className=" " key={index}>
            {/* Icon */}
            <div>
              <KorcomptenzImage
                src={card?.image}
                width={100}
                height={100}
                className="size-20 mt-5"
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
    </div>
  );
}

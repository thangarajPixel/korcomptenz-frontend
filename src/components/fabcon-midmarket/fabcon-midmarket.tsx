"use client";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "../korcomptenz-image";

import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";

export default function FabconMidMarket({
  data,
}: {
  data: WhyKorcomptenzType;
}) {
  return (
    <section
      className="py-12"
      style={{
        backgroundColor: data?.backgroundColor || "#313941",
      }}
    >
      <div className="container-md">
        {/* Header */}
        <div className="text-start md:mb-6">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-2 leading-8 mb-8">
            {data?.title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          className={cn(
            "grid grid-cols-2  gap-4 ",
            data?.noOfColumn ? `md:${data?.noOfColumn}` : "md:grid-cols-4",
          )}
        >
          {data.list.map((card) => (
            <div
              className="rounded-2xl py-5  space-y-3 "
              key={`${card?.id}-${card?.title}`}
            >
              {/* Icon */}
              <div className="flex items-start justify-start ">
                <KorcomptenzImage
                  src={card?.image}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              {card?.title && (
                <h3 className="text-md md:text-xl font-semibold text-white mb-2 text-left">
                  {card?.title}
                </h3>
              )}

              {/* Description */}
              <DangerousHtml
                html={card?.description}
                className="text-left leading-7.5 text-md md:text-lg text-white"
              />

              {card?.buttontext && (
                <ButtonLink
                  link={card?.buttonLink || "#"}
                  buttonProps={{
                    variant: "ghost",
                    arrow: true,
                    className:
                      "text-primary hover:text-primary justify-start text-md hover:bg-transparent p-0",
                  }}
                >
                  {" "}
                  {card.buttontext}
                </ButtonLink>
                // <Button
                //   variant="ghost"
                //   arrow
                //   className="text-primary hover:text-primary justify-start text-md hover:bg-transparent p-0"
                // >

                // </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

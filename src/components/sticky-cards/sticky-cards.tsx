"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import KorcomptenzImage from "../korcomptenz-image";
import Link from "next/link";
import { useMobile } from "@/utils/custom-hooks";

export default function StickyCards({
  className,
  stickyCards,
}: {
  className?: string;
  stickyCards: StickyCardsType;
}) {
  const isMobile = useMobile();
  const cardData = stickyCards?.list;

  return (
    <section data-debug={stickyCards?.__component} className="relative">
      <div className="relative container-md">
        <div className="sm:sticky relative  sm:top-28 top-0 flex justify-between px-4 xl:mb-[80px] sm:mb-5 mb-5">
          <h4 className="font-semibold lg:text-8xl text-6xl lg:leading-[52px] tracking-[0]">
            {stickyCards?.title}
          </h4>

          {stickyCards?.buttonText && (
            <Link href={stickyCards?.link || "/"}>
              <Button
                className="hidden sm:inline-flex variant:default text-4xl"
                size="xl"
                arrow={true}
              >
                {stickyCards?.buttonText}
              </Button>
            </Link>
          )}
        </div>
        {cardData?.map((card, index) => (
          <div
            key={`sticky-card-${card?.id}`}
            className={cn(
              "sm:sticky relative sm:top-48 top-0 ",
              `z-[${index + 10}] sm:mb-1`
              // index !== cardData.length - 1 ? "mb-[8rem]" : "mb-[0]"
            )}
          >
            <div className="flex items-center justify-center px-4 md:py-0 py-4 lg:py-6">
              <Card
                className={cn(
                  "overflow-hidden bg-light-white border-0 w-full py-0 h-auto lg:min-h-[28rem]",
                  "flex flex-col md:flex-row md:items-stretch rounded-4xl ",
                  index && "sm:shadow-xl shadow-none",
                  className
                )}
              >
                {/* ID */}
                <div className="hidden md:block text-lg pl-5 pt-14 font-medium text-custom-black-1 ms-8 mt-3  uppercase tracking-wide">
                  {card?.specificId}
                </div>

                {/* Content */}
                <div className="p-2 lg:pt-14 lg:pb-16 lg:px-10 flex flex-col justify-between order-2 md:flex-1 md:order-none">
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                      {card?.title}
                    </h2>
                    <p className="text-custom-black-1  text-lg md:xl leading-relaxed">
                      {card?.description}
                    </p>
                  </div>
                  {card?.buttonText && (
                    <Link href={card?.link || "/"}>
                      <Button
                        size="xl"
                        className={cn(
                          "mt-3 mb-3 rounded-full ",
                          !isMobile
                            ? "w-fit text-4xl px-6"
                            : " text-xs px-2  bg-white text-primary border border-primary h-[44px] w-[155px]"
                        )}
                        arrow={true}
                      >
                        {card?.buttonText}
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Visual Section */}
                {card?.image && (
                  <div
                    className={cn(
                      "relative overflow-hidden h-full order-1 md:h-auto md:w-96 md:flex-shrink-0 md:order-none"
                    )}
                  >
                    <KorcomptenzImage
                      className="w-full h-full object-cover"
                      src={card?.image}
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center sm:hidden relative mt-5">
          {stickyCards?.buttonText && (
            <Link href={stickyCards?.link || "/"}>
              <Button className="w-full lg:w-fit " size="xl" arrow={true}>
                {stickyCards?.buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

import React from "react";

import { Button } from "../ui/button";
import InspireSectionCard from "./_utils/inspire-section-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const InspireSection = ({
  inspireSection,
}: {
  inspireSection: InspireSectionType;
}) => {
  const cards = inspireSection?.list;
  const distributeCards = React.useCallback(() => {
    const len = cards?.length;
    switch (len) {
      case 2:
        return { left: [cards?.[0]], center: [cards?.[1]], right: [] };
      case 3:
        return {
          left: [cards?.[0]],
          center: [cards?.[1]],
          right: [cards?.[2]],
        };
      case 4:
        return {
          left: [cards?.[0]],
          center: [cards?.[1]],
          right: cards?.slice(2),
        };
      case 5:
        return {
          left: cards?.slice(0, 2),
          center: [cards?.[2]],
          right: cards?.slice(3),
        };
      case 6:
        return {
          left: cards?.slice(0, 2),
          center: cards?.slice(2, 4),
          right: cards?.slice(4),
        };
      case 7:
        return {
          left: cards?.slice(0, 2),
          center: cards?.slice(2, 4),
          right: cards?.slice(4),
        };
      case 8:
        return {
          left: cards?.slice(0, 3),
          center: cards?.slice(3, 5),
          right: cards?.slice(5),
        };
      default:
        const mid = Math.floor((len || 0) / 2);
        return {
          left: cards?.slice(0, mid),
          center: [cards[mid]],
          right: cards?.slice(mid + 1),
        };
    }
  }, [cards]);

  const { left, center, right } = distributeCards();
  const centerSpan =
    left.length > 0 && right.length > 0 ? "lg:col-span-1" : "lg:col-span-2";
  return (
    <section
      className="container-md"
      data-debug={"page-componets.inspire-section"}
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="flex lg:hidden  ">
          <h5 className="text-6xl font-bold text-custom-gray mb-6 text-balance">
            {inspireSection?.title}
          </h5>
        </div>
        <div className="lg:col-span-1 flex flex-col  gap-6 ">
          {left?.map((card) => (
            <InspireSectionCard
              key={`inspire-section-${card.id}`}
              card={card}
            />
          ))}
        </div>
        <div className={cn("flex flex-col gap-5 ", centerSpan)}>
          <div className="hidden lg:flex flex-col text-center items-center justify-center ">
            <h5 className="text-6xl font-bold text-custom-gray mb-6 text-balance">
              {inspireSection?.title}
            </h5>
            {inspireSection?.buttonText && (
              <Link href={inspireSection?.link || "#"}>
                <Button
                  size="xl"
                  arrow={true}
                  className="variant:default lg:px-4 xl:px-8 py-2 text-4xl rounded-full inline-flex"
                >
                  {inspireSection?.buttonText}
                </Button>
              </Link>
            )}
          </div>

          {center?.map((card) => (
            <InspireSectionCard
              key={`inspire-section-${card.id}`}
              card={card}
            />
          ))}
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6 ">
          {right?.map((card) => (
            <InspireSectionCard
              key={`inspire-section-${card.id}`}
              card={card}
            />
          ))}
        </div>
      </div>

      <div className="flex lg:hidden justify-center w-full mt-8">
        {inspireSection?.buttonText && (
          <Link href={inspireSection?.link || "#"}>
            <Button
              size="lg"
              arrow={true}
              className="variant:default text-md px-2 py-3 rounded-full w-full inline-flex"
            >
              {inspireSection?.buttonText}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default InspireSection;

import React from "react";

import { Button } from "../ui/button";
import InspireSectionCard from "./_utils/inspire-section-card";
import { cn } from "@/lib/utils";

const InspireSection = ({ inspireSection }: { inspireSection: InspireSectionType }) => {

  const cards = inspireSection.list;
  const distributeCards = React.useCallback(() => {
    const len = cards?.length;
    if (len === 2) return { left: [cards?.[0]], center: [cards?.[1]], right: [] };
    if (len === 3) return { left: [cards?.[0]], center: [cards?.[1]], right: [cards?.[2]] };
    if (len === 4) return { left: [cards?.[0]], center: [cards?.[1]], right: cards?.slice(2) };
    if (len === 5) return { left: cards?.slice(0, 2), center: [cards?.[2]], right: cards?.slice(3) };
    // fallback: try to balance
    const mid = Math.floor((len || 0) / 2);
    return { left: cards?.slice(0, mid), center: [cards[mid]], right: cards?.slice(mid + 1) };
  }, [cards]);

  const { left, center, right } = distributeCards();
  const centerSpan =
    left.length > 0 && right.length > 0 ? "lg:col-span-1" : "lg:col-span-2";
  return (
    <div className="container-md mt-0 md:mt-16 py-4 ">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col h-full ">
          {left?.map((card) => <InspireSectionCard key={`inspire-section-${card.id}`} card={card} />)}
        </div>
        <div className={cn("flex flex-col gap-5 ", centerSpan)}>
          <div className="hidden lg:flex flex-col text-center items-center justify-center h-full">
            <h1 className="text-6xl font-bold text-custom-gray mb-6 text-balance">
              {inspireSection.title}
            </h1>
            <Button
              size="xl"
              arrow={true}
              className="variant:default lg:px-4 xl:px-8 py-2 text-4xl rounded-full inline-flex"
            >
              {inspireSection.buttonText}
            </Button>
          </div>
          {center?.map((card) => <InspireSectionCard key={`inspire-section-${card.id}`} card={card} />)}
        </div>
        <div className="lg:col-span-1 flex flex-col justify-between gap-6 ">
          {right?.map((card) => (
            <InspireSectionCard key={`inspire-section-${card.id}`} card={card} />
          ))}
        </div>
      </div>
      <div className="flex lg:hidden justify-center w-full mt-8">
        <Button
          size="lg"
          arrow={true}
          className="variant:default text-md px-2 py-3 rounded-full w-full inline-flex"
        >
          {inspireSection.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default InspireSection;






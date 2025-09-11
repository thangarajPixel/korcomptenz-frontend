import React from "react";
import { jsonData } from "@/utils/helper";
import { Button } from "../ui/button";
import InspireSectionCard from "./_utils/inspire-section-card";

const Inspiresection = () => {
  const heading = jsonData.insprieSection.mainheading;
  const cards = jsonData.insprieSection.cards;

  return (
    <div className="container-md mt-0 md:mt-16 py-4">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col h-full ">
         {cards.slice(0,1).map((card)=><InspireSectionCard key={card.id} card={card} />)}
        </div>
        <div className="lg:col-span-1 flex flex-col gap-5 ">
          <div className="hidden lg:flex flex-col text-center items-center justify-center h-full">
            <h1 className="text-2xl font-bold text-custom-gray mb-6 text-balance">
              {heading.title}
            </h1>
            <Button
              size="xl"
              arrow={true}
              className="variant:default lg:px-4 xl:px-8 py-2 text-lg rounded-full inline-flex"
            >
              {heading.buttonText}
            </Button>
          </div>
         { cards.slice(1,2).map((card)=><InspireSectionCard key={card.id} card={card} />)}
        </div>
        <div className="lg:col-span-1 flex flex-col justify-between gap-6 ">
          {cards.slice(2,4).map((card) => (
            <InspireSectionCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <div className="flex lg:hidden justify-center w-full mt-8">
        <Button
          size="lg"
          arrow={true}
          className="variant:default text-xs px-2 py-3 rounded-full w-full inline-flex"
        >
          {heading.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Inspiresection;






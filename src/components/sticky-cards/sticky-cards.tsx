"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "../korcomptenz-image";

const cardData = [
  {
    id: "001",
    title:
      "How did an optical manufacturer improve process performance by 50%?",
    description:
      "We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O.",
    buttonText: "Dive Deeper",
    image: "/assets/home/1ff3496e049b548f0f9b9b28ccbefc8f7f22f880.png", // replace with actual path
  },
  {
    id: "002",
    title:
      "What helped a leading Process Industry achieve 30% reduction in delivery time?",
    description:
      "We accelerated this outcome by unifying SAP systems and enabling rapid SLO transition unified three country codes into one platform.",
    buttonText: "Dive Deeper",
    image: "/assets/home/d7bcd5707f3eafcddf4552d420e9401416063ee2.png", // replace with actual path
  },
  {
    id: "003",
    title:
      "How did an industrial manufacturer reduce its IT infrastructure costs by 30%?",
    description:
      "We streamlined manufacturing and built scalable cloud solutions to help them reduce costs and accelerate growth.",
    buttonText: "Dive Deeper",
    image: "/assets/home/520f5641cdab551d39236bc1517c269f8dc87c4a.png", // replace with actual path
  },
];

export default function StickyCards({ className }: { className?: string }) {
  return (
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex justify-between  px-4 xl:mb-[80px] sm:mb-5">
        <h1 className=" font-semibold text-[42px] leading-[52px] tracking-[0]">
          Korcomptenz in action
        </h1>

       <Button className="hidden sm:inline-flex  w-[178px] h-[66px] 
                  variant:default">
  Explore All 
  <ChevronRight className="ml-1 h-5 w-5 transition-transform" />
</Button>

      </div>
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={cn(
            "sticky top-20",
            `z-[${index + 10}] sm:mb-12`
          )}
        >
          <div className="flex items-center justify-center px-4 md:py-0 py-6">
            <Card
              className={cn(
                "overflow-hidden bg-gray-50 border-0 w-full  py-0 h-96   shadow-xl",
                "flex flex-col md:flex-row md:items-stretch rounded-2xl ",
                className
              )}
            >
              {/* ID */}
              <div className="hidden md:block text-sm pl-2 pt-8 font-medium text-gray-500 uppercase tracking-wide">
                {card.id}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between order-2 md:flex-1 md:order-none">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <Button
                  
                  className="mt-6 w-fit  variant:default rounded-full px-6"
                >
                  {card.buttonText}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Visual Section */}
              <div
                className={cn(
                  "relative overflow-hidden h-full order-1 md:h-auto md:w-80 md:flex-shrink-0 md:order-none"
                )}
              >
                <KorcomptenzImage
                  className="w-full h-full  object-cover"
                  src={card.image}
                  alt={card.title}
                  width={1000}
                  height={1000}
                />
              </div>
            </Card>
          </div>
        </div>
      ))}
       <Button className="sm:hidden inline-flex items-center justify-center w-full h-[50px] transition-all duration-300 ease-out hover:bg-white hover:text-primary hover:border-primary border-2 border-transparent">
  Explore All
  <ChevronRight className="ml-1 h-5 w-5 transition-transform" />
</Button>

    </div>
  );
}

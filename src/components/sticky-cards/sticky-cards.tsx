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
    <div className="relative ">
      <div className="relative container-md ">
        <div className="sm:sticky relative  sm:top-28 top-0 flex justify-between px-4 xl:mb-[80px] sm:mb-5 mb-5">
          <h1 className=" font-semibold lg:text-4xl text-2xl lg:leading-[52px] tracking-[0]">
            Korcomptenz in action
          </h1>

          <Button className="hidden sm:inline-flex variant:default text-lg" size="xl">
            Explore All
            <ChevronRight className="ml-1 h-5 w-5 transition-transform" />
          </Button>

        </div>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={cn(
              "sm:sticky relative sm:top-48 top-0 ",
              `z-[${index + 10}] sm:mb-12`
            )}
          >
            <div className="flex items-center justify-center px-4 md:py-0 py-4 lg:py-6">
              <Card
                className={cn(
                  "overflow-hidden bg-light-white border-0 w-full py-0 h-auto lg:min-h-[28rem]",
                  "flex flex-col md:flex-row md:items-stretch rounded-4xl ",
                  index && 'sm:shadow-xl shadow-none',
                  className
                )}
              >
                {/* ID */}
                <div className="hidden md:block text-sm pl-5 pt-14 font-medium text-[#141414] ms-8 mt-3  uppercase tracking-wide">
                  {card.id}
                </div>

                {/* Content */}
                <div className="p-2 lg:pt-14 lg:pb-16 lg:px-10 flex flex-col justify-between order-2 md:flex-1 md:order-none">
                  <div className="space-y-4">
                    <h2 className="text-lg lg:text-2xl font-bold text-black leading-tight">
                      {card.title}
                    </h2>
                    <p className="text-[#141414]  text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Mobile / sm / md */}
                  <div className="block lg:hidden">
                    <Button
                      className="mt-3 mb-3 text-[10px] px-2 rounded-full
               bg-white text-primary border border-primary h-[44px] w-[155px]"
                    >
                      {card.buttonText}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* LG and above */}
                  <div className="hidden lg:block">
                    <Button
                      size="xl"
                      className="mt-3 mb-3 w-fit text-lg px-6 rounded-full"
                    >
                      {card.buttonText}
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>

                </div>

                {/* Visual Section */}
                <div
                  className={cn(
                    "relative overflow-hidden h-full order-1 md:h-auto md:w-96 md:flex-shrink-0 md:order-none"
                  )}
                >
                  <KorcomptenzImage
                    className="w-full h-44 md:h-full object-cover"
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

        <div className="flex items-center justify-center sm:hidden relative mt-5">
          <Button size='xl' className="w-full lg:w-fit " arrow={true}>
            Explore All
          </Button>
        </div>
      </div>
    </div>
  );
}

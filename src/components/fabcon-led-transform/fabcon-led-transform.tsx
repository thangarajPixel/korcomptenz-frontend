"use client";

import React, { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";
import Link from "next/link";

const FabconLedTransform = ({ data }: { data: FabconLedTransformType }) => {
  const firstValue = data?.list?.[0] ? `item-${data.list[0].id}` : undefined;

  const [activeValue, setActiveValue] = useState<string | undefined>(
    firstValue,
  );

  const activeId = activeValue
    ? Number(activeValue.split("-")[1])
    : data?.list?.[0]?.id;

  const activeItem = data?.list?.find((item) => item.id === activeId);

  return (
    <div className="container-md">
      {/* TITLE */}
      <div className="grid md:flex items-start gap-2 md:whitespace-nowrap mb-12">
        <h2 className="text-foreground">{data?.title1}</h2>
        <h2 className="bg-gradient-to-r from-[#1F849F] to-[#6AC494] bg-clip-text text-transparent">
          {data?.title2}
        </h2>
        <h2 className="text-foreground">{data?.title3}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-x-10 gap-y-10">
        {/* IMAGE SECTION */}
        <div className="relative flex items-start justify-center">
          <div className="relative inline-block w-full">
            {activeItem?.image && (
              <KorcomptenzImage
                src={activeItem.image}
                width={478}
                height={755}
                className="relative z-10 w-full h-auto object-cover object-top rounded-2xl"
              />
            )}

            <div
              className="absolute -bottom-8 -right-8 z-0 w-[55%] h-[40%] rounded-2xl hidden md:block"
              style={{ backgroundColor: "#2D2B8F" }}
            />

            {activeItem?.image && (
              <div className="absolute -bottom-8 -right-8 z-[5] w-[55%] h-[40%] rounded-2xl overflow-hidden opacity-60 hidden md:block">
                <KorcomptenzImage
                  src={data?.backgroundImage}
                  width={350}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:px-5 space-y-8">
          <Accordion
            type="single"
            collapsible
            value={activeValue}
            onValueChange={setActiveValue}
            className="w-full"
          >
            {data?.list?.map((item) => {
              const value = `item-${item.id}`;
              const isActive = activeValue === value;

              return (
                <AccordionItem
                  key={value}
                  value={value}
                  className="relative rounded-2xl p-2 md:px-5 my-5 border border-[#1EBFA1] data-[state=open]:bg-[#f1f9f9]"
                >
                  {/* TOP TRIGGER */}
                  <AccordionTrigger className="flex justify-between items-start text-left text-lg md:text-4xl font-semibold leading-7 md:leading-9 text-foreground">
                    <span>{item.title}</span>

                    <ChevronDownIcon
                      className={cn(
                        "size-10 p-2 text-black rounded-full transition-all duration-200",
                        isActive
                          ? "opacity-0 scale-90 pointer-events-none"
                          : "opacity-100 scale-100",
                      )}
                    />
                  </AccordionTrigger>

                  {/* CONTENT */}
                  <AccordionContent className="relative flex flex-col bg-[#f1f9f9]">
                    {item?.description && (
                      <DangerousHtml
                        className="mt-2 text-lg text-[#0E0E0E] leading-7.5"
                        html={item.description}
                      />
                    )}
                  </AccordionContent>

                  {/* BOTTOM TRIGGER (DIRECT CHILD ✅) */}
                  {isActive && (
                    <AccordionTrigger
                      className="
        flex justify-end pt-3
        text-black
        data-[state=closed]:hidden
      "
                    >
                      <ChevronDownIcon className="size-8 p-1 rotate-180 transition-transform" />
                    </AccordionTrigger>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* BUTTON */}
          {data?.buttonText && (
            <>
              <div className="pt-4 max-w-full hidden md:block">
                <ButtonLink
                  link={data?.buttonLink || "#"}
                  buttonProps={{
                    size: "xl",
                    arrow: true,
                    className:
                      "w-full sm:w-auto text-center whitespace-normal break-words px-4 sm:!py-3 md:!py-0",
                  }}
                >
                  {data?.buttonText}
                </ButtonLink>
              </div>

              <div className="block md:hidden">
                <Link href={data?.buttonLink || "#"}>
                  <button
                    type="button"
                    className="
                      inline-flex items-center justify-center gap-2
                      rounded-full
                      bg-primary text-primary-foreground
                      border-2 border-transparent
                      shadow-xs
                      px-4 py-6
                      h-18
                      text-lg font-normal
                      transition-all duration-300 ease-out
                      hover:bg-white hover:text-primary hover:border-primary
                      whitespace-normal break-words text-center
                    "
                  >
                    <span className="flex items-center gap-1">
                      {data?.buttonText}
                      <ChevronRight className="size-5" strokeWidth={3} />
                    </span>
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FabconLedTransform;

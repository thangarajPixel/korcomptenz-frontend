"use client";
import React, { useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronDownIcon } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";

const FabconLedTransform = ({ data }: { data: FabconLedTransformType }) => {
  const firstValue = data?.list?.[0] ? `item-${data.list[0].id}` : undefined;

  const [activeValue, setActiveValue] = useState<string | undefined>(
    firstValue,
  );

  const handleToggle = (value: string) => {
    setActiveValue((prev) => (prev === value ? undefined : value));
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-x-10 gap-y-10">
        {/* IMAGE SECTION */}
        <div className="relative">
          {/* Background image (small accent only) */}
          <div className="absolute -bottom-20 -right-7 z-0 hidden lg:block">
            <KorcomptenzImage
              src={data?.backgroundImage}
              width={350}
              height={400}
              className="w-[350px] h-[400px] object-contain rounded-2xl opacity-80"
            />
          </div>

          {/* Foreground image (FULL image visible) */}
          <div className="relative z-10 flex justify-center">
            <KorcomptenzImage
              src={data?.image}
              width={478}
              height={755}
              className="
        w-full
        max-h-[680px]
        md:max-h-[755px]
        object-contain
        rounded-2xl
      "
            />
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
                  className="rounded-2xl p-2 md:px-5 my-5 border border-[#1EBFA1] data-[state=open]:bg-white"
                >
                  {/* TITLE + INACTIVE ARROW */}
                  <AccordionTrigger
                    onClick={() => handleToggle(value)}
                    className="flex justify-between items-start text-left text-lg md:text-4xl font-semibold leading-7 md:leading-9 text-foreground"
                  >
                    <span>{item.title}</span>

                    {/* Arrow near title (inactive only) */}
                    <ChevronDownIcon
                      className={cn(
                        "size-10 p-2 text-black rounded-full transition-all duration-200",
                        isActive
                          ? "opacity-0 scale-90 pointer-events-none"
                          : "opacity-100 scale-100",
                      )}
                    />
                  </AccordionTrigger>

                  {/* DESCRIPTION + ACTIVE ARROW */}
                  <AccordionContent className="flex flex-col">
                    {item?.description && (
                      <DangerousHtml
                        className="mt-2 text-lg text-[#0E0E0E] leading-7.5"
                        html={item.description}
                      />
                    )}

                    {/* Arrow near description (active only) */}
                    {isActive && (
                      <div className="flex justify-end pt-3">
                        <button
                          onClick={() => handleToggle(value)}
                          className="focus:outline-none"
                        >
                          <ChevronDownIcon className="size-8 p-1 text-black rotate-180 transition-transform" />
                        </button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* BUTTON */}
          {data?.buttonText && (
            <div className="pt-4 max-w-full ">
              <ButtonLink
                link={data?.buttonLink || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                  className:
                    "w-full sm:w-auto text-center whitespace-normal break-words px-4 py-2 md:py-0",
                }}
              >
                {data?.buttonText}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FabconLedTransform;

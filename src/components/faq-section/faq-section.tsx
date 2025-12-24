"use client";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { DangerousHtml } from "../ui/dangerous-html";
import { cn } from "@/lib/utils";

const FaqSection = ({ faqData }: { faqData: FaqSectionType }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="container-md" data-debug={"page-componets.faq-title"}>
      <h5 className="text-6xl md:text-9xl font-semibold text-foreground mb-4">
        {faqData?.title}
      </h5>
      <Accordion type="single" collapsible className="w-full">
        {faqData?.faq?.map((item) => (
          <AccordionItem
            key={`faq-item-${item?.id}`}
            value={`item-${item?.id}`}
            className={`rounded-2xl p-4 md:p-6 my-6 data-[state=open]:bg-light-gray bg-custom-gray-8`}
          >
            <AccordionTrigger
              className="cursor-pointer text-lg md:text-5xl font-semibold w-full text-left flex justify-between items-start text-foreground leading-9"
              onClick={() => handleToggle(item?.id)}
            >
              <span>{item?.title}</span>
              <ChevronDownIcon
                className={cn(
                  "size-10 p-2 text-white rounded-full bg-primary pointer-events-none  shrink-0 translate-y-0.5 transition-transform duration-200 opacity-20",
                  activeId === item?.id && "opacity-100"
                )}
              />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {item?.description && (
                <DangerousHtml
                  className="mt-2 text-lg text-answer-color"
                  html={item?.description}
                />
              )}
              {item?.isHasCustomList && item?.list && item.list.length > 0 && (
                <ul className="mt-2 w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {item.list.map((listItem) => (
                    <li
                      key={`list-item-${listItem?.id}`}
                      className="text-center flex items-center flex-col gap-3 bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <h4 className="text-lg md:text-5xl font-semibold">
                        {listItem?.title}
                      </h4>
                      <p className="text-base md:text-lg lg:text-xl text-answer-color leading-relaxed flex-1">
                        {listItem?.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;

"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import DangerousHtml from "../ui/dangerous-html";

const FaqSection = ({ faqData }: { faqData: FaqSectionType }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="container-md" data-debug={"page-componets.faq-title"}>
      <h1 className="text-6xl md:text-9xl font-semibold text-foreground mb-4">
        {faqData?.title}
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {faqData?.faq?.map((item) => (
          <AccordionItem
            key={`faq-item-${item?.id}`}
            value={`item-${item?.id}`}
            className={`rounded-2xl p-4 md:p-6 my-6 data-[state=open]:bg-light-gray bg-custom-gray-8`}
          >
            <AccordionTrigger
              className="cursor-pointer text-lg md:text-5xl font-semibold w-full text-left flex justify-between items-start text-foreground"
              onClick={() => handleToggle(item?.id)}
            >
              <span>{item?.title}</span>
              <ChevronDownIcon className="size-10 p-2 text-white rounded-full bg-primary pointer-events-none  shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {item?.description && <DangerousHtml className="mt-2 text-lg text-answer-color" html={item?.description} />}
            </AccordionContent>
          </AccordionItem>
        ))}

      </Accordion>

    </section>
  );
};

export default FaqSection;

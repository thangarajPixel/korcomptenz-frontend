"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = ({ faqData }: { faqData: FaqSectionType }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container-md">
      <h1 className="text-6xl md:text-9xl font-semibold text-foreground mb-4">
        {faqData.title}
      </h1>

      {faqData.faq.map((item) => (
        <div
          key={item.id}
          className={`rounded-2xl p-4 md:p-6 my-8 ${activeId === item.id ? "bg-light-gray" : "bg-custom-gray-8"
            }`}
        >
          <button
            className="text-lg md:text-5xl font-semibold w-full text-left flex justify-between items-start text-foreground"
            onClick={() => handleToggle(item.id)}
          >
            <span>{item.title}</span>
            <span className="p-2 rounded-full bg-primary">
              {activeId === item.id ? (
                <ChevronUp color="white" />
              ) : (
                <ChevronDown color="white" />
              )}
            </span>
          </button>

          {activeId === item.id && (
            <p className="mt-2 text-lg text-answer-color">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqSection;

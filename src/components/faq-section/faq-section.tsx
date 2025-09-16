"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqData {
  title: string;
  faqs: Faq[];
}

const faqData: FaqData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      id: 1,
      question: "Why should businesses choose a Salesforce implementation partner for deployment?",
      answer: "The comprehensive knowledge and experience that a Salesforce implementation partner provides guarantees a smooth deployment procedure. Businesses can benefit from their assistance in navigating the intricate world of technology, integrating Salesforce with other platforms, and efficiently managing data to prevent errors and duplications.",
    },
    {
      id: 2,
      question: "How does Korcomptenz's approach to Salesforce consulting differ from other providers?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolores.",
    },
    {
      id: 3,
      question: "How can Salesforce marketing and Salesforce consulting services help with employee productivity and customer engagement?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolores.",
    },
    {
      id: 4,
      question: "What kind of Salesforce support services does Korcomptenz offer post-implementation?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolores.",
    },
    {
      id: 5,
      question: "How does Salesforce implementation support business scalability?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolores.",
    },
  ]
};

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className='container-md my-10'>
      <h1 className='text-2xl md:text-4xl font-semibold text-foreground mb-4'>{faqData.title}</h1>
      {
        faqData.faqs.map((data) => (
          <div key={data.id} className={`rounded-2xl p-4 md:p-6 my-8 ${openId === data.id ? 'bg-light-gray' : 'bg-custom-gray-8'}`}>
            <button
              className="text-sm md:text-xl font-semibold w-full text-left flex justify-between items-start text-foreground"
              onClick={() => handleToggle(data.id)}
            >
              <span>{data.question}</span>
              <span className={`p-2 rounded-full bg-primary `}>
                {openId === data.id ? <ChevronUp color='white' /> : <ChevronDown color='white' />}
              </span>
            </button>
            {openId === data.id && (
              <p className='mt-2 text-sm text-answer-color'>{data.answer}</p>
            )}
          </div>
        ))
      }
    </div>
  );
};

export default FaqSection;
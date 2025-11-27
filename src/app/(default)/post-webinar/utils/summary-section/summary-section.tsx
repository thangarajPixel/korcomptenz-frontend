import React from "react";
import Image from "next/image";

interface SummarySectionProps {
  title: string;
  description: string;
  image: string;
}

const SummarySection = ({ title, description, image }: SummarySectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold mb-4 text-[#313941]">
              {title}
            </h2>
            <p className="text-[#393939] leading-[25px] text-[18px] font-normal">
              {description}
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={image}
              alt="Summary"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;

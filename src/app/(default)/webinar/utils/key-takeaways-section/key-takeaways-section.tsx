import React from "react";

interface KeyTakeawaysSectionProps {
  takeaways: string[];
}

const KeyTakeawaysSection = ({ takeaways }: KeyTakeawaysSectionProps) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#5648D8] rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-[40px] leading-[48px] text-[#FFFFFF] font-semibold mb-6">
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {takeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span className="text-[17px] leading-[27px] font-normal">
                  {takeaway}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyTakeawaysSection;

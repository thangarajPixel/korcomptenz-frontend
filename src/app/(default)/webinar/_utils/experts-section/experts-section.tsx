import React from "react";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const ExpertsSection = ({ experts }: { experts: WebinarExpertsType }) => {
  return (
    <section className="pb-16 pt-8 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold text-start mb-12 text-foreground">
          {experts?.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experts?.list?.map((expert, index) => (
            <div key={index} className="relative pt-16">
              {/* Avatar - positioned at top, overlapping card */}
              <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 p-[5px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <KorcomptenzImage
                        src={expert.image}
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="bg-[#E8F4F0] rounded-3xl p-8 pt-24 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                  {expert.title}
                </h3>
                <DangerousHtml
                  html={expert.description}
                  className="text-lg md:text-xl text-custom-blue-1 font-medium mb-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;

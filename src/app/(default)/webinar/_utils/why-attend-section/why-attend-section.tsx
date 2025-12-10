import React from "react";

import { DangerousHtml } from "@/components/ui/dangerous-html";
import KorcomptenzImage from "@/components/korcomptenz-image";

const WhyAttendSection = ({ data }: { data: BuildConnectSectionType }) => {
  return (
    <section className="py-16 bg-white">
      <div className="">
        <div className="grid md:grid-cols-2">
          {/* Left - Image */}
          <div className="relative h-64 md:h-auto min-h-[400px]">
            <KorcomptenzImage src={data?.image} fill className="object-cover" />
          </div>

          {/* Right - Content */}
          <div className="bg-[#E8F4F0] p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold text-[#313941] mb-6">
              {data?.title}
            </h2>
            {/* <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1 flex-shrink-0">
                    •
                  </span>
                  <div>
                    <span className="text-[#313941] font-semibold text-[17px] leading-[27px]">
                      {reason.title}:
                    </span>{" "}
                    <span className="text-[#313941] font-normal text-[17px] leading-[27px]">
                      {reason.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul> */}
            <DangerousHtml
              html={data?.description || ""}
              className="flex items-start gap-3 text-md text-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;

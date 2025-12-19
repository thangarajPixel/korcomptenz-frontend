import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import React from "react";

const DemoWhyAttend = ({
  whyAttendData,
}: {
  whyAttendData: DemoWhyAttendSectionType;
}) => {
  return (
    <section className="flex items-center justify-center  bg-background container-md ">
      <div className="w-full">
        <div className="rounded-3xl bg-light-gray px-8 pt-12 md:px-12 md:py-16 w-full">
          {/* Header dividers and title */}
          <div className="flex items-center justify-center gap-8 mb-5">
            <div className="flex-1 h-1 bg-gray-400 lg:-ml-12 "></div>
            <h1 className="text-7xl md:text-7xl font-semibold text-foreground text-center font-sans whitespace-nowrap">
              {whyAttendData.title}
            </h1>

            <div className="flex-1 h-1 bg-gray-400 lg:-mr-12 "></div>
          </div>
          <DangerousHtml
            html={whyAttendData?.description}
            className="text-foreground text-base md:text-lg leading-relaxed mb-5  max-w-4xl mx-auto text-center font-sans"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {whyAttendData?.list.map((benefit, index) => (
              <div key={index} className="flex gap-3">
                {/* Blue arrow icon */}
                <div className="flex-shrink-0 pt-2 ">
                  <span className="text-xl text-blue-600 font-bold ">
                    <KorcomptenzImage
                      src="/assets/thumbnail_arrow_f6130cd06d.png"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
                {/* Benefit text */}

                <DangerousHtml
                  html={benefit?.description}
                  className="text-gray-700 text-lg font-sans leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoWhyAttend;

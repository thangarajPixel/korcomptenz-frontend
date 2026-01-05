"use client";

import { cn } from "@/lib/utils";
import KorcomptenzImage from "@/components/korcomptenz-image";

export default function DemoOpportunities({
  whyAttendData,
}: {
  whyAttendData: OpportunitiesSectionType;
}) {
  return (
    <section className="bg-white container-md" data-debug={"home.opportunity"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with geometric elements */}
          <div className="relative">
            {/* Blue geometric arrows */}
            <div
              className={cn("absolute top-8 z-10 transition-all duration-1000")}
            >
              <div className="flex space-x-1 w-72">
                <KorcomptenzImage
                  src={whyAttendData?.arrowImage}
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={300}
                />
              </div>
            </div>

            {/* Main image */}
            <div className="relative z-10 ml-10">
              <KorcomptenzImage
                src={whyAttendData?.bannerImage}
                className="w-full h-auto rounded-lg"
                width={1112}
                height={607}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 mx-auto">
            <div className="rounded-3xl ">
              {/* Header dividers and title */}
              <div className="flex  mb-5">
                <h1 className="text-3xl md:text-7xl font-semibold text-foreground text-center font-sans whitespace-nowrap">
                  {whyAttendData.title}
                </h1>
              </div>

              {/* <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 max-w-4xl mx-auto text-center font-sans">
            {whyAttendData?.description}
          </p> */}

              <div className="grid grid-cols-1  ">
                {whyAttendData?.list?.map((benefit, index) => (
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
                    <p className="text-gray-700 text-lg font-sans leading-relaxed">
                      {benefit?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

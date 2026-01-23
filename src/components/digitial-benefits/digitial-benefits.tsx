import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

const DigitialBenefits = ({ data }: { data: DigitalBenefitsType }) => {
  return (
    <section className=" bg-[#E8F1EC]  md:p-8 md:p-12 p-4">
      <div className="container-md">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-8 text-foreground max-w-4xl mx-auto">
          {data.title}
        </h2>

        {/* Cards Grid */}
        <div
          className={cn(
            `grid gap-10", "grid-cols-1 md:grid-cols-2 lg:${data?.noOfColumn}`,
          )}
        >
          {data.list.map((badge) => (
            <div key={badge.id} className="flex flex-col  gap-2  md:px-6">
              {/* Icon */}
              <div className="h-12 mb-2 mt-5 ">
                {badge?.image && (
                  <KorcomptenzImage
                    src={badge?.image}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                )}
              </div>

              {/* Title */}
              <p className="text-[19px] font-semibold text-foreground text-left">
                {badge.title}
              </p>

              {/* Description */}
              <DangerousHtml
                html={badge.description}
                className="text-lg leading-relaxed text-[#3A4A47] text-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitialBenefits;

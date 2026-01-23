import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";

const KpiPartner = ({ data }: { data: KpiPartnerType }) => {
  return (
    <section className="container-md">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 text-[#2C3E50]">
        {data?.title}
      </h2>

      {/* KPI Grid */}
      {/* <div></div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 max-w-6xl mx-auto md:px-5 ">
        {data?.items.map((item) => (
          <div key={item.id} className="relative flex items-center">
            {/* Floating Icon - positioned on the left */}
            <div className="flex-shrink-0 w-22 h-22 z-10 ">
              {item?.icon && (
                <KorcomptenzImage
                  src={item.icon}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              )}
            </div>

            {/* Pill Container - overlaps behind icon */}
            <div className="flex-1 flex items-center pl-14 pr-6 h-[140px] bg-[#E8F1EC] rounded-4xl -ml-10 mt-4 min-h-[90px]">
              <p className="text-base md:text-[24px] font-normal text-[#2C3E50] leading-7.5">
                {item?.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KpiPartner;

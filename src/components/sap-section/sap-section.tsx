import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";

const SapSection = ({ sapSectionData }: { sapSectionData: SapSectionType }) => {
  return (
    <section className="container-md" data-debug={"page-componets.sap-section-data"}>
      <div className="grid grid-cols-24">
        {/* Left Content */}
        <div className="space-y-8 col-span-24 lg:col-span-10  mb-5 lg:mb-0">
          <h1 className="text-6xl md:text-9xl font-bold text-foreground leading-tight">
            {sapSectionData?.heading}
          </h1>
          <p className="text-md md:text-lg text-foreground leading-4xl ">
            {sapSectionData?.description}
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-4 col-span-24 lg:col-span-14  ">
          <div className="flex flex-col lg:flex-row justify-between gap-6 p-6 lg:p-0">
            <div className="hidden md:block rounded-3xl overflow-hidden w-full lg:w-1/2">
              <KorcomptenzImage
                src={sapSectionData?.imageSection?.image1?.image}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Business Meeting Image 2 */}
            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              <div className="bg-secondary rounded-3xl p-6 text-white flex items-center">
                <div className="flex flex-row gap-4">
                  <div className="text-6xl md:text-8xl font-bold mb-2">
                    {sapSectionData?.card?.value}
                  </div>
                  <div className="text-md md:text-lg font-medium">
                    <p>{sapSectionData?.card?.content}</p>
                  </div>
                </div>
              </div>
              <div className=" rounded-3xl overflow-hidden">
                <KorcomptenzImage
                  src={sapSectionData?.imageSection?.image2?.image}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapSection;

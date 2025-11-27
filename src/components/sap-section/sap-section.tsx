import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";

const SapSection = ({ sapSectionData }: { sapSectionData: SapSectionType }) => {
  return (
    <section
      className="container-md"
      data-debug={"page-componets.sap-section-data"}
    >
      <div className="grid grid-cols-24">
        {/* Left Content */}
        <div className="space-y-8 col-span-24 lg:col-span-10  mb-5 lg:mb-0">
          <h5 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
            {sapSectionData?.heading}
          </h5>
          <p className="text-md md:text-lg text-foreground leading-4xl ">
            {sapSectionData?.description}
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-4 col-span-24 lg:col-span-14  ">
          <div className="flex flex-col lg:flex-row justify-between gap-6 p-6 lg:p-0">
            {sapSectionData?.imageSection?.image1?.image && (
              <div className="hidden md:block rounded-3xl overflow-hidden w-full lg:w-1/2">
                <KorcomptenzImage
                  src={sapSectionData?.imageSection?.image1?.image}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            )}

            {/* Business Meeting Image 2 */}
            <div className="flex flex-col gap-10 w-full lg:w-1/2 ">
              <div className="bg-secondary rounded-3xl p-6 text-white flex items-center">
                {sapSectionData?.card ? (
                  <div className="flex flex-row gap-4 bg-secondary ">
                    <div className="text-6xl md:text-8xl font-bold mb-2">
                      {sapSectionData?.card?.value}
                    </div>
                    <div className="text-md md:text-lg font-medium">
                      <p>{sapSectionData?.card?.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row gap-4">
                    <KorcomptenzImage
                      src={sapSectionData?.image3}
                      width={400}
                      height={400}
                    />
                  </div>
                )}
              </div>
              {sapSectionData?.imageSection?.image2?.image && (
                <div className=" rounded-3xl overflow-hidden">
                  <KorcomptenzImage
                    src={sapSectionData?.imageSection?.image2?.image}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapSection;

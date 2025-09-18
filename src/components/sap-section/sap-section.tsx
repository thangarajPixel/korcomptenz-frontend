import KorcomptenzImage from "@/components/korcomptenz-image";
import { APP_CONFIG } from "@/utils/app-config";
import React from "react";

// const sapSectionData = {
//   heading: "The right partner for your SAP transformation journey",
//   description:
//     " With decades of ERP experience and a sharp focus on your business goals, we deliver tailored solutions and services to help you get the most out of your SAP investments. As a trusted SAP partner, we blend deep expertise with innovation to build the right platform for rapid and sustained growth.",
//   imageSection: {
//     image1: {
//       src: "/assets/services/sapimage1.png",
//       alt: "Business professionals image",
//     },
//     image2: {
//       src: "/assets/services/sapimage2.png",
//       alt: " Office image",
//     },
//   },
//   card: {
//     value: "30%",
//     content: "overall reduction in delivery time ",
//   },
// };
const SapSection = ({ sapSectionData }: { sapSectionData: SapSectionType }) => {
  return (
    <div className="container-md my-10 lg:my-20">
      <section className="grid grid-cols-24">
        {/* Left Content */}
        <div className="space-y-8 col-span-24 lg:col-span-10 px-5 mb-5 lg:mb-0">
          {" "}
          {/*chnage */}
          <h1 className="text-6xl md:text-9xl font-bold text-foreground leading-tight">
            {sapSectionData.heading}
          </h1>
          <p className="text-md md:text-lg text-foreground leading-4xl ">
            {sapSectionData.description}
          </p>
        </div>

        {/* Right Content */}
        <div className="space-y-4 col-span-24 lg:col-span-14  ">
          {" "}
          {/*chnage */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 p-6 lg:p-0">
            {" "}
            {/*chnage */}
            <div className="hidden md:block rounded-3xl overflow-hidden w-full lg:w-1/2">
              {" "}
              {/*chnage */}
              <KorcomptenzImage
                src={
                  APP_CONFIG.APP_URL_IMAGE +
                  sapSectionData.imageSection.image1?.image.url
                }
                alt={sapSectionData.imageSection.image1?.image?.alternativeText}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Business Meeting Image 2 */}
            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              {" "}
              {/*chnage */}
              <div className="bg-secondary rounded-3xl p-6 text-white flex items-center">
                <div className="flex flex-row gap-4">
                  <div className="text-6xl md:text-8xl font-bold mb-2">
                    {sapSectionData.card.value}
                  </div>
                  <div className="text-md md:text-lg font-medium">
                    <p>{sapSectionData.card.content}</p>
                  </div>
                </div>
              </div>
              <div className=" rounded-3xl overflow-hidden">
                <KorcomptenzImage
                  src={
                    APP_CONFIG.APP_URL_IMAGE +
                    sapSectionData.imageSection.image2?.image.url
                  }
                  alt={sapSectionData.imageSection.image2?.image?.alternativeText}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SapSection;

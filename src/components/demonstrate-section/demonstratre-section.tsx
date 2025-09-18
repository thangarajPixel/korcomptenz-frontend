import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { APP_CONFIG } from "@/utils/app-config";
// const demonstData = {
//   title: "Demonstrating value\nthrough tangible impact",
//   buttontext: "Read All",
//   buttonlink: "#Read all",
//   list: [
//     {
//       id: 1,
//       type: "odd",
//       image: "/assets/services/domainimg1.png",
//       title:
//         "How did an optical manufacturer improve process performance by 50%?",
//       alt: "automotive image",
//       description:
//         "We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O.",
//       buttonText: "Dive Deeper",
//       buttonLink: "#Dive Deeper",
//     },
//     {
//       id: 2,
//       type: "even",
//       image: "/assets/services/domainimg2.png",
//       alt: "Lap image",
//       title:
//         "What helped a leading Process Industry achieve 30% reduction in delivery time?",
//       description:
//         "We accelerated this outcome by unifying SAP systems and enabling rapid SLO transition unified three country codes into one platform.",
//       buttonText: "Dive Deeper",
//       buttonLink: "#Dive Deeper",
//     },
//     {
//       id: 3,
//       type: "odd",
//       image: "/assets/services/domainimg3.png",
//       alt: "Lap image",
//       title:
//         "How did an industrial manufacturer reduce its IT infrastructure costs by 30%?",
//       description:
//         "We streamlined manufacturing and built scalable cloud solutions to help them reduce costs and accelerate growth.",
//       buttonText: "Dive Deeper",
//       buttonLink: "#Dive Deeper",
//     },
//   ],
// };

const DemonstratreSection = ({
  demonstData,
}: {
  demonstData: DemonstrationSectionType;
}) => {
  return (
    <section className="container-md">
      <div className="p-6">
        <div className="flex flex-col gap-9 text-start lg:text-center items-start lg:items-center justify-center leading-14  text-foreground  ">
          <h1 className="text-6xl md:text-9xl whitespace-pre-wrap text-balance font-semibold text-foreground mb-10 lg:mb-0">
            {demonstData.title}
          </h1>
          <Button
            size="xl"
            arrow={true}
            className="hidden lg:inline-flex variant:default px-8 py-2 text-4xl rounded-full "
          >
            {demonstData.buttontext}
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-10 ">
          {demonstData.list.map((card, index) => {
            return (
              <section
                key={index}
                className={`bg-none flex flex-col gap-4 ${
                  !((index + 1) % 2) ? "lg:mt-10" : ""
                }`}
              >
                <div className="py-3 md:py-0 rounded-4xl">
                  <KorcomptenzImage
                    src={
                      card.image?.url
                        ? APP_CONFIG.APP_URL_IMAGE + card?.image?.url
                        : "/placeholder.svg"
                    }
                    alt={card.image?.alternativeText}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div>
                  <p className="lg:text-5xl text-4xl font-semibold text-foreground leading-9">
                    {card.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-normal text-foreground leading-[25px]">
                    {card.description}
                  </p>
                </div>
                <div>
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary hover:opacity-80 font-medium transition-colors">
                    {card.buttonText}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            );
          })}
        </div>
        <Button
          size="xl"
          arrow={true}
          className=" w-full lg:hidden variant:default px-8 py-2 text-4xl rounded-full mt-10"
        >
          {demonstData.buttontext}
        </Button>
      </div>
    </section>
  );
};

export default DemonstratreSection;

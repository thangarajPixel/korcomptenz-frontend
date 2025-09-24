import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import CardSwiper from "../ui/card-swiper";
import TechCard from "./_utils/tech-card";

// const techData = {
//   heading: "Our technology partnerships accelerate your time to value",
//   image: "/assets/services/Maskgroup.png",
//   mobileimage: "/assets/services/maskgroupmobile.png",
//   alt: "tech image",
//   techslides: [
//     {
//       id: 1,
//       title: "Microsoft",
//       description:
//         "Our partnership with Microsoft ensures that you get faster results from your Dynamics 365 investments. With industry-aligned implementations and deep platform expertise, we help streamline your operations, improve planning, and significantly enhance your ROI.",
//     },
//     {
//       id: 2,
//       title: "SAP",
//       description:
//         "Our collaboration with SAP brings powerful, integrated solutions that address real manufacturing challenges. From smarter supply chains to connected shop floors, we help you unlock the full potential of SAP faster - turning strategy into measurable outcomes with minimal disruption.",
//     },
//     {
//       id: 3,
//       title: "SAP",
//       description:
//         "Our collaboration with SAP brings powerful, integrated solutions that address real manufacturing challenges. From smarter supply chains to connected shop floors, we help you unlock the full potential of SAP faster - turning strategy into measurable outcomes with minimal disruption.",
//     },
//     {
//       id: 4,
//       title: "Microsoft",
//       description:
//         "Our partnership with Microsoft ensures that you get faster results from your Dynamics 365 investments. With industry-aligned implementations and deep platform expertise, we help streamline your operations, improve planning, and significantly enhance your ROI.",
//     },
//   ],
// };
const TechPartner = ({ techData }: { techData: TechPartnerSectionType }) => {
  return (
    <div className="container-md my-10">
      <section className="bg-secondary rounded-none lg:rounded-4xl grid grid-cols-12 ">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4 p-8 lg:pr-20">
          <div className="lg:pr-20">
            <h1 className="text-6xl md:text-9xl border-b-4 border-custom-white-1 leading-10 lg:leading-16  pb-8 font-semibold   text-background ">
              {techData.heading}
            </h1>
          </div>
          <div className="hidden lg:block">
            <CardSwiper disableAutoSlide={true}>
              {techData.techslides
                .reduce((acc: (typeof techData.techslides)[], _, i, arr) => {
                  if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
                  return acc;
                }, [])
                .map((pair, index) => (
                  <div
                    key={index}
                    className="embla__slide flex-none w-full flex flex-col lg:flex-row gap-6"
                  >
                    {pair.map((slide) => (
                      <TechCard
                        key={slide.id}
                        data={slide}
                        className="flex-1"
                      />
                    ))}
                  </div>
                ))}
            </CardSwiper>
          </div>
          {/*Mobile slide */}

          <div className="lg:hidden col-span-12">
            <CardSwiper disableAutoSlide={true}>
              {techData.techslides
                .reduce((acc: (typeof techData.techslides)[], _, i, arr) => {
                  if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
                  return acc;
                }, [])
                .map((pair, index) => (
                  <div
                    key={index}
                    className="embla__slide flex-none w-full flex flex-col gap-6"
                  >
                    {pair.map((slide) => (
                      <div className="flex flex-col gap-2" key={slide.id}>
                        <h1 className="text-2xl font-normal text-background">
                          {slide.title}
                        </h1>
                        <p className="text-sm font-normal text-background">
                          {slide.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
            </CardSwiper>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 h-full">
          <div className="lg:hidden h-full">
            <KorcomptenzImage
              src={techData.mobileimage}
              alt={techData.alt}
              width={500}
              height={500}
              className="object-cover h-full w-full p-8  rounded-4xl "
            />
          </div>
          <div className="hidden lg:block h-full">
            <KorcomptenzImage
              src={techData.image}
              alt={techData.alt}
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechPartner;

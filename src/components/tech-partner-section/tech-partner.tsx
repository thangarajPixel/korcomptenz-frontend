import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import CardSwiper from "../ui/card-swiper";
import TechCard from "./_utils/tech-card";

const techData = {
  heading: "Our technology partnerships accelerate your time to value",
  image: "/assets/services/Maskgroup.png",
  mobileimage:"/assets/services/maskgroupmobile.png",
  alt: "tech image",
  techslides: [
    {
      id: 1,
      title: "Microsoft",
      description:
        "Our partnership with Microsoft ensures that you get faster results from your Dynamics 365 investments. With industry-aligned implementations and deep platform expertise, we help streamline your operations, improve planning, and significantly enhance your ROI.",
    },
    {
      id: 2,
      title: "SAP",
      description:
        "Our collaboration with SAP brings powerful, integrated solutions that address real manufacturing challenges. From smarter supply chains to connected shop floors, we help you unlock the full potential of SAP faster - turning strategy into measurable outcomes with minimal disruption.",
    },
  ],
};
const TechPartner = () => {
  return (
    <div className="container-md my-10">
      <section className="bg-secondary rounded-none lg:rounded-4xl grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4 p-6">
          <div>
            <h1 className="text-2xl md:text-4xl border-b-4 border-custom-white-1  pb-8 font-semibold   text-background ">
              {techData.heading}
            </h1>
          </div>
          <div className="hidden lg:block">
            <CardSwiper disableAutoSlide={true}>
              {techData.techslides.map((slide) => (
                <TechCard
                  key={slide.id}
                  data={slide}
                  className="embla__custom_slide1"
                />
              ))}
            </CardSwiper>
          </div>
          <div className="lg:hidden col-span-12 flex flex-col gap-6">
            {techData.techslides.map((slide) => (
              <div className="flex flex-col gap-2" key={slide.id}>
                <h1 className="text-2xl font-normal text-background">{slide.title}</h1>
                <p className="text-sm font-normal text-background">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
         <div className="col-span-12 lg:col-span-4 ">
          <div className="lg:hidden">
            <KorcomptenzImage
              src={techData.mobileimage}
              alt={techData.alt}
              width={500}
              height={500}
              className="object-cover h-auto p-8  rounded-4xl "
            />
          </div>
          <div className="hidden lg:block">
            <KorcomptenzImage
              src={techData.image}
              alt={techData.alt}
              width={500}
              height={500}
              className="object-cover h-auto  "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechPartner;

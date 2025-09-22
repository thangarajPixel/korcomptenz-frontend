import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronRight } from "lucide-react";

const DomainSection = ({ domainData }: { domainData: DomainSectionType }) => {
  return (
    <section className="container-md ">
      <div className="rounded-2xl  bg-custom-gray-6">
        <div className="flex items-start justify-center  pt-6 md:pt-20">
          <div className="border-b-4 hidden lg:block border-custom-gray-7 w-1/3 mt-4"></div>
          <h1 className="text-6xl md:text-9xl font-semibold text-foreground mx-4  lg:text-center">
            {domainData.title}
          </h1>
          <div className="border-b-4 hidden lg:block border-custom-gray-7 w-1/3 mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  p-6 md:p-10 ">
          {domainData.slides.map((slide, index) => {
            return (
              <section key={index} className={`bg-none flex flex-col gap-4 `}>
                <div className="py-3 md:py-0 rounded-4xl">
                  <KorcomptenzImage
                    src={slide?.image?.url || "/placeholder.svg"}
                    alt={slide.image?.alternativeText}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div>
                  <p className="text-6xl font-normal text-foreground">
                    {slide.title}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-normal text-foreground leading-[25px]">
                    {slide.description}
                  </p>
                </div>
                <div>
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary hover:opacity-80 font-medium transition-colors">
                    {slide.buttonText}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomainSection;

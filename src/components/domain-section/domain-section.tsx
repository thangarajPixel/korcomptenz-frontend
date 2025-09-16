import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronRight } from "lucide-react";

const domainData = {
  title: "And we drive operational transformation for your domain",
  slides: [
    {
      id: 1,
      title: "Automotive",
      description:
        "Embrace advanced technologies like IoT, AI, big data analytics, 3D printing, robotics, and digital twin technologies to optimize production efficiency, reduce costs, and accelerate time to market.",
      image: "/assets/services/domainimg1.png",
      alt: "automotive image",
      type: "odd",
      buttonText: "Know More",
    },
    {
      id: 2,
      title: "Medical device",
      description:
        "Enable seamless connectivity and interoperability of medical devices to provide enhanced patient outcomes with access to deep insights that drive better delivery, experience, and care.",
      image: "/assets/services/domainimg2.png",
      alt: "Lap image",
      type: "even",
      buttonText: "Know More",
    },
    {
      id: 3,
      title: "Packaging",
      description:
        "Drive intelligent and sustainable packaging solutions that improve the customer experience, create new connections with customers, and reduce waste.",
      image: "/assets/services/domainimg3.png",
      alt: "manufacturing image",
      type: "odd",
      buttonText: "Know More",
    },
  ],
};

const DomainSection = () => {
  return (
    <section className="container-md ">
      <div className="rounded-2xl  bg-custom-gray-6">
        <div className="flex items-start justify-center  pt-6 md:pt-20">
          <div className="border-b-4 hidden lg:block border-custom-gray-7 w-1/3 mt-4"></div>
          <h1 className="text-2xl md:text-4xl font-semibold text-foreground mx-4 text-balance lg:text-center">
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
                    src={slide.image}
                    alt={slide.alt}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full "
                  />
                </div>
                <div>
                  <p className="text-2xl font-normal text-foreground">
                    {slide.title}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-normal text-foreground leading-[25px]">
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

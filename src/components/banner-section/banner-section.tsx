import React from "react";
import KorcomptenzImage from "../korcomptenz-image";

const BannerSectionData = {
  bannerimagembl: "/assets/services/servicebannermbl.png",
  bannerimage: "/assets/services/servicebanner.png", 
  banneralt: "VR Experience",
  logo: "/assets/services/serviceimgban.png", 
  logombl:"/assets/services/micrsoftImage.png",
  alt: "Microsoft logo",
  title: "VR Experience in Modern Workplaces",
  description:
    "Experience the power of modern workplaces and transformed operations in driving impact-led growth.",
};

const BannerSection = () => {
  return (
    <div className="container-md mt-10">
      {/*Desktop view */}
      <div className="relative w-full md:h-[513px] h-full overflow-hidden rounded-4xl hidden lg:block">
        <KorcomptenzImage
          src={BannerSectionData.bannerimage}
          alt={BannerSectionData.banneralt}
          width={1000}
          height={800}
          className="w-full h-full object-cover rounded-4xl"
        />
        <div className="absolute top-30 left-10 p-4 md:p-8 z-10 w-full h-full flex flex-col gap-6 justify-center items-start">
          <KorcomptenzImage
            src={BannerSectionData.logo}
            alt={BannerSectionData.alt}
            width={300}
            height={200}
            className="w-20 md:w-[300px] h-auto object-contain mb-2 md:mb-4"
          />
          <p className="text-sm md:text-base text-white mb-4 md:mb-8 max-w-md">
            {BannerSectionData.description}
          </p>
        </div>
      </div>

{/*       
        {/*Mobile view */}
       <div className="w-full h-[513px] overflow-hidden rounded-4xl lg:hidden items-center justify-center">
  <KorcomptenzImage
    src={BannerSectionData.bannerimagembl}
    alt={BannerSectionData.banneralt}
    width={1000}
    height={800}
    className="w-full h-full object-cover"
  />
  </div>
  <div className=" gap-6 justify-center items-start p-4 md:p-8 w-full h-full">
    <KorcomptenzImage
      src={BannerSectionData.logombl}
      alt={BannerSectionData.alt}
      width={300}
      height={200}
      className="w-[300px] h-auto object-contain mb-2 md:mb-4 opacity-65"
    />
    <p className="text-sm font-medium text-foreground mb-4 md:mb-8 max-w-md">
      {BannerSectionData.description}
    </p>
  </div> 
</div>
    
  );
};

export default BannerSection;
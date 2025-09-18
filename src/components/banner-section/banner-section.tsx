import React from "react";
import CardSwiper from "../ui/card-swiper";
import BannerCard from "./_utils/banner-card";

// const BannerSectionData = [
//   // {
//   //   id: 1,
//   //   imageMobile: "/assets/services/servicebannermbl.png",
//   //   image: "/assets/services/servicebanner.png",
//   //   alt: "VR Experience",
//   //   logo: "/assets/services/serviceimgban.png",
//   //   logoMobile: "/assets/services/micrsoftImage.png",
//   //   altMobile: "Microsoft logo",
//   //   title: "VR Experience in Modern Workplaces",
//   //   description:
//   //     "Experience the power of modern workplaces and transformed operations in driving impact-led growth.",
//   // },
//   // {
//   //   id: 2,
//   //   imageMobile: "/assets/services/servicebannermbl.png",
//   //   image: "/assets/services/servicebanner.png",
//   //   alt: "VR Experience",
//   //   logo: "/assets/services/serviceimgban.png",
//   //   logoMobile: "/assets/services/micrsoftImage.png",
//   //   altMobile: "Microsoft logo",
//   //   title: "VR Experience in Modern Workplaces",
//   //   description:
//   //     "Experience the power of modern workplaces and transformed operations in driving impact-led growth.",
//   // }
// ];
 

const BannerSection = ({ BannerSectionData }:{ BannerSectionData: BannerSectionType[]}) => {


  return (
    <div className="container-md mt-10">
      {BannerSectionData.length < 2 ? (
        <BannerCard data={BannerSectionData[0]} />
      ) : (
        <CardSwiper>
          {BannerSectionData.map((data) => (
            <BannerCard key={`banner-card-${data.id}`} data={data} className="embla__custom_slide" />
          ))}
        </CardSwiper>
      )}
    </div>
  );
};

export default BannerSection;
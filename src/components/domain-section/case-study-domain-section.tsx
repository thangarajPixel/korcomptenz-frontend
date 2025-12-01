import React from "react";
import DemonstrateSection from "../demonstrate-section";

const CaseStudyDomainSection = ({
  domainData,
}: {
  domainData: CaseStudyStickyCardsType;
}) => {
  const componentProps: DemonstrationSectionType = {
    ...domainData,
    list: domainData.list.map((item) => ({
      id: item.id,
      link: item.heroSection.buttonText,
      type: "",
      buttonLink: {
        text: item.heroSection.buttonText,
        link: item?.heroSection?.link,
      },
      image: item.heroSection.image,
      title: item.title || item.heroSection.title,
      description: item.heroSection.description,
      buttonText: item.heroSection.buttonText,
    })),
    link: domainData.link,
    butttonText: domainData.buttonText,
    description: "",
  };
  return <DemonstrateSection data={componentProps} />;
};

export default CaseStudyDomainSection;

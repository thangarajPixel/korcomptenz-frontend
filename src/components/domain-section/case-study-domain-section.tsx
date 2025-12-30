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
      link: `/case-study/${item?.slug}`,
      type: "",
      buttonLink: {
        text: item.heroSection.buttonText,
        link: `/case-study/${item?.slug}`,
      },
      image: item.heroSection.image,
      title: item.title || item.heroSection.title,
      description: item.heroSection.description,
      buttonText: item.heroSection.buttonText,
      isTargetBlank: domainData.isTargetBlank,
    })),
    link: domainData.link,
    isTargetBlank: domainData.isTargetBlank,
    buttonText: domainData.buttonText,
    description: "",
  };
  return <DemonstrateSection data={componentProps} />;
};

export default CaseStudyDomainSection;

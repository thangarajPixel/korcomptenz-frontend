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
      ...item,
      image: item.heroSection.image,
      buttonText: item.heroSection.buttonText,
      title: item.heroSection.title,
      description: item.heroSection.description,
      buttonLink: item.heroSection.buttonText,
      type: "",
    })),
    buttonlink: domainData.link,
    description: "",
  };
  return <DemonstrateSection data={componentProps} />;
};

export default CaseStudyDomainSection;

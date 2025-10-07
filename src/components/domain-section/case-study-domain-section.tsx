import React from "react";

import DomainSection from "./domain-section";

const CaseStudyDomainSection = ({
  domainData,
}: {
  domainData: CaseStudyStickyCardsType;
}) => {
  const componentProps: DomainSectionType = {
    ...domainData,
    slides: domainData.list.map((item) => ({
      ...item,
      image: item.heroSection.image,
      type: '',
      buttonText: 'Korcomptenz',
      title: item.heroSection.title,
      description: item.heroSection.description,
    })),
    description: ""
  };
  return <DomainSection domainData={componentProps} />;
};

export default CaseStudyDomainSection;

import React from "react";

import DomainSection from "./domain-section";

const CaseStudyDomainSection = ({
  domainData,
}: {
  domainData: DomainSectionType;
}) => {
  return <DomainSection domainData={domainData} />;
};

export default CaseStudyDomainSection;

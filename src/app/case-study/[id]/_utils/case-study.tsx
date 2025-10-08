import React from "react";
import CaseStudyBanner from "./case-study-banner";
import CaseStudyContent from "./case-study-content";
import { ClientTestimonial } from "@/app/client-success/_utils";
import { ContactForm } from "./case-study-contact";
import type { CaseStudyData } from "@/types/global-types";

const CaseStudy = ({ data }: { data: CaseStudyData }) => {
  return (
    <div>
      <CaseStudyBanner data={data?.heroSection} />
      <CaseStudyContent data={data?.descriptionSection} />
      <ClientTestimonial data={data?.testimonials} />
      <ContactForm />
    </div>
  );
};

export default CaseStudy;

import React from "react";
import ClientSuccessBanner from "./client-success-banner";
import { ClientSuccessFilter } from "./client-success-filter";
import ClientSuccessList from "./client-success-list";
import ClientCustomer from "./client-customer";
import ClientPartnership from "./client-partnership";
import type { CaseStudiesPageType } from "@/types/global-types";
import ClientTestimonial from "./client-testimonial";

const CaseStudies = async ({ data }: { data: CaseStudiesPageType }) => {
  return (
    <div className="flex flex-col gap-16">
      <ClientSuccessBanner data={data.banner} />
      <div className="container-lg">
        <ClientSuccessFilter filterlabel={data.filterLabel} />
        <ClientSuccessList sponserdata={data.sponser} />
      </div>
      <ClientPartnership data={data.partnerSection} />
      <ClientCustomer data={data?.customerSection} />
      <ClientTestimonial data={data?.testimonal} />
    </div>
  );
};

export default CaseStudies;

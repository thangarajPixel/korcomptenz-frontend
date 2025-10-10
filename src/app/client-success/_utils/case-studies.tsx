import React from "react";
import ClientSuccessBanner from "./client-success-banner";
import ClientSuccessList from "./client-success-list";
import ClientCustomer from "./client-customer";
import ClientPartnership from "./client-partnership";
import ClientTestimonial from "./client-testimonial";

const CaseStudies = async ({ data, initialData }: { data: CaseStudiesPageType, initialData: CaseStudiesType }) => {
  return (
    <div className="flex flex-col gap-16">
      <ClientSuccessBanner data={data?.banner} />
      <ClientSuccessList data={data} initialData={initialData} />
      <ClientPartnership data={data?.partnerSection} />
      <ClientCustomer data={data?.customerSection} />
      <ClientTestimonial data={data?.testimonal} />
    </div>
  );
};

export default CaseStudies;

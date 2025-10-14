import React from "react";
import ClientSuccessList from "./client-success-list";
import ClientCustomer from "./client-customer";
import ClientPartnership from "./client-partnership";
import ClientTestimonial from "./client-testimonial";

const CaseStudies = async ({
  data,
  initialData,
  search,
}: {
  data: CaseStudiesPageType;
  initialData: CaseStudiesType;
  search?: CaseStudiesPageType;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <ClientSuccessList data={data} initialData={initialData} search={search} />
      <ClientPartnership data={data?.partnerSection} />
      <ClientCustomer data={data?.customerSection} />
      <ClientTestimonial data={data?.testimonal} />
    </div>
  );
};

export default CaseStudies;

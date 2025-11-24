import React from "react";
import InsightsSuccessList from "./insights-success-list";
import InsightsPartnership from "./insights-partnership";
import InsightsCustomer from "./insights-customer";
import InsightsTestimonial from "./insights-testimonial";


const Insights = async ({
  data,
  initialData,
  search,
}: {
  data: CaseStudiesPageType;
  initialData: CaseStudiesType;
  search: FilterListType[];
}) => {
  return (
    <div className="flex flex-col gap-16">
      <InsightsSuccessList
        data={data}
        initialData={initialData}
        search={search}
      />
      <InsightsPartnership data={data?.partnerSection} />
      <InsightsCustomer data={data?.customerSection} />
      <InsightsTestimonial data={data?.testimonal} />
    </div>
  );
};

export default Insights;

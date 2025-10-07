import React from "react";
import ClientSuccessBanner from "./client-success-banner";
import ClientSuccessFilter from "./client-success-filter";
import ClientSuccessList from "./client-success-list";
import ClinetCustomer from "./clinet-customer";
import ClientTestimonial from "./client-testimonial";
import ClientPartnership from "./client-partnership";

const CaseStudies = async () => {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <ClientSuccessBanner />
      <div>
        <ClientSuccessFilter />
        <ClientSuccessList />
      </div>
      <ClientPartnership />
      <ClinetCustomer />
      <ClientTestimonial />
    </div>
  );
};

export default CaseStudies;

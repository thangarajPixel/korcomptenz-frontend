import React from "react";
import ClientSuccessBanner from "./client-success-banner";
import { ClientSuccessFilter } from "./client-success-filter";
import ClientSuccessList from "./client-success-list";
import ClientCustomer from "./client-customer";
import ClientTestimonial from "./client-testimonial";
import ClientPartnership from "./client-partnership";

const CaseStudies = async () => {
  return (
    <div className="flex flex-col gap-16">
      <ClientSuccessBanner />
      <div className="container-lg">
        <ClientSuccessFilter />
        <ClientSuccessList />
      </div>
      <ClientPartnership />
      <ClientCustomer />
      <ClientTestimonial />
    </div>
  );
};

export default CaseStudies;

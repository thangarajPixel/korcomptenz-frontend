import React from "react";
import {
  ClientSuccessFilter,
  ClientSuccessBanner,
  ClientSuccessList,
  ClientPartnership,
  ClientTestimonial,
  ClinetCustomer,
} from "./_utils";

const Page = () => {
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

export default Page;

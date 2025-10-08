import React from "react";
import { CaseStudyBanner, CaseStudyContent } from "./_utils";
import { ClientTestimonial } from "@/app/client-success/_utils";
import { ContactForm } from "./_utils/case-study-contact";

const Page = () => {
  return (
    <div>
      <CaseStudyBanner />
      <CaseStudyContent />
      <ClientTestimonial />
      <ContactForm />
    </div>
  );
};

export default Page;

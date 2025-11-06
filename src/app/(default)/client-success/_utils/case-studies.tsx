import React from "react";
import ClientSuccessList from "./client-success-list";
import ClientCustomer from "./client-customer";
import ClientPartnership from "./client-partnership";
import ClientTestimonial from "./client-testimonial";
import { ContactUsNewsletter } from "@/components/news-letter-section";

const newsletterData = {
  title: "Newsletter Subscription",
  description:
    "Partner with Korcomplexz to unlock innovation, streamline operations, and accelerate growth.",
  buttonText: "Subscribe",
  image: {
    src: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Rectangle_84_2ba71cb362.png",
    alt: "Team collaboration in office",
  },
};
const CaseStudies = async ({
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
      <ClientSuccessList
        data={data}
        initialData={initialData}
        search={search}
      />
      <ClientPartnership data={data?.partnerSection} />
      <ClientCustomer data={data?.customerSection} />
      <ClientTestimonial data={data?.testimonal} />
      <ContactUsNewsletter newsletterData={newsletterData} />
    </div>
  );
};

export default CaseStudies;

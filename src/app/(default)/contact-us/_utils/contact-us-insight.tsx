import { InsightCard } from "@/components/insight-section";
import React from "react";

const ContactUsInsight = ({ data }: { data: InsightCardType }) => {
  return (
    <section data-debug={'contact-us.contact-us-insight-list'} className="container-md grid-col-1 lg:grid-cols-3 gap-6 md:grid">
      {data?.list.map((item) => (
        <InsightCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ContactUsInsight;

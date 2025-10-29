import { InsightCard } from "@/components/insight-section";
import React from "react";

const ContactUsInsight = ({ data }: { data: InsightCardType }) => {
  return (
    <div className="container-md grid-col-1 lg:grid-cols-3 gap-6 md:grid rounded-4xl">
      {data.map((item) => (
        <InsightCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ContactUsInsight;

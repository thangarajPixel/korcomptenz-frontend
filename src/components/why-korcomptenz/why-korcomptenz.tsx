"use client";

import KorcomptenzImage from "../korcomptenz-image";
import { Button } from "../ui/button";

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  buttontext: string;
}

interface IndustryCard {
  title: string;
  list: IndustryItem[];
}

const industryData: IndustryCard = {
  title: "Transforming operations to meet",
  list: [
    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "Predict equipment maintenance, optimize production schedules, and streamline order management. Boosting efficiency, reducing downtime, and enhancing customer satisfaction.",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Ongoing_support_01_cbd034eb7c.svg?updatedAt=2025-10-16T06%3A56%3A18.777Z",
      buttontext: "Know More",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Personalize treatment and improve operational efficiency by using proactive care coordination, intelligent appointment scheduling, and automated compliance reporting.",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/EDI_implementation_01_d231395fec.svg?updatedAt=2025-10-16T06%3A56%3A18.775Z",
      buttontext: "Know More",
    },
    {
      id: "banking",
      title: "Banking & Financial Services",
      description:
        "Harness real-time risk analytics and AI-driven risk analysis to personalize financial services, detect fraud faster, and accelerate decision-making.",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Business_Reporting_and_dashboards_8d7fcce0dc.svg?updatedAt=2025-10-21T10%3A23%3A46.019Z",
      buttontext: "Know More",
    },
    {
      id: "retail",
      title: "Retail",
      description:
        "Create unified customer profiles across channels for hyper-personalized promotions, drive omnichannel experiences, and foster loyalty through targeted engagement.",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-21T10%3A23%3A46.649Z",
      buttontext: "Know More",
    },
    {
      id: "logistics",
      title: "Logistics & Transportation",
      description:
        "Leverage real-time tracking, AI-driven route optimization, and automated dispatch to enhance fleet utilization, proactively resolve delivery issues, and provide customers with transparent updates.",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Real_Time_Streaming_Data_Pipelines_0c839b1e2b.svg?updatedAt=2025-10-21T10%3A23%3A47.391Z",
      buttontext: "Know More",
    },
  ],
};

export default function WhyKorcomptenz() {
  return (
    <div className="container-md py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-5xl font-semibold text-foreground mb-2">
          {industryData.title}
        </h1>
        <p className="text-3xl md:text-5xl font-semibold text-foreground mb-2">
          industry-specific demands
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {industryData.list.map((item) => (
          <IndustryCardItem key={item.id} card={item} />
        ))}
      </div>
    </div>
  );
}

function IndustryCardItem({ card }: { card: IndustryItem }) {
  return (
    <div className="p-8 ">
      {/* Icon */}
      <div className="text-5xl mb-6">
        <KorcomptenzImage src={card.icon} width={100} height={100} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-black mb-4">{card.title}</h3>

      {/* Description */}
      <p className="text-base text-black mb-6">{card.description}</p>

      {/* Button */}
      <Button
        variant="ghost"
        arrow
        className="text-primary hover:text-primary justify-start text-md hover:bg-transparent p-0"
      >
        {card.buttontext}
      </Button>
    </div>
  );
}

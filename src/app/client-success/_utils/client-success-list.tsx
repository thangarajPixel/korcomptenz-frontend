import { CaseStudyCard } from "@/components/case-study-section";
import StickyTitleCard from "@/components/sticky-title-list/_utils/sticky-title-card";
import React from "react";

// Sticky card data
const stickyCard = {
  id: "137",
  title: "Seamless SAP Consolidation After Complex Merger",
  description:
    "Make smarter technology decisions with expert guidance that aligns digital strategy to business goals. Accelerate transformation and reduce risk with actionable roadmaps.",
  buttonText: "Dive deeper",
  titleimage: {
    url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/logo_sponsor_shaw_500x500_1_8c1ca5e907.png",
  } as ImageType,
  link: "/",
  image: {
    id: "501",
    url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Adobe_Stock_1064135362_1_f1a8ed373f.png",
    name: "KOR-Smartforge-1.png",
    height: 284,
    width: 426,
    alternativeText: "",
    createdAt: "2023-05-30T07:00:00.000Z",
    updatedAt: "2023-05-30T07:00:00.000Z",
    publishedAt: "2023-05-30T07:00:00.000Z",
    size: 0,
    ext: "png",
    mime: "image/png",
  } as ImageType,
};

// Case study cards
const caseStudies = [
  {
    id: "152",
    category: "White paper",
    title:
      "How did an optical manufacturer improve process performance by 50%?",
    image: {
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_arunnmdesign_a_bright_photograph_of_a_happy_young_woman_wearing_17c55b0d_6af0_46fe_8f5a_c67569eaff81_2d24d6b07f.png?updatedAt=2025-10-03T07%3A00%3A37.232Z",
    } as ImageType,
    description:
      "We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O.",
    buttonText: "Dive deeper",
    industry: ["Manufacturing", "Chemical"],
    service: ["Manufacturing"],
    technology: ["Microsoft Dynamics 365"],
  },
  {
    id: "153",
    category: "White paper",
    title:
      "How did an optical manufacturer improve process performance by 50%?",
    image: {
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_arunnmdesign_a_bright_photograph_of_a_happy_young_woman_wearing_17c55b0d_6af0_46fe_8f5a_c67569eaff81_2d24d6b07f.png?updatedAt=2025-10-03T07%3A00%3A37.232Z",
    } as ImageType,
    description:
      "We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O.",
    buttonText: "Dive deeper",
    industry: ["Manufacturing", "Chemical"],
    service: ["Manufacturing"],
    technology: ["Microsoft Dynamics 365"],
  },
];

const ClientSuccessList = () => {
  return (
    <div className="container-md">
      <div className="grid grid-cols-12 gap-6">
        {/* Sticky card - always col-span-4 */}
        <div className="col-span-12 md:col-span-4">
          <StickyTitleCard data={stickyCard} />
        </div>

        {/* Case study cards - each col-span-4, wrap automatically */}
        {caseStudies.map((item) => (
          <div key={item.id} className="col-span-12 md:col-span-4 ">
            <CaseStudyCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSuccessList;

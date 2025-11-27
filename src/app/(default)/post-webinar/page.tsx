import React from "react";
import WebinarHeroSection from "./utils/webinar-hero-section/webinar-hero-section";
import MobileInfoSection from "./utils/mobile-info-section/mobile-info-section";
import SummarySection from "./utils/summary-section/summary-section";
import KeyTakeawaysSection from "./utils/key-takeaways-section/key-takeaways-section";
import ExpertsSection from "./utils/experts-section/experts-section";
import DemonstrateSection from "@/components/demonstrate-section";



const webinarData = {
  bannerImage: "/assets/tempory/header_banner.png",
  mobileBannerImage: "/assets/tempory/mobile_banner.png",
};

const summaryData = {
  title: "Summary of Webinar",
  description:
    "In today's rapidly evolving business landscape, organizations face increasing complexity managing multi-cloud environments while trying to enable innovation through AI and automation. Meanwhile, cybersecurity threats continue to grow more sophisticated, targeting every layer of digital infrastructure. This exclusive on-demand session—hosted by Korcomptenz in partnership with Darktrace—explores how forward-thinking enterprises are leveraging cloud modernization, AI-driven insights, and autonomous cybersecurity to drive transformation. Learn how to secure your digital estate, simplify operations, and maximize your return on technology investments by aligning with the right strategic partner.",
  image: "/assets/tempory/summary.png",
};

const keyTakeaways = [
  "The CX Data Gap: Understand the root of misalignment between departments and how to close the gap to deliver seamless, data-driven customer journeys.",
  "Three Mega Trends: Explore the forces reshaping banking—FinTech disruption, AI adoption, and the demand for hyper-personalization.",
  "AI in Action: Understand the evolution from machine learning to generative and agentic AI—and how it's already transforming banking operations.",
  "Real-World Use Cases: See how Fidelity Bank is using AI to improve onboarding, cross-selling, segmentation, and customer service.",
  "CX at Scale: Learn how to deliver consistent, personalized experiences across channels using unified data and predictive analytics.",
  "KOR BankIQ demo: Discover how BankIQ, an AI-powered analytics platform built on Microsoft Fabric revolutionizing customer insights.",
];

const expertsData = [
  {
    name: "Neha Bhagat",
    title: "Senior Director",
    company: "Microsoft Dynamics (Practice Head), Korcomptenz Inc.",
    image: "/assets/tempory/postweb1.png",
  },
  {
    name: "Neha Bhagat",
    title: "Senior Director",
    company: "Microsoft Dynamics (Practice Head), Korcomptenz Inc.",
    image: "/assets/tempory/postweb1.png",
  },
  {
    name: "Neha Bhagat",
    title: "Senior Director",
    company: "Microsoft Dynamics (Practice Head), Korcomptenz Inc.",
    image: "/assets/tempory/postweb1.png",
  },
];

const demonstrateData = {
  title: "Demonstrating value through tangible impact",
  // description: "Explore our solutions and see how we can help transform your business.",
  butttonText: "Read All",
  link: "/solutions",
  list: [
    {
      id: "1",
      type: "demonstrate-card",
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with our expert guidance.",
      buttonText: "Dive Deeper",
      buttonLink: "/solutions/cloud-migration",
      image: {
        url: "/assets/tempory/precision-manufacturing-cnc-machine.jpg",
        alternativeText: "Cloud Migration",
        width: 500,
        height: 500,
      },
    },
    {
      id: "2",
      type: "demonstrate-card",
      title: "AI & Automation",
      description: "Leverage AI-driven insights to automate processes and drive innovation.",
      buttonText: "Dive Deeper",
      buttonLink: "/solutions/ai-automation",
      image: {
        url: "/assets/tempory/precision-manufacturing-cnc-machine.jpg",
        alternativeText: "AI & Automation",
        width: 500,
        height: 500,
      },
    },
    {
      id: "3",
      type: "demonstrate-card",
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions.",
      buttonText: "Dive Deeper",
      buttonLink: "/solutions/cybersecurity",
      image: {
        url: "/assets/tempory/precision-manufacturing-cnc-machine.jpg",
        alternativeText: "Cybersecurity",
        width: 500,
        height: 500,
      },
    },
  ],
};

const mobileInfoData = {
  title: "Right-Sized ERP: SAP or Microsoft D365 for Teams That Need to Scale Fast",
  description: "Pick the ERP that scales with you—without the complexity, delays, or hidden costs.",
  buttonText: "View Details",
  buttonLink: "#",
};

const galleryImages = [
  "/assets/webinar/gallery-1.jpg",
  "/assets/webinar/gallery-2.jpg",
  "/assets/webinar/gallery-3.jpg",
];

export default async function PostWebinarPage() {
  return (
    <div className="">
      <WebinarHeroSection {...webinarData} />
      <MobileInfoSection {...mobileInfoData} />
      <SummarySection {...summaryData} />
      <KeyTakeawaysSection takeaways={keyTakeaways} />
      <ExpertsSection experts={expertsData} />
      <DemonstrateSection data={demonstrateData as any} />
      
    </div>
  );
}

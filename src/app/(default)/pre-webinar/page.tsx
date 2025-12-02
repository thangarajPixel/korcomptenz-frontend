import React from "react";
import PreWebinarHeroSection from "./utils/pre-webinar-hero-section";
import SummarySection from "../post-webinar/utils/summary-section/summary-section";
import KeyTakeawaysSection from "../post-webinar/utils/key-takeaways-section/key-takeaways-section";
import WhyAttendSection from "./utils/why-attend-section";
import ExpertsSection from "../post-webinar/utils/experts-section/experts-section";
import ReserveSeatSection from "./utils/reserve-seat-section";
import DemonstrateSection from "@/components/demonstrate-section";
import GallerySection from "../post-webinar/utils/gallery-section/gallery-section";
import type { title } from "process";

const preWebinarHeroData = {
  title: "Right-Sized ERP: SAP or Microsoft D365 for Teams That Need to Scale Fast",
  description: "Pick the ERP that scales with you—without the complexity, delays, or hidden costs.",
  date: "2025-07-30", // Event date
  time: "11AM - 12 PM EST | 8AM - 9AM PST | 10AM - 11AM CST",
  registerLink: "#register",
  backgroundImage: "/assets/tempory/image_preview.png", // Full background image
  websitePreviewImage: "/assets/tempory/webinar_preview.png", // Website preview for card
  mobileBackgroundImage: "/assets/tempory/mobile_banner.png",
};

const summaryData = {
  title: "Summary of Webinar",
  description:
    "In today's rapidly evolving business landscape, organizations face increasing complexity managing multi-cloud environments while trying to enable innovation through AI and automation. Meanwhile, cybersecurity threats continue to grow more sophisticated, targeting every layer of digital infrastructure. This exclusive on-demand session—hosted by Korcomptenz in partnership with Darktrace—explores how forward-thinking enterprises are leveraging cloud modernization, AI-driven insights, and autonomous cybersecurity to drive transformation. Learn how to secure your digital estate, simplify operations, and maximize your return on technology investments by aligning with the right strategic partner.",
  showImage: false,
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

const mobileInfoData = {
  title: "Right-Sized ERP: SAP or Microsoft D365 for Teams That Need to Scale Fast",
  description:
    "Pick the ERP that scales with you—without the complexity, delays, or hidden costs.",
  buttonText: "View Details",
  buttonLink: "#",
};

const demonstrateData = {
  title: "Demonstrating value through tangible impact",
  butttonText: "Read All",
  link: "/solutions",
  list: [
    {
      id: "1",
      type: "demonstrate-card",
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our expert guidance.",
      buttonText: "Dive Deeper",
      buttonLink: "/solutions/cloud-migration",
      image: {
        url: "/assets/tempory/demon_1.png",
        alternativeText: "Cloud Migration",
        width: 500,
        height: 500,
      },
    },
    {
      id: "2",
      type: "demonstrate-card",
      title: "AI & Automation",
      description:
        "Leverage AI-driven insights to automate processes and drive innovation.",
      buttonText: "Dive Deeper",
      buttonLink: "/solutions/ai-automation",
      image: {
        url: "/assets/tempory/demon_1.png",
        alternativeText: "AI & Automation",
        width: 500,
        height: 500,
      },
    },
    {
      id: "3",
      type: "demonstrate-card",
      title: "Cybersecurity",
      description:
        "Protect your digital assets with advanced security solutions.",
      buttonText: "Dive Deeper",
      buttonLink: "/solutions/cybersecurity",
      image: {
        url: "/assets/tempory/demon_1.png",
        alternativeText: "Cybersecurity",
        width: 500,
        height: 500,
      },
    },
  ],
};

const whyAttendData = {
  title: "Why You Should Attend",
  reasons: [
    {
      title: "The CX Data Gap",
      description:
        "Understand the root of misalignment between departments and how to close the gap to deliver seamless, data-driven customer journeys.",
    },
    {
      title: "Three Mega Trends",
      description:
        "Explore the forces reshaping banking—FinTech disruption, AI adoption, and the demand for hyper-personalization.",
    },
    {
      title: "AI in Action",
      description:
        "Understand the evolution from machine learning to generative and agentic AI—and how it's already transforming banking operations.",
    },
    {
      title: "Real-World Use Cases",
      description:
        "See how Fidelity Bank is using AI to improve onboarding, cross-selling, segmentation, and customer service.",
    },
    {
      title: "CX at Scale",
      description:
        "Learn how to deliver consistent, personalized experiences across channels using unified data and predictive analytics.",
    },
    {
      title: "KOR BankIQ demo",
      description:
        "Discover how BankIQ, an AI-powered analytics platform built on Microsoft Fabric revolutionizing customer insights.",
    },
  ],
  image: "/assets/tempory/why_image.png",
};

const reserveSeatData = {
  title: "Reserve Your Seat",
  description:
    "This webinar is free, but space is limited. Don't miss this opportunity to make an informed, strategic ERP decision that accelerates your business growth.",
  buttonText: "Reserve Your Seat Now!",
  formAction: "#register",
};

const galleryImages = [
  "/assets/webinar/gallery-1.jpg",
  "/assets/webinar/gallery-2.jpg",
  "/assets/webinar/gallery-3.jpg",
];

export default async function PreWebinarPage() {
  return (
    <div className="">
      <PreWebinarHeroSection {...preWebinarHeroData} />
      <SummarySection {...summaryData} />
      <KeyTakeawaysSection takeaways={keyTakeaways} />
      <WhyAttendSection {...whyAttendData} />
      <ExpertsSection experts={expertsData} />
      <ReserveSeatSection {...reserveSeatData} />
      <DemonstrateSection data={demonstrateData as any} />

    </div>
  );
}

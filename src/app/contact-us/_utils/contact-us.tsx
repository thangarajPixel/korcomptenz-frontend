import BannerSection from "@/components/banner-section";
import React from "react";
import ContactUsInsight from "./contact-us-insight";
import ContactUsNewsletter from "./contact-us-newsletter";
import ContactUsOffice from "./contact-us-office";
import ContactUsCorporate from "./contact-us-corporate";

const BannerSectionData = [
  {
    id: 821,
    title: "We’d love to hear from you",
    alt: "Contact Us Banner",
    altMobile: {
      id: "09",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/download_b5f7e66ad4.webp",
      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
    },
    description:
      "Whether you’re curious about our products or want to know more about our services, we’re ready to answer all your questions..",

    buttonText: "Know More",

    logo: undefined,
    logoMobile: undefined,
    image: {
      id: "509",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/download_b5f7e66ad4.webp",
      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
    },
    imageMobile: {
      id: "509",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/download_b5f7e66ad4.webp",

      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
      documentId: "tdinezi3syph6fayhimcg99v",

      previewUrl: null,
    },
  },
];
const Insightdata = [
  {
    id: "1",
    buttonText: "Know More",
    title: "Driving Digital Transformation in Manufacturing",
    image: {
      id: "509",
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Generate_Proactive_Insights_with_Azure_Synapse_Analytics_and_Power_BI_5c64926e98.webp?updatedAt=2025-10-21T10%3A23%3A47.283Z",
      alt: "Digital transformation in manufacturing",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
    },
    description:
      "Explore how smart factories and Industry 4.0 are reshaping the global manufacturing landscape.",

    link: "/insights/digital-transformation-manufacturing",
  },
  {
    id: "2",
    buttonText: "Know More",
    title: "The Future of Cloud Security",
    image: {
      id: "501",
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Generate_Proactive_Insights_with_Azure_Synapse_Analytics_and_Power_BI_5c64926e98.webp?updatedAt=2025-10-21T10%3A23%3A47.283Z",
      alt: "Cloud security concept illustration",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
    },
    description:
      "Learn about emerging trends and strategies to safeguard enterprise cloud infrastructure in 2025.",

    link: "/insights/future-of-cloud-security",
  },
  {
    id: "3",
    buttonText: "Know More",
    title: "AI-Powered Customer Experiences",
    image: {
      id: "519",
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Generate_Proactive_Insights_with_Azure_Synapse_Analytics_and_Power_BI_5c64926e98.webp?updatedAt=2025-10-21T10%3A23%3A47.283Z",
      alt: "AI-powered digital customer experience",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
    },
    description:
      "Discover how artificial intelligence is redefining personalization and customer engagement.",

    link: "/insights/ai-powered-customer-experiences",
  },
];

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
const officesData = [
  {
    title: "Corporate Headquarters",
    country: "United States",
    company: "Korcompetenz Inc",
    address: "35 Waterview Blvd, Suite 207, Parsippany, NJ 07054",
    phone: "1-973-601-8770",
    fax: "1-973-272-1140",
    email: "sales@korcompetenz.com",
    image: {
      id: "519",
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Generate_Proactive_Insights_with_Azure_Synapse_Analytics_and_Power_BI_5c64926e98.webp?updatedAt=2025-10-21T10%3A23%3A47.283Z",
      alt: "AI-powered digital customer experience",
      name: "download.webp",
      alternativeText: null,
      caption: "contact",
      ext: ".webp",
      mime: "image/webp",
      width: 1600,
      height: 600,
      size: 43.54,
      createdAt: "2025-09-26T05:22:39.286Z",
      updatedAt: "2025-09-26T05:22:39.286Z",
      publishedAt: "2025-09-26T05:22:39.286Z",
    },
  },
];
const corporateData = {
  offices: [
    {
      id: 1,
      country: "United States",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-27T06%3A22%3A27.714Z",
      address:
        "Karcomplexe Inc, 35 Waterview Blvd, Suite 207, Parsippany, NJ 07054",
      phone: "1-973-605-6770",
      fax: "1-973-272-1140",
    },
    {
      id: 2,
      country: "United States",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-27T06%3A22%3A27.714Z",
      address:
        "Oppenheimer Tower, 10880 Wilshire Boulevard, Suite 1101, Los Angeles, CA 90024, United States",
      phone: "1-310-601-7357",
      fax: "1-973-272-1140",
    },
    {
      id: 3,
      country: "United States",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-27T06%3A22%3A27.714Z",
      address: "8330 Lyndon B Johnson Pkwy, Suite B888, Dallas, TX 75243",
      phone: "1-310-601-7357",
      fax: "1-973-272-1140",
    },
    {
      id: 4,
      country: "Netherlands",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-27T06%3A22%3A27.714Z",
      address: "Gersh@ij 20 - 5704 RG, Helmond, Netherlands",
      phone: "1-973-605-6770",
      fax: "1-973-272-1140",
    },
    {
      id: 5,
      country: "Kingdom of Saudi Arabia",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-27T06%3A22%3A27.714Z",
      address:
        "Karcomplexe Technology Arabia Limited, 2345 Ahmad Al Yamani street, Al Malaz district, Riyadh 12831, Saudi Arabia",
      phone: "1-310-601-7357",
      fax: "1-973-272-1140",
    },
    {
      id: 6,
      country: "Kingdom of Saudi Arabia",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/ML_Ops_and_LLM_Ops_Pipelines_5ca23b4fd0.svg?updatedAt=2025-10-27T06%3A22%3A27.714Z",
      address:
        "Karcomplexe Technology Arabia Limited, 2365 Ahmad Al Yamani street, Al Malaz district, Riyadh 12831, Saudi Arabia",
      phone: "1-310-601-7357",
      fax: "1-973-272-1140",
    },
  ],
};

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-16">
      <BannerSection BannerSectionData={BannerSectionData} />
      <ContactUsInsight data={Insightdata} />
      <ContactUsNewsletter newsletterData={newsletterData} />
      <ContactUsOffice officesData={officesData} />
      <ContactUsCorporate corporateData={corporateData} />
    </div>
  );
};

export default ContactUs;

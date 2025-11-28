"use client";

import { useState } from "react";
import {
  FacebookIcon,
  InstragramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatAppIcon,
} from "../../../../../../../public/svg/all-svg";
import { Link as LinkIcon, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

type SocialLink = {
  id: string;
  name: string;
  buildUrl: (pageUrl: string) => string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const defaultSocialLinks: SocialLink[] = [
  {
    id: "instragram",
    name: "Instragram",
    buildUrl: (pageUrl: string) =>
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        pageUrl
      )}`,
    icon: InstragramIcon,
  },
  {
    id: "whatapp",
    name: "Whatapp",
    buildUrl: (pageUrl: string) =>
      `https://api.whatsapp.com/send?text=${encodeURIComponent(pageUrl)}`,
    icon: WhatAppIcon,
  },

  {
    id: "linkedin",
    name: "LinkedIn",
    buildUrl: (pageUrl: string) =>
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        pageUrl
      )}`,
    icon: LinkedInIcon,
  },
  {
    id: "twitter",
    name: "Twitter",
    buildUrl: (pageUrl: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`,
    icon: TwitterIcon,
  },
  {
    id: "facebook",
    name: "Facebook",
    buildUrl: (pageUrl: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl
      )}`,
    icon: FacebookIcon,
  },
];
const data = {
  title: "When Data Meets Design: The Hidden Power of Visualization Tools",
  content: [
    {
      id: "introduction",

      content:
        "Data visualization is the process of representing information and data in a graphical or visual format such as charts, graphs, dashboards, and maps. It transforms numbers, tables, and raw datasets into visual formats that we all can process easily. Instead of scrolling through endless spreadsheets, a well-designed visualization reveals patterns, relationships, and outliers at a glance./n With tools like Qlik Sense, Looker, and Grafana, businesses and teams can unlock real-time insights and make smarter, faster decisions.",
      subsections: [
        {
          content:
            "Data visualization is the process of representing information and data in a graphical or visual format such as charts, graphs, dashboards, and maps. It transforms numbers, tables, and raw datasets into visual formats that we all can process easily. Instead of scrolling through endless spreadsheets, a well-designed visualization reveals patterns, relationships, and outliers at a glance./n With tools like Qlik Sense, Looker, and Grafana, businesses and teams can unlock real-time insights and make smarter, faster decisions.",
        },
        {
          title: "Why Visualization Matters",
          content:
            "Here’s a definitive guide to the top ten data visualization tools...",
        },
      ],
    },
    {
      id: "which-tool",
      title: "So, Which One Should You Use?",
      content:
        "The choice of visualization tool depends on your specific needs...",
      subsections: [
        {
          title: "Excel – The First Stop on Everyone's Journey",
          content:
            "Excel remains the go-to tool for basic data visualization...",
        },
        {
          title: "Advanced Solutions",
          content:
            "For more complex needs, enterprise solutions like Tableau, Power BI...",
        },
      ],
    },
    {
      id: "final-words",
      title: "Final Words: Tools Don't Make the Visual, You Do",
      content:
        "At the end of the day, the best visualization tool is the one that serves your needs...",
      subsections: [
        {
          title: "Key Takeaways",
          content: "Invest time in learning your chosen tool thoroughly...",
        },
      ],
    },
    {
      id: "cta",
      title: "Call-To-Action",
      content: "Ready to transform your data into compelling visuals?...",
    },
  ],
};

export default function DocumentationLayout() {
  const [copied, setCopied] = useState(false);

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.korcomptenz.com/";

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="container-md  py-10">
      <div className="flex gap-10">
        <aside className="hidden md:block w-[280px]">
          <div
            className="bg-[#E2EBE4] border border-[#4999C2] shadow-md rounded-lg p-6 bg-no-repeat bg-right-bottom"
            style={{
              backgroundImage:
                "url('https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Rectangle_237_c9ef7d0957.png?updatedAt=2025-11-27T09%3A33%3A55.297Z')",
              backgroundSize: "120px",
            }}
          >
            <h2 className="font-bold text-lg text-gray-900 mb-6">
              Table of Contents
            </h2>

            <ul className="space-y-4 text-sm text-gray-800">
              <li>
                • When Data Meets Design: The Hidden Power of Visualization
                Tools
              </li>
              <li>• So, Which One Should You Use?</li>
              <li>• Final Words: Tools Don't Make the Visual, You Do</li>
              <li>• Call-To-Action</li>
            </ul>
          </div>
        </aside>

        <main className="flex-1">
          <article className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-10">
              {data.title}
            </h1>

            <div className="space-y-16">
              {data.content.map((section) => (
                <section key={section.id}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>

                  <p className="text-gray-800 leading-relaxed">
                    {section.content}
                  </p>

                  {section.subsections && (
                    <div className="space-y-6 mt-6">
                      {section.subsections.map((sub, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {sub.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>

          <div className="mt-5">
            <div className="flex gap-3 items-center">
              <p className=" font-bold text-black text-sm md:text-base">
                share
              </p>

              {defaultSocialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.buildUrl(pageUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="
          flex items-center justify-center 
          w-7 h-7 md:w-10 md:h-10       /* smaller on mobile */
          hover:bg-gray-100 
          rounded-full 
          transition-colors duration-150
        "
                >
                  <link.icon className="w-3 h-3 md:w-5 md:h-5" color="black" />
                </Link>
              ))}

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="
        flex items-center justify-center 
        w-7 h-7 md:w-10 md:h-10
        hover:bg-gray-100 
        rounded-full 
        transition-colors duration-150
      "
                title="Copy link"
                aria-label="Copy link"
              >
                <LinkIcon
                  size={18}
                  strokeWidth={3}
                  className="text-black md:size-5"
                />
              </button>
            </div>

            {/* Copy Feedback */}
            {copied && (
              <p className="text-xs text-primary mt-2 text-center">
                Link copied!
              </p>
            )}
          </div>
        </main>
      </div>

      <div className="flex justify-between mt-24 px-2">
        <div className="flex gap-2">
          <ChevronLeft
            size={20}
            className="
  text-white 
  bg-primary p-2
  rounded-full 
  w-12 h-12 
  flex items-center justify-center
  transition-all

  hover:bg-white 
  hover:text-primary 
  hover:border 
  hover:border-primary
"
          />
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-foreground">
              Local SEO for Lawyers: A Step-by-Step Guide to More Clients
            </p>
            <p className="text-md text-foreground">Previous</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col text-end">
            <p className="text-lg font-semibold text-foreground">
              What Is Website Authority & Why Does It Matter?
            </p>
            <p className="text-md text-foreground">Right</p>
          </div>
          <ChevronRight
            size={20}
            className="
      text-white 
     bg-primary p-2
  rounded-full 
  w-12 h-12 
  flex items-center justify-center
  transition-all

  hover:bg-white 
  hover:text-primary 
  hover:border 
  hover:border-primary
"
          />
        </div>
      </div>
    </section>
  );
}

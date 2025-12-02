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
import { DangerousHtml } from "@/components/ui/dangerous-html";

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

export default function DocumentationLayout(data: InsightBlog) {
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

  const parser = new DOMParser();
  const doc = parser.parseFromString(
    data?.data?.insight?.blog?.content,
    "text/html"
  );

  const h2Array = Array.from(doc.querySelectorAll("h2")).map((h2) =>
    h2.textContent.trim()
  );

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

            {h2Array.map((item, index) => (
              <ul className="space-y-6 text-md text-gray-800" key={index}>
                <li> • {item}</li>
              </ul>
            ))}
          </div>
        </aside>

        <main className="flex-1">
          <article className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-10">
              {data?.data?.insight?.title}
            </h1>

            <div className="space-y-16">
              <div className="space-y-8">
                <DangerousHtml html={data?.data?.insight?.blog?.content} />{" "}
              </div>
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

      <div className="flex justify-between mt-24 px-2 w-full">
        {/* LEFT — PREVIOUS */}
        {data?.data?.previousInsight ? (
          <Link href={`/blog/${data?.data?.previousInsight?.slug}`}>
            <div className="flex gap-2 items-center justify-end text-end">
              <ChevronLeft
                size={20}
                className="text-white bg-primary p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:bg-white hover:text-primary hover:border hover:border-primary"
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-foreground">
                  {data?.data?.previousInsight?.title}
                </p>
                <p className="text-md text-foreground">Previous</p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="w-[200px]"></div>
        )}

        {/* RIGHT — NEXT */}
        {data?.data?.nextInsight ? (
          <Link href={`/blog/${data?.data?.nextInsight?.slug}`}>
            <div className="flex gap-2 items-center justify-end text-end">
              <div className="flex flex-col items-end text-end">
                <p className="text-lg font-semibold text-foreground">
                  {data?.data?.nextInsight?.title}
                </p>
                <p className="text-md text-foreground">Next</p>
              </div>
              <ChevronRight
                size={20}
                className="text-white bg-primary p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:bg-white hover:text-primary hover:border hover:border-primary"
              />
            </div>
          </Link>
        ) : (
          <div className="w-[200px]"></div>
        )}
      </div>
    </section>
  );
}

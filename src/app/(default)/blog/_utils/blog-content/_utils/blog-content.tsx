"use client";

import { useState } from "react";

import { Link as LinkIcon, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import KorcomptenzImage from "@/components/korcomptenz-image";

export default function DocumentationLayout({
  data,
  essential,
}: {
  data: InsightBlog;
  essential: InsightPageType;
}) {
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

  // const parser = new DOMParser();
  // const doc = parser.parseFromString(data?.insight?.blog?.content, "text/html");

  // const h2Array = Array.from(doc.querySelectorAll("h2")).map((h2) =>
  //   h2.textContent.trim()
  // );
  const articleUrl = window.location.href;

  const encodedPrompt = encodeURIComponent(articleUrl);

  const parser = new DOMParser();
  const doc = parser.parseFromString(
    data?.insight?.blog?.content || "",
    "text/html"
  );

  // helper to create URL-safe IDs
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const h2Elements = Array.from(doc.querySelectorAll("h2"));

  const h2Array = h2Elements.map((h2) => {
    const text = h2.textContent?.trim() || "";
    const id = slugify(text);
    h2.setAttribute("id", id);
    h2.style.scrollMarginTop = "120px";
    return { text, id };
  });

  // final HTML with IDs injected
  const updatedHtml = doc.body.innerHTML;

  return (
    <section className="container-md">
      <div className="flex gap-10">
        <aside className="hidden md:block w-[280px]">
          <div className="relative bg-[#E2EBE4] border border-[#4999C2] shadow-md rounded-lg p-6 bg-no-repeat">
            <h2 className="font-bold text-lg text-gray-900 mb-6">
              Table of Contents
            </h2>

            <ul className="space-y-3 text-md text-gray-800">
              {h2Array.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-primary transition"
                  >
                    • {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* IMAGE FIXED TO RIGHT-BOTTOM */}
            <div className="mt-auto flex justify-end pt-4 ">
              <KorcomptenzImage
                src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_a192026447cc8bbb85fe76258661cb3a6f90d37c_36efa177de.png?updatedAt=2025-12-08T11%3A16%3A55.521Z"
                width={120}
                height={120}
              />
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <article className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-10">
              {data?.insight?.title}
            </h1>

            <div className="space-y-16">
              <div className="space-y-8">
                <DangerousHtml html={updatedHtml} className="blog-section" />
              </div>
            </div>
          </article>

          <div className="mt-5">
            <div className="flex gap-3 items-center">
              <p className=" font-bold text-black text-sm md:text-base">
                share
              </p>

              {essential?.blogSocialPlatform?.map((link) => (
                <Link
                  key={link.id}
                  href={`${link?.link}${encodedPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 hover:bg-gray-100 rounded-full transition-colors duration-150"
                >
                  <KorcomptenzImage src={link?.icon} width={25} height={25} />
                </Link>
              ))}

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className=" flex items-center justify-center w-7 h-7 md:w-10 md:h-10 hover:bg-gray-100  rounded-full transition-colors duration-150 "
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
        {data?.previousInsight ? (
          <Link href={`/blog/${data?.previousInsight?.slug}`}>
            <div className="flex gap-2 items-center justify-end text-end">
              <ChevronLeft
                size={20}
                className="text-white bg-primary p-2 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:bg-white hover:text-primary hover:border hover:border-primary"
              />
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-foreground">
                  {data?.previousInsight?.title}
                </p>
                <p className="text-md text-foreground text-start">Previous</p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="w-[200px]"></div>
        )}

        {/* RIGHT — NEXT */}
        {data?.nextInsight ? (
          <Link href={`/blog/${data?.nextInsight?.slug}`}>
            <div className="flex gap-2 items-center justify-end text-end">
              <div className="flex flex-col items-end text-end">
                <p className="text-lg font-semibold text-foreground">
                  {data?.nextInsight?.title}
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

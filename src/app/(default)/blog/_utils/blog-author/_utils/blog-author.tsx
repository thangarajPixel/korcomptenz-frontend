"use client";

import { ShareButton } from "./share-button";
import dayjs from "dayjs";
import KorcomptenzImage from "@/components/korcomptenz-image";
import Link from "next/link";

type BlogAuthorType = {
  publishedAt: string;
  name: string;
  image: ImageType;
};

export default function BlogAuthor({
  data,
  essential,
}: {
  data: BlogAuthorType;
  essential: InsightPageType;
}) {
  const articleUrl = window.location.href;
  const prompt = `Visit this URL and summarize this post for me: ${articleUrl}`;
  const encodedPrompt = encodeURIComponent(prompt);

  return (
    <section className="container-md  px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
        {/* LEFT — AUTHOR INFO */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-1 text-center md:text-left">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-pink-400 to-orange-400">
            <KorcomptenzImage src={data?.image} fill className="object-cover" />
          </div>

          <div className="pt-1">
            <h2 className="text-4xl font-semibold text-foreground">
              {data?.name}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dayjs(data?.publishedAt).format("DD MMM YYYY")}
            </p>
          </div>
        </div>

        {/* RIGHT — AI SECTION */}
        {/* RIGHT — AI SECTION */}
        <div
          className="
  flex flex-col 
  md:items-start 
  gap-3 
  mt-4 md:mt-0 
  w-full md:w-auto
"
        >
          {/* MOBILE: Share button first */}
          <div className="flex md:hidden justify-center mb-10">
            <ShareButton data={essential?.blogSocialPlatform} />
          </div>

          {/* TEXT */}
          <p
            className="
    text-3xl text-black 
    text-center md:text-left font-medium
  "
          >
            Use AI to summarize this article
          </p>

          {/* ICON ROW */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            {essential?.blogAiPlatform.map((tool) => (
              <Link
                key={tool.id}
                href={`${tool.link}${encodedPrompt}`}
                target="_blank"
                rel="noopener noreferrer"
                title={tool.label}
                className="flex items-center justify-center h-14 w-14 rounded-lg "
              >
                <KorcomptenzImage
                  src={tool.icon}
                  width={30}
                  height={30}
                  alt={tool.label}
                />
              </Link>
            ))}

            {/* DESKTOP: Share button next to icons */}
            <div className="hidden md:block  ">
              <ShareButton data={essential?.blogSocialPlatform} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

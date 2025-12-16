"use client";

import Image from "next/image";

import { ShareButton } from "./share-button";
import dayjs from "dayjs";
import KorcomptenzImage from "@/components/korcomptenz-image";

const article = {
  id: 1,
  author: "George Philip",
  authorImage: "/public/assets/Neha-Bhagat.png",
  date: "September 30, 2025",
  title: "The Future of Web Development",
  aiTools: [
    {
      id: 1,
      name: "Claude",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Clip_path_group_da6ff639d1.png?updatedAt=2025-12-04T11%3A22%3A02.430Z",
    },
    {
      id: 2,
      name: "GPT-4",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Clip_path_group_1_8ab0534a54.png?updatedAt=2025-12-04T11%3A22%3A02.488Z",
    },
    {
      id: 3,
      name: "Gemini",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Vector_ce867faeb0.png?updatedAt=2025-12-04T11%3A22%3A02.531Z",
    },
    {
      id: 4,
      name: "Perplexity",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/grok_ai_1_a29323e083.png?updatedAt=2025-12-04T11%3A22%3A02.448Z",
    },
    {
      id: 5,
      name: "More",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/google_ai_1_2c17d8836b.png?updatedAt=2025-12-04T11%3A22%3A02.436Z",
    },
  ],
};

type BlogAuthorType = {
  publishedAt: string;
  name: string;
  image: ImageType;
};

export default function BlogAuthor({ data }: { data: BlogAuthorType }) {
  return (
    <section className="container-md  px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
        {/* LEFT — AUTHOR INFO */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-1 text-center md:text-left">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-pink-400 to-orange-400">
            <KorcomptenzImage src={data.image} fill className="object-cover" />
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
            <ShareButton />
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
          <div
            className="
    flex items-center 
    justify-center md:justify-start 
    gap-2
  "
          >
            {article.aiTools.map((tool) => (
              <button
                key={tool.id}
                className="
          flex items-center justify-center 
          h-14 w-14 
          rounded-lg 
       
       
        "
                title={tool.name}
              >
                <span className="text-lg">
                  {" "}
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={article.author || ""}
                    width={"30"}
                    height={"30"}
                  />
                </span>
              </button>
            ))}

            {/* DESKTOP: Share button next to icons */}
            <div className="hidden md:block  ">
              <ShareButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

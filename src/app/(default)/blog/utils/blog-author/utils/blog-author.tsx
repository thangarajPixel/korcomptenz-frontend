"use client";

import Image from "next/image";

import { ShareButton } from "./share-button";

const article = {
  id: 1,
  author: "George Philip",
  authorImage: "/public/assets/Neha-Bhagat.png",
  date: "September 30, 2025",
  title: "The Future of Web Development",
  aiTools: [
    { id: 1, name: "Claude", icon: "🤖" },
    { id: 2, name: "GPT-4", icon: "✨" },
    { id: 3, name: "Gemini", icon: "🔮" },
    { id: 4, name: "Perplexity", icon: "🌐" },
    { id: 5, name: "More", icon: "⚙️" },
  ],
};

export default function BlogAuthor() {
  return (
    <section className="container-md  py-8 px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
        {/* LEFT — AUTHOR INFO */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-1 text-center md:text-left">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-pink-400 to-orange-400">
            <Image
              src={article.authorImage || "/placeholder.svg"}
              alt={article.author}
              fill
              className="object-cover"
            />
          </div>

          <div className="pt-1">
            <h2 className="text-4xl font-semibold text-foreground">
              {article.author}
            </h2>
            <p className="text-lg text-muted-foreground">{article.date}</p>
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
    text-sm text-black 
    text-center md:text-left
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
          h-10 w-10 
          rounded-lg bg-secondary 
          hover:bg-secondary/80 
          transition-colors
        "
                title={tool.name}
              >
                <span className="text-lg">{tool.icon}</span>
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

"use client";

import ContentShowcaseSection from "@/components/content-showcase-section";

export default function BlogContentShowcase({ data }: { data: InsightItem[] }) {
  const compileData: ContentShowcaseSectionType = {
    ...data,
    title: "",
    buttontext: "",
    description: "",

    list: data?.map((item) => ({
      ...item,
      title: item.title || item.heroSection.title,
      buttonText: item.heroSection?.buttonText,
      link: `/insights/${item.slug}`,
      image: item.heroSection.image,
      text: item.content || "",
      description: item.content || "",
      buttonLink: `/blog/${item.slug}`,
      id: item.id,
    })),
  };

  return <ContentShowcaseSection data={compileData} />;
}

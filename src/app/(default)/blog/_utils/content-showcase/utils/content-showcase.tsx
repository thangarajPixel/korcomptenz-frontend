"use client";

import ContentShowcaseSection from "@/components/content-showcase-section";

export default function BlogContentShowcase({
  data,
  relatedCase,
}: {
  data: InsightItem[];
  relatedCase: RelatedCaseType;
}) {
  const compileData: ContentShowcaseSectionType = {
    ...data,
    title: relatedCase.title,
    buttontext: relatedCase.buttonText,
    description: "",
    list: data?.map((item) => ({
      ...item,
      title: item.title || item.heroSection.title,
      buttonText: item.heroSection?.buttonText,
      link: `/blog/${item.slug}`,
      image: item.heroSection.image,
      text: item.content || "",
      description: item.content || "",
      buttonLink: `/blog/${item.slug}`,
      id: item.id,
    })),
  };

  return (
    <div className="mb-10">
      <ContentShowcaseSection data={compileData} />
    </div>
  );
}

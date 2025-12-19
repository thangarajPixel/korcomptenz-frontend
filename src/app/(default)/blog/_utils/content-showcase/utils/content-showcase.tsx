"use client";

import RecommendedBlogSection from "../../blog-content/_utils/Recommended-blog-section";

export default function BlogContentShowcase({
  data,
  relatedCase,
}: {
  data: InsightItem[];
  relatedCase: RelatedCaseType;
}) {
  const compileData: InsightsSectionType = {
    ...data,
    title: relatedCase.title,
    buttontext: relatedCase.buttonText,
    buttonLink: "",
    list: data?.map((item) => ({
      ...item,
      // title: item.title || item.heroSection.title,
      // buttonText: item.heroSection?.buttonText,
      // link: `/blog/${item.slug}`,
      // image: item.featureImage,
      // text: item.content || "",
      // description: item.heroSection?.description || "",
      // buttonLink: `/blog/${item.slug}`,
      // id: item.id,

      category: item?.content,
      description: item.heroSection?.description || "",
      id: item.id,
      image: item?.featureImage,
      link: `/blog/${item.slug}`,
      title: item.title || item.heroSection.title,
    })),
  };

  return (
    <div className="mb-10">
      <RecommendedBlogSection data={compileData} />
    </div>
  );
}

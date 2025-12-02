import React, { cache } from "react";
import { getBlogPage } from "@/services";
import BlogBannerSection from "../utils/banner-section";
import BlogAuthor from "../utils/blog-author";
import DocumentationLayout from "../utils/blog-content";

import BlogContentShowcase from "../utils/content-showcase";
// import BlogBuildDemo from "../utils/blog-consultation";

type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const data = await getBlogPageCache({ id });

  return (
    <div className="gap-10">
      <BlogBannerSection BannerSectionData={data?.insight?.heroSection} />
      <BlogAuthor />
      <DocumentationLayout data={data} />
      {/* <BlogBuildDemo /> */}
      <BlogContentShowcase data={data?.relatedInsight} />
    </div>
  );
};

export default Page;

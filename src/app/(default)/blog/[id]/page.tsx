import React, { cache } from "react";
import { getBlogPage, getInsightPage } from "@/services";
import BlogBannerSection from "../_utils/banner-section";
import BlogAuthor from "../_utils/blog-author";
import DocumentationLayout from "../_utils/blog-content";
import BlogContentShowcase from "../_utils/content-showcase";
import { GlobalForm } from "@/components/global-form";

type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const [data, pageLayout] = await Promise.all([
    getBlogPageCache({ id }),
    getInsightPage(),
  ]);

  return (
    <div className="flex flex-col gap-16">
      <BlogBannerSection BannerSectionData={data?.insight} />
      <BlogAuthor data={data?.insight?.author} />
      <DocumentationLayout data={data} />
      <GlobalForm
        form={pageLayout?.form}
        essential={{
          id: data?.insight?.id,
          documentId: data?.insight?.documentId,
        }}
      />
      <BlogContentShowcase
        data={data?.relatedInsight}
        relatedCase={pageLayout?.relatedCase}
      />
    </div>
  );
};

export default Page;

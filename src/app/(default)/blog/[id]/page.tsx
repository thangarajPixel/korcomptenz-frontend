import React, { cache } from "react";
import { getBlogPage, getInsightPage } from "@/services";
import BlogBannerSection from "../_utils/banner-section";
import BlogAuthor from "../_utils/blog-author";
import DocumentationLayout from "../_utils/blog-content";
import BlogContentShowcase from "../_utils/content-showcase";
import { GlobalForm } from "@/components/global-form";
import FaqSection from "@/components/faq-section";

import NotFound from "@/components/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const data = await getBlogPageCache({ id });

  return {
    title: data?.insight?.seo?.title || id,
    description: data?.insight?.seo?.description || "",
    alternates: {
      canonical: `/blog/${id}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const [data, pageLayout] = await Promise.all([
    getBlogPageCache({ id }),
    getInsightPage(),
  ]);

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Homepage",
        item: "https://www.korcomptenz.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.korcomptenz.com/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data?.insight?.title,
        item: `https://www.korcomptenz.com/blog/${data?.insight?.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.korcomptenz.com/blog/${data?.insight?.slug}`,
    },
    headline: data?.insight?.title,
    description: data?.insight?.seo?.description,
    image: data?.insight?.heroSection?.image?.url,
    author: {
      "@type": "Person",
      name: data?.insight?.author?.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Korcomptenz",
      logo: {
        "@type": "ImageObject",
        url: "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/full_logo_b4df11a39a.svg",
      },
    },
    datePublished: data?.insight?.publishedAt,
    dateModified: data?.insight?.updatedAt,
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, articleSchema],
  };

  return (
    <>
      {" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {data?.seo?.title === "not-found" ? (
        <div className="pb-10 md:pb-24">
          <NotFound data={data?.list?.[0]} />
        </div>
      ) : (
        <div className="flex flex-col gap-16">
          <BlogBannerSection
            BannerSectionData={data?.insight}
            tableTitle={pageLayout?.tableTitle}
          />
          <BlogAuthor data={data?.insight} essential={pageLayout} />
          <DocumentationLayout data={data} essential={pageLayout} />
          {data?.insight?.blog?.faq && (
            <FaqSection faqData={data?.insight?.blog?.faq} />
          )}

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
      )}
    </>
  );
};

export default Page;

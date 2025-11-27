import React from "react";
import BlogBannerSection from "./utils/banner-section/blog-banner-section";

const data = {
  id: 1034,
  list: [
    {
      __component: "page-componets.banner-section-list",
      id: 1114,
      title: "Advisory & Consulting Services",
      description:
        "Unlock enterprise transformation with expert-led advisory and consulting—aligning ERP, CRM, and cloud strategies to accelerate modernization, improve ROI, and ensure scalable, business-aligned outcomes from day one.",
      buttonText: null,
      secondButton: null,
      link: "/",
      secondLink: null,
      bannerCaption: null,
      logo: null,
      logoMobile: null,
      image: {
        id: 535,
        name: "bannerimage.png",
        alternativeText: null,
        caption: null,
        width: 1340,
        height: 512,
        formats: { thumbnail: {} },
        hash: "bannerimage_42e37b326c",
        ext: ".png",
        mime: "image/png",
        size: 337.45,
        url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/bannerimage_42e37b326c.png",
        previewUrl: null,
        provider: "strapi-provider-upload-azure-sa",
        provider_metadata: null,
        createdAt: "2025-09-29T04:32:50.182Z",
        updatedAt: "2025-09-29T05:51:41.711Z",
        publishedAt: "2025-09-29T04:32:50.183Z",
        documentId: "obhpxglghr7t2ezcqnlij3h1",
      },
      imageMobile: {
        id: 533,
        name: "bannermobile.png",
        alternativeText: null,
        caption: null,
        width: 335,
        height: 335,
        formats: { thumbnail: {} },
        hash: "bannermobile_7865f018d9",
        ext: ".png",
        mime: "image/png",
        size: 71.1,
        url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/bannermobile_7865f018d9.png",
        previewUrl: null,
        provider: "strapi-provider-upload-azure-sa",
        provider_metadata: null,
        createdAt: "2025-09-29T04:32:49.567Z",
        updatedAt: "2025-09-29T04:32:49.567Z",
        publishedAt: "2025-09-29T04:32:49.567Z",
        documentId: "wzjgv8rxrg0zwguz9lwx71pj",
      },
    },
  ],
};

export default async function careerPage() {
  return (
    <div className="">
      <BlogBannerSection BannerSectionData={data?.list as never} />
    </div>
  );
}

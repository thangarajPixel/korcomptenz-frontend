import type { Metadata } from "next";

const SITE_URL = "https://www.korcomptenz.com";
const SITE_NAME = "Korcomptenz";
const DEFAULT_TITLE = "Korcomptenz | Digital Transformation, AI & Cloud Solutions";
const DEFAULT_DESCRIPTION = "Transform your business with Korcomptenz's AI, cloud, data, ERP and CRM solutions.";
const TWITTER_DESCRIPTION = "Explore Korcomptenz services across AI, cloud, ERP, CRM and data analytics.";
const OG_IMAGE = "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/full_logo_b4df11a39a.svg";

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  twitterDescription?: string;
}

export function generatePageMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "",
  image = OG_IMAGE,
  twitterDescription = TWITTER_DESCRIPTION,
}: GenerateMetadataParams = {}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription,
      images: image,
    },
  };
}

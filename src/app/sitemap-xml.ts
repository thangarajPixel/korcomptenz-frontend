import type { MetadataRoute } from "next";
import http from "@/services/http";

type SitemapUrl = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
};

type SitemapResponse = {
  urls: SitemapUrl[];
};

const BASE_URL = "https://www.korcomptenz.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch sitemap data from backend
    const response = await http.get("/sitemap");
    
  
    const data = response as unknown as SitemapResponse;

    // Check if we have valid data
    if (!data || !data.urls || !Array.isArray(data.urls)) {
      throw new Error("Invalid sitemap data");
    }

    // Transform backend response to Next.js sitemap format
    const sitemapEntries = data.urls.map((url) => ({
      url: url.loc,
      lastModified: new Date(url.lastmod),
      changeFrequency: url.changefreq as
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never",
      priority: parseFloat(url.priority),
    }));

    return sitemapEntries;
  } catch {
    // Fallback: Return static pages if API fails
    const fallbackPages = [
      {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1,
      },
      {
        url: `${BASE_URL}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
    ];

    return fallbackPages;
  }
}

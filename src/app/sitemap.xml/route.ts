import { NextRequest, NextResponse } from "next/server";
import http from "@/services/http";
import type {
  CategorizedSitemapResponse,
  SitemapChild,
  SitemapSection,
} from "@/types/sitemap-types";

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.korcomptenz.com";


// Slug / URL helpers — derived from data

function urlToSlug(url: string): string {
  const path = url.startsWith(BASE_URL) ? url.slice(BASE_URL.length) : url;
  const xmlMatch = path.match(/^\/sitemap-(.+)\.xml$/);
  if (xmlMatch) return xmlMatch[1];
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return "";
  return segments.join("-");
}

/** Builds a clean sub-sitemap URL from a slug. */
function slugToSitemapUrl(slug: string): string {
  return `${BASE_URL}/sitemap-${slug}.xml`;
}

/**
 * Derives a display title from a URL path when the API title is null.
 */
function titleFromUrl(url: string): string {
  const path = url.startsWith(BASE_URL) ? url.slice(BASE_URL.length) : url;
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return url;
  // Use the last path segment, capitalise each word
  return segments[segments.length - 1]
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Tree search

type FoundNode = {
  title: string | null;
  url: string;
  lastmod: string;
  children: SitemapChild[];
};

function findNodeBySlug(
  sections: SitemapSection[],
  targetSlug: string,
): FoundNode | null {
  for (const section of sections) {
    if (section.url && urlToSlug(section.url) === targetSlug) {
      return {
        title: section.title,
        url: section.url,
        lastmod: section.lastmod,
        children: section.children ?? [],
      };
    }
    if (section.children) {
      const found = searchChildrenBySlug(section.children, targetSlug);
      if (found) return found;
    }
  }
  return null;
}

function searchChildrenBySlug(
  children: SitemapChild[],
  targetSlug: string,
): FoundNode | null {
  for (const child of children) {
    if (urlToSlug(child.url) === targetSlug) {
      return {
        title: child.title,
        url: child.url,
        lastmod: child.lastmod,
        children: child.children ?? [],
      };
    }
    if (child.children) {
      const found = searchChildrenBySlug(child.children, targetSlug);
      if (found) return found;
    }
  }
  return null;
}

// XML helpers

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateUrlEntry(
  url: string,
  lastmod: string,
  hasChildren: boolean,
  title: string | null,
): string {
  // Fall back to a URL-derived title when the API returns null
  const safeTitle = title ?? titleFromUrl(url);
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <hasChildren>${hasChildren}</hasChildren>
    <title>${escapeXml(safeTitle)}</title>
  </url>\n`;
}

// Route handler

export async function GET(request: NextRequest) {
  try {
    const response = await http.get("/sitemap/categorized");
    const data = response as unknown as CategorizedSitemapResponse;

    if (!data || !data.sections) {
      throw new Error("Invalid sitemap data");
    }

    const sitemapSlug = request.headers.get("x-sitemap-slug");

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';

    if (!sitemapSlug) {
      // Root sitemap.xml — list all top-level sections
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

      for (const section of data.sections) {
        const locUrl = section.url ?? slugToSitemapUrl(
          section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        );
        xml += generateUrlEntry(locUrl, section.lastmod, true, section.title);
      }

      xml += "</urlset>";
    } else {
      // Sub-sitemap — find the matching node and list its children
      const node = findNodeBySlug(data.sections, sitemapSlug);
      const pageTitle = node?.title ?? sitemapSlug;

      xml += `<?sitemap-title ${escapeXml(pageTitle)}?>\n`;
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

      if (node) {
        for (const child of node.children) {
          const hasChildren = !!(child.children && child.children.length > 0);
          const childSlug = urlToSlug(child.url);
          const locUrl = hasChildren ? slugToSitemapUrl(childSlug) : child.url;
          xml += generateUrlEntry(locUrl, child.lastmod, hasChildren, child.title);
        }
      }

      xml += "</urlset>";
    }

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Sitemap error:", error);

    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new NextResponse(errorXml, {
      status: 200,
      headers: { "Content-Type": "application/xml" },
    });
  }
}

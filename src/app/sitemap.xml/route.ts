import { NextRequest, NextResponse } from "next/server";
import http from "@/services/http";
import type { CategorizedSitemapResponse, SitemapChild, SitemapSection } from "@/types/sitemap-types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    // Fetch sitemap data from API
    const response = await http.get("/sitemap/categorized");
    const data = response as unknown as CategorizedSitemapResponse;

    if (!data || !data.sections) {
      throw new Error("Invalid sitemap data");
    }

    // Get query parameters for hierarchical navigation
    const searchParams = request.nextUrl.searchParams;
    const path = searchParams.get("path");

    // Generate XML content
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    if (!path) {
      // Root level - show only top-level sections
      for (const section of data.sections) {
        if (section.url) {
          xml += generateUrlEntry(section.url, section.lastmod, true);
        }
      }
    } else {
      // Find the matching section or child based on path
      const urls = findChildrenByPath(data.sections, path);
      for (const url of urls) {
        xml += generateUrlEntry(url.url, url.lastmod, url.hasChildren);
      }
    }

    xml += '</urlset>';

    // Return XML response
    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Download error:", error);
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.korcomptenz.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new NextResponse(errorXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
}

function findChildrenByPath(sections: SitemapSection[], path: string): Array<{ url: string; lastmod: string; hasChildren: boolean }> {
  const results: Array<{ url: string; lastmod: string; hasChildren: boolean }> = [];

  // Search through sections
  for (const section of sections) {
    if (section.url === path) {
      // Found matching section, return its children
      if (section.children) {
        for (const child of section.children) {
          results.push({
            url: child.url,
            lastmod: child.lastmod,
            hasChildren: !!(child.children && child.children.length > 0),
          });
        }
      }
      return results;
    }

    // Search through children
    if (section.children) {
      const childResults = findChildrenInArray(section.children, path);
      if (childResults.length > 0) {
        return childResults;
      }
    }
  }

  return results;
}

function findChildrenInArray(children: SitemapChild[], path: string): Array<{ url: string; lastmod: string; hasChildren: boolean }> {
  const results: Array<{ url: string; lastmod: string; hasChildren: boolean }> = [];

  for (const child of children) {
    if (child.url === path) {
      // Found matching child, return its children
      if (child.children) {
        for (const nestedChild of child.children) {
          results.push({
            url: nestedChild.url,
            lastmod: nestedChild.lastmod,
            hasChildren: !!(nestedChild.children && nestedChild.children.length > 0),
          });
        }
      }
      return results;
    }

    // Recursively search nested children
    if (child.children) {
      const nestedResults = findChildrenInArray(child.children, path);
      if (nestedResults.length > 0) {
        return nestedResults;
      }
    }
  }

  return results;
}

function generateUrlEntry(url: string, lastmod: string, hasChildren: boolean): string {
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <hasChildren>${hasChildren}</hasChildren>
  </url>
`;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

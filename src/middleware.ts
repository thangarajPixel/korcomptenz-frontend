import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  // Rewrite /sitemap-*.xml (sub-sitemaps) to the /sitemap.xml route handler,
  // passing only the slug so the handler can resolve it dynamically via API data.
  const subSitemapMatch = pathname.match(/^\/sitemap-(.+)\.xml$/);
  if (subSitemapMatch) {
    const slug = subSitemapMatch[1];
    // Pass the slug via a custom header — query params on rewrite URLs are
    // not reliably accessible via request.nextUrl.searchParams in route handlers.
    requestHeaders.set("x-sitemap-slug", slug);

    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = "/sitemap.xml";
    rewriteUrl.search = "";

    return NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

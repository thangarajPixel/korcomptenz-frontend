export interface SitemapChild {
  title: string | null;
  url: string;
  lastmod: string;
  children?: SitemapChild[];
}

export interface SitemapSection {
  title: string;
  url: string | null;
  lastmod: string;
  children: SitemapChild[];
}

export interface CategorizedSitemapResponse {
  baseUrl: string;
  sections: SitemapSection[];
}

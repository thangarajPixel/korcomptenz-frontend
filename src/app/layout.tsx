export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { BreadcrumbSchema } from "@/components/providers/breadcrumb-schema";
import { headers } from "next/headers";
import TrackingLoader from "./TrackingLoader";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.korcomptenz.com";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Korcomptenz",
      template: "%s | Korcomptenz",
    },
    description:
      "Digitize businesses with Korcomptenz IT services to unlock new growth opportunities, maximize ROI and deliver superior customer experiences.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: "Korcomptenz",
      title: "Korcomptenz",
      description:
        "Digitize businesses with Korcomptenz IT services to unlock new growth opportunities, maximize ROI and deliver superior customer experiences.",
      images: [
        {
          url: "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/full_logo_b4df11a39a.svg",
          width: 1200,
          height: 630,
          alt: "Korcomptenz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@korcomptenz",
      creator: "@korcomptenz",
      title: "Korcomptenz | Digital Transformation, AI & Cloud Solutions",
      description:
        "Explore Korcomptenz services across AI, cloud, ERP, CRM and data analytics.",
      images: ["https://www.korcomptenz.com/assets/images/logo.png"],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="digital transformation company, AI solutions, cloud services, ERP consulting, CRM consulting, data analytics services"
        />
        <meta name="robots" content="index, follow" />

        {/* Preconnect (keep this 👍) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://js.hs-scripts.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://s.adroll.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://mkmpages.korcomptenz.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="https://aue2kormlworkspacetest01.blob.core.windows.net" />

        <link rel="icon" href="/assets/logo.png" sizes="any" />

        {/* ✅ Schema only (safe) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Korcomptenz",
              url: "https://www.korcomptenz.com/",
            }),
          }}
        />

        <BreadcrumbSchema />
      </head>

      <body className={`${outfitSans.variable} antialiased`}>
        {/* GTM noscript (safe) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDLSJSX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Providers>{children}</Providers>

        {/* 🔥 KEY: Load tracking after interaction */}
        <TrackingLoader />
      </body>
    </html>
  );
}
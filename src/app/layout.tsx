export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
// import { BreadcrumbSchema } from "@/components/providers/breadcrumb-schema";
import { headers } from "next/headers";
import TrackingLoader from "@/components/providers/TrackingLoader";
import Script from "next/dist/client/script";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.korcomptenz.com";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  return {
    title: {
      default: "Korcomptenz",
      template: "%s | Korcomptenz",
    },
    description:
      "Digitize businesses with Korcomptenz IT services to unlock new growth opportunities, maximize ROI and deliver superior customer experiences.",
    keywords: [
      "digital transformation company",
      "AI solutions",
      "cloud services",
      "ERP consulting",
      "CRM consulting",
      "data analytics services",
    ],
    robots: "index, follow",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
    },
    icons: {
      shortcut: "https://www.korcomptenz.com/favicon.ico",
    },
    authors: [{ name: "Korcomptenz" }],
    other: {
      "geo.region": "US-NJ",
      "geo.placename": "New Jersey, USA",
      "geo.position": "40.7128;-74.0060",
      ICBM: "40.7128, -74.0060",
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
    // other: {
    //   "link[rel='preload'][as='image'][href='/assets/loading.png']": {
    //     rel: "preload",
    //     as: "image",
    //     href: "/assets/loading.png",
    //   },
    // },
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
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://js.hs-scripts.com" />
        <link rel="dns-prefetch" href="https://s.adroll.com" />
        <link rel="dns-prefetch" href="https://mkmpages.korcomptenz.com" />
        <link
          rel="preconnect"
          href="https://aue2kormlworkspacetest01.blob.core.windows.net"
        />
        {/* JSON-LD Structured Data Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Korcomptenz",
              url: "https://www.korcomptenz.com/",
              logo: "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/full_logo_b4df11a39a.svg",
              description:
                "Digitize businesses with Korcomptenz IT services to unlock new growth opportunities, maximize ROI and deliver superior customer experiences.",
              telephone: "+1-973-601-8770",
              email: "sales@korcomptenz.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "35 Waterview Blvd Suite 207",
                addressLocality: "Parsippany",
                addressRegion: "New Jersey",
                postalCode: "07054",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.linkedin.com/company/korcomptenz/",
                "https://www.facebook.com/Korcomptenz/",
                "https://x.com/korcomptenz",
              ],
            }),
          }}
        />
        /* Mirabel Tracking Code Start*/
        <Script
          id="mirabel-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function () {
                var e, t;
                e = document.createElement("script"),
                e.type = "text/javascript",
                e.async = true,
                e.defer = true,
                e.src = "https://mkmpages.korcomptenz.com/6666?isnew=1&pdn=mkmpages.korcomptenz.com&v=" +
                  String((new Date).getMonth() + 1) +
                  String((new Date).getFullYear()) +
                  String(Math.round(parseInt((new Date).getDate() / 7), 0) + 1) +
                  "&encsid=uztEfD4WCXU,&enccid=p8gDO8NUS7Y,&wsid=Njg4&dHJhY2tpbmdVcmw=2PtuCvDuCGT5LwTmxa5wjl35YCAFpwehX6VzxWewIgs,";

                t = document.getElementsByTagName("head")[0];
                t.appendChild(e, t);
              }();
            `,
          }}
        />
        /* Mirabel Tracking Code End*/
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
        <noscript>
          <p>
            <img
              src="https://mkmpages.korcomptenz.com/7777?idsite=688"
              style={{ border: 0 }}
              alt=""
            />
          </p>
        </noscript>
        <Providers>{children}</Providers>
        {/* 🔥 KEY: Load tracking after interaction */}
        <TrackingLoader />
      </body>
    </html>
  );
}

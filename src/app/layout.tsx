export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "../index.css";
import Providers from "@/components/providers";
import { BreadcrumbSchema } from "@/components/providers/breadcrumb-schema";
import { headers } from "next/headers";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          name="keywords"
          content="digital transformation company, AI
solutions, cloud services, ERP consulting, CRM consulting, data
analytics services"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="shortcut icon"
          href="https://www.korcomptenz.com/favicon.ico"
        />
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="New Jersey, USA" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        <meta name="author" content="Korcomptenz" />

        <link rel="icon" href="/assets/logo.png" sizes="any" />

        {/* Schema.org Structured Data - Critical for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
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
                },
                {
                  "@type": "WebSite",
                  url: "https://www.korcomptenz.com/",
                  name: "Korcomptenz",
                  publisher: {
                    "@type": "Organization",
                    name: "Korcomptenz",
                  },
                },
              ],
            }),
          }}
        />
        {/* Defer non-critical third-party scripts using Next.js Script component */}
        {/* GTM: Deferred with lazyOnLoad to improve Core Web Vitals */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDLSJSX');`,
          }}
        />
        {/* HubSpot: Non-critical, defer until browser idle */}
        <Script
          id="hs-script-loader"
          strategy="lazyOnload"
          src="//js.hs-scripts.com/7991245.js"
          async
          defer
        />
        {/* Mirabel Tracking: Non-critical, defer until browser idle */}
        <Script
          id="mirabel-tracking"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function () {
        var e, t;
        e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.defer = true;
        e.src = "https://mkmpages.korcomptenz.com/6666?isnew=1&pdn=mkmpages.korcomptenz.com&v=" 
          + String((new Date).getMonth() + 1)
          + String((new Date).getFullYear())
          + String(Math.round(parseInt((new Date).getDate() / 7), 0) + 1)
          + "&encsid=uztEfD4WCXU,&enccid=p8gDO8NUS7Y,&wsid=Njg4&dHJhY2tpbmdVcmw=2PtuCvDuCGT5LwTmxa5wjl35YCAFpwehX6VzxWewIgs,";
        t = document.getElementsByTagName("head")[0];
        t.appendChild(e);
      }();`,
          }}
        />
        {/* AdRoll Tracking: Non-critical, defer until browser idle */}
        <Script
          id="adroll-tracking"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `adroll_adv_id = "6AFFI77P25EMLITUU77QLL"; adroll_pix_id = "MBYLSCHWRRDSPAI7HHOHMI"; adroll_version = "2.0"; (function(w, d, e, o, a) { w.adroll_tag_source = w.adroll_tag_source || "manual"; w.__adroll_loaded = true; w.adroll = w.adroll || []; w.adroll.f = [ 'setProperties', 'identify', 'track', 'identify_email', 'get_cookie' ]; var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"; for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) { return function() { w.adroll.push([ n, arguments ]) } })(w.adroll.f[a]) } e = d.createElement('script'); o = d.getElementsByTagName('script')[0]; e.async = 1; e.defer = true; e.src = roundtripUrl; o.parentNode.insertBefore(e, o); })(window, document); adroll.track("pageView");`,
          }}
        />
        <BreadcrumbSchema />
      </head>
      <body className={`${outfitSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDLSJSX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { BreadcrumbSchema } from "@/components/providers/breadcrumb-schema";
import { headers } from "next/headers";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "sans-serif"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  themeColor: "#ffffff",
};

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
    description: "korcomptenz-frontend",
    alternates: {
      canonical: "/",
    },
    robots: {
      index: false,
      follow: false,
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
        {/* Resource Hints for Performance */}
        <link rel="prefetch" href="/" />

        {/* Preconnect to critical domains - image CDN only */}
        <link
          rel="preconnect"
          href="https://aue2kormlworkspacetest01.blob.core.windows.net"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://js.hs-scripts.com" />

        {/* Preload critical fonts to improve LCP - removed for aggressive optimization */}
        {/* Fonts loaded via async stylesheet instead */}

        {/* Inline critical CSS for faster FCP - ultra-minimal with font-display swap and hero optimization */}
        <style
          dangerouslySetInnerHTML={{
            __html: `html,body{margin:0;padding:0;font-family:'Outfit',system-ui,sans-serif;font-display:swap}body{background:#fff;color:#313941;overflow-x:hidden}html.dark,html.dark body{background:#0a0a0a;color:#fff}main{flex:1}*{box-sizing:border-box}@media(prefers-color-scheme:dark){html{color-scheme:dark}}.embla__custom_slide{flex:0 0 100%;min-width:0}.embla__viewport{overflow:hidden}.embla__container{display:flex;touch-action:pan-y;margin-left:calc(var(--slide-spacing, 0rem) * -1)}.embla__slide{flex:0 0 100%;min-width:0;padding-left:var(--slide-spacing, 0rem)}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}`,
          }}
        />

        {/* Async font stylesheet loading */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
        />

        {/* Schema.org Structured Data */}
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

        {/* Google Tag Manager - Deferred to lazyOnload for maximum performance */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDLSJSX');`,
          }}
        />

        {/* HubSpot - Deferred to lazyOnload */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/7991245.js"
          strategy="lazyOnload"
        />

        {/* Mirabel's Marketing Manager - Deferred to lazyOnload */}
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

        {/* AdRoll - Deferred to lazyOnload */}
        <Script
          id="adroll-tracking"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `adroll_adv_id = "6AFFI77P25EMLITUU77QLL"; adroll_pix_id = "MBYLSCHWRRDSPAI7HHOHMI"; adroll_version = "2.0"; (function(w, d, e, o, a) { w.adroll_tag_source = w.adroll_tag_source || "manual"; w.__adroll_loaded = true; w.adroll = w.adroll || []; w.adroll.f = [ 'setProperties', 'identify', 'track', 'identify_email', 'get_cookie' ]; var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"; for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) { return function() { w.adroll.push([ n, arguments ]) } })(w.adroll.f[a]) } e = d.createElement('script'); o = d.getElementsByTagName('script')[0]; e.async = 1; e.src = roundtripUrl; o.parentNode.insertBefore(e, o); })(window, document); adroll.track("pageview");`,
          }}
        />

        <link rel="icon" href="/assets/logo.png" sizes="any" />
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

        <BreadcrumbSchema />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

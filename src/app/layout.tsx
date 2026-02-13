import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { BreadcrumbSchema } from "@/components/providers/breadcrumb-schema";

export const dynamic = "force-dynamic";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://korcomptenz.designonline.in"),
  title: {
    default: "Korcomptenz",
    template: "%s | Korcomptenz",
  },
  description: "korcomptenz-frontend",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* <link rel="canonical" href="https://www.korcomptenz.com/" /> */}
        {/* Google Tag Manager */}

        
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDLSJSX');`,
          }}
        /> */}



        {/* End Google Tag Manager */}

        {/* Schema.org Structured Data */}
        {/* <script
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
        /> */}
        {/* End Schema.org Structured Data */}

        {/* HubSpot Embed Code */}
        {/* <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/7991245.js"
        /> */}
        {/* End HubSpot Embed Code */}

        {/* <!-- Mirabel's Marketing Manager Tracking Code Start --> */}
        {/* <script
          type="text/javascript"
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
        t = document.getElementsByTagName("body")[0];
        t.appendChild(e);
      }();`,
          }}
        /> */}
        {/* <!-- Mirabel's Marketing Manager Tracking Code End --> */}
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

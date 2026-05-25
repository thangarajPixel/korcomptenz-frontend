// import type { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//         disallow: ["/thank-you"],
//       },
//     ],
//     sitemap: "https://www.korcomptenz.com/sitemap.xml",
//   };
// }
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],sitemap:"https://korcomptenz.designonline.in/sitemap.xml"
  };
}
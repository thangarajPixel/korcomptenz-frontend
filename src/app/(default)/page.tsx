"use client";
// import GlobalPage from "@/components/global-page";
// import { cn } from "@/lib/utils";
import { getHomeService } from "@/services";
// import { APP_CONFIG } from "@/utils/app-config";
import { cache, useEffect } from "react";

// export const dynamic = "force-dynamic";

const getHomeServiceCache = cache(getHomeService);

// export async function generateMetadata() {
//   const data = await getHomeServiceCache();
//   return {
//     title: data?.seo?.title || "Home",
//     description: data?.seo?.description || "",
//   }
// }
export default function Home() {
  useEffect(() => {
    getHomeServiceCache();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}


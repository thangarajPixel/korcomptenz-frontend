import GlobalPage from "@/components/global-page";
import { getHomeService } from "@/services";
import { cache } from "react";

export const dynamic = "force-dynamic";

const getHomeServiceCache = cache(getHomeService);

export async function generateMetadata() {
  const data = await getHomeServiceCache();
  return {
    title: data?.seo?.title || "Home",
    description: data?.seo?.description || "",
  }
}
export default async function Home() {
  const data = await getHomeServiceCache();
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data?.list} />
    </div>
  );
}


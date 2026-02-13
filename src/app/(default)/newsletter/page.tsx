import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { getNewsletterPage } from "@/services/page";
import { cache } from "react";
const getNewsletterPageCache = cache(getNewsletterPage);
export async function generateMetadata() {
  const data = await getNewsletterPageCache();
  return {
    title: data?.seo?.title || "Newsletter",
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/newsletter",
    },
  };
}
const Page = async () => {
  const data = await getNewsletterPageCache();
  data?.list?.push({
    id: "banner",
    __component: "news-and-event.news-event-list",
    list: data?.listData?.map((item) => ({
      ...item,
      isEvent: true,
      buttonLink: "/events/" + item?.slug,
      date: item?.date || item?.publishedAt || "",
      createdAt: item?.publishedAt || "",
    })),
  });

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
};

export default Page;

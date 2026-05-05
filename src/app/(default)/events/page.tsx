import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { getEventListPage } from "@/services/page";
import { generatePageMetadata } from "@/utils/metadata";

export const revalidate = 3600;

export async function generateMetadata() {
  try {
    const data = await getEventListPage();
    return generatePageMetadata({
      title: data?.seo?.title,
      description: data?.seo?.description,
      path: "/events",
    });
  } catch {
    return generatePageMetadata({ path: "/events" });
  }
}

const Page = async () => {
  try {
    const data = await getEventListPage();
    data?.list?.push({
      id: "banner",
      __component: "news-and-event.news-event-list",
      list: data?.listData?.map((item) => ({
        ...item,
        isEvent: true,
        buttonLink: item?.buttonLink,
        date: item?.date || item?.publishedAt || "",
        createdAt: item?.publishedAt || "",
      })),
    });
    return (
      <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
        <GlobalPage data={data?.list} />
      </div>
    );
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-destructive">Error loading page. Please try again later.</p>
      </div>
    );
  }
};

export default Page;

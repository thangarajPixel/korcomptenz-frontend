import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { getNewsroomPage } from "@/services/page";
import { cache } from "react";
import { generatePageMetadata } from "@/utils/metadata";

const getNewsroomPageCache = cache(getNewsroomPage);

export async function generateMetadata() {
  try {
    const data = await getNewsroomPageCache();
    return generatePageMetadata({
      title: data?.seo?.title,
      description: data?.seo?.description,
      path: "/newsroom",
    });
  } catch {
    return generatePageMetadata({ path: "/newsroom" });
  }
}

const Page = async () => {
  try {
    const data = await getNewsroomPageCache();
    data?.list?.push({
      id: "banner",
      __component: "news-and-event.news-event-list",
      list: data?.listData?.map((item) => ({
        ...item,
        buttonLink: "/newsroom/" + item?.slug,
        date: item?.publishedAt || "",
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

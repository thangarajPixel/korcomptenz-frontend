import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { getNewsroomPage } from "@/services/page";
import { cache } from "react";

const getNewsroomPageCache = cache(getNewsroomPage);

export async function generateMetadata() {
  const data = await getNewsroomPageCache();
  return {
    title: data?.seo?.title || "Newsroom",
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/newsroom",
    },
  };
}
const Page = async () => {
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
};

export default Page;

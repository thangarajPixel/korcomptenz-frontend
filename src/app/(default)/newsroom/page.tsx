import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { getNewsroomPage } from "@/services/page";
import { cache } from "react";
import { generatePageMetadata } from "@/utils/metadata";

const getNewsroomPageCache = cache(getNewsroomPage);

export async function generateMetadata() {
  const data = await getNewsroomPageCache();
  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: "/newsroom",
  });
}

const Page = async () => {
  const data = await getNewsroomPageCache();

  const sortedList = [...(data?.listData || [])].sort(
    (a, b) =>
      new Date(b?.publishedAt || 0).getTime() -
      new Date(a?.publishedAt || 0).getTime(),
  );

  data?.list?.push({
    id: "banner",
    __component: "news-and-event.news-event-list",
    list: sortedList.map((item) => ({
      ...item,
      buttonLink: "/newsroom/" + item?.slug,
      date: item?.publishedAt || "",
      createdAt: item?.publishedAt || "",
      externalLink: "/newsroom/" + item?.slug,
      Date: item?.publishedAt || "",
    })),
  });

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
};

export default Page;

import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { getNewsroomPage } from "@/services/page";

export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const data = await getNewsroomPage();
  return {
    title: data?.seo?.title || "Career",
    description: data?.seo?.description || "",
  };
}
const Page = async () => {
  const data = await getNewsroomPage();
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

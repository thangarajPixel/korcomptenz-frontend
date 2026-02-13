import { cache } from "react";
import { getPageService } from "@/services";
import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";

type Props = {
  params: Promise<{ slug: string[] }>;
};
const SYSTEM_FILES = ["robots.txt", "sitemap.xml"];
const getPageServiceCache = cache(getPageService);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const data = await getPageServiceCache({ slug });

  return {
    title: data?.seo?.title || slug.join(" "),
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/" + slug.join("/"),
    },
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  if (slug?.length === 1 && SYSTEM_FILES.includes(slug[0])) {
    return null;
  }
  const data = await getPageServiceCache({ slug });

  return (
    <div className={cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP)}>
      <GlobalPage data={data?.list} />
    </div>
  );
};

export default Page;

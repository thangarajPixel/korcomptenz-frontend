import { getNewsRoomPage } from "@/services";
import { cache } from "react";

import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { generatePageMetadata } from "@/utils/metadata";

type Props = {
  params: Promise<{ id: string }>;
};

const getNewsRoomPageCache = cache(getNewsRoomPage);
export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const data = await getNewsRoomPageCache({ id });

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: `/newsroom/${id}`,
    image: data?.heroSection?.image?.url,
  });
}

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const data = await getNewsRoomPageCache({ id });

  return (
    <div className={cn(cn("flex flex-col pb-10 md:pb-12 gap-10"))}>
      <GlobalPage data={data?.list} />
    </div>
  );
};

export default Page;

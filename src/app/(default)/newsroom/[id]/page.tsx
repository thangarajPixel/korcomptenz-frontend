import { getNewsRoomPage } from "@/services";
import { cache } from "react";

import GlobalPage from "@/components/global-page";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";

type Props = {
  params: Promise<{ id: string }>;
};

const getNewsRoomPageCache = cache(getNewsRoomPage);

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const data = await getNewsRoomPageCache({ id });

  return (
    <div
      className={cn(cn("flex flex-col pb-10 md:pb-24", APP_CONFIG.OVERALL_GAP))}
    >
      <GlobalPage data={data?.list} />
    </div>
  );
};

export default Page;


import React from "react";
import { getPageService } from "@/services";
import GlobalPage from "@/components/global-page";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await getPageService({ slug });

  return (
    <div className="flex flex-col gap-10 md:gap-16">
      <GlobalPage data={data.list} />
    </div>
  );
};

export default Page;

import GlobalPage from "@/components/global-page";
import { getHomeService } from "@/services";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const data = await getHomeService();
  return (
    <div className="flex flex-col gap-10 md:gap-16">
      <GlobalPage data={data.list} />
    </div>
  );
}
1;

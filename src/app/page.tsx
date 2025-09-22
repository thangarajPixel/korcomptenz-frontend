import GlobalPage from "@/components/global-page";
import { getHomeService } from "@/services";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getHomeService();
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data.list} />
    </div>
  );
}
1;

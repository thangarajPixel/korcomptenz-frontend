import GlobalPage from "@/components/global-page";
import { jsonData } from "@/utils/helper";

const tempData: PagesListType = {
  id: '55',
  locale: 'en',
  slug: 'home',
  list: [
    {
      __component: 'sliding-section',
      list: jsonData.slides
    },
    {
      __component: 'we-are-korcomptenz-section',
      list:jsonData.weAreKorcomptenzData
    },
    {
      __component: 'services-section',
      list: jsonData.content
    },
    {
      __component: 'inspire-section',
      list: jsonData.insprieSection

    },
    {
      __component: 'sticky-cards',
      list: jsonData.stickyCards
    
    },
    {
      __component: 'insights-section',
      list: jsonData.insights
    },
    {
      __component: 'opportunities',
      list: jsonData.careers
    }
  ]
}
export default async function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-16" >
      <GlobalPage data={tempData.list} />
    </div>
  );
}
1
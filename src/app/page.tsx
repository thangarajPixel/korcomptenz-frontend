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
    },
    {
      __component: 'services-section',
      list: jsonData.content
    },
    {
      __component: 'inspire-section'
    },
    {
      __component: 'sticky-cards'
    },
    {
      __component: 'insights-section'
    },
    {
      __component: 'opportunities'
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
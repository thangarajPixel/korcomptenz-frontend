import GlobalPage from "@/components/global-page";
import { getHomeService } from "@/services";


// const tempData: PagesListType = {
//   id: "55",
//   locale: "en",
//   slug: "home",
//   list: [
//     {
//       __component: "home.hero-section-one",
//       list: jsonData.slides,
//     },
//     {
//       __component: "home.we-are-korcomptenz",
//       list: jsonData.weAreKorcomptenzData,
//     },
//     {
//       __component: "home.services-section",
//       list: jsonData.content,
//     },
//     {
//       __component: "page-componets.inspire-section",
//       list: jsonData.insprieSection,
//     },
//     {
//       __component: "page-componets.sticky-cards-list",
//       list: jsonData.stickyCards,
//     },
//     {
//       __component: "page-componets.insights-section",
//       list: jsonData.insights,
//     },
//     {
//       __component: "home.opportunity",
//       list: jsonData.careers,
//     },
//   ],
// };
export default async function Home() {
   const data = await getHomeService();

    return (
      <div className="flex flex-col gap-10 md:gap-16">
        <GlobalPage data={data.list} />
      </div>
    );

}
1;

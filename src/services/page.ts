import { getDownloadService } from "./common";
import http from "./http";
import type {
  BlogFormSchema,
  BookADemoFormData,
  CareerNewLetterFormData,
  ContactFormData,
  ContactUsFormSchema,
  DemoRequestFormSchema,
  FabconDecisionLeadSchema,
  FreeConsultationLeadSchema,
  NewsRoomFormSchema,
  WebinarReserveFormSchema,
} from "@/utils/validation.schema";
import https from "./https-check";

const HOME = "/home";
const ABOUT_US = "/about-us";
const GLOBAL_PAGE = "/page";
const CASE_STUDIES_PAGE = "/case-study-list";
export const CASE_STUDY = "/case-studies";
const CASE_STUDY_SEARCH = "/case-study-search";
const CASE_STUDY_PAGE = "/case-study-page";
export const FILTER_CASE_STUDY = "/case-study-filter";
export const CASE_STUDY_LEAD = "/case-study-leads";
export const CAREER_NEW_LETTER = "/candidate-details";
export const BOOK_DEMO = "/book-demo-leads";
export const DEPARTMENT_LIST = "/departments";
export const CAREER = "/career";
export const CONTACT_US = "/contact-us";
export const CASE_STUDY_ESSENTIAL_LIST = "/case-study-essential";
export const CONTACT_US_LEAD = "/contact-us-leads";
export const DEMO_PAGE = "/demo-list";
export const RESERVE_MY_SPOT = "/reserve-leads";
const INSIGHT_LIST_PAGE = "/insight-list-page";
export const FILTER_INSIGHT = "/insight-filter";
export const INSIGHT = "/insights";
export const INSIGHT_PAGE = "/insight-page";
export const FREE_CONSULTATION_LEAD = "/free-consultation-leads";
export const INSIGHT_SEARCH = "/insight-search";
const PRIVACY_POLICY = "/privacy-policy";
const NEWSLETTER = "/news-letter-list";
export const WEBINAR_RESERVE_MY_SPOT = "/webinar-reserve-spots";
export const EVENT_PAGE = "/event-list";
export const NEWSROOM = "/news-list";
export const NEWSROOM_PAGE = "/new-rooms";
export const NEWSROOM_LEAD = "/news-room-leads";
export const CASESTUDYPDF = "/case-studies/by-attachment";
export const TIME_SLOT_LIST = "/fabcon-time-slots";
export const FABCON_BANNER_LEAD = "/fabcon-book-meet-leads";
export const FABCON_DECISION_LEAD = "/fabcon-reserve-leads";
export const BLOG_FORM_LEAD = "/forrester-reports";

export const getHomeService = async (): Promise<PagesListType> => {
  const { data } = await http.get(HOME);
  return data;
};

export const getAboutUs = async (): Promise<PagesListType> => {
  const { data } = await http.get(ABOUT_US);
  return data;
};

export const getPageService = async ({
  slug,
}: {
  slug: string[];
}): Promise<PagesListType> => {
  const { data } = await http.get(GLOBAL_PAGE, { params: { slug } });
  return data;
};

export const getCaseStudyService = async ({
  slug,
}: {
  slug: string;
}): Promise<CaseStudySingleData> => {
  const { data } = await http.get(CASE_STUDY + "/" + slug);
  return data;
};

// export const getCaseStudiesService = async (): Promise<CaseStudiesType> => {
//   const { data } = await http.get(CASE_STUDY);
//   return data;
// };

export const getCaseStudiesPage = async (): Promise<CaseStudiesPageType> => {
  const { data } = await http.get(CASE_STUDIES_PAGE);
  return data;
};

export const getCaseStudyPage = async (): Promise<CaseStudyPageType> => {
  const { data } = await http.get(CASE_STUDY_PAGE);
  return data;
};

export const getCareer = async (): Promise<PagesListType> => {
  const { data } = await http.get(CAREER);
  return data;
};
export const getContactUs = async (): Promise<PagesListType> => {
  const { data } = await http.get(CONTACT_US);
  return data;
};

export const getDemoPage = async (): Promise<PagesListType> => {
  const { data } = await http.get(DEMO_PAGE);

  return data;
};
export const getEventListPage = async (): Promise<
  PagesListType & { listData: EventListType[] }
> => {
  const { data } = await http.get(EVENT_PAGE);

  return data;
};
export const getNewsletterPage = async (): Promise<
  PagesListType & { listData: EventListType[] }
> => {
  const { data } = await http.get(NEWSLETTER);

  return data;
};
export const getNewsroomPage = async (): Promise<
  PagesListType & { listData: NewsroomListType[] }
> => {
  const { data } = await http.get(NEWSROOM);

  return data;
};

export const getInsightsPage = async (): Promise<CaseStudiesPageType> => {
  const { data } = await http.get(INSIGHT_LIST_PAGE);
  return data;
};

export const getBlogPage = async ({
  id,
}: {
  id: string;
}): Promise<InsightResponse> => {
  const { data } = await http.get(`${INSIGHT}/${id}`);
  return data;
};

export const getCaseStudyPDFPage = async ({
  id,
}: {
  id: string;
}): Promise<string> => {
  const res: { url: string } = await http.get(
    `${CASESTUDYPDF}/${encodeURIComponent(id)}`,
  );

  return res?.url as never;
};

export const getInsightPage = async (): Promise<InsightPageType> => {
  const { data } = await http.get(INSIGHT_PAGE);
  return data;
};

export const getPrivacyPolicy = async (): Promise<{
  seo: SEO;
  title: string;
  description: CaseStudyDescription[];
}> => {
  const { data } = await http.get(PRIVACY_POLICY);
  return data;
};

export const getNewsRoomPage = async ({
  id,
}: {
  id: string;
}): Promise<PagesListType> => {
  const { data } = await http.get(`${NEWSROOM_PAGE}/${id}`);
  return data;
};

//http
export const getFilterCaseStudies = async (): Promise<FilterDataType> => {
  const { data } = await https.get(FILTER_CASE_STUDY);
  return data;
};
export const getInsights = async (): Promise<InsightsFilterDataType> => {
  const { data } = await https.get(FILTER_INSIGHT);
  return data;
};

export const createCaseStudyLead = async (formData: ContactFormData) => {
  const { data } = await https.post(CASE_STUDY_LEAD, { data: formData });
  data?.attachment?.url && (await getDownloadService(data?.attachment));
  return data;
};

export const createCareerNewLetter = async (
  formData: CareerNewLetterFormData,
) => {
  const { data } = await https.postForm(CAREER_NEW_LETTER, {
    data: {
      ...formData,
    },
    files: formData.resume?.[0],
  });
  return data;
};

export const getCaseStudyList = async ({
  params,
}: {
  params: { pagination: PaginationType; slug?: string; sort?: string[] };
}): Promise<CaseStudiesType> => {
  const data = await https.get(CASE_STUDY, {
    params,
  });
  return data as never;
};

export const getDepartmentList = async (): Promise<DepartmentType> => {
  const data = await https.get(DEPARTMENT_LIST);
  return data as never;
};
export const getTimeSlotList = async (): Promise<TimeSlotType> => {
  const data = await http.get(TIME_SLOT_LIST);
  return data as never;
};

export const getCaseStudySearchPage = async ({
  search = "",
}: {
  search?: string;
}): Promise<FilterListType[]> => {
  const { data } = await https.get(CASE_STUDY_SEARCH, { params: { search } });
  return data;
};

export const bookADemo = async (formData: BookADemoFormData) => {
  const { data } = await https.post(BOOK_DEMO, { data: formData });
  return data;
};
export const createContactUsLead = async (formData: ContactUsFormSchema) => {
  const { data } = await https.post(CONTACT_US_LEAD, { data: formData });
  return data;
};

export const createReserveMySpotLead = async (
  formData: DemoRequestFormSchema,
) => {
  const { data } = await https.post(RESERVE_MY_SPOT, { data: formData });
  return data;
};

export const getInsightsList = async ({
  params,
}: {
  params: { pagination: PaginationType; slug?: string; sort?: string[] };
}): Promise<CaseStudiesType> => {
  const data = await https.get(INSIGHT, {
    params,
  });
  return data as never;
};

export const createFreeConsultationLead = async (
  formData: FreeConsultationLeadSchema,
) => {
  const { data } = await https.post(FREE_CONSULTATION_LEAD, { data: formData });
  return data;
};

export const getInsightSearchPage = async ({
  search = "",
}: {
  search?: string;
}): Promise<FilterListType[]> => {
  const { data } = await https.get(INSIGHT_SEARCH, { params: { search } });
  return data;
};

export const createWebinarReserveMySpotLead = async (
  formData: WebinarReserveFormSchema,
) => {
  const { data } = await https.post(WEBINAR_RESERVE_MY_SPOT, {
    data: formData,
  });
  return data;
};

export const NewRoomDownload = async (formData: NewsRoomFormSchema) => {
  const { data } = await https.post(NEWSROOM_LEAD, { data: formData });
  return data;
};

export const getCaseStudyEssentialList =
  async (): Promise<CaseStudyEssentialType> => {
    const data = await https.get(CASE_STUDY_ESSENTIAL_LIST);
    return data as never;
  };

export const createFabconDecisionLead = async (
  formData: FabconDecisionLeadSchema,
) => {
  const { data } = await http.post(FABCON_DECISION_LEAD, { data: formData });
  return data;
};

export const createFabconBannerLead = async (
  formData: FabconDecisionLeadSchema,
) => {
  const { data } = await http.post(FABCON_BANNER_LEAD, { data: formData });
  return data;
};

// export const blogFormDownloadLead = async (
//   formData: WebinarReserveFormSchema,
// ) => {
//   const { data } = await https.post(BLOG_FORM_LEAD, {
//     data: formData,
//   });
//   data?.attachment?.url && (await getDownloadService(data?.attachment));
//   return data;
//   return data;
// };

export const blogFormDownloadLead = async (formData: BlogFormSchema) => {
  const { data } = await http.post(BLOG_FORM_LEAD, { data: formData });
  data?.attachment?.url && (await getDownloadService(data?.attachment));
  return data;
};

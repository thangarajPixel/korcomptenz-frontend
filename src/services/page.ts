import { getDownloadService } from "./common";
import http from "./http";
import type {
  BookADemoFormData,
  CareerNewLetterFormData,
  ContactFormData,
  ContactUsFormSchema,
  DemoRequestFormSchema,
} from "@/utils/validation.schema";

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
const INSIGHT_PAGE = "/insight-list-page";
export const FILTER_INSIGHT = "/insight-filter";
export const INSIGHT = "/insights";

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

export const getFilterCaseStudies = async (): Promise<FilterDataType> => {
  const { data } = await http.get(FILTER_CASE_STUDY);
  return data;
};
export const getInsights = async (): Promise<InsightsFilterDataType> => {
  const { data } = await http.get(FILTER_INSIGHT);
  return data;
};

export const createCaseStudyLead = async (formData: ContactFormData) => {
  const { data } = await http.post(CASE_STUDY_LEAD, { data: formData });
  data?.attachment?.url && (await getDownloadService(data?.attachment));
  return data;
};

export const createCareerNewLetter = async (
  formData: CareerNewLetterFormData
) => {
  const { data } = await http.postForm(CAREER_NEW_LETTER, {
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
  const data = await http.get(CASE_STUDY, {
    params,
  });
  return data as never;
};

export const getDepartmentList = async (): Promise<DepartmentType> => {
  const data = await http.get(DEPARTMENT_LIST);
  return data as never;
};

export const getCaseStudiesPage = async (): Promise<CaseStudiesPageType> => {
  const { data } = await http.get(CASE_STUDIES_PAGE);
  return data;
};

export const getCaseStudyPage = async (): Promise<CaseStudyPageType> => {
  const { data } = await http.get(CASE_STUDY_PAGE);
  return data;
};

export const getCaseStudySearchPage = async ({
  search = "",
}: {
  search?: string;
}): Promise<FilterListType[]> => {
  const { data } = await http.get(CASE_STUDY_SEARCH, { params: { search } });
  return data;
};

export const bookADemo = async (formData: BookADemoFormData) => {
  const { data } = await http.post(BOOK_DEMO, { data: formData });
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

export const getCaseStudyEssentialList =
  async (): Promise<CaseStudyEssentialType> => {
    const data = await http.get(CASE_STUDY_ESSENTIAL_LIST);
    return data as never;
  };

export const createContactUsLead = async (formData: ContactUsFormSchema) => {
  const { data } = await http.post(CONTACT_US_LEAD, { data: formData });
  return data;
};

export const getDemoPage = async (): Promise<PagesListType> => {
  const { data } = await http.get(DEMO_PAGE);

  return data;
};
export const createReserveMySpotLead = async (
  formData: DemoRequestFormSchema
) => {
  const { data } = await http.post(RESERVE_MY_SPOT, { data: formData });
  return data;
};

export const getInsightsPage = async (): Promise<CaseStudiesPageType> => {
  const { data } = await http.get(INSIGHT_PAGE);
  return data;
};

export const getInsightsList = async ({
  params,
}: {
  params: { pagination: PaginationType; slug?: string; sort?: string[] };
}): Promise<CaseStudiesType> => {
  const data = await http.get(INSIGHT, {
    params,
  });
  return data as never;
};

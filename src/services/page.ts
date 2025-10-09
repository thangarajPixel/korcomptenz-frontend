import type { CaseStudiesPageType, CaseStudyData } from "@/types/global-types";
import http from "./http";
import type { ContactFormData } from "@/utils/validation.schema";
import type { CaseStudiesType, FilterDataType, PagesListType } from "@/types/global-page-types";

const HOME = "/home";
const GLOBAL_PAGE = "/page";
const CASE_STUDIES_PAGE = "/case-study-list";
export const CASE_STUDY = "/case-studies";

export const FILTER_CASE_STUDY = "/case-study-filter";
export const CASE_STUDY_LEAD = "/case-study-lead";

export const getHomeService = async (): Promise<PagesListType> => {
  const { data } = await http.get(HOME);
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
}): Promise<CaseStudyData> => {
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
export const createCaseStudyLead = async (formData: ContactFormData) => {
  const { data } = await http.post(CASE_STUDY_LEAD, formData);
  return data;
}

export const getCaseStudyList = async (): Promise<CaseStudiesType> => {
  const { data } = await http.get(CASE_STUDY);
  return data;
};

export const getCaseStudiesPage = async (): Promise<CaseStudiesPageType> => {
  const { data } = await http.get(CASE_STUDIES_PAGE);
  return data;
};

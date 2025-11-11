import { getDownloadService } from "./common";
import http from "./http";
import type {
  BookADemoFormData,
  CareerNewLetterFormData,
  ContactFormData,
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
  params: { pagination: PaginationType; slug?: string };
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

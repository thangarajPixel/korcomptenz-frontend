import http from "./http";

const HOME = "/home";
const GLOBAL_PAGE = "/page";
export const CASE_STUDY = "/case-studies";

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
  slug: string[];
}): Promise<PagesListType> => {
  const { data } = await http.get(CASE_STUDY, { params: { slug } });
  return data;
};

export const getCaseStudiesService = async (): Promise<PagesListType> => {
  const { data } = await http.get(CASE_STUDY);
  return data;
};

import http from "./http";

const HOME = '/home';
const GLOBAL_PAGE = '/page';
export const getHomeService = async (): Promise<{ cart_count: number }> => {
  const { data } = await http.get(HOME);
  return data;
};
export const getPageService = async ({ slug }: { slug: string[] }): Promise<{ cart_count: number }> => {
  const { data } = await http.get(GLOBAL_PAGE, { params: { slug } });
  return data;
};

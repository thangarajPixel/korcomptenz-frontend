import http from "./http";

const HOME = '/home';

export const getHomeService = async (): Promise<{ cart_count: number }> => {
  const { data } = await http.get(HOME);
  return data;
};

import http from "./http";

const LAYOUT = '/layout';

export const getLayoutService = async (): Promise<{ cart_count: number }> => {
  const { data } = await http.get(LAYOUT);
  return data;
};

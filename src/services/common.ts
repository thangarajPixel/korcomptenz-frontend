import http from "./http";

const LAYOUT = '/layout';

export const getLayoutService = async (): Promise<LayoutType> => {
  const { data } = await http.get(LAYOUT);
  return data;
};

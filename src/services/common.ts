import { downloadFileExcel } from "@/utils/helper";
import http from "./http";

const LAYOUT = '/layout';

export const getLayoutService = async (): Promise<LayoutType> => {
  const { data } = await http.get(LAYOUT);
  return data;
};

export const getDownloadService = async (url: string) => {
  const response = await http.get(url, {
    responseType: 'arraybuffer',
  });
  await downloadFileExcel(response as never)
  return response;
};
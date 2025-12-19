import { downloadFile } from "@/utils/helper";
import http from "./http";

const LAYOUT = '/layout';

export const getLayoutService = async (): Promise<LayoutType> => {
  const { data } = await http.get(LAYOUT);
  return data;
};

export const getDownloadService = async (attachment: ImageType) => {
  try {
    const response = await http.get(attachment.url, {
      responseType: 'arraybuffer',
    });
    await downloadFile({
      name: attachment.name,
      bufferResponse: response.data,
      type: attachment.mime || 'application/octet-stream',
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Download error:', error);
  }
};

export const createBulkUploadService = async () => {
  const { data } = await http.post('/bulk-create', {
    data: [{
      content: "blog",
    }]
  });
  return data;
};

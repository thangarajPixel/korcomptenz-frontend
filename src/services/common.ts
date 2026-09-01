import { unstable_cache } from "next/cache";
import { downloadFile } from "@/utils/helper";
import http from "./http";

const LAYOUT = "/layout";

export const getLayoutService = unstable_cache(
  async (): Promise<LayoutType> => {
    const { data } = await http.get(LAYOUT);
    return data;
  },
  ["layout"],
  { revalidate: 3600 },
);

export const getDownloadService = async (attachment: ImageType) => {
  try {
    const res = await fetch(attachment.url, {
      method: "GET",
      mode: "cors",
    });

    const blob = await res.blob();

    await downloadFile({
      name: attachment.name,
      bufferResponse: blob,
      type: blob.type || attachment.mime || "application/pdf",
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Download error:", error);
  }
};

export const createBulkUploadService = async () => {
  const { data } = await http.post("/bulk-create", {
    data: [
      {
        content: "blog",
      },
    ],
  });
  return data;
};

import type { UseFormSetError } from "react-hook-form";
import sampleJson from "../../public/json/sample.json";
import { toast, type ExternalToast } from "sonner";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export const jsonData = sampleJson;
type FormErrors = {
  details: {
    errors: Array<{
      path: string[];
      message: string;
    }>;
  };
};
export const INITIAL_PAGINATION: PaginationType = {
  page: 1,
  pageSize: 10,
  pageCount: 1,
  total: 0,
};
function isValidJson(jsonString: string) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}
export const handleErrorMessage = (error: Error) =>
  JSON.parse(
    isValidJson(error?.message)
      ? error?.message
      : '{ "status": 500, "message": "Oops! Something went wrong on our end. We\'re unable to process your request right now.Please try again shortly.We apologize for the inconvenience.", "errors": {} }'
  ) as { status: number; message: string; errors: object };
export const toastConfig: (
  position?: ToastPosition
) => ExternalToast | undefined = (position = "bottom-right") => ({
  position,
  duration: 3000,
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function notify({
  errors,
  message = "Something went wrong!",
  success,
}: {
  errors?: string | unknown;
  message?: string;
  success?: boolean;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorObj: any = errors || message;

  switch (success) {
    case true:
      if (Array.isArray(message)) {
        message.reverse().forEach((msg) => {
          toast.success(msg, toastConfig("top-right"));
        });
      } else {
        toast.success(message, toastConfig("top-right"));
      }
      break;

    case false:
      if (typeof errorObj === "object" && errorObj !== null) {
        for (const key in errorObj) {
          const value = errorObj[key];

          if (typeof value === "string") {
            toast.error(value, toastConfig("top-right"));
          } else if (Array.isArray(value)) {
            value.forEach((msg: string) => {
              if (typeof msg === "string") {
                toast.error(msg, toastConfig("top-right"));
              }
            });
          } else if (value?.message) {
            toast.error(value.message, toastConfig("top-right"));
          } else {
            toast.error(JSON.stringify(value), toastConfig("top-right"));
          }
        }
      } else if (typeof errorObj === "string") {
        toast.error(errorObj, toastConfig("top-right"));
      } else {
        toast.error(
          message || "Something went wrong!",
          toastConfig("top-right")
        );
      }
      break;

    default:
      if (typeof errorObj === "object" && errorObj !== null) {
        for (const key in errorObj) {
          const value = errorObj[key];

          if (typeof value === "string") {
            toast.error(value, toastConfig("top-right"));
          } else if (Array.isArray(value)) {
            value.forEach((msg: string) => {
              if (typeof msg === "string") {
                toast.error(msg, toastConfig("top-right"));
              }
            });
          } else if (value?.message) {
            toast.error(value.message, toastConfig("top-right"));
          } else {
            toast.error(JSON.stringify(value), toastConfig("top-right"));
          }
        }
      } else {
        toast.error(
          message || "Something went wrong!",
          toastConfig("top-right")
        );
      }
      break;
  }
}
export const errorSet = <T extends Record<string, never>>(
  err: unknown,
  setError: UseFormSetError<T>,
  defaultMessage: string = "Error"
) => {
  const error = err as FormErrors;
  if (error?.details?.errors) {
    error.details.errors.forEach(({ path, message }) => {
      const field = path[0];
      setError(field as never, {
        type: "validate",
        message,
      });
    });
    notify({
      message: defaultMessage,
      success: false,
      errors: error.details.errors,
    });
  }
};

export async function downloadFile(
  response: { name: string; bufferResponse: ArrayBuffer; type: string },
  name?: string
) {
  const responseName =
    name ||
    response.name?.split("=")?.[1]?.split(".")?.[0] ||
    response.name ||
    "download";

  const blob = new Blob([response.bufferResponse], { type: response.type });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;

  const fileName = responseName.replace("/", "").trim() || "file";
  const extension =
    response.type.split("/")[1] || response.name.split(".").pop() || "dat";
  a.download = `${fileName}.${extension}`;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
export const formatRange = (dateString: string) => {

  const base = dayjs.utc(dateString); // input is UTC

  const makeRange = (tz: string) => {
    const start = base.tz(tz);
    const end = start.add(1, "hour");

    return `${start.format("hA")} - ${end.format("hA")}`;
  };

  return {
    est: makeRange("America/New_York"),
    pst: makeRange("America/Los_Angeles"),
    cst: makeRange("America/Chicago"),
  };
};

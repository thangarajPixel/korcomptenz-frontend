import type { UseFormSetError } from "react-hook-form";
import sampleJson from "../../public/json/sample.json";
import { toast, type ExternalToast } from "sonner";

export const jsonData = sampleJson;
type FormErrors = {
  details: {
    errors: Array<{
      path: string[];
      message: string;
    }>;
  };
};

function isValidJson(jsonString: string) {
  try {
    JSON.parse(jsonString);
    return true; // Parsing successful, string is valid JSON
  } catch {
    return false; // Parsing failed, string is not valid JSON
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
      // Handles cases where success is undefined (e.g., errors === true)
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
      const field = path[0]; // Extract field name from path array
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

export async function downloadFileExcel(response: {
  name: string;
  bufferResponse: Buffer;
  type: string;
}, name?: string) {
  const responseName = name || String(response?.name).split('=')?.[1]?.split('.')?.[0] || '';
  const blob = new Blob([response.bufferResponse as never], { type: response.type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = String(responseName).replace('/', '');
  a.click();
}
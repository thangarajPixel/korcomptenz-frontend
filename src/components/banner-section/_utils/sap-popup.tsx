"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { SapformSchema, type SapFormSchema } from "@/utils/validation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCaptchaToken } from "@/lib/recaptcha";
import { errorSet, notify } from "@/utils/helper";
import { useSapLeadHook } from "@/services";
import { Textarea } from "@/components/ui/textarea";
import KorcomptenzImage from "@/components/korcomptenz-image";

type SapBannerPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  data: SapFormType;
  formTitle?: string;
  formDescription?: string;
  formImage?: ImageType;
};
const defaultValues = {
  fullName: "",
  businessEmail: "",
  phoneNumber: "",
  organization: "",
  company: "",
  message: "",
};
export function SapBannerPopup({
  isOpen,
  onClose,
  data,
  formTitle,
  formDescription,
  formImage,
}: SapBannerPopupProps) {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<SapFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(SapformSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const { mutateAsync } = useSapLeadHook();

  const { getToken } = useCaptchaToken();

  const handleFormSubmit: SubmitHandler<SapFormSchema> = React.useCallback(
    async (formdata) => {
      let captchaToken: string;
      try {
        captchaToken = await getToken("saplead");
      } catch {
        notify({ message: "Captcha verification failed. Please try again." });
        return;
      }
      const currentUrl =
        typeof window !== "undefined" ? window.location.pathname : "";
      const data = {
        ...formdata,
        pageSlug: currentUrl,

        recaptchaToken: captchaToken,
      };
      try {
        const response = await mutateAsync(data);
        notify(response);
        onClose();
        reset({ ...defaultValues });
      } catch (error: unknown) {
        const errorMessage =
          (error as ErrorType)?.error?.message || "An error occurred";
        notify({ message: errorMessage });
        errorSet(error, setError);
      }
    },
    [mutateAsync, reset],
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/50 md:overflow-hidden overflow-y-auto">
      <div className="min-h-screen flex items-start md:items-center justify-center px-4 py-4 md:py-10">
        <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-hidden rounded-2xl md:rounded-[32px] bg-[#313A45] px-4 py-6 md:px-10 md:py-6">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 md:top-4 md:right-4 z-10 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Logo */}
          {formImage && (
            <KorcomptenzImage
              src={formImage}
              width={100}
              height={150}
              className="absolute left-4 top-4 md:left-15 md:top-10 h-14 md:h-30 w-auto"
            />
          )}

          {/* Heading */}
          <div className="text-center">
            <DangerousHtml
              html={formTitle || ""}
              as="h3"
              className="text-2xl md:text-[40px] font-bold text-white leading-tight"
            />

            <DangerousHtml
              html={formDescription || ""}
              className="max-w-lg mx-auto text-center text-white text-sm md:text-[18px] leading-6 md:leading-7.5"
            />
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-6 md:space-y-8"
            id="form"
            noValidate
          >
            <div className="grid gap-y-6 w-full p-0 md:px-6 md:pt-4">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  control={control}
                  required
                  name="fullName"
                  placeholder={data?.fullNameLabel}
                  className="h-12 md:h-auto p-2 rounded-md bg-white placeholder:text-[#000000]"
                />

                <Input
                  control={control}
                  name="businessEmail"
                  required
                  placeholder={data?.businessEmailLabel}
                  className="h-12 md:h-auto p-2 rounded-md bg-white placeholder:text-[#000000]"
                />
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  control={control}
                  name="phoneNumber"
                  required
                  placeholder={data?.phoneNumberLabel}
                  className="h-12 md:h-auto p-2 rounded-md bg-white placeholder:text-[#000000]"
                />

                <Input
                  control={control}
                  name="organization"
                  required
                  placeholder={data?.organizationLabel}
                  className="h-12 md:h-auto p-2 rounded-md bg-white placeholder:text-[#000000]"
                />
              </div>

              {/* Message */}
              <div>
                <Textarea
                  control={control}
                  name="message"
                  // required
                  placeholder={data?.messageLabel}
                  className="min-h-[60px] p-2 rounded-md bg-white placeholder:text-[#000000]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button
                  size="xl"
                  variant="default"
                  arrow
                  isLoading={isSubmitting}
                  type="submit"
                  className="w-full md:w-auto"
                >
                  {data?.formbuttonText || "Request SAP Consultation"}
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <div className="shrink-0 mt-1">
                <KorcomptenzImage
                  src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/check_mark_5291043_1_ea7bdbea4a.png"
                  width={16}
                  height={16}
                  alt="check mark"
                  className="object-contain"
                />
              </div>

              <span>Response within 1 business day</span>
            </div>

            <div className="hidden md:block text-gray-500">|</div>

            <div className="flex items-center gap-2">
              <div className="shrink-0 mt-1">
                <KorcomptenzImage
                  src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/check_mark_5291043_1_ea7bdbea4a.png"
                  width={16}
                  height={16}
                  alt="check mark"
                  className="object-contain"
                />
              </div>
              <span>Confidential discussion</span>
            </div>

            <div className="hidden md:block text-gray-500">|</div>

            <div className="flex items-center gap-2">
              <div className="shrink-0 mt-1">
                <KorcomptenzImage
                  src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/check_mark_5291043_1_ea7bdbea4a.png"
                  width={16}
                  height={16}
                  alt="check mark"
                  className="object-contain"
                />
              </div>
              <span>SAP Certified Consultants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

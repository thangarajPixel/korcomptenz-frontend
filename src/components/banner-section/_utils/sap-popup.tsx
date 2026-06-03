"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import {

  SapformSchema,
  type SapFormSchema,
} from "@/utils/validation.schema";
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
  item?: {
    documentId: string;
    id: string;
  };
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
  item,
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
  const pageSlug = {
    connect: [
      {
        id: item?.id,
        documentId: item?.documentId,
        isTemporary: true,
      },
    ],
  };
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
        typeof window !== "undefined" ? window.location.href : "";
      const data = {
        ...formdata,
        pageSlug,
        frompage: currentUrl,
        recaptchaToken: captchaToken,
      };
      try {
        const response = await mutateAsync(data);
        notify(response);
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
    <div className="fixed inset-0 z-50 bg-black/50">
      {/* Close Button */}

      {/* Popup Container */}
      <div className="size-full flex items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-6xl rounded-[32px] border border-[#7B3FF2] bg-[#313A45] px-6 py-8 md:px-12 md:py-10">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>
          {/* Logo */}
          {formImage && (
            <KorcomptenzImage
              src={formImage}
              width={100}
              height={150}
              className="absolute left-15 top-10 h-30 w-auto"
            />
          )}

          {/* Heading */}
          <div className="text-center mt-5">
            <DangerousHtml
              html={formTitle || "SAP Services"}
              as="h3"
              className="text-3xl md:text-[50px] font-bold text-white"
            />

            <DangerousHtml
              html={formDescription || "SAP Servicesss"}
              className="mt-3 max-w-lg mx-auto text-center text-white text-[18px] leading-7.5 -mt-1"
            />
          </div>

          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-8  "
            id="form"
            noValidate
          >
            <div className="grid  p-10 gap-y-6 w-full ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <Input
                  control={control}
                  required
                  name="fullName"
                  placeholder={data?.fullNameLabel}
                  className=" p-4   rounded-md  bg-white placeholder:text-[#000000]"
                />
                <Input
                  control={control}
                  name="businessEmail"
                  required
                  placeholder={data?.businessEmailLabel}
                  className=" p-4   rounded-md text-foreground bg-white placeholder:text-[#000000]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <Input
                  control={control}
                  name="phoneNumber"
                  required
                  placeholder={data?.phoneNumberLabel}
                  className="p-4   rounded-md  text-foreground bg-white placeholder:text-[#000000]"
                />
                <Input
                  control={control}
                  name="organization"
                  required
                  placeholder={data?.organizationLabel}
                  className="p-4   rounded-md  text-foreground bg-white placeholder:text-[#000000]"
                />
              </div>
              <div className="grid gap-4 ">
                <Textarea
                  control={control}
                  name="message"
                  required
                  placeholder={data?.messageLabel}
                  className=" p-4   rounded-md   text-foreground bg-white placeholder:text-[#000000]"
                />
              </div>

              {/* Submit button */}
              <div className="pt-4 flex justify-center">
                <Button
                  size={"xl"}
                  variant="default"
                  arrow
                  isLoading={isSubmitting}
                  type="submit"
                >
                  {data?.buttonText}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

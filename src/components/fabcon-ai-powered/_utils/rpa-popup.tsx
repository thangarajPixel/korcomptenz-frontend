"use client";

import React, { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRPAPageFormHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { useCaptchaToken } from "@/lib/recaptcha";

import {
  RPAPageFormSchema,
  type RPAPageFormData,
} from "@/utils/validation.schema";

type RPAPageFormProps = {
  isOpen: boolean;
  onClose: () => void;
  essential: RPAPageFormType;
  formTitle?: string;
  formDescription?: string;
  emailSubject?: string;
  emailBody?: string;
  downloadContent?: string;
};

const defaultValues: RPAPageFormData = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  message: "",
};

const RPAPageForm = ({
  isOpen,
  onClose,
  essential,
  formTitle,
  formDescription,
}: RPAPageFormProps) => {
  const { mutateAsync } = useRPAPageFormHook();
  const { getToken } = useCaptchaToken();

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<RPAPageFormData>({
    mode: "onSubmit",
    resolver: zodResolver(RPAPageFormSchema),
    defaultValues,
  });

  const handleFormSubmit: SubmitHandler<RPAPageFormData> =
    React.useCallback(
      async (formdata) => {
        let captchaToken: string;

        try {
          captchaToken = await getToken("rpaform");
        } catch {
          notify({
            message: "Captcha verification failed. Please try again.",
          });
          return;
        }

        const currentUrl =
          typeof window !== "undefined"
            ? window.location.pathname
            : "";

        try {
          const response = await mutateAsync({
            ...formdata,
            pageSlug: currentUrl,
            recaptchaToken: captchaToken,
          });

          notify(response);
          if (!response?.success) return;
          reset(defaultValues);
          onClose();
        } catch (error: unknown) {
          const errorMessage =
            (error as ErrorType)?.error?.message ||
            "An error occurred";

          notify({ message: errorMessage });
          errorSet(error, setError);
        }
      },
      [mutateAsync, reset, getToken, setError, onClose],
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
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className="min-h-screen flex items-start md:items-center justify-center px-4 py-4 md:py-10">
        <div
          className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-[32px] bg-[#313A45] px-4 py-6 md:px-12 md:py-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 md:top-4 md:right-4 z-[9999] text-white hover:bg-white/20"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="w-5 h-5 md:w-6 md:h-6 pointer-events-none" />
          </Button>
          <div className="text-center mb-10">
            <DangerousHtml
              html={
                formTitle ||
                essential?.title ||
                "Contact Us"
              }
              as="h3"
              className="text-white text-[40px] md:text-[50px] font-bold leading-tight"
            />

            {formDescription && (
              <DangerousHtml
                html={formDescription}
                className="mt-3 max-w-2xl mx-auto text-white text-lg"
              />
            )}
          </div>
          <form
            id="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-6"
            noValidate
          >
            <div className="grid gap-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  control={control}
                  required
                  name="name"
                  placeholder={
                    essential?.fullNameLabel ||
                    "Full Name"
                  }
                  className="h-14 bg-white rounded-md px-4"
                />
                <Input
                  control={control}
                  required
                  name="email"
                  placeholder={
                    essential?.businessEmailLabel ||
                    "Business Email"
                  }
                  className="h-14 bg-white rounded-md px-4"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  control={control}
                  required
                  name="phone"
                  placeholder={
                    essential?.phoneNumberLabel ||
                    "Phone Number"
                  }
                  className="h-14 bg-white rounded-md px-4"
                />
                <Input
                  control={control}
                  required
                  name="organization"
                  placeholder={
                    essential?.organizationLabel ||
                    "Organization"
                  }
                  className="h-14 bg-white rounded-md px-4"
                />
              </div>
              <Textarea
                control={control}
                name="message"
                placeholder={
                  essential?.messageLabel ||
                  "Message"
                }
                className="min-h-[140px] bg-white rounded-md p-4"
              />
              <div className="flex justify-center">
                <Button
                  size="xl"
                  variant="default"
                  arrow
                  isLoading={isSubmitting}
                  type="submit"
                >
                  {essential?.buttonLabel || "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RPAPageForm;
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  FooterformSchema,
  type FooterFormSchema,
} from "@/utils/validation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCaptchaToken } from "@/lib/recaptcha";
import { errorSet, notify } from "@/utils/helper";
import { usefooterLeadHook } from "@/services";
import { Textarea } from "@/components/ui/textarea";

type FooterBannerPopupProps = {
  data: FooterFormType;
  formTitle?: string;
  formDescription?: string;
  formbuttonText?: string;
};
const defaultValues = {
  fullName: "",
  businessEmail: "",
  phoneNumber: "",
  organization: "",
  company: "",
  message: "",
};
export function ConsultationForm({
  data,
  formTitle,
  formDescription,
  formbuttonText,
}: FooterBannerPopupProps) {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<FooterFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(FooterformSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const { mutateAsync } = usefooterLeadHook();
  const { getToken } = useCaptchaToken();

  const handleFormSubmit: SubmitHandler<FooterFormSchema> = React.useCallback(
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

  return (
    <form
      id="contact-us-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8"
    >
      {formTitle && (
        <h3 className="text-5xl font-semibold text-center text-white">
          {formTitle || "Request an Assessment"}
        </h3>
      )}
      {formDescription && (
        <DangerousHtml
          html={formDescription || ""}
          className="max-w-lg mx-auto text-center text-white text-sm md:text-[18px] leading-6 md:leading-7.5"
        />
      )}
      <div className="grid gap-y-4 mt-5">
        <div className="grid grid-cols-1  gap-4">
          <Input
            control={control}
            name={"Name"}
            placeholder={data?.nameLabel || "Full name"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="Email"
            placeholder={data?.emailLabel || "Email"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
          <Input
            control={control}
            name="phoneNumber"
            placeholder={data?.phoneLabel || "Phone Number"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>

        <div className="grid grid-cols-1  gap-4">
          <Textarea
            control={control}
            name="Message"
            placeholder={data?.messageLabel || "Your message"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>

        {/* Submit button */}
        <div className="">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-white bg-primary text-white border-primary hover:text-primary"
            arrow
            isLoading={isSubmitting}
            type="submit"
          >
            {formbuttonText || "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ConsultationForm;

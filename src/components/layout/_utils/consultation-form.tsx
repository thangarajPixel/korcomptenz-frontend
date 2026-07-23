"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useFreeConsultationLeadHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  freeConsultationLeadSchema,
  type FreeConsultationLeadSchema,
} from "@/utils/validation.schema";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useCaptchaToken } from "@/lib/recaptcha";

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  mobile: "",
  organization: "",
  location: "",
  message: "",
};

const ConsultationForm = ({
  form,
  essential,
}: {
  form: FreeConsultationFormType;
  essential?: { id: string | number; [key: string]: unknown };
}) => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<FreeConsultationLeadSchema>({
    mode: "onSubmit",
    resolver: zodResolver(freeConsultationLeadSchema),
    defaultValues: {
      ...defaultValues,
      organization: "Default",
      location: "Default",
      insight: essential?.id
        ? {
            connect: [
              {
                id: essential?.id as number,
                documentId: essential?.documentId as string,
                isTempory: false,
              },
            ],
          }
        : null,
    },
  });
  const { mutateAsync } = useFreeConsultationLeadHook();
  const { getToken } = useCaptchaToken();

  const handleFormSubmit: SubmitHandler<FreeConsultationLeadSchema> =
    React.useCallback(
      async (formdata) => {
        let captchaToken: string;
        try {
          captchaToken = await getToken("freeconsultationlead");
        } catch {
          notify({ message: "Captcha verification failed. Please try again." });
          return;
        }
        const data = {
          ...formdata,
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
      <h3 className="text-5xl font-semibold text-center text-foreground text-white">
        Request an Assessment
      </h3>
      <div className="grid gap-y-4 mt-5">
        <div className="grid grid-cols-1  gap-4">
          <Input
            control={control}
            name={"fullName"}
            placeholder={form?.nameLabel || "Full name"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="email"
            placeholder={form?.emailLabel || "Email"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
          <Input
            control={control}
            name="phone"
            placeholder={form?.phoneLabel || "Phone Number"}
            className=" p-2  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>

        <div className="grid grid-cols-1  gap-4">
          <Textarea
            control={control}
            name="message"
            placeholder={form?.messageLabel || "Your message"}
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
            {form?.buttonText || "Submit"}
          </Button>
          <Input control={control} name="organization" type="hidden" />

          <Input control={control} name="location" type="hidden" />
        </div>
      </div>
    </form>
  );
};

export default ConsultationForm;

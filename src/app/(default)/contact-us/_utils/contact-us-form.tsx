"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCaseStudyEssentialHook, useContactUsLeadHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsFormSchema } from "@/utils/validation.schema";
import { ComboboxField } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { useCaptchaToken } from "@/lib/recaptcha";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  service: undefined,
  technology: undefined,
  message: "",
};

const ContactusForm = ({ form }: { form: ContactUsFormType }) => {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<ContactUsFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const router = useRouter();
  const { mutateAsync } = useContactUsLeadHook();
  const { getToken, isReady } = useCaptchaToken();

  const { data } = useCaseStudyEssentialHook();

  const handleFormSubmit: SubmitHandler<ContactUsFormSchema> =
    React.useCallback(
      async (formdata) => {
        if (!isReady) {
          notify({ message: "Captcha is loading. Please try again." });
          return;
        }

        let captchaToken: string;
        try {
          captchaToken = await getToken("contactuslead");
        } catch {
          notify({ message: "Captcha verification failed. Please try again." });
          return;
        }
        const data2 = { ...formdata, recaptchaToken: captchaToken };
        try {
          const response = await mutateAsync(data2);
          // notify(response);
          router.push("/thank-you");
          if (!response.success) return;
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
      className="space-y-8 bg-transparent md:bg-white rounded-2xl md:p-5"
      noValidate
    >
      <div className="grid gap-y-8 mt-5">
        {/* Name + Email */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            control={control}
            name={"firstName"}
            required
            placeholder={form?.firstNameLabel}
            className=" p-2 rounded-md text-black bg-[#F2F2F2] placeholder:text-black border-none"
          />
          <Input
            control={control}
            name="lastName"
            required
            placeholder={form?.lastNameLabel}
            className=" p-2 rounded-md text-black  bg-[#F2F2F2] placeholder:text-black border-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            control={control}
            name="email"
            required
            placeholder={form?.emailLabel}
            className=" p-2 rounded-md text-black  bg-[#F2F2F2] placeholder:text-black border-none"
          />
          <Input
            control={control}
            name="company"
            required
            placeholder={form?.companyLabel}
            className=" p-2 rounded-md text-black  bg-[#F2F2F2] placeholder:text-black border-none "
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            control={control}
            name="phone"
            required
            placeholder={form?.phoneLabel}
            className=" p-2 rounded-md text-black  bg-[#F2F2F2] placeholder:text-black border-none "
          />
          <ComboboxField
            control={control}
            name="service"
            options={
              data?.data?.service?.map((item) => ({
                ...item,
                label: item.label,
                value: item.id,
              })) || []
            }
            placeholder={form?.serviceLabel}
            className="border-2 rounded-md  bg-[#F2F2F2] placeholder:text-black border-none border-none"
          />
        </div>
        <div className="grid grid-cols-1  gap-4">
          <ComboboxField
            control={control}
            name="technology"
            options={
              data?.data?.technology?.map((item) => ({
                ...item,
                label: item.label,
                value: item.id,
              })) || []
            }
            placeholder={form?.technologyLabel}
            className=" rounded-md bg-[#F2F2F2]"
          />
        </div>
        <div className="grid grid-cols-1  gap-4">
          <Textarea
            control={control}
            required
            name="message"
            placeholder={form?.messageLabel}
            className=" p-2 rounded-md text-black bg-[#F2F2F2] placeholder:text-black border-none "
          />
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-primary border-primary text-primary hover:text-white"
            arrow
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        {form?.list?.map((item, index) => (
          <div key={index} className="flex ">
            <div className="mt-1">
              {" "}
              <KorcomptenzImage
                src="/assets/check 1.png"
                width={20}
                height={20}
              />
            </div>

            <p className="text-md md:text-lg text-white md:text-black">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default ContactusForm;

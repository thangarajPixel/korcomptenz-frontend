"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useIndustryLeadHook, useIndustryServiceHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
 
  industryformSchema,
  type IndustryFormSchema,
} from "@/utils/validation.schema";
import { ComboboxField } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

import { useCaptchaToken } from "@/lib/recaptcha";
import { DangerousHtml } from "../ui/dangerous-html";

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

const IndustryForm = ({ form }: { form: IndustryFormType }) => {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<IndustryFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(industryformSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const router = useRouter();
  const { mutateAsync } = useIndustryLeadHook();
  const { getToken } = useCaptchaToken();

  const { data } = useIndustryServiceHook();

  const handleFormSubmit: SubmitHandler<IndustryFormSchema> = React.useCallback(
    async (formdata) => {
      let captchaToken: string;
      try {
        captchaToken = await getToken("industrylead");
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
    <section className="container-md py-10 lg:py-16">
      <div className=" max-w-5xl">
        {/* Sub Heading */}

        {/* Main Title */}
        <DangerousHtml as="h2" html={form?.title} className="text-foreground" />

        {/* Description */}
        <DangerousHtml
          html={form?.description}
          className="text-[#242424] text-base md:text-lg leading-7 break-words"
        />
      </div>
      <form
        id="contact-us-form"
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-8 bg-white rounded-2xl  "
        noValidate
      >
        <div className="grid gap-y-8 mt-2">
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              control={control}
              name={"firstName"}
              required
              placeholder={form?.firstNameLabel}
              className=" w-full h-[52px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
            <Input
              control={control}
              name="lastName"
              required
              placeholder={form?.lastNameLabel}
              className=" w-full h-[52px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              control={control}
              name="email"
              required
              placeholder={form?.emailLabel}
              className=" w-full h-[52px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
            <Input
              control={control}
              name="company"
              required
              placeholder={form?.companyLabel}
              className=" w-full h-[52px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              control={control}
              name="phone"
              required
              placeholder={form?.phoneLabel}
              className=" w-full h-[52px] px-4 rounded-[6px] border-2  border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
            <ComboboxField
              control={control}
              textColor="#9A9A9A"
              name="service"
              options={
                data?.data?.map((item) => ({
                  ...item,
                  label: item?.title,
                  value: item.id,
                })) || []
              }
              placeholder={form?.serviceLabel}
              className="w-full h-[52px] px-4 rounded-[6px] border-2  border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>

          <div className="grid md:grid-cols-1  gap-4">
            <Textarea
              control={control}
              required
              name="message"
              placeholder={form?.messageLabel}
              className=" w-full h-[100px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-sm outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>

          <DangerousHtml
            html={form?.disclaimerDescription}
            className="text-xs text-[#9A9A9A] -mt-7 text-md md:text-lg leading-7.5"
          />
          {/* Submit button */}
          <div className="pt-2">
            <Button
              size="xl"
              variant="outline"
              className="hover:bg-white bg-primary border-primary text-white hover:text-primary"
              arrow
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default IndustryForm;

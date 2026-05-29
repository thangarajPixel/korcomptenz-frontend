"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  useCloudLeadHook,
  useInfrastructureHook,
  useMigrationHook,
  useRoleHook,
} from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  cloudformSchema,
  type CloudFormSchema,
} from "@/utils/validation.schema";
import { ComboboxField } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useCaptchaToken } from "@/lib/recaptcha";

const defaultValues = {
  firstName: "",
  lastName: "",
  company: "",
  role: undefined,
  infrastructure: undefined,
  migrationUrgency: undefined,
};

const cloudForm = ({ form }: { form: CloudFormType }) => {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<CloudFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(cloudformSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const router = useRouter();
  const { mutateAsync } = useCloudLeadHook();
  const { getToken } = useCaptchaToken();

  const { data: datarole } = useRoleHook();

  const { data: datainfrastructure } = useInfrastructureHook();
  const { data: datamigration } = useMigrationHook();

  const handleFormSubmit: SubmitHandler<CloudFormSchema> = React.useCallback(
    async (formdata) => {
      let captchaToken: string;
      try {
        captchaToken = await getToken("cloudlead");
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
    <section>
      <form
        id="contact-us-form"
        onSubmit={handleSubmit(handleFormSubmit)}
        className=" border border-[#CFCFCF] rounded-3xl p-4 md:p-6"
        noValidate
      >
        <div className="grid  mt-2">
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4 mb-1">
            <Input
              control={control}
              name={"firstName"}
              placeholder={form?.firstNameLabel}
              className=" w-full h-[60px] px-4  border-b-2 border-[#CECECE] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 "
            />
            <Input
              control={control}
              name="lastName"
              placeholder={form?.lastNameLabel}
              className=" w-full h-[60px] px-4  border-b-2 border-[#CECECE] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 "
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-1">
            <Input
              control={control}
              name="company"
              placeholder={form?.companyLabel}
              className=" w-full h-[60px] px-4  border-b-2 border-[#CECECE] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 "
            />

            <ComboboxField
              control={control}
              textColor="#9A9A9A"
              name="role"
              options={
                datarole?.data?.map((item) => ({
                  ...item,
                  label: item?.title,
                  value: item.id,
                })) || []
              }
              placeholder={form?.roleLabel}
              className="w-full h-[60px] px-4  border-b-2 border-[#CECECE] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-1">
          <ComboboxField
            control={control}
            textColor="#9A9A9A"
            name="infrastructure"
            options={
              datamigration?.data?.map((item) => ({
                ...item,
                label: item?.title,
                value: item.id,
              })) || []
            }
            placeholder={form?.migrationUrgencyLabel}
            className="w-full h-[60px] px-4  border-b-2 border-[#CECECE] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 "
          />
          <ComboboxField
            control={control}
            textColor="#9A9A9A"
            name="migrationUrgency"
            options={
              datainfrastructure?.data?.map((item) => ({
                ...item,
                label: item?.title,
                value: item.id,
              })) || []
            }
            placeholder={form?.infrastructureLabel}
            className="w-full h-[60px] px-4  border-b-2 border-[#CECECE] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 "
          />
        </div>

        {/* Submit button */}
        <div className="pt-2 flex justify-end md:justify-start  mt-5">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-white bg-primary border-primary text-white hover:text-primary px-8 py-4"
            arrow
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default cloudForm;

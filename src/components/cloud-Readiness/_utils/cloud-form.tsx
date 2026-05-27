"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useIndustryLeadHook,  useInfrastructureHook, useMigrationHook, useRoleHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  industryformSchema,
  type IndustryFormSchema,
} from "@/utils/validation.schema";
import { ComboboxField } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

const cloudForm = ({ form }: { form: CloudFormType }) => {

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

const { data: datarole } = useRoleHook();
const { data: datainfrastructure } = useInfrastructureHook();
const { data: datamigration } = useMigrationHook();




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
    <section >
      
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
           
              placeholder={form?.firstNameLabel}
              className=" w-full h-[70px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 py-2"
            />
            <Input
              control={control}
              name="lastName"
             
              placeholder={form?.lastNameLabel}
              className=" w-full h-[70px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            
            <Input
              control={control}
              name="company"
           
              placeholder={form?.companyLabel}
              className=" w-full h-[70px] px-4 rounded-[6px] border-2 border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 py-2"
            />

            <ComboboxField
              control={control}
              textColor="#9A9A9A"
              name="service"
              options={
                datarole?.data?.map((item) => ({
                  ...item,
                  label: item?.title,
                  value: item.id,
                })) || []
              }
              placeholder={form?.roleLabel}
              className="w-full h-[70px] px-4 rounded-[6px] border-2  border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
           
            <ComboboxField
              control={control}
              textColor="#9A9A9A"
              name="service"
              options={
                datamigration?.data?.map((item) => ({
                  ...item,
                  label: item?.title,
                  value: item.id,
                })) || []
              }
              placeholder={form?.migrationUrgencyLabel}
              className="w-full h-[70px] px-4 rounded-[6px] border-2  border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 py-2"
            />
            <ComboboxField
              control={control}
              textColor="#9A9A9A"
              name="service"
              options={
                datainfrastructure?.data?.map((item) => ({
                  ...item,
                  label: item?.title,
                  value: item.id,
                })) || []
              }
              placeholder={form?.infrastructureLabel}
              className="w-full h-[70px] px-4 rounded-[6px] border-2  border-[#7A7A7A] bg-white text-[#242424] placeholder:text-[#9A9A9A] text-[18px] outline-none focus:border-black focus:ring-0 py-2"
            />
          </div>

         

        
          {/* Submit button */}
          <div className="pt-2 flex justify-center items-center -mt-5">
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-white bg-primary border-primary text-white hover:text-primary px-10 py-4"
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

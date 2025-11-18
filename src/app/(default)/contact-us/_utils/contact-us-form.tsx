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

import KorcomptenzImage from "@/components/korcomptenz-image";

const defaultValues = {
  name: "",
  email: "",
  phoneNumber: "",
  mobile: "",
  department: "",
  resume: "",
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

  const { mutateAsync } = useContactUsLeadHook();

  const { data } = useCaseStudyEssentialHook();

  const handleFormSubmit: SubmitHandler<ContactUsFormSchema> =
    React.useCallback(
      async (formdata) => {
        try {
          const response = await mutateAsync(formdata);
          notify(response);
          reset({ ...defaultValues });
        } catch (error) {
          errorSet(error, setError);
        }
      },
      [mutateAsync, reset]
    );

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="grid gap-y-8 mt-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name={"firstName"}
            placeholder={form?.firstNameLabel}
            className=" p-2 rounded-md text-black bg-white placeholder:text-black "
          />
          <Input
            control={control}
            name="lastName"
            placeholder={form?.lastNameLabel}
            className=" p-2 rounded-md text-black bg-white placeholder:text-black "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="email"
            placeholder={form?.emailLabel}
            className=" p-2 rounded-md text-black bg-white placeholder:text-black "
          />
          <Input
            control={control}
            name="company"
            placeholder={form?.companyLabel}
            className=" p-2 rounded-md text-black bg-white placeholder:text-black "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="phone"
            placeholder={form?.phoneLabel}
            className=" p-2 rounded-md text-black bg-white placeholder:text-black "
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
            className="border-2 rounded-md bg-white"
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
            className="border-2 rounded-md bg-white"
          />
        </div>
        <div className="grid grid-cols-1  gap-4">
          <Textarea
            control={control}
            name="message"
            placeholder={form?.messageLabel}
            className=" p-2 rounded-md text-black bg-white placeholder:text-black "
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

        {form?.list?.map((item, index) => (
          <div key={index} className="flex">
            <div className="mt-1">
              {" "}
              <KorcomptenzImage
                src="/assets/check 1.png"
                width={20}
                height={20}
              />
            </div>

            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default ContactusForm;

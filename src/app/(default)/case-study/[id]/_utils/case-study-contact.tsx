"use client";

import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/utils/validation.schema";
import { useCaseStudyLeadHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
const defaultValues = {
  fullName: "",
  email: "",
  organization: "",
  phone: "",
  message: "",
};
export function CaseStudyForm({
  data,
  essential: form,
}: {
  data: CaseStudyData;
  essential: CaseStudyPageType;
}) {
  const essential = form?.form?.forms?.[0] as CaseStudyFormType;
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      ...defaultValues,
      caseStudyId: String(data.id),
    },
  });
  const { mutateAsync } = useCaseStudyLeadHook();
  const handleFormSubmit: SubmitHandler<ContactFormData> = React.useCallback(
    async (formdata) => {
      try {
        const response = await mutateAsync(formdata);
        notify(response);
        reset({ ...defaultValues, caseStudyId: String(data.id) });
      } catch (error) {
        errorSet(error, setError);
      }
    },
    [mutateAsync, reset]
  );

  return (
    <div className="container-md py-12 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-[#2d3748] text-7xl leading-tight mb-2 font-bold">
            {essential?.title}
          </h3>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-8"
          noValidate
        >
          {/* Row 1: Full name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Input
              control={control}
              name="fullName"
              placeholder={essential?.nameLabel}
              required={true}
            />
            <Input
              control={control}
              name="email"
              placeholder={essential?.emailLabel}
              required={true}
            />
          </div>
          {/* Row 2: Organization and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Input
              control={control}
              name="organization"
              placeholder={essential?.organizationLabel}
              required={true}
            />
            <Input
              control={control}
              name="phone"
              placeholder={essential?.phoneLabel}
            />
          </div>
          <Textarea
            control={control}
            name="message"
            placeholder={essential?.messageLabel}
          />
          {/* Submit button */}
          <div className="pt-4">
            <Button
              isLoading={isSubmitting}
              type="submit"
              size={"xl"}
              variant={"outline"}
              className="bg-primary border-primary hover:text-primary text-white"
              arrow
            >
              {essential?.buttonText}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

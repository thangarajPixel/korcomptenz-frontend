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

export function CaseStudyForm({ data }: { data: CaseStudyData }) {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      organization: "",
      phone: "",
      message: "",
      caseStudyId: String(data.id),
    },
  });
  const { mutateAsync } = useCaseStudyLeadHook();
  const handleFormSubmit: SubmitHandler<ContactFormData> = React.useCallback(
    async (formdata) => {
      try {
        const response = await mutateAsync(formdata);
        notify(response);
      } catch (error) {
        errorSet(error, setError);
      }
    },
    [mutateAsync]
  );

  return (
    <div className="container-md py-12 px-8">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-[#2d3748] text-7xl leading-tight mb-2 font-bold">
            Expert-led Transformations
          </h1>
          <h2 className="text-[#2d3748] text-7xl leading-tight mb-2 font-bold">
            Impact-led Growth
          </h2>
          <h3 className="text-[#2d3748] text-7xl leading-tight font-bold">
            The journey starts here
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
          {/* Row 1: Full name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Input control={control} name="fullName" placeholder="Full name" />
            <Input control={control} name="email" placeholder="Email ID" />
          </div>
          {/* Row 2: Organization and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Input
              control={control}
              name="organization"
              placeholder="Organization"
            />
            <Input control={control} name="phone" placeholder="Phone Number" />
          </div>
          <Textarea
            control={control}
            name="message"
            placeholder="Type your message/enquiry here.."
          />
          {/* Submit button */}
          <div className="pt-4">
            <Button
              isLoading={isSubmitting}
              type="submit"
              size={"xl"}
              variant={"outline"}
              className="hover:bg-primary border-primary text-primary hover:text-white"
              arrow
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useContactUsLeadHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactUsFormSchema } from "@/utils/validation.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const defaultValues = {
  name: "",
  email: "",
  phoneNumber: "",
  mobile: "",
  department: "",
  resume: "",
};
const form = {};
const ConsultationForm = () => {
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

  // const { data } = useCaseStudyEssentialHook();

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
    <form
      id="contact-us-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8"
    >
      <div className="grid gap-y-8 mt-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1  gap-4">
          <Input
            control={control}
            name={"firstName"}
            placeholder={form?.firstNameLabel || "Full name"}
            className=" p-2 border-2 rounded-md text-black bg-white placeholder:text-black "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="email"
            placeholder={form?.emailLabel || "Email"}
            className=" p-2 border-2 rounded-md text-black bg-white placeholder:text-black "
          />
          <Input
            control={control}
            name="company"
            placeholder={form?.companyLabel || "Phone Number"}
            className=" p-2 border-2 rounded-md text-black bg-white placeholder:text-black "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="phone"
            placeholder={form?.phoneLabel || "Organization"}
            className=" p-2 border-2 rounded-md text-black bg-white placeholder:text-black "
          />
          <Input
            control={control}
            name="phone"
            placeholder={form?.phoneLabel || "Location"}
            className=" p-2 rounded-md border-2 text-black bg-white placeholder:text-black "
          />
        </div>

        <div className="grid grid-cols-1  gap-4">
          <Textarea
            control={control}
            name="message"
            placeholder={form?.messageLabel || "Your message"}
            className=" p-2 rounded-md border-2 text-black bg-white placeholder:text-black "
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
    </form>
  );
};

export default ConsultationForm;

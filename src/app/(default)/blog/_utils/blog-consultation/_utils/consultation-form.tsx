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

const defaultValues = {
  name: "",
  email: "",
  phoneNumber: "",
  mobile: "",
  department: "",
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
      insight: essential?.id
        ? {
            connect: [
              {
                id: essential.id as number,
                documentId: essential.documentId as string,
                isTempory: false,
              },
            ],
          }
        : null,
    },
  });
  const { mutateAsync } = useFreeConsultationLeadHook();

  const handleFormSubmit: SubmitHandler<FreeConsultationLeadSchema> =
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
        <div className="grid grid-cols-1  gap-4">
          <Input
            control={control}
            name={"fullName"}
            placeholder={form?.nameLabel || "Full name"}
            className=" p-3  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="email"
            placeholder={form?.emailLabel || "Email"}
            className=" p-3  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
          <Input
            control={control}
            name="phone"
            placeholder={form?.phoneLabel || "Phone Number"}
            className=" p-3  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="organization"
            placeholder={form?.organizationLabel || "Organization"}
            className=" p-3  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
          <Input
            control={control}
            name="location"
            placeholder={form?.locationLabel || "Location"}
            className=" p-3  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>

        <div className="grid grid-cols-1  gap-4">
          <Textarea
            control={control}
            name="message"
            placeholder={form?.messageLabel || "Your message"}
            className=" p-3  rounded-md text-black bg-custom-gray-8 placeholder:text-black border-none"
          />
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <Button
            size="xl"
            variant="outline"
            className="hover:bg-primary border-primary text-primary hover:text-white"
            arrow
            isLoading={isSubmitting}
            type="submit"
          >
            {form?.buttonText || "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ConsultationForm;

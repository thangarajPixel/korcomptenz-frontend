"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  bookADemoSchema,
  type BookADemoFormData,
} from "@/utils/validation.schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useBookADemoHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
const defaultValues = {
  name: "",
  email: "",
  organization: "",
};
const BookDemoSection = ({
  essential,
  item,
}: {
  essential: BookDemoFormType;
  item?: GlobalFormItemType;
}) => {
  const { mutateAsync } = useBookADemoHook();
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<BookADemoFormData>({
    mode: "onSubmit",
    resolver: zodResolver(bookADemoSchema),
    defaultValues,
  });
  const demoFrom = {
    connect: [
      {
        id: item?.id,
        documentId: item?.documentId,
        isTemporary: true,
      },
    ],
  };
  const handleFormSubmit: SubmitHandler<BookADemoFormData> = React.useCallback(
    async (data) => {
      const formdata = {
        ...data,
        demoFrom,
      };
      try {
        const response = await mutateAsync(formdata);
        notify(response);
        reset(defaultValues);
      } catch (error) {
        errorSet(error, setError);
      }
    },
    [mutateAsync, reset],
  );

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} id="form" noValidate>
      <div className="grid rounded-4xl shadow-[0_0_25px_rgba(0,0,0,0.15)] p-5 md:p-10 gap-y-5 mt-5 w-full md:w-3/4">
        <h3 className="text-5xl font-semibold text-center text-foreground">
          {essential?.title || "Book a Demo"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2  ">
          <Input
            control={control}
            name="name"
            label={essential?.nameLabel || "Full name"}
            required
            className="border-2 p-2 border-black rounded-md text-foreground mb-3"
          />
          <Input
            control={control}
            name="organization"
            label={essential?.organizationLabel || "Organization"}
            required
            className="border-2 p-2   border-black rounded-md text-foreground"
          />
        </div>

        <div className="grid grid-cols-1">
          <Input
            control={control}
            name="email"
            label={essential?.emailLabel || "Email"}
            required
            className="border-2 p-2  border-black rounded-md text-foreground"
          />
        </div>
        {/* Submit button */}
        <div className="pt-2 flex justify-center ">
          <Button
            size={"lg"}
            variant={"secondary"}
            className="rounded-2xl border-2 border-secondary hover:border-bg-secondary hover:bg-white hover:text-secondary"
            arrow
            isLoading={isSubmitting}
            type="submit"
          >
            {essential?.buttonText || "Book Now"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BookDemoSection;

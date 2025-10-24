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
}: {
  essential: BookDemoFormType;
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
  const handleFormSubmit: SubmitHandler<BookADemoFormData> = React.useCallback(
    async (data) => {
      try {
        const response = await mutateAsync(data);
        notify(response);
        reset(defaultValues);
      } catch (error) {
        errorSet(error, setError);
      }
    },
    [mutateAsync, reset]
  );

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid shadow-xl p-10 gap-y-8 w-3/4">
        <h3 className="text-5xl font-semibold text-center text-foreground">
          {essential?.title || "Book a Demo"}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 ">
          <Input
            control={control}
            name="name"
            label={essential?.nameLabel || "Full name"}
            className="border-2 p-2 rounded-md text-foreground"
          />
          <Input
            control={control}
            name="organization"
            label={essential?.organizationLabel || "Organization"}
            className="border-2 p-2 rounded-md text-foreground"
          />
        </div>

        <div className="grid grid-cols-1">
          {" "}
          <Input
            control={control}
            name="email"
            label={essential?.emailLabel || "Email ID"}
            className="border-2 p-2 rounded-md text-foreground"
          />
        </div>
        {/* Submit button */}
        <div className="pt-4">
          <Button
            size={"lg"}
            variant={"outline"}
            className="hover:bg-primary border-primary text-primary hover:text-white"
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

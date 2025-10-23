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

const ContactUs = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<BookADemoFormData>({
    mode: "onSubmit",
    resolver: zodResolver(bookADemoSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
    },
  });
  const { mutateAsync } = useBookADemoHook();
  const handleFormSubmit: SubmitHandler<BookADemoFormData> = React.useCallback(
    async (data) => {
      try {
        const response = await mutateAsync(data);

        notify(response);
      } catch (error) {
        errorSet(error, setError);
      }
    },
    [mutateAsync]
  );

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid shadow-xl p-10 gap-y-8 w-3/4">
        <h1 className="text-5xl font-semibold text-center text-foreground">
          Book a Demo
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 ">
          <Input
            control={control}
            name="name"
            placeholder="Full name"
            className="border-2 p-2 rounded-md text-foreground"
          />
          <Input
            control={control}
            name="organization"
            placeholder="Organization"
            className="border-2 p-2 rounded-md text-foreground"
          />
        </div>

        <div className="grid grid-cols-1  gap-x-12 ">
          {" "}
          <Input
            control={control}
            name="email"
            placeholder="Email ID"
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
            Book Now
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;

"use client";
import React from "react";
import { Input } from "../ui/input";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";
import { useCareerNewLetterHook, useDepartmentListHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CareerNewLetterSchema,
  type CareerNewLetterFormData,
} from "@/utils/validation.schema";
import { ComboboxField } from "../ui/combobox";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  department: null,
  resume: "",
};

const CareerForm = () => {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<CareerNewLetterFormData>({
    mode: "onSubmit",
    resolver: zodResolver(CareerNewLetterSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const { mutateAsync } = useCareerNewLetterHook();

  const { data } = useDepartmentListHook();
  const handleFormSubmit: SubmitHandler<CareerNewLetterFormData> =
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
      [mutateAsync, reset],
    );

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
      <div className="grid gap-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            control={control}
            name="name"
            placeholder="Full Name"
            className="border-2 p-2 rounded-md text-black bg-white placeholder:text-black "
          />
          <Input
            control={control}
            placeholder="Email"
            name="email"
            className="border-2 p-2 rounded-md t text-black bg-white placeholder:text-black"
          />
        </div>

        {/* Mobile + Phone + Department */}
        <div className="grid gap-4 sm:grid-cols-2 lg:flex">
          <div className="w-full lg:w-[50%]">
            <Input
              control={control}
              name="phone"
              placeholder="Phone Number"
              className="border-2 p-2 rounded-md text-foreground bg-white w-full placeholder:text-black"
            />
          </div>

          {/* Department */}
          <div className="size-full sm:col-span-2 ">
            <ComboboxField
              control={control}
              name="department"
              options={
                data?.data?.map((item) => ({
                  ...item,
                  label: item.label,
                  value: item.id,
                })) || []
              }
              placeholder="Select Department"
              className="border-2 rounded-md bg-white"
            />
          </div>
        </div>

        {/* Resume */}
        <div className="relative">
          <Controller
            control={control}
            name="resume"
            rules={{
              validate: {
                required: (files) => files?.length > 0 || "Resume is required",
                size: (files) =>
                  !files ||
                  files[0]?.size <= 10 * 1024 * 1024 ||
                  "File must be smaller than 10MB",
                type: (files) =>
                  !files ||
                  files[0]?.type === "application/pdf" ||
                  "Only PDF files are allowed",
              },
            }}
            render={({ field, fieldState }) => (
              <div className="relative">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => field.onChange(e.target.files)}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                <div className="border-2 p-2 rounded-md bg-white text-foreground flex justify-between items-center">
                  <span className="text-black text-sm truncate">
                    {field.value?.[0]?.name ||
                      "Resume (below 10MB, PDF file) *"}
                  </span>
                  <Upload className="text-gray-600 size-5" />
                </div>
                {fieldState.error && (
                  <p className="text-red-600 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Submit button */}
        <div className="mt-3">
          <Button
            size="xl"
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

export default CareerForm;

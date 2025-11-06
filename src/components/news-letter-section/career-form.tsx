"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
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
  phoneNumber: "",
  mobile: "",
  department: "",
  resume: "",
};

const CareerForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<CareerNewLetterFormData>({
    mode: "onSubmit",
    resolver: zodResolver(CareerNewLetterSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const [fileName, setFileName] = useState("");
  const { mutateAsync } = useCareerNewLetterHook();

  const { data } = useDepartmentListHook();

  const handleFormSubmit: SubmitHandler<CareerNewLetterFormData> =
    React.useCallback(
      async (formdata) => {
        try {
          const response = await mutateAsync(formdata);
          notify(response);
          // reset({ ...defaultValues });
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
          {/* Mobile */}
          <div className="w-full lg:w-[15%]">
            <Input
              control={control}
              name="mobile"
              placeholder="Mobile"
              className="border-2 p-2 rounded-md text-foreground bg-white w-full placeholder:text-black"
            />
          </div>

          {/* Phone Number */}
          <div className="w-full lg:w-[35%]">
            <Input
              control={control}
              name="phoneNumber"
              placeholder="Phone Number"
              className="border-2 p-2 rounded-md text-foreground bg-white w-full placeholder:text-black"
            />
          </div>

          {/* Department */}
          <div className="w-full sm:col-span-2 lg:w-[50%]">
            <ComboboxField
              control={control}
              name="department"
              options={
                data?.data?.map((item) => ({
                  label: item.label,
                  value: item.label,
                })) || []
              }
              placeholder="Select Department"
              className="border-2 rounded-md bg-white"
            />
          </div>
        </div>

        {/* Resume */}
        <div className="relative">
          <input
            type="file"
            accept="application/pdf"
            {...register("resume")}
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileName(file ? file.name : "");
            }}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />

          <div className="border-2 p-2 rounded-md bg-white text-foreground flex justify-between items-center">
            <span className="text-black text-sm truncate">
              {fileName || "Resume (below 10MB, PDF file) *"}
            </span>
            <Upload className="text-gray-600 w-5 h-5" />
          </div>
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

export default CareerForm;

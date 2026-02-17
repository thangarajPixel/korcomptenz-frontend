"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useFabconBannerLeadHook, useTimeSlotListHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fabconDecisionLeadSchema,
  type FabconDecisionLeadSchema,
} from "@/utils/validation.schema";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { ComboboxWhite } from "@/components/ui/comboboxWhite";

const defaultValues: FabconDecisionLeadSchema = {
  fullName: "",
  email: "",
  company: "",
  timeSlot: "",
  message: "",
};

type fromDataType = {
  forms: {
    fullName: string;
    email: string;
    timeSlot: string;
    company: string;
    message: string;
    buttonText?: string | undefined;
  }[];
};

const FabconBannerForm = ({ form }: { form: fromDataType }) => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<FabconDecisionLeadSchema>({
    mode: "onSubmit",
    resolver: zodResolver(fabconDecisionLeadSchema),
    defaultValues,
  });

  const { mutateAsync } = useFabconBannerLeadHook();

  const handleFormSubmit: SubmitHandler<FabconDecisionLeadSchema> =
    React.useCallback(
      async (formdata) => {
        try {
          const response = await mutateAsync(formdata);
          notify(response);
          reset(defaultValues);
        } catch (error) {
          errorSet(error, setError);
        }
      },
      [mutateAsync, reset, setError],
    );
  const { data } = useTimeSlotListHook();

  return (
    <form
      id="contact-us-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      className="relative rounded-3xl border border-[#1EBFA1]
                 bg-[#2a2558] 
                 p-4 md:p-6 md:px-10 md:pt-10 space-y-4"
    >
      {/* Inputs */}
      <div className="space-y-6 md:space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            control={control}
            name="fullName"
            required
            placeholder={form?.forms?.[0]?.fullName}
            className="
                  bg-transparent
                  border-0 border-b border-white/60
                  rounded-none px-0
                  h-12 md:h-14
                  text-white placeholder:text-white
                  focus-visible:ring-0 focus:border-white
                "
          />

          <Input
            control={control}
            name="email"
            required
            placeholder={form?.forms?.[0]?.email}
            className="
                  bg-transparent
                  border-0 border-b border-white/60
                  rounded-none px-0
                  h-12 md:h-14
                  text-white placeholder:text-white
                  focus-visible:ring-0 focus:border-white
                "
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Input
            control={control}
            name="company"
            required
            placeholder={form?.forms?.[0]?.company}
            className="
                  bg-transparent
                  border-0 border-b border-white/60
                  rounded-none px-0
                  h-12 md:h-14
                  text-white placeholder:text-white
                  focus-visible:ring-0 focus:border-white
                "
          />

          <ComboboxWhite
            control={control}
            name="timeSlot"
            options={
              data?.data?.map((item) => ({
                ...item,
                label: item.timeSlot,
                value: item.id,
              })) || []
            }
            placeholder={form?.forms?.[0]?.timeSlot}
            className="
                  bg-transparent
                  border-0 border-b border-white/60
                  rounded-none px-0
                  h-12 md:h-14
                  text-white placeholder:text-white
                  focus-visible:ring-0 focus:border-white
                "
          />
        </div>

        {/* Message */}
        <Textarea
          control={control}
          name="message"
          placeholder={form?.forms?.[0]?.message}
          className="
                min-h-[100px] md:min-h-[120px]
                rounded-xl
                bg-white text-gray-900
                placeholder:text-gray-500
                p-3 md:p-4
                resize-none
                focus-visible:ring-0
              "
        />
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <Button
          size="xl"
          arrow
          isLoading={isSubmitting}
          type="submit"
          className="
                w-full md:w-auto
                rounded-full
                px-8 md:px-10
                py-5 md:py-6
                bg-emerald-500
                text-white
                transition
              "
        >
          {form?.forms?.[0]?.buttonText || "Reserve My FABCON 2026 Slot"}
        </Button>
      </div>
    </form>
  );
};

export default FabconBannerForm;

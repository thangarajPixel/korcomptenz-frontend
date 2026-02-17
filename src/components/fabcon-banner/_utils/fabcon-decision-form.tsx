"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useFabconDecisionLeadHook, useTimeSlotListHook } from "@/services";
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

const FabconDecisionForm = () => {
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

  const { mutateAsync } = useFabconDecisionLeadHook();

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
      <div className="space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            control={control}
            required
            name="fullName"
            placeholder="Full Name"
            className="bg-transparent border-0 border-b border-white/60 
                       rounded-none px-0 text-white placeholder:text-white
                       focus-visible:ring-0 focus:border-white"
          />

          <Input
            control={control}
            name="email"
            required
            placeholder="Email"
            className="bg-transparent border-0 border-b border-white/60 
                       rounded-none px-0 text-white placeholder:text-white
                       focus-visible:ring-0 focus:border-white"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white!">
          <Input
            control={control}
            name="company"
            required
            placeholder="Company"
            className="bg-transparent border-0 border-b border-white/60 
                       rounded-none px-0 text-white! placeholder:text-white!
                       focus-visible:ring-0 focus:border-white"
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
            placeholder="Preferred Time Slot*"
            className="bg-transparent border-0 border-b border-white/60 
                       rounded-none px-0 text-white placeholder:text-white
                       focus-visible:ring-0 focus:border-white"
          />
          {/* <Input
            control={control}
            name="phone"
            placeholder="Preferred Time Slot*"
            className="bg-transparent border-0 border-b border-white/60 
                       rounded-none px-0 text-white placeholder:text-white
                       focus-visible:ring-0 focus:border-white"
          /> */}
        </div>

        {/* Message */}
        <Textarea
          control={control}
          name="message"
          placeholder="Tell us briefly about your interests..."
          className="min-h-[120px] rounded-xl bg-white text-gray-900 
                     placeholder:text-gray-500 p-4 resize-none
                     focus-visible:ring-0"
        />
      </div>

      {/* CTA */}
      <div className="flex justify-end ">
        <Button
          size="xl"
          arrow
          isLoading={isSubmitting}
          type="submit"
          className="rounded-full px-10 py-6 
                     bg-emerald-500 text-white 
                     transition"
        >
          {"Reserve My FABCON 2026 Slot"}
        </Button>
      </div>
    </form>
  );
};

export default FabconDecisionForm;

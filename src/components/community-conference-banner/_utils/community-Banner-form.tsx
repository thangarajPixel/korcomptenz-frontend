"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCommunityBannerLeadHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  communityDecisionLeadSchema,
  type CommunityDecisionLeadSchema,
} from "@/utils/validation.schema";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { ComboboxWhite } from "@/components/ui/comboboxWhite";
import { useCaptchaToken } from "@/lib/recaptcha";

const defaultValues: CommunityDecisionLeadSchema = {
  fullName: "",
  email: "",
  company: "",
  timeSlot: "",
  jobtitle: "",
  bussinessAreas: "",
  preferredTime: "",
  message: "",
};

type fromDataType = {
  forms: {
    fullName: string;
    email: string;
    timeSlot: string;
    company: string;
    message: string;
    jobtitleLabel: string;
    businessAreaTitle: string;
    preferredTime: string;
    buttonText?: string | undefined;
    title: string;
    subtitle?: string;
    bussinessAreasList: {
      id: number;
      Values: string;
    }[];
    TimeslotList: {
      id: number;
      dates: string;
    }[];
  }[];
};

// Shared styles matching the reservation-form design
const boxFieldClass =
  "bg-transparent border border-white/25 rounded-lg px-4 h-12 md:h-14 text-white placeholder:text-white/40 focus-visible:ring-0 focus:border-[#1EBFA1] transition-colors";

const labelClass = "block text-white text-sm md:text-base font-medium mb-2";

const CommunityBannerForm = ({ form }: { form: fromDataType }) => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<CommunityDecisionLeadSchema>({
    mode: "onSubmit",
    resolver: zodResolver(communityDecisionLeadSchema),
    defaultValues,
  });

  const { mutateAsync } = useCommunityBannerLeadHook();
  const { getToken } = useCaptchaToken();

  const handleFormSubmit: SubmitHandler<CommunityDecisionLeadSchema> =
    React.useCallback(
      async (formdata) => {
        let captchaToken = await getToken("communitybookmeetlead");

        try {
          captchaToken = await getToken("communitybookmeetlead");
        } catch {
          notify({ message: "Captcha verification failed. Please try again." });
          return;
        }
        const data = {
          ...formdata,
          recaptchaToken: captchaToken,
        };
        try {
          const response = await mutateAsync(data);
          notify(response);
          reset(defaultValues);
        } catch (error: unknown) {
          const errorMessage =
            (error as ErrorType)?.error?.message || "An error occurred";
          notify({ message: errorMessage });
          errorSet(error, setError);
        }
      },
      [mutateAsync, reset, setError],
    );

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="
           w-full max-w-xl
           rounded-2xl md:rounded-3xl
           bg-[#0B1220]
           p-2 md:p-3
           space-y-6
         "
    >
      {/* Inputs */}
      <div className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={labelClass}>
              {form?.forms?.[0]?.email || "name@company.com"}*
            </label>
            <Input
              control={control}
              name="email"
              required
              placeholder="name@company.com"
              className={boxFieldClass}
            />
          </div>

          <div>
            <label className={labelClass}>{form?.forms?.[0]?.fullName}*</label>
            <Input
              control={control}
              name="fullName"
              required
              placeholder="Enter your full name"
              className={boxFieldClass}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={labelClass}>{form?.forms?.[0]?.company}*</label>
            <Input
              control={control}
              name="company"
              required
              placeholder="Company name"
              className={boxFieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              {form?.forms?.[0]?.jobtitleLabel}
            </label>
            <Input
              control={control}
              name="jobtitle"
              placeholder="Optional"
              className={boxFieldClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <label className={labelClass}>
              {form?.forms?.[0]?.businessAreaTitle}
            </label>
            <ComboboxWhite
              control={control}
              name="bussinessAreas"
              options={
                form?.forms?.[0]?.bussinessAreasList?.map((item) => ({
                  ...item,
                  label: item.Values,
                  value: item.id,
                })) || []
              }
              placeholder="Selection Area"
              className={boxFieldClass}
            />
          </div>
          <div>
            <label className={labelClass}>{form?.forms?.[0]?.timeSlot}</label>
            <ComboboxWhite
              control={control}
              name="timeSlot"
              options={
                form?.forms?.[0]?.TimeslotList?.map((item) => ({
                  ...item,
                  label: item.dates,
                  value: item.id,
                })) || []
              }
              placeholder="Optional"
              className={boxFieldClass}
            />
          </div>
        </div>
        {/* Message */}

        <div>
          <label className={labelClass}>
            {form?.forms?.[0]?.preferredTime || "preferred Time"}
          </label>
          <Input
            control={control}
            name="preferredTime"
            placeholder="Optional"
            className={boxFieldClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            {form?.forms?.[0]?.message || "Message"}
          </label>
          <Textarea
            control={control}
            name="message"
            placeholder="Optional"
            className="
                 min-h-[120px]
                 rounded-lg
                 bg-transparent
                 border border-white/25
                 text-white
                 placeholder:text-white/40
                 p-4
                 resize-none
                 focus-visible:ring-0 focus:border-[#1EBFA1]
               "
          />
        </div>
      </div>

      {/* CTA */}
      <Button
        size="xl"
        variant="outline"
        arrow
        isLoading={isSubmitting}
        type="submit"
        className="hover:bg-white bg-primary border-primary text-white hover:text-primary"
      >
        {form?.forms?.[0]?.buttonText || "Reserve My Workflow Lab"}
      </Button>
    </form>
  );
};

export default CommunityBannerForm;

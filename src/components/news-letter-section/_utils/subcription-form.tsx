"use client";
import React from "react";
import { Input } from "../../ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../../ui/button";

import { useSubscriptionFormSchemaHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  subscriptionFormSchema,
  type SubscriptionFormSchema,
} from "@/utils/validation.schema";

import { useCaptchaToken } from "@/lib/recaptcha";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  department: null,
  resume: "",
};

const SubscriptionForm = () => {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<SubscriptionFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const { mutateAsync } = useSubscriptionFormSchemaHook();
  const { getToken, isReady } = useCaptchaToken();

  const handleFormSubmit: SubmitHandler<SubscriptionFormSchema> =
    React.useCallback(
      async (formdata) => {
        if (!isReady) {
          notify({ message: "Captcha is loading. Please try again." });
          return;
        }

        let captchaToken: string;
        try {
          captchaToken = await getToken("newslettersubscriptions");
        } catch {
          notify({ message: "Captcha verification failed. Please try again." });
          return;
        }
        const data2 = { ...formdata, recaptchaToken: captchaToken };
        try {
          const response = await mutateAsync(data2);
          notify(response);
          reset({ ...defaultValues });
        } catch (error: unknown) {
          const errorMessage =
            (error as ErrorType)?.error?.message || "An error occurred";
          notify({ message: errorMessage });
          errorSet(error, setError);
        }
      },
      [mutateAsync, reset],
    );

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8 max-w-md"
    >
      <div className="grid gap-y-5 ">
        {/* Name + Email */}
        <div className="grid grid-cols-1  gap-4 ">
          <Input
            control={control}
            placeholder="Enter Your Email"
            required
            name="email"
            className="bg-transparent border-b border-b-white border-b-2"
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
            subscribe
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SubscriptionForm;

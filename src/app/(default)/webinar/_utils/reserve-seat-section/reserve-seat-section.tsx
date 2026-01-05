"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWebinarReserveMySpotHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import {
  type WebinarReserveFormSchema,
  webinarReserveFormSchema,
} from "@/utils/validation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

const ReserveSeatSection = ({
  form,
  essential,
}: {
  form: WebinarReserveFormType;
  essential?: { id: string | number; [key: string]: unknown };
}) => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<WebinarReserveFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(webinarReserveFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const { mutateAsync } = useWebinarReserveMySpotHook();
  const insight = {
    connect: [
      {
        id: essential?.id,
        documentId: essential?.documentId,
        isTemporary: true,
      },
    ],
  };

  const handleFormSubmit: SubmitHandler<WebinarReserveFormSchema> =
    React.useCallback(
      async (formdata) => {
        const data = {
          ...formdata,
          insight,
        };
        try {
          const response = await mutateAsync(data);
          notify(response);
          reset({ ...defaultValues });
        } catch (error) {
          errorSet(error, setError);
        }
      },
      [mutateAsync, reset]
    );

  return (
    <section className="container-md">
      <div className=" mx-auto max-w-6xl py-5">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-2xl md:text-[40px] leading-snug md:leading-12 font-semibold text-[#313941] mb-4 md:mb-6">
              {form?.title}
            </h2>

            <p className="text-custom-blue-1 text-[16px] md:text-[18px] leading-6 md:leading-6.25 font-normal">
              {form?.description}
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-100 rounded-3xl lg:p-5 md:p-8">
            <div className="bg-white rounded-4xl">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-6 md:space-y-8"
                noValidate
              >
                <div className="grid rounded-4xl shadow-2xl p-6 md:p-10 gap-y-4">
                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-4 md:mb-5">
                    {form?.title || "Reserve My Spot"}aaaaaaaaaaaa
                  </h3>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      control={control}
                      required
                      name="fullName"
                      label={form?.nameLabel}
                      className="border-2 p-2 rounded-md text-foreground"
                    />
                    <Input
                      control={control}
                      name="email"
                      required
                      label={form?.emailLabel}
                      className="border-2 p-2 rounded-md text-foreground"
                    />
                  </div>

                  {/* Organization + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      control={control}
                      name="organization"
                      label={form?.companyLabel}
                      className="border-2 p-2 rounded-md text-foreground"
                    />
                    <Input
                      control={control}
                      name="phone"
                      label={form?.phoneLabel}
                      className="border-2 p-2 rounded-md text-foreground"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2 md:pt-4 flex justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="
                    px-6 py-4 md:px-10 md:py-6
                    rounded-full 
                    border border-secondary 
                    text-white bg-secondary 
                    hover:bg-white hover:text-secondary hover:border-secondary
                    transition
                  "
                      arrow
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Reserve your Seat
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSeatSection;

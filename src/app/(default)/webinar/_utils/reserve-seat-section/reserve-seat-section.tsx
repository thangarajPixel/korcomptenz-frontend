"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWebinarReserveMySpotHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { WebinarReserveFormSchema } from "@/utils/validation.schema";
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
    resolver: zodResolver(WebinarReserveFormSchema),
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
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl md:text-[40px] leading-12 font-semibold text-[#313941]  mb-6">
              {form?.title}
            </h2>
            <p className="text-custom-blue-1 text-[18px] leading-6.25 font-normal">
              {form?.description}
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-100 rounded-3xl p-6 md:p-8">
            <div className="bg-white">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="space-y-8"
              >
                <div className="grid rounded-4xl shadow-2xl p-10 gap-y-2 ">
                  {/* Name + Email */}
                  <h3 className="text-5xl font-semibold text-center text-foreground mb-5">
                    {form?.title || "Reserve My Spot"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Input
                      control={control}
                      required
                      name="name"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Input
                      control={control}
                      name="company"
                      required
                      label={form?.companyLabel}
                      className="border-2 p-2 rounded-md text-foreground"
                    />
                    <Input
                      control={control}
                      name="phone"
                      required
                      label={form?.phoneLabel}
                      className="border-2 p-2 rounded-md text-foreground"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-4 flex justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-10 py-8 rounded-full border border-secondary  text-white bg-secondary hover:bg-white hover:text-secondary "
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

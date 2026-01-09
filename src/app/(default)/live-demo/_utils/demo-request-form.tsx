"use client";
import React from "react";

import { useForm, type SubmitHandler } from "react-hook-form";

import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { DemoRequestFormSchema } from "@/utils/validation.schema";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { useReserveMySpotHook } from "@/services";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
};

const DemoRequestForm = ({
  form,
  item,
}: {
  form: DemoRequestFormType;
  item?: GlobalFormItemType;
}) => {
  const {
    control,
    handleSubmit,
    setError,

    reset,
    formState: { isSubmitting },
  } = useForm<DemoRequestFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(DemoRequestFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  const { mutateAsync } = useReserveMySpotHook();
  const demoFrom = {
    connect: [
      {
        id: item?.id,
        documentId: item?.documentId,
        isTemporary: true,
      },
    ],
  };

  const handleFormSubmit: SubmitHandler<DemoRequestFormSchema> =
    React.useCallback(
      async (formdata) => {
        const data = {
          ...formdata,
          demoFrom,
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
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8 "
      id="form"
      noValidate
    >
      <div className="grid rounded-4xl shadow-2xl p-10 gap-y-2 w-full md:w-3/4">
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
            className="border-2 p-2  border-black rounded-md text-foreground"
          />
          <Input
            control={control}
            name="email"
            required
            label={form?.emailLabel}
            className="border-2 p-2  border-black rounded-md text-foreground"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Input
            control={control}
            name="company"
            required
            label={form?.companyLabel}
            className="border-2 p-2 rounded-md  border-black text-foreground"
          />
          <Input
            control={control}
            name="phone"
            required
            label={form?.phoneLabel}
            className="border-2 p-2 rounded-md  border-black text-foreground"
          />
        </div>

        {/* Submit button */}
        <div className="pt-4 flex justify-center">
          <Button
            size={"lg"}
            variant={"secondary"}
            className="rounded-2xl border-2 border-secondary hover:border-bg-secondary hover:bg-white hover:text-secondary"
            arrow
            isLoading={isSubmitting}
            type="submit"
          >
            {form?.buttonText}
          </Button>
        </div>

        {form?.list?.map((item, index) => (
          <div key={index} className="flex">
            <div className="mt-1">
              {" "}
              <KorcomptenzImage
                src="/assets/check 1.png"
                width={20}
                height={20}
              />
            </div>

            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default DemoRequestForm;

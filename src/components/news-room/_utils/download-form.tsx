"use client";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNewsRoomHook } from "@/services";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsRoomFormSchema,
  type NewsRoomFormSchema,
} from "@/utils/validation.schema";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

const defaultValues = {
  name: "",
  email: "",
};

const DownloadForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<NewsRoomFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(newsRoomFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  });
  const { mutateAsync } = useNewsRoomHook();
  const newRoom = {
    connect: [
      {
        id: "33",
        documentId: "it1f4mi9drcbpt4si7d1tqab",
        isTemporary: true,
      },
    ],
  };

  const handleFormSubmit: SubmitHandler<NewsRoomFormSchema> = React.useCallback(
    async (formdata) => {
      const data = {
        ...formdata,
        newRoom,
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
      id="contact-us-form"
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-8"
    >
      <div className="grid gap-y-2 mt-5">
        <h2 className=" text-foreground text-center font-semibold mb-2 text-5xl">
          Download Form
        </h2>
        <div className="grid grid-cols-1  ">
          <Input
            control={control}
            name={"name"}
            placeholder="Full name"
            className="border-2 p-2 rounded-md text-foreground"
          />
        </div>
        <div className="grid gap-y-8 mt-5">
          <Input
            control={control}
            name="email"
            placeholder="Email"
            className="border-2 p-2 rounded-md text-foreground"
          />
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <Button
            variant="outline"
            className="bg-secondary text-white rounded-2xl p-5 hover:bg-secondary hover:text-white"
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

export default DownloadForm;

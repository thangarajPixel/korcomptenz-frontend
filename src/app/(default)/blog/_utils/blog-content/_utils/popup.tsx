"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { blogFormSchema, type BlogFormSchema } from "@/utils/validation.schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { errorSet, notify } from "@/utils/helper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBlogFormHook } from "@/services";
import { Input } from "@/components/ui/input";

const defaultValues = {
  name: "",
  email: "",
  Organization: "",
};

export function BlogFormPopup({ data }: { data: InsightBlog }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting },
  } = useForm<BlogFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      ...defaultValues,
      blogId: String(data?.insight?.documentId),
    },
  });

  const { mutateAsync } = useBlogFormHook();

  const handleFormSubmit: SubmitHandler<BlogFormSchema> = React.useCallback(
    async (formdata) => {
      const data = {
        ...formdata,
        // insight,
      };
      try {
        const response = await mutateAsync(data);
        notify(response);
        window.open(`/blog-asset/${response?.attachment?.name}`, "_blank");

        reset({ ...defaultValues });
      } catch (error) {
        errorSet(error, setError);
      }
    },
    [mutateAsync, reset],
  );
  return (
    <>
      {/* Trigger Button */}

      <Button
        variant="ghost"
        arrow
        onClick={handleOpen}
        className="mb-8 ml-8 text-primary hover:text-primary justify-start hover:bg-transparent p-[-2px]"
      >
        View Forrester details
      </Button>

      {/* Controlled Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onEscapeKeyDown={handleClose}
          onPointerDownOutside={handleClose}
          className="
    bg-white
    p-0
    rounded-2xl
    shadow-2xl
    max-w-[520px]
    w-[90%]
    md:w-full
    h-auto
  "
        >
          <div className="bg-white rounded-4xl">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-6 md:space-y-8"
              noValidate
            >
              <div className="grid rounded-4xl shadow-2xl p-6 md:p-10 gap-y-4">
                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-4 md:mb-5">
                  Reserve My Spot
                </h3>

                {/* Name + Email */}
                <div className="grid grid-cols-1  gap-4">
                  <Input
                    control={control}
                    required
                    name="name"
                    label="Full Name"
                    className="border-2  border-black p-2 rounded-md text-foreground"
                  />
                </div>

                {/* Organization + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    control={control}
                    name="email"
                    required
                    label="Email"
                    className="border-2 p-2  border-black  rounded-md text-foreground"
                  />
                  <Input
                    control={control}
                    name="organization"
                    label="Organization"
                    className="border-2  border-black p-2 rounded-md text-foreground"
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
        </DialogContent>
      </Dialog>
    </>
  );
}

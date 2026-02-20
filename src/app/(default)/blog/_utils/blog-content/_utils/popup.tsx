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
import { XIcon } from "lucide-react";

const defaultValues = {
  name: "",
  email: "",
  Organization: "",
};

export function BlogFormPopup({ data }: { data: InsightBlog }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const blogId = React.useMemo(
    () => String(data?.insight?.documentId),
    [data?.insight?.documentId],
  );

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
      blogId,
    },
  });

  const { mutateAsync } = useBlogFormHook();

  const handleFormSubmit: SubmitHandler<BlogFormSchema> = React.useCallback(
    async (formdata) => {
      const data2 = {
        ...formdata,
        // insight,
      };
      try {
        const response = await mutateAsync(data2);

        notify(response);
        window.open(`/asset/${data?.insight?.asset?.slug}`, "_blank");

        reset({
          ...defaultValues,
          blogId,
        });
        setOpen(false);
      } catch (error) {
        errorSet(error, setError, blogId);
      }
    },
    [mutateAsync, reset],
  );
  return (
    <>
      {/* Trigger Button */}

      <Button
        variant="default"
        size="xl"
        arrow
        onClick={handleOpen}
        className="mt-4"
      >
        {data?.insight?.downloadButton}
      </Button>

      {/* Controlled Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onEscapeKeyDown={handleClose}
          showCloseButton={false}
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
          <div className="bg-white rounded-4xl relative">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-6 md:space-y-8"
              noValidate
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="
        absolute top-4 right-4
        bg-primary text-white
        rounded-full
        w-8 h-8
        flex items-center justify-center
        hover:opacity-90
        transition
      "
                aria-label="Close"
              >
                <XIcon className="w-4 h-4" />
              </button>

              <div className="grid rounded-4xl shadow-2xl p-6 md:p-10 gap-y-4">
                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-semibold text-center text-foreground mb-4 md:mb-5">
                  {data?.insight?.form?.title}
                </h3>

                {/* Name */}
                <Input
                  control={control}
                  required
                  name="name"
                  label={data?.insight?.form?.forms?.[0]?.name || "Full Name"}
                  className="border-2 border-black p-2 rounded-md"
                />

                {/* Email + Organization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    control={control}
                    name="email"
                    required
                    label={data?.insight?.form?.forms?.[0]?.email || "Email"}
                    className="border-2 border-black p-2 rounded-md"
                  />
                  <Input
                    control={control}
                    name="organization"
                    required
                    label={
                      data?.insight?.form?.forms?.[0]?.organization ||
                      "Organization"
                    }
                    className="border-2 border-black p-2 rounded-md"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 flex justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    arrow
                    isLoading={isSubmitting}
                    type="submit"
                    className="
            px-6 py-4 md:px-10 md:py-6
            rounded-full
            border border-secondary
            text-white bg-secondary
            hover:bg-white hover:text-secondary
            transition
          "
                  >
                    {data?.insight?.form?.forms?.[0]?.download || "Download"}
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

"use client";
import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DialogDemo({ data }: { data: PeopleShowcaseCardType }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="ghost"
        arrow
        onClick={handleOpen}
        className="mb-8 ml-8 text-primary hover:text-primary justify-start hover:bg-transparent p-[-2px]"
      >
        {data?.buttonText}
      </Button>

      {/* Controlled Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onEscapeKeyDown={handleClose}
          onPointerDownOutside={handleClose}
          className="
            w-full
            max-w-[1100px]
            bg-white
            p-0
            rounded-2xl
            shadow-2xl
            flex
            flex-col md:flex-row
            items-stretch
            justify-start
            fixed
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            border border-gray-200
            overflow-hidden
          "
        >
          {/* Close Button (floating, top-right) */}
          {data?.socialPlatform?.map((platform) => (
            <button className="absolute lg:top-4 lg:right-18  w-9 h-9 flex items-center justify-center ">
              <KorcomptenzImage src={platform?.icon} width={32} height={32} />
            </button>
          ))}

          {/* Left Image */}
          <div className="relative w-full md:w-auto p-2 flex-shrink-0">
            {data?.image ? (
              <KorcomptenzImage
                src={data.image}
                width={400}
                height={480}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="p-6 md:p-10 text-left h-full w-full">
            <DialogHeader>
              <DialogTitle className="text-primary font-semibold text-2xl md:text-[22px] leading-tight mb-4">
                {data?.title}
                <p className="text-foreground text-md">{data?.position}</p>
              </DialogTitle>
              <DialogDescription asChild>
                <div className="text-[#333] text-base leading-relaxed space-y-4">
                  <DangerousHtml html={data?.description} />
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

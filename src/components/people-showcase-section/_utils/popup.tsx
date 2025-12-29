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
import Link from "next/link";

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
            h-11/12 md:h-auto
           
          "
        >
          {/* Close Button (floating, top-right) */}
          {data?.socialPlatform?.map((platform) => (
            <Link href={platform?.link}>
              <button className="absolute lg:top-4 lg:right-18  w-9 h-9 flex items-center cursor-pointer  justify-center ">
                <KorcomptenzImage src={platform?.icon} width={32} height={32} />
              </button>
            </Link>
          ))}

          {/* Left Image */}
          <div className="relative h-1/4 md:h-auto w-full md:w-1/4 p-2 flex-shrink-0">
            {data?.image && (
              <KorcomptenzImage
                src={data.image}
                width={1000}
                height={1000}
                className="object-contain md:object-cover  size-full"
              />
            )}
          </div>

          {/* Right Content */}
          <div className="p-6 md:p-10 text-left h-full w-full overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-primary font-semibold text-2xl md:text-[22px] leading-tight mb-4">
                {data?.title}
                <p className="text-foreground text-md">{data?.position}</p>
              </DialogTitle>
              <DialogDescription asChild className="">
                <div>
                  <DangerousHtml
                    html={data?.description}
                    className="text-black text-base leading-relaxed space-y-4"
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

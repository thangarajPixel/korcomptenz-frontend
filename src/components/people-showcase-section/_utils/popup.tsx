"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo({ data }: { data: PeopleShowcaseCardType }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          arrow
          className="text-primary hover:text-primary justify-start hover:bg-transparent p-0"
        >
          {data?.buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="
          w-full 
          max-w-[80vw]
          h-[70vh]
          bg-white
          overflow-hidden 
          p-0 
          rounded-none 
          md:rounded-2xl
          shadow-xl
          flex
          items-stretch
          justify-center
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] w-full h-full">
          {/* Left Image */}
          <div className="relative bg-gray-100 h-full p-6">
            {data?.image ? (
              <KorcomptenzImage
                src={data.image}
                width={350}
                height={400}
                className="object-cover h-full w-full"
              />
            ) : (
              <div className="h-full w-full bg-muted flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="overflow-y-auto h-full p-6 md:p-10 text-left">
            <DialogHeader>
              <DialogTitle className="text-primary font-semibold text-2xl md:text-3xl mb-3">
                {data?.title}
              </DialogTitle>
              <DialogDescription>
                <DangerousHtml
                  html={data?.description}
                  className="text-foreground text-base md:text-lg leading-relaxed"
                />
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

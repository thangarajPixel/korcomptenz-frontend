"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

export default function ScrollTopButton() {
  return (
    <div className="fixed bottom-32 right-4">
      <Button
        variant="outline"
        size="icon"
        className="rounded-none border-none hover:opacity-50 opacity-100 hover:bg-primary hover:text-white bg-primary text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}

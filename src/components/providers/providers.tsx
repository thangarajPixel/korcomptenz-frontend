"use client";

import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import { WebVitals } from "./web-vitals";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors />
        <WebVitals />
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

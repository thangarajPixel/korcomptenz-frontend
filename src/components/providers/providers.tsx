"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Suspense } from "react";
import { WebVitals } from "./web-vitals";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {RECAPTCHA_KEY ? (
            <Suspense fallback={null}>
              <GoogleReCaptchaProvider
                reCaptchaKey={RECAPTCHA_KEY}
                scriptProps={{
                  async: true,
                  defer: true,
                  appendTo: "head",
                }}
              >
                {children}
              </GoogleReCaptchaProvider>
            </Suspense>
          ) : (
            children
          )}
          <Toaster richColors />
          <WebVitals />
        </ThemeProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

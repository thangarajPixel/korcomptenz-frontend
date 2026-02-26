"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Providers({ children }: { children: React.ReactNode }) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? "";

  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {reCaptchaKey ? (
            <GoogleReCaptchaProvider
              reCaptchaKey={reCaptchaKey}
              scriptProps={{
                async: true,
                defer: true,
                appendTo: "head",
              }}
            >
              {children}
            </GoogleReCaptchaProvider>
          ) : (
            children
          )}
          <Toaster richColors />
        </ThemeProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

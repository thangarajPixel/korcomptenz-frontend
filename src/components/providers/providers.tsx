"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { memo, Suspense } from "react";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

const ToasterComponent = memo(() => <Toaster richColors />);
ToasterComponent.displayName = "ToasterComponent";

function ProvidersContent({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <GoogleReCaptchaProvider
            reCaptchaKey={RECAPTCHA_KEY || ""}
            scriptProps={{
              async: true,
              defer: true,
              appendTo: "head",
            }}
          >
            {children}
            <Suspense fallback={null}>
              <ToasterComponent />
            </Suspense>
          </GoogleReCaptchaProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

export default memo(ProvidersContent);

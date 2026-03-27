"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

// Lazy load reCAPTCHA provider with no SSR to defer initialization
const GoogleReCaptchaProvider = dynamic(
  () =>
    import("react-google-recaptcha-v3").then(
      (mod) => mod.GoogleReCaptchaProvider,
    ),
  { ssr: false, loading: () => null },
);

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Single effect to set mounted state - reduces cascading renders
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <Suspense fallback={null}>
            {mounted && RECAPTCHA_KEY ? (
              <GoogleReCaptchaProvider
                reCaptchaKey={RECAPTCHA_KEY}
                scriptProps={{
                  async: true,
                  defer: true,
                  appendTo: "head",
                }}
              >
                {children}
                <Toaster richColors position="top-right" />
              </GoogleReCaptchaProvider>
            ) : (
              <>
                {children}
                <Toaster richColors position="top-right" />
              </>
            )}
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

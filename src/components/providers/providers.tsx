"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

// Lazy load reCAPTCHA provider with no SSR to defer initialization until after hydration
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
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Set mounted state immediately after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Defer reCAPTCHA initialization to 5+ seconds for better LCP/TBT
  useEffect(() => {
    if (!mounted || !RECAPTCHA_KEY) return;

    // Use longer timeout to ensure reCAPTCHA doesn't block critical rendering
    const timer = setTimeout(() => {
      setRecaptchaReady(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [mounted]);

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
            {mounted && recaptchaReady && RECAPTCHA_KEY ? (
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

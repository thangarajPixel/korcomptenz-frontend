"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState, useCallback } from "react";

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
  const [themeReady, setThemeReady] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  // Defer theme provider initialization to reduce TBT
  useEffect(() => {
    setMounted(true);
    // Use requestIdleCallback for non-critical theme setup
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(() => setThemeReady(true), { timeout: 1500 });
    } else {
      setTimeout(() => setThemeReady(true), 0);
    }
  }, []);

  // Defer reCAPTCHA initialization even further
  useEffect(() => {
    if (themeReady && RECAPTCHA_KEY) {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(() => setRecaptchaReady(true), { timeout: 3000 });
      } else {
        setTimeout(() => setRecaptchaReady(true), 500);
      }
    }
  }, [themeReady]);

  const renderThemeProvider = useCallback(
    (content: React.ReactNode) => {
      if (!themeReady) return content;
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          {content}
        </ThemeProvider>
      );
    },
    [themeReady],
  );

  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        {mounted ? (
          renderThemeProvider(
            <Suspense fallback={null}>
              {RECAPTCHA_KEY && recaptchaReady ? (
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
            </Suspense>,
          )
        ) : (
          <>
            {children}
            <Toaster richColors position="top-right" />
          </>
        )}
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

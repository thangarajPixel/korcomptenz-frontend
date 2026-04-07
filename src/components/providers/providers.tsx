"use client";

import { ThemeProvider } from "./_utils/theme-provider";
import { Toaster } from "../ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/utils";
import { Suspense, lazy, useState, useEffect } from "react";
import { WebVitals } from "./web-vitals";

const GoogleReCaptchaProvider = lazy(() =>
  import("react-google-recaptcha-v3").then((m) => ({
    default: m.GoogleReCaptchaProvider,
  })),
);

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

function RecaptchaWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay reCAPTCHA load until after first user interaction
    const onInteraction = () => setMounted(true);
    window.addEventListener("pointerdown", onInteraction, { once: true });
    window.addEventListener("keydown", onInteraction, { once: true });
    window.addEventListener("scroll", onInteraction, { once: true, passive: true });
    // Fallback: load after 5s regardless
    const timer = setTimeout(() => setMounted(true), 5000);
    return () => {
      window.removeEventListener("pointerdown", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("scroll", onInteraction);
      clearTimeout(timer);
    };
  }, []);

  if (!RECAPTCHA_KEY || !mounted) return <>{children}</>;

  return (
    <Suspense fallback={<>{children}</>}>
      <GoogleReCaptchaProvider
        reCaptchaKey={RECAPTCHA_KEY}
        scriptProps={{ async: true, defer: true, appendTo: "head" }}
      >
        {children}
      </GoogleReCaptchaProvider>
    </Suspense>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <RecaptchaWrapper>{children}</RecaptchaWrapper>
          <Toaster richColors />
          <WebVitals />
        </ThemeProvider>
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

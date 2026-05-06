"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Suspense, type ReactNode } from "react";

const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

/**
 * Wrap only sections/pages that contain forms with this provider.
 * Keeping it out of the root layout avoids loading the reCAPTCHA script
 * on every page, which significantly improves mobile performance.
 */
export function RecaptchaProvider({ children }: { children: ReactNode }) {
  if (!RECAPTCHA_KEY) return <>{children}</>;

  return (
    <Suspense fallback={null}>
      <GoogleReCaptchaProvider
        reCaptchaKey={RECAPTCHA_KEY}
        scriptProps={{
          async: true,
          defer: true,
          appendTo: "body",
        }}
      >
        {children}
      </GoogleReCaptchaProvider>
    </Suspense>
  );
}

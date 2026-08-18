"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { createContext, useId, useRef, type ReactNode } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileWidgetContextValue = {
  widgetRef: { current: TurnstileInstance | undefined };
  containerId: string;
};

export const TurnstileWidgetContext =
  createContext<TurnstileWidgetContextValue | null>(null);

/**
 * Wrap only sections/pages that contain forms with this provider.
 * Keeping it out of the root layout avoids loading the Turnstile script
 * on every page, which significantly improves mobile performance.
 *
 * Multiple providers can be mounted on the same page (e.g. several form
 * sections), so each gets a unique container id via useId() — Turnstile's
 * default container id ("cf-turnstile") is not unique, and getToken()
 * targets a specific widget by id to set the per-submission action.
 */
export function TurnstileProvider({ children }: { children: ReactNode }) {
  const widgetRef = useRef<TurnstileInstance | undefined>(undefined);
  const containerId = `cf-turnstile-${useId()}`;

  if (!TURNSTILE_SITE_KEY) return <>{children}</>;

  return (
    <TurnstileWidgetContext.Provider value={{ widgetRef, containerId }}>
      {children}
      <Turnstile
        ref={widgetRef}
        id={containerId}
        siteKey={TURNSTILE_SITE_KEY}
        options={{ size: "invisible", execution: "execute" }}
        scriptOptions={{ async: true, defer: true, appendTo: "body" }}
      />
    </TurnstileWidgetContext.Provider>
  );
}

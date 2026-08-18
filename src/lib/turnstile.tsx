"use client";

import { useCallback, useContext } from "react";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import { TurnstileWidgetContext } from "@/components/providers/turnstile-provider";

const TOKEN_TIMEOUT_MS = 8000;

const executeWidget = async (
  widget: TurnstileInstance,
  containerId: string,
  action?: string,
): Promise<string> => {
  try {
    // The wrapped widget.execute() takes no params, so a per-submission
    // action (required by the backend's per-route action check) can only
    // be set by calling Cloudflare's global execute() with the widget's
    // own container id and an explicit action override.
    const turnstile = typeof window !== "undefined" ? window.turnstile : undefined;
    if (action && turnstile) {
      turnstile.execute(
        containerId,
        { action } as Parameters<typeof turnstile.execute>[1],
      );
    } else {
      widget.execute();
    }
    return await widget.getResponsePromise(TOKEN_TIMEOUT_MS);
  } catch {
    throw new Error("Captcha verification failed. Please try again.");
  }
};

export const useCaptchaToken = () => {
  const ctx = useContext(TurnstileWidgetContext);
  const widgetRef = ctx?.widgetRef;

  const getToken = useCallback(
    (action?: string): Promise<string> => {
      if (widgetRef?.current && ctx) {
        return executeWidget(widgetRef.current, ctx.containerId, action);
      }

      // Not ready yet — wait up to 8 seconds for the script to load
      return new Promise((resolve, reject) => {
        const start = Date.now();
        const interval = setInterval(() => {
          if (widgetRef?.current && ctx) {
            clearInterval(interval);
            executeWidget(widgetRef.current, ctx.containerId, action)
              .then(resolve)
              .catch(reject);
          } else if (Date.now() - start > TOKEN_TIMEOUT_MS) {
            clearInterval(interval);
            reject(
              new Error("Turnstile failed to load. Please refresh and try again."),
            );
          }
        }, 100);
      });
    },
    [widgetRef, ctx],
  );

  return {
    getToken,
    isReady: !!widgetRef?.current,
  };
};

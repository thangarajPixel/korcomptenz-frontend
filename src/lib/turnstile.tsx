"use client";

import { useCallback, useContext } from "react";
import { TurnstileWidgetContext } from "@/components/providers/turnstile-provider";

const TOKEN_TIMEOUT_MS = 8000;
const POLL_INTERVAL_MS = 100;

// Polls Cloudflare's own getResponse(container) directly rather than the
// wrapped widget.getResponsePromise(): that wrapper method only starts
// polling once its internal "executing" ref is set, and that ref is set
// exclusively by the wrapper's own no-args execute() — which we bypass
// below to pass a per-submission action. Polling getResponse() directly
// works regardless of which execute() path triggered the challenge.
const pollForResponse = (
  turnstile: NonNullable<Window["turnstile"]>,
  target: string,
  timeoutMs: number,
): Promise<string> =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    const poll = () => {
      const token = turnstile.getResponse(target);
      if (token) {
        resolve(token);
        return;
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error("Timeout"));
        return;
      }
      setTimeout(poll, POLL_INTERVAL_MS);
    };
    poll();
  });

const executeWidget = async (
  target: string,
  action?: string,
): Promise<string> => {
  try {
    const turnstile = typeof window !== "undefined" ? window.turnstile : undefined;
    if (!turnstile) {
      throw new Error("Turnstile script not loaded");
    }
    // The wrapped widget.execute() takes no params, so a per-submission
    // action (required by the backend's per-route action check) can only
    // be set by calling Cloudflare's global execute() directly. It must be
    // targeted by Cloudflare's own widget id (not the container's DOM id —
    // Cloudflare's real API doesn't look widgets up that way).
    turnstile.execute(
      target,
      action ? ({ action } as Parameters<typeof turnstile.execute>[1]) : undefined,
    );
    return await pollForResponse(turnstile, target, TOKEN_TIMEOUT_MS);
  } catch {
    throw new Error("Captcha verification failed. Please try again.");
  }
};

export const useCaptchaToken = () => {
  const ctx = useContext(TurnstileWidgetContext);
  const widgetRef = ctx?.widgetRef;

  const getToken = useCallback(
    (action?: string): Promise<string> => {
      if (widgetRef?.current && ctx?.widgetIdRef.current) {
        return executeWidget(ctx.widgetIdRef.current, action);
      }

      // Not ready yet — wait up to 8 seconds for the widget id to be assigned
      return new Promise((resolve, reject) => {
        const start = Date.now();
        const interval = setInterval(() => {
          if (widgetRef?.current && ctx?.widgetIdRef.current) {
            clearInterval(interval);
            executeWidget(ctx.widgetIdRef.current, action)
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

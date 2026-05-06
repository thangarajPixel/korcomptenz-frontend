"use client";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRef } from "react";

export const useCaptchaToken = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  // Keep a ref so the polling closure always sees the latest value
  const executeRef = useRef(executeRecaptcha);
  executeRef.current = executeRecaptcha;

  const getToken = async (action: string): Promise<string> => {
    // If already ready, execute immediately
    if (executeRef.current) {
      return executeRef.current(action);
    }

    // Not ready yet — wait up to 8 seconds for the script to load
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const interval = setInterval(() => {
        if (executeRef.current) {
          clearInterval(interval);
          executeRef.current(action).then(resolve).catch(reject);
        } else if (Date.now() - start > 8000) {
          clearInterval(interval);
          reject(new Error("reCAPTCHA failed to load. Please refresh and try again."));
        }
      }, 100);
    });
  };

  return {
    getToken,
    isReady: !!executeRecaptcha,
  };
};

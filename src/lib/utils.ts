import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Ultra-aggressive LCP & Speed Index optimization - target <1.2s LCP, <1.3s Speed Index
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      gcTime: 1000 * 60 * 1, // 1 minute - ultra-aggressive
      staleTime: 1000 * 10, // 10 seconds - force fresh data immediately
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      networkMode: "always",
      structuralSharing: false,
      throwOnError: false,
    },
    mutations: {
      retry: 0,
      networkMode: "always",
      throwOnError: false,
    },
  },
});

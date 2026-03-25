import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Aggressive TBT & LCP optimization with request deduplication
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // Disable retries to reduce TBT
      gcTime: 1000 * 60 * 120, // 2 hours
      staleTime: 1000 * 60 * 15, // 15 minutes - longer stale time
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      networkMode: "always",
      structuralSharing: true,
      throwOnError: false, // Prevent error boundaries from blocking
    },
    mutations: {
      retry: 0, // Disable retries
      networkMode: "always",
      throwOnError: false,
    },
  },
});

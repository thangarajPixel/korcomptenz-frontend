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
      retry: 0,
      gcTime: 1000 * 60 * 120, // 2 hours
      staleTime: 1000 * 60 * 15, // 15 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      networkMode: "always",
      structuralSharing: false, // Disable to reduce TBT during updates
      throwOnError: false,
    },
    mutations: {
      retry: 0,
      networkMode: "always",
      throwOnError: false,
    },
  },
});

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
      retry: 1,
      gcTime: 1000 * 60 * 120, // 2 hours
      staleTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      networkMode: "always", // Prevent unnecessary refetches
      structuralSharing: true, // Reduce memory overhead
    },
    mutations: {
      retry: 1,
      networkMode: "always",
    },
  },
});

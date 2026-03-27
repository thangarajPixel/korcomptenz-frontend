import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Optimized QueryClient for LCP, TBT, and SI - balanced caching with performance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      gcTime: 1000 * 60 * 5, // 5 minutes - better cache retention
      staleTime: 1000 * 60 * 2, // 2 minutes - reasonable freshness
      refetchOnWindowFocus: true, // Re-validate on tab switch
      refetchOnReconnect: true, // Re-validate on reconnect
      refetchOnMount: false, // Don't refetch on mount if cached
      networkMode: "always",
      structuralSharing: true, // Enable optimization for better performance
      throwOnError: false,
    },
    mutations: {
      retry: 0,
      networkMode: "always",
      throwOnError: false,
    },
  },
});

import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Optimized QueryClient - aggressive caching and minimal refetches for performance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      gcTime: 1000 * 60 * 10, // 10 minutes - longer cache for better performance
      staleTime: 1000 * 60 * 5, // 5 minutes - keep data fresh without constant refetches
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      networkMode: "always",
      structuralSharing: true,
      throwOnError: false,
    },
    mutations: {
      retry: 0,
      networkMode: "always",
      throwOnError: false,
    },
  },
});

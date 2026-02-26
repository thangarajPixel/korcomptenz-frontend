import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      gcTime: 1000 * 60 * 120, // 2 hours cache time
      staleTime: 1000 * 60 * 5, // 5 minutes before data is considered stale
      refetchOnWindowFocus: false,
      refetchOnReconnect: "stale", // Only refetch if data is stale
      refetchOnMount: "stale", // Only refetch if data is stale
    },
    mutations: {
      retry: 1,
    },
  },
});

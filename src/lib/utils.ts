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
      refetchOnReconnect: false, // Don't refetch on reconnect
      refetchOnMount: false, // Don't refetch on mount if data exists
    },
    mutations: {
      retry: 1,
    },
  },
});

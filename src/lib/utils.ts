import { QueryClient } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      gcTime: 1000 * 60 * 5, // 5 minutes (reduced from 10 for mobile)
      staleTime: 1000 * 60 * 1, // 1 minute (reduced from 2 for fresher data)
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      // Reduce network requests on mobile
      networkMode: "always",
    },
    mutations: {
      retry: 1,
      networkMode: "always",
    },
  },
});

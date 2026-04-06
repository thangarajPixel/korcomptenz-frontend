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
      gcTime: 1000 * 60 * 10, // 10 minutes (reduced from 1 hour)
      staleTime: 1000 * 60 * 2, // 2 minutes (reduced from 5 minutes)
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

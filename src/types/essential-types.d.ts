import type { UseQueryOptions } from "@tanstack/react-query";

type OptionsType<T> = Omit<UseQueryOptions<T>, 'queryKey'>;
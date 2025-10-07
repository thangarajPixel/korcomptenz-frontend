import type { OptionsType } from "@/types/essential-types";
import { useQuery } from "@tanstack/react-query";
import * as PAGE from "./page";

export const useCaseStudyHook = ({
  options,
}: {
  options?: OptionsType<PagesListType>;
}) => {
  return useQuery({
    queryKey: [PAGE.CASE_STUDY],
    queryFn: () => PAGE.getCaseStudiesService(),
    ...options,
  });
};

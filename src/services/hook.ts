import type { OptionsType } from "@/types/essential-types";
import { useQuery } from "@tanstack/react-query";
import * as PAGE from "./page";

export const useCaseStudyHook = ({
  options,
}: {
  options?: OptionsType<CaseStudiesType>;
}) => {
  return useQuery({
    queryKey: [PAGE.CASE_STUDY],
    queryFn: () => PAGE.getCaseStudiesService(),
    ...options,
  });
};

export const useFilterdataHook = ({
  options,
}: {
  options?: OptionsType<FilterDataType>;
}) => {
  return useQuery({
    queryKey: [PAGE.FILTER_CASE_STUDY],
    queryFn: () => PAGE.getFilterCaseStudies(),
    ...options,
  });
};

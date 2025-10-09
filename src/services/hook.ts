import type { OptionsType } from "@/types/essential-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as PAGE from "./page";
import type {
  CaseStudiesType,
  FilterDataType,
} from "@/types/global-page-types";

// export const useCaseStudyHook = ({
//   options,
// }: {
//   options?: OptionsType<CaseStudiesType>;
// }) => {
//   return useQuery({
//     queryKey: [PAGE.CASE_STUDY],
//     queryFn: () => PAGE.getCaseStudiesService(),
//     ...options,
//   });
// };

export const useFilterCaseStudyHook = ({
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
export const useCaseStudyLeadHook = () => {
  return useMutation({
    mutationKey: [PAGE.CASE_STUDY_LEAD],
    mutationFn: PAGE.createCaseStudyLead,
  });
};

export const useCaseStudyListHook = ({
  options,
}: {
  options?: OptionsType<CaseStudiesType>;
}) => {
  return useQuery({
    queryKey: [PAGE.CASE_STUDY],
    queryFn: () => PAGE.getCaseStudyList(),
    ...options,
  });
};

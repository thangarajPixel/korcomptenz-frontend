import type { OptionsType } from "@/types/essential-types";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as PAGE from "./page";

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
  params,
}: {
  options?: OptionsType<CaseStudiesType>;
  params: {
    pagination: PaginationType;
    filter: {
      [key: string]: string[];
    };
    search?: string;
    slug?: string;
    sort?: string[];
  };
}) => {
  return useQuery({
    queryKey: [PAGE.CASE_STUDY, params],
    queryFn: () => PAGE.getCaseStudyList({ params }),
    ...options,
  });
};

export const useCaseStudySearchHook = ({
  search,
  options,
}: {
  search?: string;
  options?: OptionsType<(FilterListType & { from?: string })[]>;
}) => {
  return useQuery({
    queryKey: [PAGE.FILTER_CASE_STUDY, search],
    queryFn: () => PAGE.getCaseStudySearchPage({ search }),
    ...options,
  });
};

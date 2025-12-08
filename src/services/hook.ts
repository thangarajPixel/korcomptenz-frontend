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
export const useFreeConsultationLeadHook = () => {
  return useMutation({
    mutationKey: [PAGE.FREE_CONSULTATION_LEAD],
    mutationFn: PAGE.createFreeConsultationLead,
  });
};
export const useCareerNewLetterHook = () => {
  return useMutation({
    mutationKey: [PAGE.CAREER_NEW_LETTER],
    mutationFn: PAGE.createCareerNewLetter,
  });
};
export const useDepartmentListHook = () => {
  return useQuery({
    queryKey: [PAGE.CASE_STUDY],
    queryFn: () => PAGE.getDepartmentList(),
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

export const useBookADemoHook = () => {
  return useMutation({
    mutationKey: [PAGE.BOOK_DEMO],
    mutationFn: PAGE.bookADemo,
  });
};

export const useCaseStudyEssentialHook = () => {
  return useQuery({
    queryKey: [PAGE.CASE_STUDY_ESSENTIAL_LIST],
    queryFn: () => PAGE.getCaseStudyEssentialList(),
  });
};

export const useContactUsLeadHook = () => {
  return useMutation({
    mutationKey: [PAGE.CONTACT_US_LEAD],
    mutationFn: PAGE.createContactUsLead,
  });
};
export const useReserveMySpotHook = () => {
  return useMutation({
    mutationKey: [PAGE.RESERVE_MY_SPOT],
    mutationFn: PAGE.createReserveMySpotLead,
  });
};

export const useFilterInsightHook = ({
  options,
}: {
  options?: OptionsType<InsightsFilterDataType>;
}) => {
  return useQuery({
    queryKey: [PAGE.FILTER_CASE_STUDY],
    queryFn: () => PAGE.getInsights(),
    ...options,
  });
};

export const useInsightsListHook = ({
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
    queryKey: [PAGE.INSIGHT, params],
    queryFn: () => PAGE.getInsightsList({ params }),
    ...options,
  });
};

export const useInsightSearchHook = ({
  search,
  options,
}: {
  search?: string;
  options?: OptionsType<(FilterListType & { from?: string })[]>;
}) => {
  return useQuery({
    queryKey: [PAGE.INSIGHT_SEARCH, search],
    queryFn: () => PAGE.getInsightSearchPage({ search }),
    ...options,
  });
};

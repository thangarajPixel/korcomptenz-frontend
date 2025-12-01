import { getCaseStudiesPage, getCaseStudyList, getCaseStudySearchPage } from '@/services';
import { INITIAL_PAGINATION } from '@/utils/helper';
import React, { cache } from 'react'
import CaseStudies from './case-studies';

export const dynamic = "force-dynamic";
const getCaseStudiesPageCache = cache(getCaseStudiesPage);

const ClientSuccessPage = async ({ slug }: { slug?: string }) => {
  const [data, initialData, search] = await Promise.all([
    getCaseStudiesPageCache(),
    getCaseStudyList({ params: { pagination: INITIAL_PAGINATION, sort: ['createdAt:desc'], slug } }),
    getCaseStudySearchPage({}),
  ]);

  return <CaseStudies data={data} initialData={initialData} search={search} />;
}

export default ClientSuccessPage
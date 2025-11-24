import { getCaseStudiesPage, getCaseStudyList, getCaseStudySearchPage } from '@/services';
import { INITIAL_PAGINATION } from '@/utils/helper';
import React, { cache } from 'react'
import Insights from './insights';


const getCaseStudiesPageCache = cache(getCaseStudiesPage);

const InsightsSuccessPage = async ({ slug }: { slug?: string }) => {
  const [data, initialData, search] = await Promise.all([
    getCaseStudiesPageCache(),
    getCaseStudyList({ params: { pagination: INITIAL_PAGINATION, sort: ['createdAt:desc'], slug } }),
    getCaseStudySearchPage({}),
  ]);

  return <Insights data={data} initialData={initialData} search={search} />;
}

export default InsightsSuccessPage
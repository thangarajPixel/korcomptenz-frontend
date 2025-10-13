import { getCaseStudiesPage, getCaseStudyList } from '@/services';
import { INITIAL_PAGINATION } from '@/utils/helper';
import React, { cache } from 'react'
import CaseStudies from './case-studies';

const getCaseStudiesPageCache = cache(getCaseStudiesPage);

const ClientSuccessPage = async ({ slug }: { slug?: string }) => {
  const [data, initialData] = await Promise.all([
    getCaseStudiesPageCache(),
    getCaseStudyList({ params: { pagination: INITIAL_PAGINATION, slug } }),
  ]);

  return <CaseStudies data={data} initialData={initialData} />;
}

export default ClientSuccessPage
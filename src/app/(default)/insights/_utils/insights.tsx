import InsightsSuccessList from "./insights-success-list";

const Insights = async ({
  data,
  initialData,
  search,
}: {
  data: CaseStudiesPageType;
  initialData: CaseStudiesType;
  search: FilterListType[];
}) => {
  return (
    <div className="flex flex-col gap-16">
      <InsightsSuccessList
        data={data}
        initialData={initialData}
        search={search}
      />
    </div>
  );
};

export default Insights;

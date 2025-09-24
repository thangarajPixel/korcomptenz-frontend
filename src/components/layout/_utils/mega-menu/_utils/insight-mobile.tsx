"use client";

const InsightMobile = ({ data }: { data: LayoutType }) => {
  return (
    <div className="px-0">
      {data?.insightMenu?.categories.map((cat) => (
        <div
          key={cat.id}
          className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
        >
          <span className="text-lg text-custom-gray-4 font-normal">
            {cat.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InsightMobile;

import React from "react";
import { ArrowUp } from "lucide-react";

const StatsSectionCard = ({ list }: { list: StatsCardType }) => {
  return (
    <div className="bg-secondary flex flex-col justify-between  rounded-3xl p-5 space-y-8 max-w-sm w-full text-white">
      <div className="flex flex-col  flex-1 space-y-8">
        <h2 className="text-3xl h-14 font-semibold leading-tight line-clamp-2">
          {list?.title}
        </h2>
        <div className="flex items-start justify-between gap-3 border-b-2 pb-4 border-white/20">
          <ArrowUp className="w-6 h-6 mt-1" strokeWidth={2.5} />
          <div className="text-6xl font-semibold tracking-tight">
            {list?.count}
          </div>
        </div>
      </div>

      <p className="text-white/90 text-md leading-relaxed flex-1">
        {list?.description}
      </p>
    </div>
  );
};

export default StatsSectionCard;

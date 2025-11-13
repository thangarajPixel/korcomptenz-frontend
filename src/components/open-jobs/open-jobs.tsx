import React from "react";

const OpenJobs = ({ data }: { data: OpenJobsType }) => {
  return (
    <div className="container-md">
      <h2 className="text-center font-semibold text-8xl text-foreground ">
        {data.title}
      </h2>
      <iframe src={data.iframeLink} className="w-full h-[700px]"></iframe>
    </div>
  );
};

export default OpenJobs;

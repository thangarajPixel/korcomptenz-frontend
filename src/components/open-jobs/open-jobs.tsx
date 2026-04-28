"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Job = {
  job_id: string;
  job_title: string;
  location: string[];
  employee_type: string;
  department?: string;
  job_updated_timestamp?: string;
};


type JobDetail = Job & {
  group_company?: string;
  department?: string;
  business_unit?: string;
  experience_from?: string;
  experience_to?: string;
  job_created_timestamp?: string;
};



const OpenJobs = ({ data }: { data: OpenJobsType }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);





  // ✅ Fetch job list
  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("http://localhost:4000/api/jobs");
      const result = await res.json();
      setJobs(result?.data || []);
      setLoading(false);
    }

    fetchJobs();
  }, []);

  // ✅ Fetch job detail
  async function openJobDetail(job_id: string) {
    setIsOpen(true);
    setJobDetail(null);
    setDetailLoading(true);

    try {
      const res = await fetch("/api/job-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_id }),
      });

      const result = await res.json();
      setJobDetail(result?.data || result);
    } 
catch (e: unknown) {
  setJobDetail(null);
 return(e);
}
 finally {
      setDetailLoading(false);
    }
  }

  return (
    <section
      id="open-jobs"
      data-debug="career.open-jobs"
      className="container-md"
    >
      <h2 className="text-center font-semibold text-8xl text-foreground">
        {data.title}
      </h2>

      {/* ✅ Job Grid */}
      {loading ? (
        <p className="text-center mt-10">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center mt-10">No jobs found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {jobs.map((job) => (
         <div
  key={job.job_id}
  onClick={() => openJobDetail(job.job_id)}
  className="job-card cursor-pointer rounded-xl border border-gray-200 p-6 hover:shadow-md transition bg-white"
>
  {/* Logo */}
  <a href="/" className="block mb-4">
    <img
      src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/full_logo_b4df11a39a.svg"
      alt="Korcomptenz"
      className="h-10 w-auto"
    />
  </a>

  {/* Header */}
  <div className="job-header mb-2">
    <h3 className="job-title text-lg font-semibold text-gray-900">
      {job.job_title}
    </h3>
  </div>

  {/* Employee type */}
  <p className="regular text-sm text-gray-700 mt-2">
    {job.employee_type}
  </p>

  {/* Posted date */}
  <p className="job-date text-sm text-gray-600 mt-1">
    <strong>Posted:</strong>{" "}
    {job.job_updated_timestamp}
  </p>

  {/* Notice Period (static same as WP) */}
  <p className="job-date text-sm text-gray-600">
    <strong>Notice Period:</strong> 0 – 30 days
  </p>

  {/* Meta */}
  <div className="job-meta mt-3 space-y-1 text-sm text-gray-700 mb-4">
    <p className="flex items-center gap-2">
     
      {job.location?.[0]}
    </p>

    <p className="flex items-center gap-2">
     
      {job.department}
    </p>
  </div>

  {/* Action */}
  <Button
            size="xl"
            variant="outline"
            className="hover:bg-primary border-primary text-primary hover:text-white"
            arrow
           
            type="submit"
          >
          View Details
          </Button>
</div>

          ))}
        </div>
        
      )}

      {/* ✅ Job Detail Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {detailLoading ? (
              <p>Loading job details...</p>
            ) : jobDetail ? (
              <>
                <h3 className="text-2xl font-semibold">
                  {jobDetail.job_title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {jobDetail.location?.[0]}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="rounded bg-blue-100 px-3 py-1 text-blue-700">
                    {jobDetail.employee_type}
                  </span>

                  {jobDetail.department && (
                    <span className="rounded bg-gray-100 px-3 py-1">
                      {jobDetail.department}
                    </span>
                  )}

                  {jobDetail.business_unit && (
                    <span className="rounded bg-gray-100 px-3 py-1">
                      {jobDetail.business_unit}
                    </span>
                  )}
                </div>

                <div className="mt-6 space-y-2 text-sm text-gray-700">
                  {jobDetail.group_company && (
                    <p><b>Company:</b> {jobDetail.group_company}</p>
                  )}

                  {(jobDetail.experience_from || jobDetail.experience_to) && (
                    <p>
                      <b>Experience:</b>{" "}
                      {jobDetail.experience_from} – {jobDetail.experience_to}
                    </p>
                  )}

                  {jobDetail.job_created_timestamp && (
                    <p>
                      <b>Posted on:</b>{" "}
                      {jobDetail.job_created_timestamp}
                    </p>
                  )}
                </div>

                <div className="mt-8 text-right">
                  <button className="rounded-lg bg-black px-6 py-2 text-white hover:bg-gray-800">
                    Apply Now
                  </button>
                </div>
              </>
            ) : (
              <p>No job detail found</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default OpenJobs;
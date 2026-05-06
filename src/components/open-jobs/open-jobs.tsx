"use client";
import { useEffect, useState, useRef } from "react";
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
  job_decription?:string;
};







const OpenJobs = ({ data }: { data: OpenJobsType }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const [applyLoading, setApplyLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
const [applyError, setApplyError] = useState<string | null>(null);
  const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
const [applyJobId, setApplyJobId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  
const ITEMS_PER_BATCH = 12; // 3 cols × 2 rows
const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
const loadMoreRef = useRef<HTMLDivElement | null>(null);
//const visibleJobs = jobs.slice(0, visibleCount);



//const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);


const [applyData, setApplyData] = useState({
  firstname: "",
  middlename: "",
  lastname: "",
  gender: "",
  email: "",
  date_of_birth: "",
  phone: "",
});

const [resumeBase64, setResumeBase64] = useState("");
const [filters, setFilters] = useState({
  location: "",
  keyword: "",
  jobType: "",
});

const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
const [locations, setLocations] = useState<string[]>([]);

  // ✅ Fetch job list
 

useEffect(() => {
  async function fetchJobs() {
const res = await fetch(process.env.NEXT_PUBLIC_JOBS_API_URL as string);
    const result = await res.json();

    const jobList: Job[] = result?.data || [];

    setJobs(jobList);
    setFilteredJobs(jobList);
    setLoading(false);

    // ✅ Extract unique locations safely
    const uniqueLocations: string[] = Array.from(
      new Set(
        jobList.flatMap((job) =>
          Array.isArray(job.location)
            ? job.location.filter(
                (loc): loc is string => typeof loc === "string"
              )
            : []
        )
      )
    ).sort();

    setLocations(uniqueLocations);
  }

  fetchJobs();
}, []);



useEffect(() => {
  if (!jobs.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) =>
          Math.min(prev + ITEMS_PER_BATCH, jobs.length)
        );
      }
    },
    { threshold: 0.25 }
  );

  if (loadMoreRef.current) {
    observer.observe(loadMoreRef.current);
  }

  return () => {
    if (loadMoreRef.current) {
      observer.unobserve(loadMoreRef.current);
    }
  };
}, [jobs.length]);

function openApply(job_id: string) {
  //alert("✅ Apply Now clicked for job: " + job_id);
  setApplyJobId(job_id);      // ✅ store job id here
  setIsDetailOpen(false);
  setIsApplyOpen(true);
}
// function resetFilters() {
//   setFilters({
//     location: "",
//     keyword: "",
//     jobType: "",
//   });

 // setFilteredJobs(jobs);
 // setVisibleCount(ITEMS_PER_BATCH);
//}


  // ✅ Fetch job detail
  async function openJobDetail(job_id: string) {
    setIsDetailOpen(true);
    setIsApplyOpen(false);
    setJobDetail(null);
    setDetailLoading(true);

    try {
      const res = await fetch("/api/job-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job_id }),
      });

      const result = await res.json();
      
setJobDetail({
      job_id,                    // ✅ KEEP job_id
      ...(result?.data || result)
    });

    } finally {
      setDetailLoading(false);
    }
  }


  /* ================= APPLY FLOW ================= */


  async function applyJob() {
    if (!jobDetail) return;

if (!applyJobId) {
    setApplyError("Invalid job selection. Please reopen the job.");
    return;
  }

  if (!applyData.email.trim()) {
    setApplyError("Email is required.");
    return;
  }

  if (!isValidEmail(applyData.email)) {
    setApplyError("Please enter a valid email address.");
    return;
  }

  setApplyError(null); // ✅ clear previous errors


if (!applyJobId) {
  setApplyError("Invalid job selection. Please reopen the job.");
  return;
}
//console.log(applyJobId);

    const payload = {
     job_id: applyJobId,
      first_name: applyData.firstname,
      middle_name: applyData.middlename,
      last_name: applyData.lastname,
      gender: applyData.gender,
      email: applyData.email,
      dob: applyData.date_of_birth,       // YYYY-MM-DD
      mobile_number: applyData.phone,
      resume: resumeBase64,                // ✅ Base64
    };
//alert("job_id 1"+ jobDetail.job_id);
    setApplyLoading(true);

    try {
      const res = await fetch("/api/job-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
       //console.log(result.status);
if (!res.ok || result.status === "error") {
 // alert(result.status);
  setApplyError(result.message || "Application failed. Please try again.");
  setApplySuccess(false);
  return;
}

// ✅ only if Darwinbox really succeeded
setApplyError(null);
setApplySuccess(true);


      if (result.status === "success") {

  //  resetApplyForm();
 
setApplyError(null);
setApplySuccess(true);

      } else {
        alert(result.message);
      }
    } catch (e) {
     // console.error("Apply failed", e);
     return(e);
    } finally {
      setApplyLoading(false);
    }

    


  }
 
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}
 


  function convertResumeToBase64(file: File) {
    // Optional size check (2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Resume must be under 2MB");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64Result = reader.result as string;

      // Remove "data:application/pdf;base64," prefix
      const cleanedBase64 = base64Result.split(",")[1];

      setResumeBase64(cleanedBase64);
    };

    reader.onerror = () => {
      alert("Failed to read resume file");
    };

    reader.readAsDataURL(file);
  }
  function formatJobDate(dateStr?: string) {
  if (!dateStr) return "";

  // Handle formats like "08-10-2025 15:45:14"
  const cleanDate = dateStr.split(" ")[0]; // remove time
  const parts = cleanDate.split("-");      // DD-MM-YYYY or YYYY-MM-DD

  let day, month, year;

  if (parts[0].length === 4) {
    // YYYY-MM-DD
    [year, month, day] = parts;
  } else {
    // DD-MM-YYYY
    [day, month, year] = parts;
  }

  const dateObj = new Date(`${year}-${month}-${day}`);

  return dateObj.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function applyFilters() {
  const result = jobs.filter((job) => {
    const matchLocation =
      !filters.location ||
      job.location?.some((loc) =>
        loc.toLowerCase().includes(filters.location.toLowerCase())
      );

    const matchKeyword =
      !filters.keyword ||
      job.job_title
        .toLowerCase()
        .includes(filters.keyword.toLowerCase());

    const matchJobType =
      !filters.jobType ||
      job.employee_type
        ?.toLowerCase()
        .includes(filters.jobType.toLowerCase());

    return matchLocation && matchKeyword && matchJobType;
  });

  setFilteredJobs(result);
  //setVisibleCount(ITEMS_PER_BATCH); // ✅ reset infinite scroll
}
function resetFilters() {
  setFilters({
    location: "",
    keyword: "",
    jobType: "",
  });

  setFilteredJobs(jobs);
  //setVisibleCount(ITEMS_PER_BATCH);
}
function cleanWordHtml(html: string = "") {
  if (!html) return "";

  // ✅ Step 1: Decode HTML entities like &amp;nbsp;
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  html = txt.value;

  return (
    html
      // ✅ Remove Word comments
      .replace(/<!--[\s\S]*?-->/g, "")

      // ✅ Remove Word-specific tags (o:, w:)
      .replace(/<\/?(o|w):[^>]*>/g, "")

      // ✅ Remove mso-* styles
      .replace(/\s?mso-[^;"]+;?/gi, "")

      // ✅ Remove all inline styles
      .replace(/\s?style="[^"]*"/gi, "")

      // ✅ Remove empty span tags
      .replace(/<span[^>]*>\s*<\/span>/gi, "")

      // ✅ Remove &nbsp;
      .replace(/&nbsp;/gi, " ")

      // ✅ Remove multiple spaces
      .replace(/\s{2,}/g, " ")

      // ✅ Remove empty paragraphs
      .replace(/<p>\s*<\/p>/gi, "")

      // ✅ Clean up malformed spaces
      .replace(/>\s+</g, "><")

      .trim()
  );
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
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  {/* Location */}
 <select
  className="border p-3 rounded"
  value={filters.location}
  onChange={(e) =>
    setFilters({ ...filters, location: e.target.value })
  }
>
  <option value="">Select Location</option>

  {locations.map((loc) => (
    <option key={loc} value={loc}>
      {loc}
    </option>
  ))}
</select>

  {/* Keywords */}
  <input
    type="text"
    placeholder="Enter Keywords"
    className="border rounded px-4 py-3"
    value={filters.keyword}
    onChange={(e) =>
      setFilters({ ...filters, keyword: e.target.value })
    }
  />

  {/* Job Type */}
  <select
    className="border rounded px-4 py-3"
    value={filters.jobType}
    onChange={(e) =>
      setFilters({ ...filters, jobType: e.target.value })
    }
  >
    <option value="">Select Preferred Job Types</option>
    <option value="Full Time">Full Time</option>
    <option value="Contract">Contract</option>
  </select>
</div>
<div className="flex gap-4 mt-6">
  <Button
    variant="outline"
    onClick={resetFilters}
  >
    Reset
  </Button>

  <Button onClick={applyFilters}>
    Go →
  </Button>
</div>
      {/* ✅ Job Grid */}
      {loading ? (
        <p className="text-center mt-10">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-center mt-10">No jobs found</p>
      ) : (




        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-none h-[500px] overflow-y-auto">
        {filteredJobs.map((job) => (
            <div
              key={job.job_id}
             
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
               {formatJobDate(job.job_updated_timestamp)}
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
  type="button"
  onClick={(e) => {
    e.stopPropagation();
    openJobDetail(job.job_id);
  }}
>
  View Details
</Button>

            </div>

          ))}
        </div>

      )}

{visibleCount < jobs.length && (
  <div
    ref={loadMoreRef}
    className="h-10"
  />
)}


      {isDetailOpen && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsDetailOpen(false)}
        >


          <div
            className="relative w-full max-w-3xl bg-white rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}  // ✅ REQUIRED
          >


            <button
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-4 right-4"
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
                  <span className="rounded  px-3 py-1">
                    {jobDetail.employee_type}
                  </span>

                  {jobDetail.department && (
                    <span className="rounded bg-[#26A17D] text-white px-3 py-1">
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
                 
                       {formatJobDate(jobDetail.job_created_timestamp)}
                    </p>
                  )}
                </div>

 

<div
  className="prose prose-sm max-w-none text-gray-700 mt-4 h-[200px] overflow-y-auto"
  dangerouslySetInnerHTML={{
    __html: cleanWordHtml(jobDetail.job_decription),
  }}
/>



                {/* ✅ IMPORTANT CHANGE */}
                <div className="mt-8 text-right">


                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();   // ✅ MOST IMPORTANT LINE
                     openApply(jobDetail!.job_id);
                    }}
                  >
                    Apply Now
                  </Button>


                </div>
              </>
            ) : null}
          </div>
        </div>
      )}

      {isApplyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div
            className="relative w-full max-w-2xl bg-white rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsApplyOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold mb-6">
              Apply for {jobDetail?.job_title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="w-full border p-2 rounded"
                  value={applyData.firstname}
                  onChange={(e) =>
                    setApplyData({ ...applyData, firstname: e.target.value })
                  }
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="w-full border p-2 rounded"
                  value={applyData.lastname}
                  onChange={(e) =>
                    setApplyData({ ...applyData, lastname: e.target.value })
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
               
<input
  required
  type="email"
  className={`w-full border p-2 rounded ${
    applyError ? "border-red-500" : ""
  }`}
  value={applyData.email}
  onChange={(e) => {
    setApplyData({ ...applyData, email: e.target.value });
    setApplyError(null);
  }}
/>

              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  className="w-full border p-2 rounded"
                  value={applyData.phone}
                  onChange={(e) =>
                    setApplyData({ ...applyData, phone: e.target.value })
                  }
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>
                <input
                  required
                  type="date"
                  className="w-full border p-2 rounded"
                  value={applyData.date_of_birth}
                  onChange={(e) =>
                    setApplyData({
                      ...applyData,
                      date_of_birth: e.target.value,
                    })
                  }
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full border p-2 rounded"
                  value={applyData.gender}
                  onChange={(e) =>
                    setApplyData({ ...applyData, gender: e.target.value })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* Resume */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Upload Resume (PDF / DOC) <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full border p-2 rounded"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      convertResumeToBase64(e.target.files[0]);
                    }
                  }}
                />
             
              </div>
            </div>

            {/* Submit */}
           
<Button
  type="button"
  onClick={applyJob}
  disabled={applyLoading || applySuccess}
  className="mt-6"
>
  {applySuccess
    ? "Application Submitted"
    : applyLoading
    ? "Submitting..."
    : "Submit Application"}
</Button>


            
{/* ✅ Success Message */}
{applySuccess && (
  <p className="mt-3 text-sm text-green-600 font-medium">
    ✅ Application submitted successfully.
  </p>
)}

{/* ❌ Error Message */}
{applyError && (
  <p className="mt-3 text-sm text-red-600 font-medium">
    ❌ {applyError}
  </p>
)}

          </div>
        </div>
      )}
    </section>
  );
};

export default OpenJobs;
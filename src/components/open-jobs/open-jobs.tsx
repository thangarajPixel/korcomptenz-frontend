"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShareButton } from "./share-button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
type Job = {
  job_id: string;
  job_title: string;
  location: string[];
  location_city: string;
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
  job_decription?: string;
};

// ✅ Shared slug helpers — must match the logic in /career/[jobSlug]/page.tsx
function slugify(text: string | undefined | null) {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildJobSlug(title: string | undefined | null, jobId: string) {
  const titleSlug = slugify(title);
  return titleSlug ? `${titleSlug}-${jobId}` : jobId;
}

const OpenJobs = ({
  data,
  initialJobId,
}: {
  data: OpenJobsType;
  initialJobId?: string; // ✅ set when rendered from app/career/[jobId]/page.tsx
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  //const [loading, setLoading] = useState(true);

  const [applyLoading, setApplyLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyError, setApplyError] = useState<string | null>(null);
  const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [applyJobId, setApplyJobId] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  // const ITEMS_PER_BATCH = 12; // 3 cols × 2 rows
  // const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
  // const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [viewType, setViewType] = useState<"list" | "grid">("list");
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
  const searchParams = useSearchParams();
  const sharedJobId = initialJobId || searchParams.get("jobId");
  const [resumeBase64, setResumeBase64] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    keyword: "",
    jobType: "",
  });

  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [locations, setLocations] = useState<string[]>([]);

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const JOBS_PER_PAGE = viewType === "grid" ? 9 : 6;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredJobs.length / JOBS_PER_PAGE),
  );
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE,
  );

  // ✅ Reset to page 1 whenever the view type changes so the current page
  // number can't end up out of range for the new page size.
  useEffect(() => {
    setCurrentPage(1);
  }, [viewType]);

  // ✅ Clamp currentPage if filteredJobs shrinks (e.g. after a filter change)
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // ✅ Fetch job list
  useEffect(() => {
    if (!sharedJobId || jobs.length === 0) return;

    const selectedJob = jobs.find((job) => job.job_id === sharedJobId);

    if (selectedJob) {
      document
        .getElementById("open-jobs")
        ?.scrollIntoView({ behavior: "smooth" });

      openJobDetail(sharedJobId);
    }
  }, [sharedJobId, jobs]);

  // ✅ NOTE: This only updates the *browser tab title* for a nicer UX when a
  // user is already on the page and opens/closes a job (client-side nav).
  // It does NOT affect what social media crawlers (Facebook/LinkedIn/WhatsApp/X)
  // see when a link is shared — those read the server-rendered <head>, which
  // is controlled separately by `generateMetadata` in app/career/page.tsx.
  useEffect(() => {
    if (jobDetail?.job_title) {
      document.title = `${jobDetail.job_title} | Careers at Korcomptenz`;
    } else {
      document.title = "Careers | Korcomptenz";
    }
  }, [jobDetail]);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch(process.env.NEXT_PUBLIC_JOBS_API_URL as string);
      const result = await res.json();
      //const visibleCount=0;
      const jobList: Job[] = result?.data || [];

      setJobs(jobList);
      setFilteredJobs(jobList);
      setCurrentPage(1); // ✅ reset pagination on fresh fetch
      // filteredJobs.map((job) => renderList(job));
      // setViewType("grid");
      //  setLoading(false);

      // ✅ Extract unique locations safely
      const uniqueLocations: string[] = Array.from(
        new Set(
          jobList.flatMap((job) =>
            Array.isArray(job.location)
              ? job.location.filter(
                  (loc): loc is string => typeof loc === "string",
                )
              : [],
          ),
        ),
      ).sort();

      setLocations(uniqueLocations);
    }

    fetchJobs();
  }, []);

  // useEffect(() => {
  //   if (!jobs.length) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         setVisibleCount((prev) =>
  //           Math.min(prev + ITEMS_PER_BATCH, jobs.length),
  //         );
  //       }
  //     },
  //     { threshold: 0.25 },
  //   );

  //   if (loadMoreRef.current) {
  //     observer.observe(loadMoreRef.current);
  //   }

  //   return () => {
  //     if (loadMoreRef.current) {
  //       observer.unobserve(loadMoreRef.current);
  //     }
  //   };
  // }, [jobs.length]);

  function openApply(job_id: string) {
    //alert("✅ Apply Now clicked for job: " + job_id);
    setApplyJobId(job_id); // ✅ store job id here
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
        job_id, // ✅ KEEP job_id
        ...(result?.data || result),
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
      dob: applyData.date_of_birth, // YYYY-MM-DD
      mobile_number: applyData.phone,
      resume: resumeBase64, // ✅ Base64
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
        setApplyError(
          result.message || "Application failed. Please try again.",
        );
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
      return e;
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
    const parts = cleanDate.split("-"); // DD-MM-YYYY or YYYY-MM-DD

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
          loc.toLowerCase().includes(filters.location.toLowerCase()),
        );

      const matchKeyword =
        !filters.keyword ||
        job.job_title.toLowerCase().includes(filters.keyword.toLowerCase());

      const matchJobType =
        !filters.jobType ||
        job.employee_type
          ?.toLowerCase()
          .includes(filters.jobType.toLowerCase());

      return matchLocation && matchKeyword && matchJobType;
    });

    setFilteredJobs(result);
    setCurrentPage(1); // ✅ reset pagination after filtering
  }
  function resetFilters() {
    setFilters({
      location: "",
      keyword: "",
      jobType: "",
    });

    setFilteredJobs(jobs);
    setCurrentPage(1); // ✅ reset pagination
  }
  function renderGrid(job: Job) {
    return (
      <div
        key={job.job_id}
        className="job-card rounded-xl border p-6 hover:bg-[#dae2e1] bg-white"
      >
        <a href="/" className="block mb-4">
          <img
            src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/full_logo_b4df11a39a.svg"
            alt="Korcomptenz"
            className="h-10 w-auto"
          />
        </a>

        <h3 className="text-lg font-semibold">{job.job_title}</h3>

        <p className="text-sm mt-2">{job.employee_type}</p>

        <p className="job-date text-sm text-gray-600 pt-4 flex items-center gap-4">
          <span className="flex items-center">
            <img
              src="svg/calendar-icon.svg"
              alt="Korcomptenz"
              className="h-5 w-auto mr-2"
            />
            {formatJobDate(job.job_updated_timestamp)}
          </span>

          <span className="flex items-center">
            <img
              src="svg/hourglass-icon.svg"
              alt="Korcomptenz"
              className="h-5 w-auto mr-2"
            />{" "}
            0 - 30 days
          </span>
        </p>

        {/* Meta */}
        <div className="job-meta mt-3 space-y-1 text-sm text-gray-700 mb-4">
          <p className="flex items-center gap-2">
            <img
              src="svg/pin-icon.svg"
              alt="Korcomptenz"
              className="h-4 w-auto"
            />{" "}
            {job.location_city?.[0]}
          </p>

          <p className="flex items-center gap-2">
            <img
              src="svg/home-icon.svg"
              alt="Korcomptenz"
              className="h-4   w-auto"
            />{" "}
            {job.department}
          </p>
        </div>

        <Link href={`/career/${buildJobSlug(job.job_title, job.job_id)}`}>
          <Button type="button">View Details</Button>
        </Link>
      </div>
    );
  }
  function renderList(job: Job) {
    const jobSlug = buildJobSlug(job.job_title, job.job_id);
    const shareUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/career/${jobSlug}`
        : "";
    return (
      <div
        key={job.job_id}
        className="job-card rounded-xl border p-10 bg-[#fff] flex 
hover:bg-[#dae2e1] transition-all duration-300 cursor-pointer"
      >
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4 flex-1">
          {/* Logo */}
          <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl">
            <img
              src="svg/vector-icon.svg"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Title + Dept */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {job.job_title}{" "}
              <span className="font-normal text-gray-600">
                ({job.employee_type})
              </span>
            </h3>
            <p className="text-sm text-gray-500">{job.department}</p>

            {/* INFO ROW */}
            <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
              {/* Posted */}
              <div className="flex items-center gap-2">
                <span>
                  <img
                    src="svg/calendar-icon.svg"
                    alt="Korcomptenz"
                    className="h-5 w-auto"
                  />{" "}
                </span>
                <span>
                  <strong>Posted:</strong>{" "}
                  {formatJobDate(job.job_updated_timestamp)}
                </span>
              </div>

              {/* Notice */}
              <div className="flex items-center gap-2">
                <span>
                  <img
                    src="svg/hourglass-icon.svg"
                    alt="Korcomptenz"
                    className="h-5 w-auto"
                  />
                </span>
                <span>
                  <strong>Notice Period :</strong> 0 - 30 days
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <span>
                  <img
                    src="svg/pin-icon.svg"
                    alt="Korcomptenz"
                    className="h-5 w-auto"
                  />
                </span>
                <span>
                  <strong>Location:</strong> {job.location_city || "Chennai"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* Button */}
          <Link href={`/career/${jobSlug}`}>
            <Button type="button">View Details</Button>
          </Link>

          <ShareButton shareUrl={`${shareUrl}`} />
          {/* Social Icons */}
        </div>
      </div>
    );
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

  // ✅ Build a windowed list of page numbers, e.g. 1 2 3 ... 8 9
  function getPageNumbers(): (number | "...")[] {
    const pages: (number | "...")[] = [];
    const delta = 1; // how many neighbours to show around current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Location */}
        <select
          className="border p-3 rounded"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
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
          onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
        />

        {/* Job Type */}
        <select
          className="border rounded px-4 py-3"
          value={filters.jobType}
          onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
        >
          <option value="">Select Preferred Job Types</option>
          <option value="Full Time">Full Time</option>
          <option value="Contract">Contract</option>
        </select>
        <div className="flex gap-2">
          <Button variant="outline" onClick={resetFilters}>
            Reset
          </Button>

          <Button onClick={applyFilters}>Go →</Button>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        {/* Grid Icon */}
        <button
          onClick={() => setViewType("grid")}
          aria-label="Grid view"
          className={`p-2 border rounded ${viewType === "grid" ? "" : ""}`}
        >
          <img src="svg/card-view-icon.svg" alt="" />
        </button>

        {/* List Icon */}
        <button
          onClick={() => setViewType("list")}
          aria-label="List view"
          className={`p-2 border rounded ${
            viewType === "list" ? " text-white" : "bg-white"
          }`}
        >
          <img src="svg/list-view-icon.svg" alt="" />
        </button>
      </div>

      {/* ✅ Job Grid / List (paginated) */}

      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No jobs match your filters.
        </p>
      ) : viewType === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-none">
          {paginatedJobs.map((job) => renderGrid(job))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-10 max-w-none">
          {paginatedJobs.map((job) => renderList(job))}
        </div>
      )}

      {/* ✅ Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded border disabled:opacity-40"
          >
            ‹ Prev
          </button>

          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                …
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page as number)}
                className={`px-4 py-2 rounded border ${
                  currentPage === page
                    ? "bg-[#26A17D] text-white border-[#26A17D]"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ),
          )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded border disabled:opacity-40"
          >
            Next ›
          </button>
        </div>
      )}

      {isDetailOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
          onClick={() => setIsDetailOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()} // ✅ REQUIRED
          >
            <button
              onClick={() => setIsDetailOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#26A17D] text-white hover:bg-[#1f8a68] transition-colors shadow-md"
            >
              ✕
            </button>

            {detailLoading ? (
              <div className="bg-white p-6">Loading...</div>
            ) : jobDetail ? (
              <>
                {/* ✅ DARK HEADER */}

                {/* HEADER */}
                <div className="bg-[#2f3a42] text-white p-6 pb-10 pr-16 shrink-0">
                  <h2 className="text-2xl font-semibold mb-4">
                    {jobDetail.job_title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <p>
                      <strong>Department :</strong> {jobDetail.department}
                    </p>
                    <p>
                      <strong>Notice Period :</strong> 0 - 30 days
                    </p>
                    <p>
                      <strong>Job type :</strong> {jobDetail.employee_type}
                    </p>
                    <p>
                      <strong>Locations :</strong>{" "}
                      {jobDetail.location?.join(", ")}
                    </p>
                    <p>
                      <strong>Created By :</strong>{" "}
                      {formatJobDate(jobDetail.job_created_timestamp)}
                    </p>
                    <div className="text-right mb-4">
                      <ShareButton
                        shareUrl={
                          typeof window !== "undefined" && jobDetail
                            ? `${window.location.origin}/career/${buildJobSlug(jobDetail.job_title, jobDetail.job_id)}`
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* ✅ LIGHT CONTENT SECTION — fills remaining modal height */}
                <div className="bg-gray-100 p-6 relative flex-1 overflow-y-auto min-h-0">
                  {/* Apply + Share Buttons */}
                  <div className="flex justify-end items-center gap-3 mb-4">
                    <Button
                      className="bg-[#26A17D] text-white px-6 py-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        openApply(jobDetail.job_id);
                      }}
                    >
                      Apply Now →
                    </Button>
                  </div>

                  {/* ✅ Description: fixed, responsive height with its own scroll
                      (vh-based so it scales with device/viewport instead of a
                      hardcoded pixel height) */}
                  <div className="prose prose-sm max-w-none text-gray-800 max-h-[30vh] sm:max-h-[35vh] md:max-h-[40vh] overflow-y-auto pr-2 bg-white rounded-lg border border-gray-200 p-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cleanWordHtml(jobDetail.job_decription),
                      }}
                    />
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}

      {isApplyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6">
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsApplyOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#26A17D] text-white hover:bg-[#1f8a68] transition-colors shadow-md"
            >
              ✕
            </button>

            <h3 className="text-3xl font-semibold mb-6 text-center">
              Apply for {jobDetail?.job_title}
            </h3>
            <p className="text-center mb-5">
              Calling all talented individuals! We’re on the hunt for new team
              members to join our growing company. If you’re passionate,
              hardworking, and ready for a challenge, we want to hear from you.
              Submit your resume now and let’s build something amazing together!
            </p>

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
                  Upload Resume (PDF / DOC){" "}
                  <span className="text-red-500">*</span>
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
                  : "Submit your application"}
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

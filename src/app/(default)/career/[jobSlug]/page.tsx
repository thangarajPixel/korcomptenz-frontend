import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";
import { fetchDarwinboxJobDetail } from "@/lib/darwinbox";
import { generatePageMetadata } from "@/utils/metadata";
import { ShareButton } from "@/components/open-jobs/share-button";
import { ApplyJobModal } from "@/components/open-jobs/apply-job-modal";

type JobDetail = {
  job_id: string;
  job_title: string;
  location?: string[];
  location_city?: string;
  employee_type?: string;
  department?: string;
  business_unit?: string;
  experience_from?: string;
  experience_to?: string;
  job_created_timestamp?: string;
  job_updated_timestamp?: string;
  job_decription?: string;
};

type JobListItem = {
  job_id: string;
  job_title: string;
};

// ✅ URL structure: /career/<slugified-job-title>-<job_id>
// e.g. /career/consultant-sap-basis-a689f2e0326e3b
// Safe to split on lastIndexOf("-") because Darwinbox job IDs contain no hyphens.
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

// Split on the last "-" — safe because job IDs are hex strings with no hyphens.
// Falls back to the whole segment as the ID if no "-" found (bare ID URLs).
function extractJobIdFromSlug(jobSlug: string | undefined) {
  if (!jobSlug) return "";
  const lastDash = jobSlug.lastIndexOf("-");
  return lastDash === -1 ? jobSlug : jobSlug.slice(lastDash + 1);
}

const getJobDetail = cache(async (jobId: string) => {
  try {
    const result = await fetchDarwinboxJobDetail(jobId);

    // eslint-disable-next-line no-console -- temporary: debug API response shape
    console.log(
      "RAW JOB DETAIL RESULT for ID:",
      jobId,
      JSON.stringify(result, null, 2),
    );

    const job = result?.data || result;

    if (!job) {
      return null;
    }

    return {
      ...job,
      job_id: jobId,
    } as JobDetail;
  } catch (err) {
    // eslint-disable-next-line no-console -- temporary: debug fetch errors
    console.error("getJobDetail error:", err);
    return null;
  }
});

// ✅ Fetches the full job list (same source open-jobs.tsx uses on the
// client) so we can work out which job comes before/after this one.
// Wrapped in React's cache() so if it's ever called more than once during
// the same request (e.g. also from generateMetadata later) it only fetches
// once.
const getJobsList = cache(async (): Promise<JobListItem[]> => {
  const jobsApiUrl = process.env.NEXT_PUBLIC_JOBS_API_URL;

  if (!jobsApiUrl) {
    // eslint-disable-next-line no-console -- surface missing config in server logs
    console.error("NEXT_PUBLIC_JOBS_API_URL is missing");
    return [];
  }

  try {
    const res = await fetch(jobsApiUrl, {
      // Keep this reasonably fresh without hitting the API on every request
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      // eslint-disable-next-line no-console -- surface upstream failure status in server logs
      console.error("Jobs list fetch failed:", res.status);
      return [];
    }

    const result = await res.json();

    // eslint-disable-next-line no-console -- temporary: debug full job object shape
    console.log("FULL FIRST JOB:", JSON.stringify(result?.data?.[0], null, 2));
    // eslint-disable-next-line no-console -- temporary: debug job_id format
    console.log(
      "SAMPLE JOB IDs:",
      (result?.data || [])
        .slice(0, 3)
        .map((j: JobListItem) => ({ id: j.job_id, title: j.job_title })),
    );

    return (result?.data || []) as JobListItem[];
  } catch (err) {
    // eslint-disable-next-line no-console -- surface unexpected fetch/parse errors in server logs
    console.error("Jobs list fetch threw:", err);
    return [];
  }
});

function cleanWordHtml(html: string = "") {
  if (!html) return "";

  return (
    html
      // Decode common HTML entities
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")

      // Remove Word comments
      .replace(/<!--[\s\S]*?-->/g, "")

      // Remove Word-specific XML tags
      .replace(/<\/?(o|w|m|v):[^>]*>/gi, "")

      // Remove conditional comments test
      .replace(/<!\[if[\s\S]*?<!\[endif\]>/gi, "")

      // Remove class attributes such as MsoNormal
      .replace(/\sclass="[^"]*"/gi, "")
      .replace(/\sclass='[^']*'/gi, "")

      // Remove lang attributes
      .replace(/\slang="[^"]*"/gi, "")
      .replace(/\slang='[^']*'/gi, "")

      // Remove style attributes
      .replace(/\sstyle="[^"]*"/gi, "")
      .replace(/\sstyle='[^']*'/gi, "")

      // Remove id attributes
      .replace(/\sid="[^"]*"/gi, "")

      // Remove Microsoft Office specific attributes
      .replace(/\smso-[^=]+="[^"]*"/gi, "")

      // Remove empty spans
      .replace(/<span[^>]*>\s*<\/span>/gi, "")

      // Convert Word <p> spacing into normal paragraphs
      .replace(/<p[^>]*>\s*<\/p>/gi, "")

      // Clean whitespace
      .replace(/\s{2,}/g, " ")

      // Remove whitespace between tags
      .replace(/>\s+</g, "><")

      .trim()
  );
}

function stripHtml(html: string = "") {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ✅ Builds a concise, unique meta description per job rather than a raw
// character-slice of the full job description (which can cut mid-word/
// mid-sentence and reads as boilerplate). Falls back to a structured
// summary built from the job's own fields when the description is short,
// missing, or the first sentence alone doesn't reach a useful length.
function buildJobMetaDescription(job: JobDetail) {
  const plain = stripHtml(job.job_decription || "");
  const location = job.location?.join(", ") || job.location_city;

  const facts = [
    job.employee_type,
    job.department,
    location && `in ${location}`,
  ]
    .filter(Boolean)
    .join(", ");

  const intro = `${job.job_title}${facts ? ` — ${facts}.` : "."}`;

  if (!plain) {
    return `${intro} Apply now at Korcomptenz.`.slice(0, 160);
  }

  // Take whole sentences up to ~155 chars so we never cut off mid-word.
  const sentences = plain.match(/[^.!?]+[.!?]?/g) || [plain];
  let summary = "";
  for (const sentence of sentences) {
    const next = `${summary}${sentence.trim()} `.trim();
    if (next.length > 155) break;
    summary = `${next} `;
  }
  summary = summary.trim();

  if (!summary) {
    summary = plain.slice(0, 155).replace(/\s+\S*$/, "");
  }

  return `${job.job_title}: ${summary}`.slice(0, 160);
}

function formatJobDate(dateStr?: string) {
  if (!dateStr) return "";

  const cleanDate = dateStr.split(" ")[0];
  const parts = cleanDate.split("-");

  let day: string;
  let month: string;
  let year: string;

  if (parts[0]?.length === 4) {
    [year, month, day] = parts;
  } else {
    [day, month, year] = parts;
  }

  const dateObj = new Date(`${year}-${month}-${day}`);

  if (Number.isNaN(dateObj.getTime())) {
    return "";
  }

  return dateObj.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jobSlug: string }>;
}) {
  const p = await params;
  const jobSlug = p.jobSlug ?? "";
  const jobId = extractJobIdFromSlug(jobSlug);

  const job = await getJobDetail(jobId);
  const path = `/career/${jobSlug}`;

  if (!job) {
    return {
      ...(await generatePageMetadata({
        title: "Job Not Found | Korcomptenz",
        description: "The requested job opening could not be found.",
        path,
      })),
      alternates: { canonical: path },
    };
  }

  // Always use the canonical slug derived from the current title + id,
  // so even if someone lands on an old-title URL the canonical is correct.
  const canonicalSlug = buildJobSlug(job.job_title, job.job_id);
  const canonicalPath = `/career/${canonicalSlug}`;

  const metadata = await generatePageMetadata({
    title: `${job.job_title} Jobs | Korcomptenz`,
    description: buildJobMetaDescription(job),
    path: canonicalPath,
  });

  return {
    ...metadata,
    alternates: {
      ...metadata?.alternates,
      canonical: canonicalPath,
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ jobSlug: string }>;
}) {
  const p = await params;
  const jobSlug = p.jobSlug ?? "";
  // eslint-disable-next-line no-console -- temporary: debug raw param
  console.log(
    "RAW PARAM jobSlug:",
    JSON.stringify(p.jobSlug),
    "extracted:",
    extractJobIdFromSlug(jobSlug),
  );
  const jobId = extractJobIdFromSlug(jobSlug);

  const [job, jobsList] = await Promise.all([
    getJobDetail(jobId),
    getJobsList(),
  ]);

  if (!job) {
    notFound();
  }

  // If the slug in the URL is stale (job title changed), redirect to the
  // correct canonical slug so there's only ever one URL per job.
  const canonicalSlug = buildJobSlug(job.job_title, job.job_id);
  if (jobSlug !== canonicalSlug) {
    redirect(`/career/${canonicalSlug}`);
  }

  const description = cleanWordHtml(job.job_decription);

  // Work out prev/next from the master list
  const currentIndex = jobsList.findIndex((j) => j.job_id === job.job_id);
  const prevJob = currentIndex > 0 ? jobsList[currentIndex - 1] : null;
  const nextJob =
    currentIndex >= 0 && currentIndex < jobsList.length - 1
      ? jobsList[currentIndex + 1]
      : null;

  // Build full slugs for prev/next links
  const prevSlug = prevJob
    ? buildJobSlug(prevJob.job_title, prevJob.job_id)
    : null;
  const nextSlug = nextJob
    ? buildJobSlug(nextJob.job_title, nextJob.job_id)
    : null;

  return (
    <main className="container-md py-10 md:py-20">
      {/* All Jobs / Previous / Next navigation */}
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <Link
          href="/career"
          className="text-sm font-medium text-[#26A17D] hover:underline flex items-center gap-1"
        >
          ← All Jobs
        </Link>

        <div className="flex items-center gap-2">
          {currentIndex >= 0 && (
            <span className="text-xs text-gray-500 mr-1">
              Job {currentIndex + 1} of {jobsList.length}
            </span>
          )}

          {prevSlug ? (
            <Link
              href={`/career/${prevSlug}`}
              className="px-3 py-1.5 rounded border text-sm hover:bg-gray-50"
            >
              ‹ Previous
            </Link>
          ) : (
            <span className="px-3 py-1.5 rounded border text-sm opacity-40 cursor-not-allowed">
              ‹ Previous
            </span>
          )}

          {nextSlug ? (
            <Link
              href={`/career/${nextSlug}`}
              className="px-3 py-1.5 rounded border text-sm hover:bg-gray-50"
            >
              Next ›
            </Link>
          ) : (
            <span className="px-3 py-1.5 rounded border text-sm opacity-40 cursor-not-allowed">
              Next ›
            </span>
          )}
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#2f3a42] text-white rounded-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold">
              {job.job_title}
            </h1>

            <p className="mt-3 text-white/80">{job.employee_type}</p>
          </div>

          <ShareButton shareUrl={`/career/${canonicalSlug}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm">
          <p>
            <strong>Department:</strong> {job.department || "-"}
          </p>

          <p>
            <strong>Job Type:</strong> {job.employee_type || "-"}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {job.location?.join(", ") || job.location_city || "-"}
          </p>

          <p>
            <strong>Posted:</strong> {formatJobDate(job.job_created_timestamp)}
          </p>

          <p>
            <strong>Experience:</strong> {job.experience_from || "0"} -{" "}
            {job.experience_to || "30"}
          </p>

          <p>
            <strong>Notice Period:</strong> 0 - 30 days
          </p>
        </div>
        <div className="flex justify-end text-black">
          <ApplyJobModal jobId={job.job_id} jobTitle={job.job_title} />
        </div>
      </div>

      {/* Description */}
      <section className="bg-white text-['#000'] rounded-xl border p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Job Description
        </h2>

        <div
          className="prose prose-sm md:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Apply — client component so it can hold form state and submit */}
        <ApplyJobModal jobId={job.job_id} jobTitle={job.job_title} />
      </section>
    </main>
  );
}

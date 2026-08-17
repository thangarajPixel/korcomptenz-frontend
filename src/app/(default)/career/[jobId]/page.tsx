import { notFound } from "next/navigation";
import { cache } from "react";
import { fetchDarwinboxJobDetail } from "@/lib/darwinbox";
import { generatePageMetadata } from "@/utils/metadata";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/open-jobs/share-button";

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

const getJobDetail = cache(async (jobId: string) => {
  try {
    const result = await fetchDarwinboxJobDetail(jobId);

    const job = result?.data || result;

    if (!job) {
      return null;
    }

    return {
      job_id: jobId,
      ...job,
    } as JobDetail;
  } catch {
    return null;
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

      // Remove conditional comments
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
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  const job = await getJobDetail(jobId);

  if (!job) {
    return generatePageMetadata({
      title: "Job Not Found | Careers",
      description: "The requested job opening could not be found.",
      path: `/career/${jobId}`,
    });
  }

  const description =
    stripHtml(job.job_decription || "").slice(0, 160) ||
    `Apply for ${job.job_title} at Korcomptenz.`;

  return generatePageMetadata({
    title: `${job.job_title} | Careers at Korcomptenz`,
    description,
    path: `/career/${job.job_id}`,
  });
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;

  const job = await getJobDetail(jobId);

  if (!job) {
    notFound();
  }

  const description = cleanWordHtml(job.job_decription);

  return (
    <main className="container-md py-10 md:py-20">
      {/* Header */}
      <div className="bg-[#2f3a42] text-white rounded-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold">
              {job.job_title}
            </h1>

            <p className="mt-3 text-white/80">{job.employee_type}</p>
          </div>

          <ShareButton shareUrl={`/career/${job.job_id}`} />
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
      </div>

      {/* Description */}
      <section className="mt-8 bg-white rounded-xl border p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Job Description
        </h2>

        <div
          className="prose prose-sm md:prose-base max-w-none"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </section>

      {/* Apply */}
      <div className="mt-8 flex justify-center">
        <Button className="bg-[#26A17D] text-white px-8 py-3 rounded-full">
          Apply Now →
        </Button>
      </div>
    </main>
  );
}

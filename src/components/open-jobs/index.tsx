import { fetchDarwinboxJobs } from "@/lib/darwinbox";
import OpenJobsClient, { type Job } from "./open-jobs";

// Server Component: fetches the live job list from Darwinbox before render
// so open roles are present in the initial HTML (crawlable) instead of only
// appearing after a client-side fetch. Interactive behavior (filtering,
// pagination, apply flow) stays in the client component below.
const OpenJobs = async ({ data }: { data: OpenJobsType }) => {
  let initialJobs: Job[] = [];

  try {
    const result = await fetchDarwinboxJobs();
    initialJobs = result?.data || [];
  } catch {
    // Render with an empty list if Darwinbox is unavailable; the section
    // still renders (title, filters) instead of failing the whole page.
  }

  return <OpenJobsClient data={data} initialJobs={initialJobs} />;
};

export default OpenJobs;

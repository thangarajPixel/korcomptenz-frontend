import { NextResponse } from "next/server";
import { fetchDarwinboxJobDetail } from "@/lib/darwinbox";
import { clientIp, rateLimit, readJsonBody } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    if (!rateLimit(`job-detail:${ip}`, 20, 60_000)) {
      return NextResponse.json(
        { message: "Too many requests." },
        { status: 429 },
      );
    }

    const parsed = await readJsonBody<{ job_id?: string }>(req, 16_384);
    if (!parsed.ok) {
      return NextResponse.json(
        { message: parsed.message },
        { status: parsed.status },
      );
    }

    const { job_id } = parsed.body;

    if (!job_id || typeof job_id !== "string") {
      return NextResponse.json(
        { message: "job_id is required" },
        { status: 400 },
      );
    }

    const data = await fetchDarwinboxJobDetail(job_id);

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Unexpected error occurred" },
      { status: 500 },
    );
  }
}

import { fetchDarwinboxJobs } from "@/lib/darwinbox";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const ip = clientIp(req);
    if (!rateLimit(`jobs:${ip}`, 30, 60_000)) {
      return NextResponse.json(
        { message: "Too many requests." },
        { status: 429 },
      );
    }

    const data = await fetchDarwinboxJobs();
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

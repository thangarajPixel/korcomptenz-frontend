import { NextResponse } from "next/server";
import { fetchDarwinboxJobDetail } from "@/lib/darwinbox";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { job_id } = body;

    if (!job_id) {
      return NextResponse.json(
        { message: "job_id is required" },
        { status: 400 }
      );
    }

    const data = await fetchDarwinboxJobDetail(job_id);

    return NextResponse.json(data);
  } 
catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Unexpected error occurred" },
      { status: 500 }
    );
  }

}
import { NextResponse } from "next/server";
import { submitDarwinboxJobApply } from "@/lib/darwinbox";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { job_id, applicant_fields } = body;

    if (!job_id || !applicant_fields) {
      return NextResponse.json(
        { message: "job_id and applicant_fields are required" },
        { status: 400 }
      );
    }

    const data = await submitDarwinboxJobApply({
      job_id,
      applicant_fields,
    });

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
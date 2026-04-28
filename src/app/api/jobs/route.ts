import { fetchDarwinboxJobs } from "@/lib/darwinbox";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetchDarwinboxJobs();
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

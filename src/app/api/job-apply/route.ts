import { NextResponse } from "next/server";
import { submitDarwinboxJobApply } from "@/lib/darwinbox";

function formatDOB(dob: string) {
  const parts = dob.split("-");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return dob;
}

function getString(
  obj: Record<string, unknown>,
  key: string
): string | undefined {
  const value = obj[key];
  return typeof value === "string" ? value : undefined;
}

function getNumber(
  obj: Record<string, unknown>,
  key: string
): number | undefined {
  const value = obj[key];
  return typeof value === "number" ? value : undefined;
}

function getBoolean(
  obj: Record<string, unknown>,
  key: string
): boolean | undefined {
  const value = obj[key];
  return typeof value === "boolean" ? value : undefined;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      job_id,
      first_name,
      middle_name,
      last_name,
      gender,
      email,
      dob,
      mobile_number,
      resume,
    } = body;

    if (!first_name || !last_name || !email || !job_id || !mobile_number  || !gender || !resume) {
      return NextResponse.json(
        { status: "error", message: "Required fields missing." },
        { status: 400 }
      );
    }

    const result = await submitDarwinboxJobApply({
      job_id,
      applicant_fields: {
        firstname: first_name,
        middlename: middle_name || "",
        lastname: last_name,
        gender: gender || "",
        email,
        date_of_birth: formatDOB(dob),
        phone: mobile_number || "",
        resume: resume || "",
      },
    });

    // ✅ Detect Darwinbox rejection
  if (isObject(result.body)) {
  const statusNumber = getNumber(result.body, "status");
  const statusString = getString(result.body, "status");
  const success = getBoolean(result.body, "success");
  const message = getString(result.body, "message");

  if (
    statusNumber === 0 ||
    statusString === "error" ||
    success === false ||
    (message && message.toLowerCase().includes("error"))
  ) {
    return NextResponse.json(
      {
        status: "error",
        message: message || "Darwinbox rejected the application",
        darwinbox: result.body,
      },
      { status: 400 }
    );
  }
}
    return NextResponse.json({
      status: "success",
      darwinbox: result.body,
    });
  } catch (error: unknown) {
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
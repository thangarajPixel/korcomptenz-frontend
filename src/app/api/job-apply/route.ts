import { NextResponse } from "next/server";
import { submitDarwinboxJobApply } from "@/lib/darwinbox";
import { clientIp, rateLimit, readJsonBody } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 3 * 1024 * 1024;
const MAX_RESUME_CHARS = 2.8 * 1024 * 1024;

function formatDOB(dob: string) {
  const parts = dob.split("-");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return dob;
}

function getString(
  obj: Record<string, unknown>,
  key: string,
): string | undefined {
  const value = obj[key];
  return typeof value === "string" ? value : undefined;
}

function getNumber(
  obj: Record<string, unknown>,
  key: string,
): number | undefined {
  const value = obj[key];
  return typeof value === "number" ? value : undefined;
}

function getBoolean(
  obj: Record<string, unknown>,
  key: string,
): boolean | undefined {
  const value = obj[key];
  return typeof value === "boolean" ? value : undefined;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

type JobApplyBody = {
  job_id?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  gender?: string;
  email?: string;
  dob?: string;
  mobile_number?: string;
  resume?: string;
};

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    if (!rateLimit(`job-apply:${ip}`, 5, 60_000)) {
      return NextResponse.json(
        { status: "error", message: "Too many requests." },
        { status: 429 },
      );
    }

    const parsed = await readJsonBody<JobApplyBody>(req, MAX_BODY_BYTES);
    if (!parsed.ok) {
      return NextResponse.json(
        { status: "error", message: parsed.message },
        { status: parsed.status },
      );
    }

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
    } = parsed.body;

    if (
      !first_name ||
      !last_name ||
      !email ||
      !job_id ||
      !mobile_number ||
      !gender ||
      !resume
    ) {
      return NextResponse.json(
        { status: "error", message: "Required fields missing." },
        { status: 400 },
      );
    }

    if (resume.length > MAX_RESUME_CHARS) {
      return NextResponse.json(
        { status: "error", message: "Resume is too large." },
        { status: 413 },
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
        date_of_birth: formatDOB(dob ?? ""),
        phone: mobile_number || "",
        resume: resume || "",
      },
    });

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
            message: message || "Application could not be submitted.",
          },
          { status: 400 },
        );
      }
    }

    return NextResponse.json({
      status: "success",
    });
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

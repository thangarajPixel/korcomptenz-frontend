import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "asset",
    "report",
    "Becoming-An-Intelligent-Healthcare-Organization-Is-An-Attainable-Goal-Not-A-Lost-Cause.pdf"
  );

  const file = fs.readFileSync(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment",
    },
  });
}
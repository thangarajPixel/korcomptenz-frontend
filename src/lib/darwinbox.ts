// src/lib/darwinbox.ts

// 1️⃣ STEP 1 – Generate Token (BASE)
export async function getDarwinboxToken() {
  const res = await fetch(
    `${process.env.DARWINBOX_BASE_URL}/oauth/v1token`,
    {
      method: "POST", // ✅ FIX HERE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.DARWINBOX_CLIENT_ID,
        client_secret: process.env.DARWINBOX_CLIENT_SECRET,
        grant_type: "authorization_code",
        code: process.env.DARWINBOX_CODE,
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Token API failed: ${err}`);
  }

  return res.json(); // { access_token, expires_in, ... }
}

// 2️⃣ STEP 2 – Job Listing (USES TOKEN)
export async function fetchDarwinboxJobs() {
  const tokenData = await getDarwinboxToken();

  const res = await fetch(
    `${process.env.DARWINBOX_BASE_URL}/JobsApiv3/Joblist`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: tokenData.access_token,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}

// ✅ Job Detail API
export async function fetchDarwinboxJobDetail(job_id: string) {
  const tokenData = await getDarwinboxToken();

  const res = await fetch(
    `${process.env.DARWINBOX_BASE_URL}/JobsApiv3/Jobdetail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: tokenData.access_token,
      },
      body: JSON.stringify({ job_id }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Job detail API failed: ${error}`);
  }

  return res.json();
}

// ✅ Apply Job API
export async function submitDarwinboxJobApply(payload: {
  job_id: string;
  applicant_fields: {
    firstname: string;
    middlename?: string;
    lastname: string;
    gender: string;
    email: string;
    date_of_birth: string;
    phone: string;
    resume?: string;
  };
}) {
  const tokenData = await getDarwinboxToken();

  const res = await fetch(
    `${process.env.DARWINBOX_BASE_URL}/JobsApiv3/submitjob`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: tokenData.access_token,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Apply job failed: ${error}`);
  }

  return res.json();
}
type TokenResponse = {
  access_token: string;
  expires_in?: number;
};

let cachedToken: { access_token: string; expiresAt: number } | null = null;
let jobsCache: { data: unknown; expiresAt: number } | null = null;

const JOBS_TTL_MS = 5 * 60 * 1000;

export async function getDarwinboxToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return { access_token: cachedToken.access_token };
  }

  const res = await fetch(`${process.env.DARWINBOX_BASE_URL}/oauth/v1token`, {
    method: "POST",
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
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Token API failed: ${err}`);
  }

  const data = (await res.json()) as TokenResponse;
  const ttlMs = Math.max(30_000, ((data.expires_in ?? 300) - 30) * 1000);
  cachedToken = {
    access_token: data.access_token,
    expiresAt: Date.now() + ttlMs,
  };
  return data;
}

export async function fetchDarwinboxJobs() {
  if (jobsCache && Date.now() < jobsCache.expiresAt) {
    return jobsCache.data;
  }

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
    },
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  const data = await res.json();
  jobsCache = { data, expiresAt: Date.now() + JOBS_TTL_MS };
  return data;
}

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
    },
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Job detail API failed: ${error}`);
  }

  return res.json();
}

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
    },
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Apply job failed: ${error}`);
  }

  return res.json();
}

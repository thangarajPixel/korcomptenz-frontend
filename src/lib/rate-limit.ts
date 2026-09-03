const hits = new Map<string, number[]>();

export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return req.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  const timestamps = (hits.get(key) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= limit) {
    hits.set(key, timestamps);
    return false;
  }
  timestamps.push(now);
  hits.set(key, timestamps);
  return true;
}

export async function readJsonBody<T>(
  req: Request,
  maxBytes: number,
): Promise<{ ok: true; body: T } | { ok: false; status: number; message: string }> {
  const contentLength = Number(req.headers.get("content-length") ?? "0");
  if (contentLength > maxBytes) {
    return { ok: false, status: 413, message: "Request body too large." };
  }

  const text = await req.text();
  if (text.length > maxBytes) {
    return { ok: false, status: 413, message: "Request body too large." };
  }

  try {
    return { ok: true, body: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: 400, message: "Invalid JSON body." };
  }
}

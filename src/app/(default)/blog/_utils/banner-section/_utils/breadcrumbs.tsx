"use client";

import Link from "next/link";

export default function BreadcrumbFromUrl({ slug }: { slug: string }) {
  const segments = [slug];

  const formatLabel = (segment: string) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-white text-2xl">
        <li>
          <Link href="/" className="hover:underline opacity-80">
            Home
          </Link>
        </li>
        <li>
          <Link href="/insights/blog" className="hover:underline opacity-80">
            / Blog
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={href} className="flex items-center gap-2">
              <span className="opacity-60">/</span>

              {isLast ? (
                <span className="font-semibold">{formatLabel(segment)}</span>
              ) : (
                <Link href={href} className="hover:underline opacity-80">
                  {formatLabel(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

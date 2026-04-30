"use client";

import { Navbar } from "./navbar";

export function Header({ data }: { data: LayoutType | null }) {
  return <Navbar data={data} />;
}

"use client";

import React from "react";
import { Navbar } from "./navbar";

export function Header({ data }: { data: LayoutType | null }) {
  return <Navbar data={data} />;
}

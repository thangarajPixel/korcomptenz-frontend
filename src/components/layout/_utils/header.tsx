"use client";

import React from "react";
import { Navbar } from "./navbar";
import type { LayoutType } from "@/types/global-page-types";

export function Header({ data }: { data: LayoutType }) {
  return <Navbar data={data} />;
}

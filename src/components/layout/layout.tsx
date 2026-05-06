"use client";

import React from "react";
import { Header, Footer } from "./_utils";
import ScrollTopButton from "../ui/scroll-top";

interface LayoutProps {
  children: React.ReactNode;
  data: LayoutType | null;
}

export default function Layout({ children, data }: LayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header data={data} />
      <main className="flex-1">{children}</main>
      <Footer data={data} />
      <ScrollTopButton />
    </div>
  );
}

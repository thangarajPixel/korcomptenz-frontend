"use client";

import React from "react";
import { Header, Footer } from "./_utils";
import ScrollTopButton from "../ui/scroll-top";

interface ServerLayoutProps {
  children: React.ReactNode;
  data: LayoutType | null;
}

export default function ServerLayout({ children, data }: ServerLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header data={data} />
      <main className="flex-1">{children}</main>
      <Footer data={data} />
      <ScrollTopButton />
    </div>
  );
}

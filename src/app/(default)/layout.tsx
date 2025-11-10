import Layout from "@/components/layout"
import React from "react"

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <Layout>
    {children}
  </Layout>
}
import Layout from "@/components/layout"
import React from "react"

export default async function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <Layout>
    {children}
  </Layout>
}
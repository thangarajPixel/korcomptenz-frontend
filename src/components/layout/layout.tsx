import React from 'react'
import { Header, Footer } from './_utils'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh  flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
import React from 'react'
import { Header, Footer } from './_utils'
import { getLayoutService } from '@/services'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const api = await getLayoutService()
  console.log(api, 'api')
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
'use client'
import { getHomeService } from '@/services'
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    getHomeService()
  }, [])
  return (
    <div>Page</div>
  )
}

export default Page
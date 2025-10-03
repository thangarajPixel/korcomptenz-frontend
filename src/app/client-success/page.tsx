import React from 'react'
import { ClientSuccessFilter, ClientSuccessBanner, ClientSuccessList } from './_utils'

const Page = () => {
  return (
    <React.Fragment>
      <ClientSuccessBanner />
      <ClientSuccessFilter />
      <ClientSuccessList />
    </React.Fragment>
  )
}

export default Page
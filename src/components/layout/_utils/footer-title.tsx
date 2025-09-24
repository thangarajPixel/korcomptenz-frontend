import React from 'react'

const FooterTitle = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-primary font-semibold text-3xl  border-b border-primary  pb-2">
        {title}
      </h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  )
}

export default FooterTitle
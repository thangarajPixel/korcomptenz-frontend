import React from 'react'
import Link from 'next/link'

type Props = {
  link: string,
  children: React.ReactNode
}

const FooterDescription = ({ link = '#', children }: Props) => {
  return (
    <li>
      <Link
        href={link}
        className="text-light-white hover:text-primary font-semibold text-lg transition-all duration-300 block"
      >
        {children}
      </Link>
    </li>
  )
}

export default FooterDescription
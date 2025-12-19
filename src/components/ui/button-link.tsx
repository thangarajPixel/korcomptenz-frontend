import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from './button'
import type { VariantProps } from 'class-variance-authority'

const ButtonLink = ({ children = "", buttonProps, isTargetNew = false, link = "#" }: Omit<ButtonType, 'text'> & {
  children: React.ReactNode,
  buttonProps?: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    arrow?: boolean;
    disabled?: boolean;
  } & import("motion/react").HTMLMotionProps<"button"> &
  VariantProps<typeof buttonVariants>
}) => {
  return (
    <Link href={link || "#"} target={isTargetNew ? '_blank' : undefined} >
      <Button {...buttonProps}>{children}</Button>
    </Link>
  )
}

export default ButtonLink
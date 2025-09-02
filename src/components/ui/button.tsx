import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from 'motion/react';
import { cn } from "@/lib/utils";
import { Loader2,ChevronRight } from 'lucide-react';

const buttonVariants = cva(
  "cursor-pointer rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
  {
    variants: {
      variant: {
        default:
        "bg-primary text-primary-foreground shadow-xs border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary  transition-all duration-300 ease-out",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-primary hover:bg-gray-100 text-base"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 ",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        xl: "h-16 px-8 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  arrow,
  isLoading,
  disabled,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
     arrow?: boolean;
    disabled?: boolean;
  } & import('motion/react').HTMLMotionProps<'button'> & VariantProps<typeof buttonVariants>) {

  return (
    <motion.button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      whileHover={{ scale: 1.03, opacity: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0.99 }}
      disabled={isLoading || disabled}
    >
      <span className="relative flex items-center justify-center  gap-1">
        {isLoading
          ? (
            <span className="inline-flex h-6 w-full items-center justify-center gap-2">
              {children}
              <Loader2 className="mt-[-4px] size-4 animate-spin" />

            </span>
          )
          : (<>
           { children}
             {arrow && <ChevronRight className="size-4 font-bold" />}
              </>
          )}
      </span>
      {' '}

    </motion.button>
  );
}

export { Button, buttonVariants };

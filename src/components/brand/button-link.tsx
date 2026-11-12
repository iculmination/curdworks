import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]

type Props = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    /** Show the round arrow badge at the end */
    arrow?: boolean
  }

/** Next.js Link styled as a Button, with the signature round arrow. */
export function ButtonLink({ className, variant, size, arrow = false, children, ...props }: Props) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
      {arrow && <ArrowBadge variant={variant} large={size === "lg"} />}
    </Link>
  )
}

const filled: ButtonVariant[] = ["default", "accent", "secondary", undefined, null]

export function ArrowBadge({
  variant,
  large,
  className,
}: {
  variant?: ButtonVariant
  large?: boolean
  className?: string
}) {
  return (
    <span
      data-icon="inline-end"
      className={cn(
        "grid place-items-center rounded-full transition-transform duration-300 group-hover/button:rotate-45",
        large ? "size-10" : "size-8",
        filled.includes(variant)
          ? "bg-background text-foreground"
          : "bg-foreground text-background group-hover/button:bg-background group-hover/button:text-foreground",
        className
      )}
    >
      <ArrowUpRightIcon className="size-4" />
    </span>
  )
}

import { cn } from "@/lib/utils"

/** Small mono label above headings: "(02) — From milk to masterpiece" */
export function Eyebrow({
  index,
  children,
  className,
  ...props
}: {
  index?: string
  children: React.ReactNode
} & React.ComponentProps<"p">) {
  return (
    <p className={cn("mono-label flex items-center gap-3 text-muted-foreground", className)} {...props}>
      {index && <span className="text-accent">({index})</span>}
      <span aria-hidden className="h-px w-8 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  )
}

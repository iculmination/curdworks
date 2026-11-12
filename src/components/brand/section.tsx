import { cn } from "@/lib/utils"

export type SectionTheme = "cream" | "paper" | "cave" | "rind" | "wax"

type SectionProps = React.ComponentProps<"section"> & {
  theme?: SectionTheme
  /** Make the section at least one viewport tall (landing sections) */
  fullscreen?: boolean
  /** Hook for future scroll animations */
  name?: string
}

/**
 * Top-level page block. Applies a color theme (re-maps all semantic
 * tokens) and optional full-viewport height.
 */
export function Section({
  theme = "cream",
  fullscreen = false,
  name,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-section={name}
      data-theme={theme}
      className={cn(
        `theme-${theme}`,
        "relative isolate overflow-hidden bg-background text-foreground",
        fullscreen && "flex min-h-svh flex-col justify-center",
        "py-[clamp(4.5rem,10vw,9rem)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("container-site", className)} {...props} />
}

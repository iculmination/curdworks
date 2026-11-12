import { cn } from "@/lib/utils"

/** Giant outlined section number sitting behind content. */
export function BigIndex({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 font-display text-[clamp(14rem,32vw,34rem)] leading-[0.75] tracking-[-0.07em] text-transparent select-none",
        "[-webkit-text-stroke:1px_color-mix(in_oklch,var(--foreground)_16%,transparent)]",
        className
      )}
      style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
    >
      {children}
    </span>
  )
}

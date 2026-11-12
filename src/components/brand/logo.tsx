import { cn } from "@/lib/utils"

/**
 * Wordmark: CURDW◯RKS — the "O" is a cheese eye.
 * `size` scales with font-size so it can be used from header to giant footer.
 */
export function Logo({
  className,
  title = "Curdworks",
}: {
  className?: string
  title?: string
}) {
  return (
    <span
      aria-label={title}
      role="img"
      translate="no"
      className={cn(
        "inline-flex items-baseline font-display leading-none font-semibold tracking-[-0.04em] select-none",
        className
      )}
      style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
    >
      <span aria-hidden>CURDW</span>
      <span
        aria-hidden
        className="hole mx-[0.04em] inline-block shrink-0 size-[0.72em] translate-y-[0.02em] self-center bg-accent"
      />
      <span aria-hidden>RKS</span>
    </span>
  )
}

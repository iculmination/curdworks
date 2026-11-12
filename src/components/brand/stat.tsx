import { cn } from "@/lib/utils"

/** Big number + unit + caption. `value` stays a string for later count-up. */
export function Stat({
  value,
  unit,
  label,
  className,
  size = "lg",
}: {
  value: string
  unit?: string
  label: string
  className?: string
  size?: "md" | "lg"
}) {
  return (
    <div className={cn("flex flex-col gap-3 border-t border-current/20 pt-5", className)}>
      <p
        className={cn(
          "flex items-start font-display leading-[0.85] tracking-[-0.05em]",
          size === "lg" ? "text-[clamp(3.5rem,7vw,7rem)]" : "text-[clamp(2.5rem,4vw,4rem)]"
        )}
        style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
      >
        <span data-stat-value>{value}</span>
        {unit && <span className="mt-[0.15em] ml-1 text-[0.35em] tracking-normal text-accent">{unit}</span>}
      </p>
      <p className="max-w-[26ch] text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

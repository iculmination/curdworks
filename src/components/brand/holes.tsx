import { cn } from "@/lib/utils"

type Hole = {
  /** position & size in % of the parent box */
  x: number
  y: number
  size: number
  tone?: "bg" | "accent" | "muted" | "outline"
}

const toneClass = {
  bg: "bg-background",
  accent: "bg-accent",
  muted: "bg-foreground/8",
  outline: "border border-current/25 shadow-none!",
}

/**
 * Decorative cluster of cheese "eyes". Positioned absolutely inside
 * a relative parent. Each hole carries data-hole for future animation.
 */
export function HoleCluster({
  holes,
  className,
}: {
  holes: Hole[]
  className?: string
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10", className)}>
      {holes.map((h, i) => (
        <span
          key={i}
          data-hole={i}
          className={cn("hole absolute block -translate-1/2", toneClass[h.tone ?? "muted"])}
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            width: `${h.size}%`,
            aspectRatio: "1",
          }}
        />
      ))}
    </div>
  )
}

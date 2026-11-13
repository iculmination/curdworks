import type { Visual } from "@/content/visuals"
import { cn } from "@/lib/utils"
import { ImageSlot } from "./image-slot"

export type TimelineEntry = { year: string; title: string; text: string; image?: string }

/** Row of the company timeline: big year | text | optional image. */
export function TimelineItem({
  entry,
  visual,
  className,
}: {
  entry: TimelineEntry
  visual?: Visual
  className?: string
}) {
  return (
    <li
      data-reveal
      className={cn(
        "grid gap-6 border-t border-border py-10 md:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,3fr)] md:gap-10",
        className
      )}
    >
      <p
        className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.85] tracking-[-0.05em]"
        style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
      >
        {entry.year}
      </p>
      <div className="flex flex-col gap-3">
        <h3 className="display-3">{entry.title}</h3>
        <p className="text-pretty text-muted-foreground">{entry.text}</p>
      </div>
      {entry.image && <ImageSlot label={entry.image} visual={visual} ratio="4/3" className="w-full md:max-w-xs md:justify-self-end" />}
    </li>
  )
}

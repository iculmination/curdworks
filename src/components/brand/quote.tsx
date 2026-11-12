import { cn } from "@/lib/utils"

export type QuoteData = { text: string; author: string; source: string }

/** Press / testimonial quote with oversized serif quotation mark. */
export function Quote({ quote, className }: { quote: QuoteData; className?: string }) {
  return (
    <figure data-reveal className={cn("relative flex flex-col gap-6 pt-10", className)}>
      <span
        aria-hidden
        className="absolute -top-4 left-0 font-display text-[7rem] leading-none text-accent"
      >
        “
      </span>
      <blockquote className="display-3 text-pretty">{quote.text}</blockquote>
      <figcaption className="mono-label text-muted-foreground">
        {quote.author} — <span className="text-foreground">{quote.source}</span>
      </figcaption>
    </figure>
  )
}

import type { Visual } from "@/content/visuals"
import { cn } from "@/lib/utils"
import { ImageSlot } from "./image-slot"
import { SpecList, type Spec } from "./spec-list"

export type ProcessStepData = {
  number: string
  title: string
  text: string
  specs: Spec[]
  image: string
}

/** One stage of the cheesemaking process — a tall card for a horizontal track. */
export function ProcessStep({
  step,
  visual,
  className,
}: {
  step: ProcessStepData
  visual?: Visual
  className?: string
}) {
  return (
    <article
      data-step={step.number}
      className={cn(
        "relative flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-6 text-card-foreground md:p-8",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="font-display text-[clamp(4rem,7vw,6.5rem)] leading-[0.8] tracking-[-0.06em] text-accent"
          style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
        >
          {step.number}
        </span>
        <ImageSlot label={step.image} visual={visual} shape="hole" className="w-24 shrink-0 md:w-28" />
      </div>
      <h3 className="display-3">{step.title}</h3>
      <p className="text-pretty text-muted-foreground">{step.text}</p>
      <SpecList specs={step.specs} className="mt-auto border-t border-border pt-5" />
    </article>
  )
}

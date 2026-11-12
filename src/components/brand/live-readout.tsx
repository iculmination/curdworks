import { cn } from "@/lib/utils"
import { SpecList, type Spec } from "./spec-list"

/** Sensor panel: "● LIVE  Cave 03" + readings. Values are static for now. */
export function LiveReadout({
  title,
  status,
  readings,
  className,
}: {
  title: string
  status: string
  readings: Spec[]
  className?: string
}) {
  return (
    <div
      data-live-readout
      className={cn(
        "flex flex-col gap-5 rounded-3xl border border-border bg-background/85 p-6 text-foreground backdrop-blur-md",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="display-3">{title}</p>
        <span className="mono-label inline-flex items-center gap-2 text-accent">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {status}
        </span>
      </div>
      <SpecList specs={readings} />
    </div>
  )
}

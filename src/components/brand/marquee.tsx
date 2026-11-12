import { Fragment } from "react"
import { cn } from "@/lib/utils"

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
export function Marquee({
  items,
  className,
  duration = 40,
  separator = "●",
}: {
  items: string[]
  className?: string
  duration?: number
  separator?: React.ReactNode
}) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item, i) => (
        <Fragment key={i}>
          <span className="whitespace-nowrap">{item}</span>
          <span className="text-[0.5em] text-accent">{separator}</span>
        </Fragment>
      ))}
    </div>
  )
  return (
    <div
      className={cn("group flex overflow-hidden motion-reduce:[&>div]:animate-none!", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

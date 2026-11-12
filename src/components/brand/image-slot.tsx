import Image from "next/image"
import { ImageIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type ImageShape = "rect" | "circle" | "arch" | "hole" | "pill"

const shapeClass: Record<ImageShape, string> = {
  rect: "rounded-3xl",
  circle: "rounded-full",
  hole: "hole rounded-full",
  arch: "rounded-t-full rounded-b-3xl",
  pill: "rounded-full",
}

type Props = {
  /** What should be photographed here — shown on the placeholder */
  label: string
  /** CSS aspect-ratio, e.g. "4/5", "16/9", "1" — or "auto" to fill the parent (set a height) */
  ratio?: string
  shape?: ImageShape
  src?: string
  alt?: string
  priority?: boolean
  sizes?: string
  /** Hide the caption text (small slots) — label stays as aria-label */
  compact?: boolean
  className?: string
}

/**
 * Reserved space for imagery. Renders a hatched, labelled placeholder
 * until a `src` is provided, then switches to next/image (fill, cover).
 */
export function ImageSlot({
  label,
  ratio = "4/5",
  shape = "rect",
  src,
  alt,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  compact = false,
  className,
}: Props) {
  const isRound = shape === "circle" || shape === "hole"
  return (
    <figure
      data-slot="image-slot"
      className={cn("relative overflow-hidden", shapeClass[shape], className)}
      style={{ aspectRatio: isRound ? "1" : ratio === "auto" ? undefined : ratio }}
      aria-label={compact && !src ? label : undefined}
    >
      {src ? (
        <Image src={src} alt={alt ?? label} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div className="hatch absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-foreground/55">
          <ImageIcon className="size-5" strokeWidth={1.25} aria-hidden />
          {!compact && (
            <figcaption className="mono-label max-w-[22ch] text-[0.62rem] leading-relaxed">
              {label}
            </figcaption>
          )}
          {!isRound && !compact && ratio !== "auto" && (
            <span className="mono-label absolute right-4 bottom-3 text-[0.58rem] opacity-60">
              {ratio.replace("/", ":")}
            </span>
          )}
        </div>
      )}
    </figure>
  )
}

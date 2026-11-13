import { existsSync } from "node:fs"
import { join } from "node:path"
import Image from "next/image"

import { cn } from "@/lib/utils"
import type { Visual } from "@/content/visuals"
import { Art, artFromLabel, type ArtSpec } from "./art"

export type ImageShape = "rect" | "circle" | "arch" | "hole" | "pill"

const shapeClass: Record<ImageShape, string> = {
  rect: "rounded-3xl",
  circle: "rounded-full",
  hole: "hole rounded-full",
  arch: "rounded-t-full rounded-b-3xl",
  pill: "rounded-full",
}

type Props = {
  /** What the image shows — used as alt text / aria-label */
  label: string
  /** CSS aspect-ratio, e.g. "4/5", "16/9", "1" — or "auto" to fill the parent (set a height) */
  ratio?: string
  shape?: ImageShape
  /** Path under /public. Used only if the file exists, otherwise the art is shown. */
  src?: string
  /** Generated illustration; defaults to a motif picked from the label */
  art?: ArtSpec
  /** Shorthand for `art` + `src` from content/visuals */
  visual?: Visual
  alt?: string
  priority?: boolean
  sizes?: string
  className?: string
}

const photoExts = ["", ".webp", ".jpg", ".jpeg", ".png", ".avif"]

/**
 * Photos are optional: drop a file into /public and it replaces the art.
 * `src` may omit the extension ("/photos/cave" finds cave.jpg, cave.png…).
 */
function findPhoto(src?: string): string | undefined {
  if (!src) return undefined
  for (const ext of photoExts) {
    if (existsSync(join(process.cwd(), "public", src + ext))) return src + ext
  }
}

/**
 * Image frame with brand shapes. Shows a real photo when one is present in
 * /public, otherwise a generated illustration in the brand palette.
 */
export function ImageSlot({
  label,
  ratio = "4/5",
  shape = "rect",
  src,
  art,
  visual,
  alt,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: Props) {
  const isRound = shape === "circle" || shape === "hole"
  const photo = findPhoto(src ?? visual?.photo)
  return (
    <figure
      data-slot="image-slot"
      className={cn("grain relative overflow-hidden bg-muted", shapeClass[shape], className)}
      style={{ aspectRatio: isRound ? "1" : ratio === "auto" ? undefined : ratio }}
      role={photo ? undefined : "img"}
      aria-label={photo ? undefined : (alt ?? label)}
    >
      {photo ? (
        <Image src={photo} alt={alt ?? label} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <Art {...(art ?? visual?.art ?? artFromLabel(label))} />
      )}
    </figure>
  )
}

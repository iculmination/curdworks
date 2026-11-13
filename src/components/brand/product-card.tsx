import type { Visual } from "@/content/visuals"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ImageSlot } from "./image-slot"
import { SpecList, type Spec } from "./spec-list"

export type ProductData = {
  name: string
  family: string
  tagline: string
  specs: Spec[]
  image: string
  tone: "wax" | "rind" | "mold" | "ghost"
}

/** Cheese presented like a flagship product: hero image + spec sheet. */
export function ProductCard({
  product,
  visual,
  className,
}: {
  product: ProductData
  visual?: Visual
  className?: string
}) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-5 rounded-[2rem] border border-border bg-card p-4 text-card-foreground transition-colors md:p-5",
        className
      )}
    >
      <div className="relative">
        <ImageSlot label={product.image} visual={visual} ratio="1/1" shape="arch" />
        <Badge variant={product.tone} className="absolute top-4 left-4">
          {product.family}
        </Badge>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <h3 className="display-3">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.tagline}</p>
      </div>
      <SpecList specs={product.specs} className="mt-auto px-2 pb-2" />
    </article>
  )
}

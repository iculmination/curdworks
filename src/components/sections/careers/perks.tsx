import { visuals } from "@/content/visuals"
import { ImageSlot } from "@/components/brand/image-slot"
import { Quote } from "@/components/brand/quote"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Badge } from "@/components/ui/badge"
import type { CareersDict } from "@/content/types"

/**
 * Bento grid (lg, 4 cols):
 *   [ image 2×2 ][ p1 ][ p2 ]
 *   [          ][ p3 ][ p4 ]
 *   [ p5 ][ p6 ][  quote 2  ]
 */
export function CareersPerks({ t }: { t: CareersDict["perks"] }) {
  const [first, rest] = [t.items.slice(0, 4), t.items.slice(4)]

  return (
    <Section theme="cream" name="perks">
      <Container className="flex flex-col gap-16">
        <SectionHeading index={t.index} eyebrow={t.eyebrow} title={<Rich text={t.title} />} lead={t.lead} />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li data-reveal className="md:col-span-2 lg:row-span-2">
            <ImageSlot label={t.image} visual={visuals.careers.perks} ratio="auto" className="h-full min-h-80" />
          </li>
          {first.map((p, i) => (
            <Perk key={p.title} perk={p} n={i + 1} />
          ))}
          {rest.map((p, i) => (
            <Perk key={p.title} perk={p} n={i + 5} />
          ))}
          <li data-reveal className="theme-rind flex items-end rounded-[1.75rem] bg-background p-8 text-foreground md:col-span-2">
            <Quote quote={t.quote} />
          </li>
        </ul>
      </Container>
    </Section>
  )
}

function Perk({ perk, n }: { perk: CareersDict["perks"]["items"][number]; n: number }) {
  return (
    <li data-reveal className="flex min-h-72 flex-col gap-4 rounded-[1.75rem] bg-card p-7 text-card-foreground">
      <div className="flex items-center justify-between gap-3">
        <span className="hole grid size-11 place-items-center bg-accent font-mono text-xs text-accent-foreground">
          0{n}
        </span>
        <Badge variant="outline">{perk.tag}</Badge>
      </div>
      <h3 className="display-3 mt-auto text-balance">{perk.title}</h3>
      <p className="text-sm text-pretty text-muted-foreground">{perk.text}</p>
    </li>
  )
}

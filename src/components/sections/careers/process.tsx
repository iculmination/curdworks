import { BadgeCheckIcon } from "lucide-react"

import { HoleCluster } from "@/components/brand/holes"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Badge } from "@/components/ui/badge"
import type { CareersDict } from "@/content/types"

export function CareersProcess({ t }: { t: CareersDict["process"] }) {
  return (
    <Section theme="cave" fullscreen name="hiring" id="process">
      <HoleCluster
        holes={[
          { x: 94, y: 14, size: 10, tone: "muted" },
          { x: 70, y: 4, size: 2.5, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-20">
        <SectionHeading index={t.index} eyebrow={t.eyebrow} title={<Rich text={t.title} />} lead={t.lead} />

        <ol className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* connecting rail through the holes (desktop) */}
          <span
            aria-hidden
            className="absolute top-12 right-[12.5%] left-[12.5%] hidden border-t border-dashed border-foreground/25 lg:block"
          />
          {t.steps.map((s) => (
            <li key={s.number} data-step={s.number} className="relative flex flex-col gap-5">
              <span
                className="hole relative grid size-24 place-items-center bg-accent font-display text-4xl text-accent-foreground lg:mx-auto"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
              >
                {s.number}
              </span>
              <div className="flex flex-col gap-3 lg:items-center lg:text-center">
                <Badge variant="outline" className="w-fit">{s.duration}</Badge>
                <h3 className="display-3">{s.title}</h3>
                <p className="max-w-xs text-pretty text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="flex items-center gap-3 self-start rounded-full bg-card px-6 py-4 text-card-foreground lg:self-center">
          <BadgeCheckIcon className="size-5 shrink-0 text-accent" />
          {t.promise}
        </p>
      </Container>
    </Section>
  )
}

import { visuals } from "@/content/visuals"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Stat } from "@/components/brand/stat"
import type { AboutDict } from "@/content/types"
import { cn } from "@/lib/utils"

/* Bento layout for 5 images on large screens */
const bento = [
  "col-span-2 row-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
]

export function AboutFacility({ t }: { t: AboutDict["facility"] }) {
  return (
    <Section theme="rind" fullscreen name="facility">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index={t.index}
            eyebrow={t.eyebrow}
            title={<Rich text={t.title} />}
            className="lg:col-span-7"
          />
          <p className="lead text-pretty text-muted-foreground lg:col-span-4 lg:col-start-9">{t.lead}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {t.stats.map((s) => (
            <Stat key={s.label} {...s} size="md" />
          ))}
        </div>

        <div className="grid auto-rows-[clamp(9rem,17vw,15rem)] grid-cols-2 gap-4 lg:grid-cols-4">
          {t.gallery.map((label, i) => (
            <ImageSlot
              key={label}
              label={label}
              visual={visuals.about.facility[i]}
              ratio="auto"
              className={cn("h-full", bento[i], i === 0 && "max-lg:col-span-2")}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

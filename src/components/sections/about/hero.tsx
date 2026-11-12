import { Eyebrow } from "@/components/brand/eyebrow"
import { HoleCluster } from "@/components/brand/holes"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { Stat } from "@/components/brand/stat"
import type { AboutDict } from "@/content/types"

export function AboutHero({ t }: { t: AboutDict["hero"] }) {
  return (
    <Section theme="cream" fullscreen name="about-hero" className="pt-[calc(var(--header-h)+3rem)]">
      <HoleCluster
        holes={[
          { x: 50, y: 12, size: 4, tone: "muted" },
          { x: 60, y: 62, size: 2.5, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-16">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Eyebrow data-hero-fade>{t.eyebrow}</Eyebrow>
            <h1 className="display-hero accent-em text-balance" style={{ fontSize: "clamp(3.2rem, 8vw, 9rem)" }}>
              <Rich text={t.title} />
            </h1>
            <p data-hero-fade className="lead max-w-xl text-pretty text-muted-foreground">{t.lead}</p>
          </div>

          {/* Collage: arch portrait + tilted "archive print" */}
          <div className="relative pb-16 lg:col-span-5 lg:pb-24">
            <ImageSlot label={t.images[0]} ratio="4/5" shape="arch" className="ml-auto w-[82%]" />
            <div data-hero-fade className="absolute bottom-0 left-0 w-[58%] -rotate-3 rounded-[1.75rem] bg-paper p-2.5 shadow-[0_20px_50px_-20px_oklch(0.2_0.02_60/35%)]">
              <ImageSlot label={t.images[1]} ratio="4/3" className="rounded-[1.25rem]" />
            </div>
          </div>
        </div>

        <div data-hero-fade className="grid gap-8 sm:grid-cols-3">
          {t.facts.map((f) => (
            <Stat key={f.label} {...f} size="md" />
          ))}
        </div>
      </Container>
    </Section>
  )
}

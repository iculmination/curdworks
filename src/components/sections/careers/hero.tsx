import { Eyebrow } from "@/components/brand/eyebrow"
import { HoleCluster } from "@/components/brand/holes"
import { visuals } from "@/content/visuals"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { Stat } from "@/components/brand/stat"
import { ArrowBadge } from "@/components/brand/button-link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { CareersDict } from "@/content/types"

export function CareersHero({ t, openCount }: { t: CareersDict["hero"]; openCount: number }) {
  return (
    <Section theme="wax" fullscreen name="careers-hero" className="pt-[calc(var(--header-h)+3rem)]">
      <HoleCluster
        className="max-md:hidden"
        holes={[
          { x: 47, y: 14, size: 3.5, tone: "muted" },
          { x: 4, y: 88, size: 9, tone: "muted" },
          { x: 58, y: 70, size: 2, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-16">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Eyebrow data-hero-fade>{t.eyebrow}</Eyebrow>
            <h1 className="display-hero accent-em text-balance" style={{ fontSize: "clamp(3rem, 7.4vw, 8.5rem)" }}>
              <Rich text={t.title} />
            </h1>
            <p data-hero-fade className="lead max-w-xl text-pretty text-muted-foreground">{t.lead}</p>
            <div data-hero-fade className="flex flex-wrap gap-3">
              <a href="#jobs" className={cn(buttonVariants({ size: "lg" }))}>
                {t.primaryCta}
                <span className="grid size-10 place-items-center rounded-full bg-accent font-mono text-sm text-accent-foreground">
                  {openCount}
                </span>
              </a>
              <a href="#process" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                {t.secondaryCta}
                <ArrowBadge variant="outline" large />
              </a>
            </div>
          </div>

          {/* Collage: tall pill portrait + round "window" overlapping it */}
          <div className="relative mx-auto w-full max-w-md pb-10 lg:col-span-5 lg:max-w-none lg:pb-0">
            <ImageSlot label={t.images[0]} visual={visuals.careers.hero[0]} ratio="3/4" shape="pill" priority className="ml-auto w-[72%]" />
            <ImageSlot
              label={t.images[1]}
              visual={visuals.careers.hero[1]}
              ratio="1"
              shape="circle"
              className="absolute bottom-0 left-0 w-[46%] border-[0.5rem] border-background"
            />
          </div>
        </div>

        <div data-hero-fade className="grid gap-8 sm:grid-cols-3">
          {t.stats.map((s) => (
            <Stat key={s.label} {...s} size="md" />
          ))}
        </div>
      </Container>
    </Section>
  )
}

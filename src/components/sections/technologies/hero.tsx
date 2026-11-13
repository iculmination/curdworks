import { ArrowDownRightIcon } from "lucide-react"

import { Eyebrow } from "@/components/brand/eyebrow"
import { HoleCluster } from "@/components/brand/holes"
import { visuals } from "@/content/visuals"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import type { TechDict } from "@/content/types"

export function TechHero({ t, features }: { t: TechDict["hero"]; features: TechDict["features"] }) {
  return (
    <Section theme="cave" fullscreen name="tech-hero" className="pt-[calc(var(--header-h)+3rem)]">
      <HoleCluster
        holes={[
          { x: 55, y: 10, size: 3, tone: "muted" },
          { x: 2, y: 92, size: 8, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-8">
            <Eyebrow data-hero-fade>{t.eyebrow}</Eyebrow>
            <h1 className="display-hero accent-em text-balance" style={{ fontSize: "clamp(3.2rem, 8vw, 9rem)" }}>
              <Rich text={t.title} />
            </h1>
          </div>
          <ImageSlot
            label={t.image}
            visual={visuals.technologies.hero}
            shape="hole"
            className="mx-auto w-2/3 max-w-sm lg:col-span-4 lg:w-full"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <p data-hero-fade className="lead text-pretty text-muted-foreground lg:col-span-5">{t.lead}</p>

          <nav data-hero-fade aria-label={t.tocLabel} className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7">
            <p className="mono-label text-accent">{t.tocLabel}</p>
            <ol className="grid border-b border-border sm:grid-cols-2 sm:gap-x-8">
              {features.map((f) => (
                <li key={f.id} className="border-t border-border">
                  <a
                    href={`#${f.id}`}
                    className="group flex items-center gap-4 py-4 transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-xs text-muted-foreground">{f.number}</span>
                    <span className="flex-1 text-lg">{f.name}</span>
                    <ArrowDownRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Container>
    </Section>
  )
}

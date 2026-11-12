import { HoleCluster } from "@/components/brand/holes"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import type { AboutDict } from "@/content/types"

export function AboutValues({ t }: { t: AboutDict["values"] }) {
  return (
    <Section theme="cave" fullscreen name="values">
      <HoleCluster
        holes={[
          { x: 97, y: 8, size: 12, tone: "muted" },
          { x: 60, y: 50, size: 2.5, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            index={t.index}
            eyebrow={t.eyebrow}
            title={<Rich text={t.title} />}
            lead={t.lead}
            className="lg:col-span-6"
          />
          <figure className="flex flex-col gap-5 self-end lg:col-span-5 lg:col-start-8">
            <figcaption className="mono-label text-accent">{t.missionLabel}</figcaption>
            <blockquote className="display-3 text-pretty italic">“{t.mission}”</blockquote>
          </figure>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {t.items.map((v) => (
            <li
              key={v.number}
              className="flex min-h-80 flex-col gap-6 rounded-[2rem] border border-border bg-card p-8 text-card-foreground"
            >
              <span className="hole grid size-16 place-items-center bg-accent font-mono text-sm text-accent-foreground">
                {v.number}
              </span>
              <h3 className="display-2 mt-auto">{v.title}</h3>
              <p className="text-pretty text-muted-foreground">{v.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

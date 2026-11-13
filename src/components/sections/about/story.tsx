import { visuals } from "@/content/visuals"
import { BigIndex } from "@/components/brand/big-index"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { TimelineItem } from "@/components/brand/timeline-item"
import type { AboutDict } from "@/content/types"

export function AboutStory({ t }: { t: AboutDict["story"] }) {
  return (
    <Section theme="paper" name="story">
      <BigIndex className="-top-10 -right-6">{t.index}</BigIndex>
      <Container className="flex flex-col gap-16">
        <SectionHeading
          index={t.index}
          eyebrow={t.eyebrow}
          title={<Rich text={t.title} />}
          lead={t.lead}
          className="max-w-4xl"
        />
        <ol className="border-b border-border">
          {t.entries.map((e, i) => (
            <TimelineItem key={e.year} entry={e} visual={visuals.about.timeline[i]} />
          ))}
        </ol>
      </Container>
    </Section>
  )
}

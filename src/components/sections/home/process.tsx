import { ArrowRightIcon } from "lucide-react"

import { BigIndex } from "@/components/brand/big-index"
import { ProcessStep } from "@/components/brand/process-step"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import type { HomeDict } from "@/content/types"

export function HomeProcess({ t }: { t: HomeDict["process"] }) {
  return (
    <Section id="process" theme="paper" fullscreen name="process">
      <BigIndex className="-top-10 -right-6">{t.index}</BigIndex>

      <Container className="grid items-end gap-8 lg:grid-cols-12">
        <SectionHeading
          index={t.index}
          eyebrow={t.eyebrow}
          title={<Rich text={t.title} />}
          className="lg:col-span-7"
        />
        <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
          <p className="lead text-pretty text-muted-foreground">{t.lead}</p>
          <p className="mono-label flex items-center gap-2 text-muted-foreground">
            {t.hint} <ArrowRightIcon className="size-4" />
          </p>
        </div>
      </Container>

      {/* Horizontal track — full-bleed, aligned to the container on the left */}
      <ol
        data-process-track
        className="scrollbar-thin mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pl-(--track-pad) after:block after:w-(--track-pad) after:shrink-0 after:content-['']"
      >
        {t.steps.map((step) => (
          <li key={step.number} className="w-[min(84vw,24rem)] shrink-0 snap-start">
            <ProcessStep step={step} />
          </li>
        ))}
      </ol>
    </Section>
  )
}

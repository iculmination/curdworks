import { ButtonLink } from "@/components/brand/button-link"
import { HoleCluster } from "@/components/brand/holes"
import { ImageSlot } from "@/components/brand/image-slot"
import { LiveReadout } from "@/components/brand/live-readout"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Stat } from "@/components/brand/stat"
import type { HomeDict } from "@/content/types"
import { href, type Locale } from "@/i18n/config"

export function HomeCave({ t, lang }: { t: HomeDict["cave"]; lang: Locale }) {
  return (
    <Section theme="cave" fullscreen name="cave">
      <HoleCluster
        holes={[
          { x: 2, y: 6, size: 10, tone: "muted" },
          { x: 48, y: 96, size: 4, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-5">
            <SectionHeading
              index={t.index}
              eyebrow={t.eyebrow}
              title={<Rich text={t.title} />}
              lead={t.lead}
            />
            <ButtonLink href={href(lang, "/technologies")} variant="accent" size="lg" arrow className="self-start">
              {t.cta}
            </ButtonLink>
          </div>

          <div className="relative lg:col-span-7 lg:col-start-6 lg:pl-10">
            <ImageSlot label={t.image} ratio="5/4" shape="rect" className="rounded-[2.5rem]" />
            <LiveReadout
              {...t.live}
              className="mt-4 sm:absolute sm:-bottom-10 sm:left-0 sm:mt-0 sm:w-80 lg:-left-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {t.stats.map((s) => (
            <Stat key={s.label} {...s} size="md" />
          ))}
        </div>
      </Container>
    </Section>
  )
}

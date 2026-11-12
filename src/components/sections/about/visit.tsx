import { MailIcon, MapPinIcon } from "lucide-react"

import { ArrowBadge } from "@/components/brand/button-link"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { SpecList } from "@/components/brand/spec-list"
import { buttonVariants } from "@/components/ui/button"
import type { AboutDict } from "@/content/types"

export function AboutVisit({ t, address }: { t: AboutDict["visit"]; address: string[] }) {
  return (
    <Section id="visit" theme="wax" fullscreen name="visit">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <SectionHeading index={t.index} eyebrow={t.eyebrow} title={<Rich text={t.title} />} lead={t.lead} />
          <ImageSlot label={t.mapLabel} ratio="16/10" />
          <address className="flex items-start gap-3 not-italic">
            <MapPinIcon className="mt-1 size-4 shrink-0 text-accent" />
            <span className="flex flex-col">
              <span className="mono-label mb-2 text-muted-foreground">{t.addressTitle}</span>
              {address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </address>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7 lg:self-center">
          <article className="flex flex-col gap-6 rounded-[2rem] bg-card p-8 text-card-foreground">
            <h3 className="display-2">{t.tour.title}</h3>
            <SpecList specs={t.tour.specs} />
            <p className="text-sm text-muted-foreground">{t.tour.note}</p>
            <a
              href={`mailto:${t.tour.email}`}
              className={buttonVariants({ size: "lg", className: "self-start" })}
            >
              <MailIcon className="size-4" />
              {t.tour.cta}
              <ArrowBadge large />
            </a>
          </article>
          <article className="flex flex-col gap-6 rounded-[2rem] border border-border p-8">
            <h3 className="display-3">{t.tasting.title}</h3>
            <SpecList specs={t.tasting.specs} />
          </article>
        </div>
      </Container>
    </Section>
  )
}

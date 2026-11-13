import { MailIcon } from "lucide-react"

import { visuals } from "@/content/visuals"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import type { CareersDict } from "@/content/types"
import { ApplyForm } from "./apply-form"

export function CareersApply({ t, jobs }: { t: CareersDict["apply"]; jobs: CareersDict["jobs"]["items"] }) {
  const positions = jobs.map((j) => ({ value: j.id, label: j.title }))

  return (
    <Section theme="cream" name="apply" id="apply" className="scroll-mt-4">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading index={t.index} eyebrow={t.eyebrow} title={<Rich text={t.title} />} lead={t.lead} />

          <div className="flex items-center gap-5 border-t border-border pt-8">
            <ImageSlot label={t.contact.name} visual={visuals.careers.contact} shape="circle" ratio="1" className="w-20 shrink-0" />
            <div className="flex min-w-0 flex-col gap-1">
              <p className="mono-label text-accent">{t.contact.title}</p>
              <p className="font-medium">{t.contact.name}</p>
              <p className="text-sm text-muted-foreground">{t.contact.role}</p>
              <a
                href={`mailto:${t.contact.email}`}
                className="inline-flex items-center gap-1.5 text-sm underline-offset-4 hover:text-accent hover:underline"
              >
                <MailIcon className="size-3.5" />
                {t.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ApplyForm t={t} positions={positions} />
        </div>
      </Container>
    </Section>
  )
}

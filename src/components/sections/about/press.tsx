import { DownloadIcon, MailIcon } from "lucide-react"

import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import type { AboutDict } from "@/content/types"

export function AboutPress({ t }: { t: AboutDict["press"] }) {
  return (
    <Section id="press" theme="paper" name="press">
      <Container className="grid gap-14 lg:grid-cols-12">
        <SectionHeading
          index={t.index}
          eyebrow={t.eyebrow}
          title={<Rich text={t.title} />}
          lead={t.lead}
          size="2"
          className="lg:col-span-5"
        />

        <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
          <ul className="border-b border-border">
            {t.downloads.map((d) => (
              <li key={d.label}>
                <a
                  href="#"
                  className="group flex items-center justify-between gap-6 border-t border-border py-6 transition-colors hover:text-accent"
                >
                  <span className="flex flex-col gap-1">
                    <span className="display-3">{d.label}</span>
                    <span className="mono-label text-muted-foreground">{d.meta}</span>
                  </span>
                  <span className="sr-only">{t.downloadLabel}</span>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full border border-foreground/20 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <DownloadIcon className="size-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 rounded-[2rem] bg-card p-8">
            <p className="mono-label text-accent">{t.contact.title}</p>
            <p className="display-3">{t.contact.name}</p>
            <p className="text-muted-foreground">{t.contact.role}</p>
            <a href={`mailto:${t.contact.email}`} className="mt-2 inline-flex items-center gap-2 font-mono text-sm hover:text-accent">
              <MailIcon className="size-4" /> {t.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

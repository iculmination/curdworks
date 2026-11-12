"use client"

import { useState } from "react"
import { MapPinIcon } from "lucide-react"

import { JobCard } from "@/components/brand/job-card"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { SpecList } from "@/components/brand/spec-list"
import { ArrowBadge } from "@/components/brand/button-link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { CareerJob, CareersDict } from "@/content/types"
import { OPEN_APPLICATION, requestApply } from "./apply-bus"

const ALL = "all"

export function CareersJobs({ t }: { t: CareersDict["jobs"] }) {
  const [job, setJob] = useState<CareerJob | null>(null)
  const [open, setOpen] = useState(false)
  const [applying, setApplying] = useState(false)

  const deptLabel = (id: string) => t.departments.find((d) => d.id === id)?.label ?? id
  const filters = [{ id: ALL, label: t.allLabel }, ...t.departments]
  const jobsFor = (id: string) => (id === ALL ? t.items : t.items.filter((j) => j.dept === id))

  function apply(position: string) {
    setApplying(true)
    setOpen(false)
    requestApply(position)
  }

  return (
    <Section theme="paper" name="jobs" id="jobs" className="scroll-mt-4">
      <Container className="flex flex-col gap-14">
        <SectionHeading index={t.index} eyebrow={t.eyebrow} title={<Rich text={t.title} />} lead={t.lead} />

        <Tabs defaultValue={ALL} className="gap-8">
          <TabsList
            aria-label={t.filterLabel}
            className="scrollbar-thin -mx-(--gutter) w-[calc(100%+2*var(--gutter))] justify-start overflow-x-auto rounded-none bg-transparent px-(--gutter) sm:mx-0 sm:w-fit sm:rounded-full sm:bg-foreground/6 sm:px-1"
          >
            {filters.map((f) => (
              <TabsTrigger key={f.id} value={f.id} className="flex-none gap-2 px-5">
                {f.label}
                <span className="font-mono text-[0.7rem] opacity-60">{jobsFor(f.id).length}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {filters.map((f) => (
            <TabsContent key={f.id} value={f.id}>
              <ul className="border-b border-border">
                {jobsFor(f.id).map((j) => (
                  <li key={j.id}>
                    <JobCard
                      job={{ ...j, department: deptLabel(j.dept) }}
                      aria-haspopup="dialog"
                      onClick={() => {
                        setJob(j)
                        setApplying(false)
                        setOpen(true)
                      }}
                    />
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>

        {/* Open application */}
        <div className="flex flex-col gap-6 rounded-[1.75rem] border border-dashed border-foreground/25 p-7 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex max-w-2xl flex-col gap-2">
            <h3 className="display-3">{t.openApplication.title}</h3>
            <p className="text-pretty text-muted-foreground">{t.openApplication.text}</p>
          </div>
          <Button variant="outline" size="lg" onClick={() => apply(OPEN_APPLICATION)} className="shrink-0 self-start md:self-auto">
            {t.openApplication.cta}
            <ArrowBadge variant="outline" large />
          </Button>
        </div>
      </Container>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          finalFocus={!applying}
          className="theme-cream w-full gap-0 border-0 bg-background p-0 text-foreground data-[side=right]:w-full data-[side=right]:sm:max-w-xl"
        >
          {job && (
            <>
              <div className="flex-1 overflow-y-auto scrollbar-thin">
                <header className="flex flex-col gap-5 border-b border-border p-7 pt-14 md:p-10 md:pt-16">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="rind">{deptLabel(job.dept)}</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <SheetTitle className="display-2 text-[clamp(2rem,3.4vw,2.9rem)] font-[420] text-balance">{job.title}</SheetTitle>
                  <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPinIcon className="size-3.5" />
                    {job.location}
                  </p>
                  <SheetDescription className="text-base text-foreground">{job.summary}</SheetDescription>
                </header>

                <div className="flex flex-col gap-10 p-7 md:p-10">
                  <DetailBlock title={t.detail.about}>
                    <p className="text-pretty text-muted-foreground">{job.about}</p>
                  </DetailBlock>
                  <DetailBlock title={t.detail.tasks}>
                    <DotList items={job.tasks} />
                  </DetailBlock>
                  <DetailBlock title={t.detail.profile}>
                    <DotList items={job.profile} />
                  </DetailBlock>
                  <SpecList specs={job.specs} className="rounded-3xl bg-card p-6" />
                </div>
              </div>

              <footer className="flex items-center gap-3 border-t border-border bg-background p-5 md:px-10">
                <Button variant="accent" size="lg" className="flex-1" onClick={() => apply(job.id)}>
                  {t.detail.apply}
                  <ArrowBadge variant="accent" large />
                </Button>
              </footer>
            </>
          )}
        </SheetContent>
      </Sheet>
    </Section>
  )
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="mono-label text-accent">{title}</h3>
      {children}
    </section>
  )
}

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-pretty">
          <span aria-hidden className="hole mt-1.5 size-3 shrink-0 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}

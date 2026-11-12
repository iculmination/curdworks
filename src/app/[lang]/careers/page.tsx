import type { Metadata } from "next"

import { CtaBand } from "@/components/brand/cta-band"
import { CareersApply } from "@/components/sections/careers/apply"
import { CareersHero } from "@/components/sections/careers/hero"
import { CareersJobs } from "@/components/sections/careers/jobs"
import { CareersPerks } from "@/components/sections/careers/perks"
import { CareersProcess } from "@/components/sections/careers/process"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { Motion } from "@/components/motion/motion"
import { pageMetadata } from "@/lib/metadata"

export async function generateMetadata({ params }: PageProps<"/[lang]/careers">): Promise<Metadata> {
  const { lang } = await params
  const { meta, careers } = await getDictionary(lang)
  return pageMetadata({
    lang: lang as Locale,
    path: "/careers",
    title: careers.meta.title,
    description: careers.meta.description,
    siteName: meta.siteName,
  })
}

export default async function CareersPage({ params }: PageProps<"/[lang]/careers">) {
  const { lang } = await params
  const { careers: t } = await getDictionary(lang)

  return (
    <>
      <CareersHero t={t.hero} openCount={t.jobs.items.length} />
      <CareersPerks t={t.perks} />
      <CareersJobs t={t.jobs} />
      <CareersProcess t={t.process} />
      <CareersApply t={t.apply} jobs={t.jobs.items} />
      <CtaBand t={t.cta} lang={lang as Locale} theme="rind" />
      {/* after the page hydrates: wire up GSAP */}
      <Motion />
    </>
  )
}

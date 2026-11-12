import type { Metadata } from "next"

import { AboutFacility } from "@/components/sections/about/facility"
import { AboutHero } from "@/components/sections/about/hero"
import { AboutPress } from "@/components/sections/about/press"
import { AboutStory } from "@/components/sections/about/story"
import { AboutTeam } from "@/components/sections/about/team"
import { AboutValues } from "@/components/sections/about/values"
import { AboutVisit } from "@/components/sections/about/visit"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { Motion } from "@/components/motion/motion"
import { pageMetadata } from "@/lib/metadata"

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params
  const { meta, about } = await getDictionary(lang)
  return pageMetadata({
    lang: lang as Locale,
    path: "/about",
    title: about.meta.title,
    description: about.meta.description,
    siteName: meta.siteName,
  })
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params
  const t = await getDictionary(lang)
  const { about } = t

  return (
    <>
      <AboutHero t={about.hero} />
      <AboutStory t={about.story} />
      <AboutValues t={about.values} />
      <AboutTeam t={about.team} lang={lang as Locale} />
      <AboutFacility t={about.facility} />
      <AboutVisit t={about.visit} address={t.footer.address} />
      <AboutPress t={about.press} />
      {/* after the page hydrates: wire up GSAP */}
      <Motion />
    </>
  )
}

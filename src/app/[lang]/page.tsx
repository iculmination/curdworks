import type { Metadata } from "next"

import { HomeCave } from "@/components/sections/home/cave"
import { HomeCollection } from "@/components/sections/home/collection"
import { HomeHero } from "@/components/sections/home/hero"
import { HomePress } from "@/components/sections/home/press"
import { HomeProcess } from "@/components/sections/home/process"
import { HomeVisit } from "@/components/sections/home/visit"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { pageMetadata } from "@/lib/metadata"

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  const { meta } = await getDictionary(lang)
  return pageMetadata({
    lang: lang as Locale,
    path: "/",
    description: meta.description,
    siteName: meta.siteName,
    socialTitle: `${meta.siteName} — ${meta.tagline}`,
  })
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  const { home } = await getDictionary(lang)
  const locale = lang as Locale

  return (
    <>
      <HomeHero t={home.hero} lang={locale} />
      <HomeProcess t={home.process} />
      <HomeCave t={home.cave} lang={locale} />
      <HomeCollection t={home.collection} lang={locale} />
      <HomePress t={home.press} />
      <HomeVisit t={home.visit} lang={locale} />
    </>
  )
}

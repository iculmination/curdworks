import { HomeCave } from "@/components/sections/home/cave"
import { HomeCollection } from "@/components/sections/home/collection"
import { HomeHero } from "@/components/sections/home/hero"
import { HomePress } from "@/components/sections/home/press"
import { HomeProcess } from "@/components/sections/home/process"
import { HomeVisit } from "@/components/sections/home/visit"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

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

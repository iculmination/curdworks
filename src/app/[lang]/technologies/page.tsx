import type { Metadata } from "next"

import { CtaBand } from "@/components/brand/cta-band"
import { TechComparison } from "@/components/sections/technologies/comparison"
import { TechFaq } from "@/components/sections/technologies/faq"
import { TechFeature } from "@/components/sections/technologies/feature"
import { TechHero } from "@/components/sections/technologies/hero"
import type { SectionTheme } from "@/components/brand/section"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { Motion } from "@/components/motion/motion"
import { pageMetadata } from "@/lib/metadata"

/* Colour rhythm for the six feature blocks */
const featureThemes: SectionTheme[] = ["cream", "paper", "cave", "cream", "paper", "wax"]

export async function generateMetadata({ params }: PageProps<"/[lang]/technologies">): Promise<Metadata> {
  const { lang } = await params
  const { meta, technologies } = await getDictionary(lang)
  return pageMetadata({
    lang: lang as Locale,
    path: "/technologies",
    title: technologies.meta.title,
    description: technologies.meta.description,
    siteName: meta.siteName,
  })
}

export default async function TechnologiesPage({ params }: PageProps<"/[lang]/technologies">) {
  const { lang } = await params
  const { technologies: t } = await getDictionary(lang)

  return (
    <>
      <TechHero t={t.hero} features={t.features} />
      {t.features.map((f, i) => (
        <TechFeature
          key={f.id}
          f={f}
          reversed={i % 2 === 1}
          theme={featureThemes[i % featureThemes.length]}
          specsLabel={t.specsLabel}
        />
      ))}
      <TechComparison t={t.comparison} />
      <TechFaq t={t.faq} />
      <CtaBand t={t.cta} lang={lang as Locale} />
      {/* after the page hydrates: wire up GSAP */}
      <Motion />
    </>
  )
}

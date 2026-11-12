/**
 * Shape of every locale dictionary. English is the source of truth;
 * German must satisfy the same type, so a missing key fails type-check.
 */

import type { ProcessStepData } from "@/components/brand/process-step"
import type { ProductData } from "@/components/brand/product-card"
import type { QuoteData } from "@/components/brand/quote"
import type { Spec } from "@/components/brand/spec-list"

export type NavKey = "home" | "about" | "technologies" | "careers"

export type LinkItem = { label: string; href: string }

export type StatData = { value: string; unit?: string; label: string }

export type SectionIntro = {
  index: string
  eyebrow: string
  /** *word* renders as the italic accent */
  title: string
  lead: string
}

export type HomeDict = {
  hero: {
    eyebrow: string
    meta: string
    /** Headline lines. "{img}" = inline image, *word* = accent, "|" = line break on mobile only */
    titleLines: string[]
    /** Labels for inline images, in order of appearance */
    titleImages: string[]
    lead: string
    primaryCta: string
    secondaryCta: string
    badge: string
    scrollHint: string
    marquee: string[]
  }
  process: SectionIntro & {
    steps: ProcessStepData[]
    hint: string
  }
  cave: SectionIntro & {
    image: string
    live: { title: string; status: string; readings: Spec[] }
    stats: StatData[]
    cta: string
  }
  collection: SectionIntro & {
    products: ProductData[]
    cta: string
  }
  press: { label: string; names: string[] }
  visit: SectionIntro & {
    images: string[]
    primaryCta: string
    secondaryCta: string
    quotes: QuoteData[]
  }
}

export type Dictionary = {
  meta: {
    siteName: string
    tagline: string
    description: string
  }
  nav: Record<NavKey, string>
  header: {
    cta: string
    menu: string
    close: string
    language: string
    skipToContent: string
  }
  footer: {
    statement: string
    columns: { title: string; links: LinkItem[] }[]
    newsletter: {
      title: string
      text: string
      placeholder: string
      submit: string
      success: string
    }
    address: string[]
    legal: LinkItem[]
    copyright: string
    backToTop: string
  }
  home: HomeDict
}

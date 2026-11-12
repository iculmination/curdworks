/**
 * Shape of every locale dictionary. English is the source of truth;
 * German must satisfy the same type, so a missing key fails type-check.
 */

import type { ProcessStepData } from "@/components/brand/process-step"
import type { ProductData } from "@/components/brand/product-card"
import type { QuoteData } from "@/components/brand/quote"
import type { Spec } from "@/components/brand/spec-list"
import type { TimelineEntry } from "@/components/brand/timeline-item"

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

export type TeamMember = { name: string; role: string; note: string; image: string }

export type AboutDict = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    lead: string
    images: [string, string]
    facts: StatData[]
  }
  story: SectionIntro & { entries: TimelineEntry[] }
  values: SectionIntro & {
    missionLabel: string
    mission: string
    items: { number: string; title: string; text: string }[]
  }
  team: SectionIntro & { members: TeamMember[]; cta: string }
  facility: SectionIntro & { stats: StatData[]; gallery: string[] }
  visit: SectionIntro & {
    tour: { title: string; specs: Spec[]; note: string; cta: string; email: string }
    tasting: { title: string; specs: Spec[] }
    addressTitle: string
    mapLabel: string
  }
  press: SectionIntro & {
    downloads: { label: string; meta: string }[]
    downloadLabel: string
    contact: { title: string; name: string; role: string; email: string }
  }
}

export type CtaBandData = {
  title: string
  text: string
  primary: LinkItem
  secondary: LinkItem
}

export type TechFeatureData = {
  id: string
  number: string
  name: string
  /** *word* = accent */
  title: string
  text: string
  points: string[]
  specs: Spec[]
  image: string
  detailImage: string
}

export type TechDict = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    lead: string
    tocLabel: string
    image: string
  }
  features: TechFeatureData[]
  specsLabel: string
  comparison: SectionIntro & {
    columns: [string, string, string]
    rows: [string, string, string][]
  }
  faq: SectionIntro & {
    items: { q: string; a: string }[]
    contactText: string
    contactCta: string
  }
  cta: CtaBandData
}

export type CareerJob = {
  id: string
  /** department id — must match one of `jobs.departments` */
  dept: string
  title: string
  location: string
  type: string
  summary: string
  about: string
  tasks: string[]
  profile: string[]
  specs: Spec[]
}

export type CareersDict = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    lead: string
    primaryCta: string
    secondaryCta: string
    images: [string, string]
    stats: StatData[]
  }
  perks: SectionIntro & {
    items: { title: string; text: string; tag: string }[]
    image: string
    quote: QuoteData
  }
  jobs: SectionIntro & {
    allLabel: string
    filterLabel: string
    departments: { id: string; label: string }[]
    items: CareerJob[]
    detail: { about: string; tasks: string; profile: string; apply: string; close: string }
    openApplication: { title: string; text: string; cta: string }
  }
  process: SectionIntro & {
    steps: { number: string; title: string; text: string; duration: string }[]
    promise: string
  }
  apply: SectionIntro & {
    fields: {
      name: string
      email: string
      position: string
      positionPlaceholder: string
      openPosition: string
      link: string
      linkPlaceholder: string
      message: string
      messagePlaceholder: string
      cv: string
      cvHint: string
      consent: string
      optional: string
    }
    submit: string
    success: { title: string; text: string; reset: string }
    contact: { title: string; name: string; role: string; email: string }
  }
  cta: CtaBandData
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
  about: AboutDict
  technologies: TechDict
  careers: CareersDict
}

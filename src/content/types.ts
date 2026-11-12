/**
 * Shape of every locale dictionary. English is the source of truth;
 * German must satisfy the same type, so a missing key fails type-check.
 */

export type NavKey = "home" | "about" | "technologies" | "careers"

export type LinkItem = { label: string; href: string }

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
}

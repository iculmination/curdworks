export const locales = ["en", "de"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
}

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Prefix an internal path with the locale: href("de", "/about") → "/de/about" */
export function href(locale: Locale, path = "/") {
  const clean = path === "/" ? "" : path
  return `/${locale}${clean}`
}

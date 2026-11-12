import type { Metadata } from "next"

import { defaultLocale, href, locales, type Locale } from "@/i18n/config"

/** Public origin of the site — set NEXT_PUBLIC_SITE_URL in production. */
export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://curdworks.example")

const ogLocale: Record<Locale, string> = { en: "en_US", de: "de_DE" }

/** hreflang map for a path that exists in every locale, plus x-default. */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, href(l, path)])),
    "x-default": href(defaultLocale, path),
  }
}

/**
 * Per-page metadata: title/description, canonical + hreflang alternates,
 * and Open Graph / Twitter fields that follow the page (not the layout).
 * OG images come from the colocated opengraph-image.tsx files.
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  siteName,
  socialTitle,
}: {
  lang: Locale
  path: string
  /** undefined = use the layout's default title */
  title?: string
  description: string
  siteName: string
  /** og/twitter title when the page has no own title (home) */
  socialTitle?: string
}): Metadata {
  const ogTitle = socialTitle ?? (title ? `${title} · ${siteName}` : undefined)
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: href(lang, path), languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName,
      ...(ogTitle && { title: ogTitle }),
      description,
      url: href(lang, path),
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
    },
    twitter: { card: "summary_large_image", ...(ogTitle && { title: ogTitle }), description },
  }
}

import type { MetadataRoute } from "next"

import { href, locales } from "@/i18n/config"
import { languageAlternates, siteUrl } from "@/lib/metadata"

const pages = [
  { path: "/", priority: 1 },
  { path: "/technologies", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/careers", priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (p: string) => new URL(p, siteUrl).toString()
  return pages.flatMap(({ path, priority }) =>
    locales.map((lang) => ({
      url: abs(href(lang, path)),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(Object.entries(languageAlternates(path)).map(([l, p]) => [l, abs(p)])),
      },
    }))
  )
}

import type { MetadataRoute } from "next"

import { locales } from "@/i18n/config"
import { siteUrl } from "@/lib/metadata"

export default function robots(): MetadataRoute.Robots {
  return {
    // the UI-kit showcase is internal
    rules: { userAgent: "*", allow: "/", disallow: locales.map((l) => `/${l}/kit`) },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  }
}

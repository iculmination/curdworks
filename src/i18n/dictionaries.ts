import "server-only"
import { notFound } from "next/navigation"

import { hasLocale, type Locale } from "./config"
import type { Dictionary } from "@/content/types"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/content/en").then((m) => m.default),
  de: () => import("@/content/de").then((m) => m.default),
}

export async function getDictionary(lang: string): Promise<Dictionary> {
  if (!hasLocale(lang)) notFound()
  return dictionaries[lang]()
}

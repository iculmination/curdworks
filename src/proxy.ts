import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, locales, type Locale } from "@/i18n/config"

/** Picks the best supported locale from the Accept-Language header. */
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? ""
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=")
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { lang } of preferred) {
    const match = locales.find((l) => l === lang)
    if (match) return match
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocalePrefix = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )
  if (hasLocalePrefix) return

  const url = request.nextUrl.clone()
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, favicon…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}

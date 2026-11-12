import { ImageResponse } from "next/og"

import type { SectionTheme } from "@/components/brand/section"
import type { Dictionary } from "@/content/types"
import { defaultLocale, hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

/*
 * Shared Open Graph card (1200×630) used by every opengraph-image.tsx.
 * Satori can't read our CSS tokens, so the brand colours are repeated here
 * as hex (sRGB equivalents of the oklch values in globals.css).
 */

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = "image/png"

const palette: Record<"cream" | "cave" | "wax", { bg: string; fg: string; muted: string; accent: string; hole: string }> = {
  cream: { bg: "#f4ecdb", fg: "#1c1813", muted: "#6b6258", accent: "#b54715", hole: "#e6dcc6" },
  cave: { bg: "#1c1813", fg: "#f4ecdb", muted: "#b3aa9c", accent: "#ebb34b", hole: "#2c2620" },
  wax: { bg: "#ebb34b", fg: "#1c1813", muted: "#4f4232", accent: "#8f3511", hole: "#dba23f" },
}

type OgPage = { theme: Extract<SectionTheme, "cream" | "cave" | "wax">; eyebrow: string; title: string }

type PageKey = "home" | "about" | "technologies" | "careers"

function pageFor(t: Dictionary, page: PageKey): OgPage {
  switch (page) {
    case "home":
      return { theme: "cream", eyebrow: t.home.hero.eyebrow, title: t.meta.tagline.replace("grow", "*grow*").replace("wachsen", "*wachsen*") }
    case "about":
      return { theme: "cream", eyebrow: t.about.hero.eyebrow, title: t.about.hero.title }
    case "technologies":
      return { theme: "cave", eyebrow: t.technologies.hero.eyebrow, title: t.technologies.hero.title }
    case "careers":
      return { theme: "wax", eyebrow: t.careers.hero.eyebrow, title: t.careers.hero.title }
  }
}

/** Alt text for the card — the plain page title. */
export async function ogAlt(lang: string | undefined, page: PageKey) {
  // generateImageMetadata also runs while collecting static params, where
  // the parent [lang] may not be resolved yet — fall back instead of 404ing
  const t = await getDictionary(lang && hasLocale(lang) ? lang : defaultLocale)
  return `${t.meta.siteName} — ${pageFor(t, page).title.replace(/\*/g, "")}`
}

export async function renderOg(lang: string, page: PageKey) {
  const t = await getDictionary(lang)
  const p = pageFor(t, page)
  const c = palette[p.theme]
  const words = toWords(p.title)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: c.bg,
          color: c.fg,
          position: "relative",
        }}
      >
        {/* cheese eyes */}
        <div style={{ position: "absolute", right: -90, top: -60, width: 420, height: 420, borderRadius: 999, background: c.hole, boxShadow: "inset 0 18px 40px rgba(0,0,0,0.18)" }} />
        <div style={{ position: "absolute", right: 300, bottom: 70, width: 90, height: 90, borderRadius: 999, background: c.hole, boxShadow: "inset 0 8px 18px rgba(0,0,0,0.18)" }} />
        <div style={{ position: "absolute", right: 120, bottom: 150, width: 46, height: 46, borderRadius: 999, background: c.accent }} />

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700, letterSpacing: -1.5 }}>
          CURDW
          <div style={{ width: 30, height: 30, borderRadius: 999, background: c.accent, margin: "0 2px" }} />
          RKS
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 900 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: c.muted }}>
            {p.eyebrow}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 84, lineHeight: 1.02, letterSpacing: -3, fontWeight: 600 }}>
            {words.map((w, i) => (
              <span
                key={i}
                style={{
                  // trailing gap (not leading) so wrapped lines start flush left
                  marginRight: words[i + 1]?.space ? 22 : 0,
                  ...(w.accent && { color: c.accent, fontStyle: "italic" }),
                }}
              >
                {w.text}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: c.muted }}>{t.footer.address.slice(1, 3).join(" · ")}</div>
      </div>
    ),
    ogSize
  )
}

/**
 * Satori wraps flex items, not inline text runs, so the title is split into
 * word tokens. `space` = there was whitespace before the token (punctuation
 * right after an accent word sticks to it).
 */
function toWords(title: string) {
  const out: { text: string; accent: boolean; space: boolean }[] = []
  let space = false
  for (const part of title.split(/(\*[^*]+\*)/g).filter(Boolean)) {
    const accent = part.startsWith("*")
    for (const tok of (accent ? part.slice(1, -1) : part).split(/(\s+)/)) {
      if (!tok) continue
      if (/^\s+$/.test(tok)) space = true
      else {
        out.push({ text: tok, accent, space })
        space = false
      }
    }
  }
  return out
}

export type { PageKey as OgPageKey }

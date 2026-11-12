import type { Metadata } from "next"
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getDictionary } from "@/i18n/dictionaries"
import { locales, type Locale } from "@/i18n/config"
import { siteUrl } from "@/lib/metadata"
import "../globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
})

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  const t = await getDictionary(lang)
  return {
    title: { default: `${t.meta.siteName} — ${t.meta.tagline}`, template: `%s · ${t.meta.siteName}` },
    description: t.meta.description,
    metadataBase: siteUrl,
    applicationName: t.meta.siteName,
  }
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  const t = await getDictionary(lang)
  const locale = lang as Locale

  return (
    <html
      lang={locale}
      id="top"
      className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}
      // the inline script below adds the "motion" class before hydration
      suppressHydrationWarning
    >
      <head>
        {/* Gate intro animations before first paint (no flash of the final state).
            Skipped for reduced motion; CSS has a timed fallback if JS never runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(matchMedia("(prefers-reduced-motion: no-preference)").matches)document.documentElement.classList.add("motion")`,
          }}
        />
      </head>
      <body className="min-h-svh">
        <SmoothScroll />
        <TooltipProvider>
          <SiteHeader lang={locale} nav={t.nav} header={t.header} />
          <main id="main">{children}</main>
          <SiteFooter lang={locale} t={t.footer} />
        </TooltipProvider>
      </body>
    </html>
  )
}

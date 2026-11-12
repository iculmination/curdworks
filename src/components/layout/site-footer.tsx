import Link from "next/link"
import { ArrowUpIcon } from "lucide-react"

import { Logo } from "@/components/brand/logo"
import { HoleCluster } from "@/components/brand/holes"
import { href, type Locale } from "@/i18n/config"
import type { Dictionary } from "@/content/types"
import { NewsletterForm } from "./newsletter-form"

function resolve(lang: Locale, link: string) {
  return link.startsWith("/") ? href(lang, link) : link
}

export function SiteFooter({ lang, t }: { lang: Locale; t: Dictionary["footer"] }) {
  return (
    <footer data-section="footer" className="theme-cave relative isolate overflow-hidden bg-background text-foreground">
      <HoleCluster
        className="opacity-60"
        holes={[
          { x: 99, y: 2, size: 14, tone: "muted" },
        ]}
      />
      <div className="container-site grid gap-16 pt-24 pb-10 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <p className="display-1 accent-em">{t.statement}</p>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8">
          <h2 className="display-3">{t.newsletter.title}</h2>
          <p className="text-muted-foreground">{t.newsletter.text}</p>
          <NewsletterForm t={t.newsletter} />
        </div>

        <div className="grid grid-cols-2 gap-10 border-t border-border pt-12 sm:grid-cols-4 lg:col-span-12">
          {t.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="mono-label text-muted-foreground">{col.title}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={resolve(lang, l.href)} className="transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <address className="flex flex-col gap-1 text-muted-foreground not-italic">
            {t.address.map((line, i) => (
              <span key={line} className={i === 0 ? "mb-3 mono-label text-foreground" : undefined}>
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      {/* Giant wordmark bleeding off the bottom edge */}
      <div className="container-site overflow-hidden">
        <Logo className="flex translate-y-[0.1em] text-[clamp(2.5rem,14.6vw,14.4rem)] whitespace-nowrap text-foreground" />
      </div>

      <div className="border-t border-border">
        <div className="container-site flex flex-col gap-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{t.copyright}</p>
          <ul className="flex gap-6">
            {t.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-foreground">
            {t.backToTop} <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

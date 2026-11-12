"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { locales, type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

/** EN / DE toggle that keeps the current path. */
export function LocaleSwitcher({
  current,
  label,
  className,
}: {
  current: Locale
  label: string
  className?: string
}) {
  const pathname = usePathname()
  const rest = pathname.replace(/^\/[^/]+/, "")

  return (
    <nav aria-label={label} className={cn("mono-label flex items-center gap-1", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="opacity-30">/</span>}
          <Link
            href={`/${l}${rest}`}
            hrefLang={l}
            aria-current={l === current ? "true" : undefined}
            className={cn(
              "rounded-full px-1.5 py-1 transition-colors hover:text-accent",
              l === current ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </nav>
  )
}

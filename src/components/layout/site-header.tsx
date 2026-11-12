"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ButtonLink } from "@/components/brand/button-link"
import { Logo } from "@/components/brand/logo"
import { href, type Locale } from "@/i18n/config"
import type { Dictionary, NavKey } from "@/content/types"
import { cn } from "@/lib/utils"
import { LocaleSwitcher } from "./locale-switcher"

const routes: { key: NavKey; path: string }[] = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "technologies", path: "/technologies" },
  { key: "careers", path: "/careers" },
]

type Props = {
  lang: Locale
  nav: Dictionary["nav"]
  header: Dictionary["header"]
}

/**
 * Floating header: logo on the left, nav in a frosted pill in the center,
 * language + CTA on the right. On mobile a full-screen "cave" sheet.
 */
export function SiteHeader({ lang, nav, header }: Props) {
  const pathname = usePathname()
  const isActive = (path: string) => {
    const full = href(lang, path)
    return path === "/" ? pathname === full : pathname.startsWith(full)
  }

  return (
    <header
      data-site-header
      className="theme-cream pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent transition-[translate] duration-500 ease-out data-hidden:-translate-y-[130%] has-focus-visible:translate-y-0"
    >
      <a
        href="#main"
        className="pointer-events-auto sr-only rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {header.skipToContent}
      </a>
      <div className="container-site flex h-(--header-h) items-center justify-between gap-4">
        <Link
          href={href(lang)}
          className="pointer-events-auto rounded-full bg-background/80 px-4 py-2.5 text-foreground backdrop-blur-md"
        >
          <Logo className="text-xl" />
        </Link>

        <nav
          aria-label={header.mainNav}
          className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-background/80 p-1.5 backdrop-blur-md lg:flex"
        >
          {routes.map((r) => (
            <Link
              key={r.key}
              href={href(lang, r.path)}
              aria-current={isActive(r.path) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                isActive(r.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-foreground/6 hover:text-foreground"
              )}
            >
              {nav[r.key]}
            </Link>
          ))}
        </nav>

        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-background/80 p-1.5 pl-3 backdrop-blur-md">
          <LocaleSwitcher current={lang} label={header.language} className="hidden sm:flex" />
          <ButtonLink href={href(lang, "/about#visit")} variant="accent" size="sm" className="hidden md:inline-flex">
            {header.cta}
          </ButtonLink>

          <Sheet>
            <SheetTrigger render={<Button variant="default" size="sm" className="lg:hidden" />}>
              <MenuIcon />
              {header.menu}
            </SheetTrigger>
            <SheetContent
              side="top"
              showCloseButton
              closeLabel={header.close}
              className="theme-cave h-svh border-0 bg-background p-0 text-foreground data-[side=top]:h-svh"
            >
              <div className="container-site flex h-full flex-col pt-6 pb-10">
                <SheetTitle className="sr-only">{header.menu}</SheetTitle>
                <Logo className="text-2xl" />
                <nav aria-label={header.mobileNav} className="mt-auto flex flex-col">
                  {routes.map((r, i) => (
                    <SheetClose
                      key={r.key}
                      render={
                        <Link
                          href={href(lang, r.path)}
                          aria-current={isActive(r.path) ? "page" : undefined}
                          className="group flex items-baseline gap-4 border-b border-border py-4"
                        />
                      }
                    >
                      <span className="mono-label text-accent">0{i + 1}</span>
                      <span className="display-1 transition-colors group-hover:text-accent group-aria-[current=page]:italic">
                        {nav[r.key]}
                      </span>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                  <LocaleSwitcher current={lang} label={header.language} />
                  <ButtonLink href={href(lang, "/about#visit")} variant="accent" arrow>
                    {header.cta}
                  </ButtonLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

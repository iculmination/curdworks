"use client"

import { useEffect } from "react"
import Lenis from "lenis"

import { gsap, MOTION_OK, ScrollTrigger } from "@/lib/gsap"

let lenis: Lenis | null = null

/** Scroll to an element or y-position — smooth via Lenis when it's running. */
export function scrollToTarget(target: HTMLElement | number, opts: { immediate?: boolean } = {}) {
  if (lenis) lenis.scrollTo(target, { immediate: opts.immediate, duration: 1.4 })
  else if (typeof target === "number") window.scrollTo({ top: target })
  else target.scrollIntoView({ block: "start" })
}

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in
 * sync. Disabled entirely for prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia(MOTION_OK)
    if (!mq.matches) return

    lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95 })
    lenis.on("scroll", ScrollTrigger.update)
    const tick = (time: number) => lenis?.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Same-page hash links (#jobs, #process…): smooth-scroll instead of the
    // browser's instant jump. Capture phase runs before next/link's handler,
    // which then sees defaultPrevented and leaves the click alone.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null
      if (!a) return
      const url = new URL(a.href)
      // the skip link keeps native behaviour so focus moves into <main>
      if (url.pathname !== location.pathname || !url.hash || url.hash === "#main") return
      const el = url.hash === "#top" ? 0 : document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (el === null) return
      e.preventDefault()
      scrollToTarget(el)
    }
    window.addEventListener("click", onClick, true)

    return () => {
      window.removeEventListener("click", onClick, true)
      gsap.ticker.remove(tick)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return null
}

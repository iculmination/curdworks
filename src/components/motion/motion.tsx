"use client"

import { usePathname } from "next/navigation"

import { gsap, MOTION_OK, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap"

/*
 * One place for all page animations. Server components only carry data-*
 * hooks; this component finds them after every navigation and wires up GSAP.
 * Everything lives inside gsap.matchMedia, so prefers-reduced-motion gets the
 * static site and all inline styles are reverted on cleanup.
 *
 *   [data-section$=hero]  h1 + [data-hero-fade]   intro timeline
 *   [data-hero-line] / [data-hero-image]          home headline
 *   section h2                                    clip reveal
 *   [data-reveal] [data-step] [data-product]      batched fade-up
 *   [data-slot=image-slot]                        curtain reveal
 *   [data-hole]                                   parallax drift
 *   [data-stat-value]                             count-up
 *   [data-circle-badge]                           spin, faster while scrolling
 *   [data-process-track]                          pinned horizontal scroll (lg+)
 *   [data-site-header]                            hide on scroll down
 *   footer wordmark                               letters rise, the eye rolls in
 */

/** Only elements on the visible page (Next keeps hidden routes mounted). */
function all<T extends Element = HTMLElement>(selector: string, root: ParentNode = document) {
  return Array.from(root.querySelectorAll<T>(selector)).filter((el) => el.checkVisibility())
}

export function Motion() {
  const pathname = usePathname()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        heroIntro()
        sectionHeadings()
        batchReveal()
        imageCurtains()
        holeParallax()
        circleBadges()
        footerWordmark()
        // these touch the DOM outside of tweens, so they return their own cleanup
        const cleanups = [countUps(document.documentElement.lang), headerAutoHide()]
        // fonts change line heights → re-measure once they're in
        document.fonts?.ready.then(() => ScrollTrigger.refresh())
        return () => cleanups.forEach((fn) => fn?.())
      })

      mm.add(`${MOTION_OK} and (min-width: 1024px)`, () => {
        processTrack()
      })

      return () => mm.revert()
    },
    { dependencies: [pathname], revertOnUpdate: true }
  )

  return null
}

/* ───────────────────────────── hero ───────────────────────────── */

function heroIntro() {
  const hero = all("main [data-section$='hero']")[0]
  if (!hero) return
  const tl = gsap.timeline({ delay: 0.15 })

  const h1 = hero.querySelector("h1")
  if (h1) gsap.set(h1, { visibility: "visible" }) // lift the CSS gate; children animate in

  const lines = all("[data-hero-line]", hero)
  if (lines.length) {
    // Home: the headline is already split into lines with inline images
    tl.fromTo(
      lines,
      { autoAlpha: 0, yPercent: 60, rotate: 2 },
      { autoAlpha: 1, yPercent: 0, rotate: 0, duration: 1.3, stagger: 0.12 }
    ).fromTo(
      all("[data-hero-image]", hero),
      { scale: 0, rotate: -12 },
      { scale: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.75)", stagger: 0.1 },
      0.5
    )
  } else if (h1) {
    // autoSplit re-splits on resize/font load; returning the tween lets
    // SplitText carry its progress over to the new lines
    SplitText.create(h1, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.fromTo(
          self.lines,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.1,
            delay: 0.15,
            // line masks clip descenders — hand the plain heading back when done
            onComplete: () => self.revert(),
          }
        ),
    })
  }

  tl.fromTo(
    all("[data-hero-fade]", hero),
    { autoAlpha: 0, y: 30 },
    { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08 },
    0.35
  ).fromTo(
    all("[data-slot='image-slot']", hero).filter((el) => !el.closest("[data-hero-image]")),
    { clipPath: "inset(100% 0% 0% 0%)", visibility: "visible" }, // also lifts the CSS gate
    { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", stagger: 0.15 },
    0.2
  )
}

/* ─────────────────────────── headings ─────────────────────────── */

function sectionHeadings() {
  for (const h2 of all("main [data-section]:not([data-section$='hero']) h2, footer [data-section] h2")) {
    gsap.fromTo(
      h2,
      // negative insets leave room for italic overhangs and descenders
      { clipPath: "inset(-10% -10% 110% -10%)", y: 40 },
      {
        clipPath: "inset(-10% -10% -30% -10%)",
        y: 0,
        duration: 1.2,
        clearProps: "clipPath", // don't keep clipping italic descenders
        scrollTrigger: { trigger: h2, start: "top 88%", once: true },
      }
    )
  }
  // Eyebrow + lead around a SectionHeading
  for (const header of all("main [data-section]:not([data-section$='hero']) header:has(> h2)")) {
    const bits = Array.from(header.children).filter((c) => c.tagName !== "H2")
    gsap.fromTo(
      bits,
      { autoAlpha: 0, x: -20 },
      { autoAlpha: 1, x: 0, stagger: 0.12, scrollTrigger: { trigger: header, start: "top 88%", once: true } }
    )
  }
}

/* ──────────────────────────── reveals ─────────────────────────── */

function batchReveal() {
  const items = all("main [data-reveal], main [data-step], main [data-product], footer [data-reveal]").filter(
    // skip the hero (own intro) and anything nested inside another revealed block
    (el) => !el.closest("[data-section$='hero']") && !el.parentElement?.closest("[data-reveal], [data-step], [data-product]")
  )
  if (!items.length) return
  gsap.set(items, { autoAlpha: 0, y: 60 })
  ScrollTrigger.batch(items, {
    start: "top 90%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.09, overwrite: true }),
  })
}

function imageCurtains() {
  const slots = all("main [data-slot='image-slot']").filter(
    (el) => !el.closest("[data-section$='hero'], [data-reveal], [data-step], [data-product]")
  )
  for (const slot of slots) {
    const inner = slot.firstElementChild
    const tl = gsap.timeline({ scrollTrigger: { trigger: slot, start: "top 88%", once: true } })
    tl.fromTo(
      slot,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" }
    )
    if (inner) tl.fromTo(inner, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.2)
  }
}

/* ─────────────────────────── ambient ──────────────────────────── */

function holeParallax() {
  for (const hole of all("[data-hole]")) {
    const i = Number(hole.dataset.hole ?? 0)
    const dir = i % 2 === 0 ? -1 : 1
    const size = hole.getBoundingClientRect().width
    gsap.fromTo(
      hole,
      { y: -dir * Math.min(140, 40 + size * 0.35) },
      {
        y: dir * Math.min(140, 40 + size * 0.35),
        ease: "none",
        scrollTrigger: {
          trigger: hole.closest("[data-section]") ?? hole,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    )
  }
}

function circleBadges() {
  for (const badge of all("[data-circle-badge] svg")) {
    const spin = gsap.to(badge, { rotation: 360, duration: 24, ease: "none", repeat: -1 })
    // spins faster while the page is moving, then eases back
    ScrollTrigger.create({
      onUpdate: (self) => {
        const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 8)
        gsap.to(spin, { timeScale: boost * self.direction, duration: 0.2, overwrite: true })
        gsap.to(spin, { timeScale: 1, duration: 1.2, delay: 0.25, ease: "power2.out" })
      },
    })
  }
}

/* ─────────────────────────── numbers ──────────────────────────── */

/**
 * Counts "2,400", "9,4", "±0.2", "14k", "7.200" up from zero while keeping
 * prefix, suffix and the locale's separators. Years (1987) stay as they are.
 */
function countUps(lang: string) {
  const dec = lang === "de" ? "," : "."
  const grp = lang === "de" ? "." : ","
  const originals = new Map<HTMLElement, string>()

  for (const el of all("[data-stat-value]")) {
    const text = el.textContent ?? ""
    const m = text.match(/^(\D*?)(\d[\d.,]*)(.*)$/)
    if (!m) continue
    const [, prefix, num, suffix] = m
    if (/^(19|20)\d\d$/.test(num)) continue
    const [intPart, fracPart = ""] = num.split(dec)
    const hasGroup = intPart.includes(grp)
    const target = parseFloat(intPart.split(grp).join("") + (fracPart ? "." + fracPart : ""))
    if (!Number.isFinite(target)) continue
    const fmt = new Intl.NumberFormat(lang, {
      minimumFractionDigits: fracPart.length,
      maximumFractionDigits: fracPart.length,
      useGrouping: hasGroup,
    })
    const render = (v: number) => (el.textContent = prefix + fmt.format(v) + suffix)

    originals.set(el, text)
    render(0)
    const state = { v: 0 }
    gsap.to(state, {
      v: target,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top bottom", once: true },
      onUpdate: () => render(state.v),
      onComplete: () => {
        el.textContent = text
      },
    })
  }

  return () =>
    originals.forEach((text, el) => {
      el.textContent = text
    })
}

/* ─────────────────────────── chrome ───────────────────────────── */

function headerAutoHide() {
  const header = document.querySelector<HTMLElement>("[data-site-header]")
  if (!header) return
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      header.toggleAttribute("data-hidden", self.direction === 1 && self.scroll() > 240)
    },
  })
  return () => header.removeAttribute("data-hidden")
}

function footerWordmark() {
  const mark = document.querySelector<HTMLElement>("footer [data-section] [role=img], footer[data-section] [role=img]")
  const pieces = mark ? Array.from(mark.children) : []
  if (pieces.length !== 3) return
  const [left, eye, right] = pieces
  const tl = gsap.timeline({ scrollTrigger: { trigger: mark, start: "top bottom-=40", once: true } })
  tl.fromTo([left, right], { yPercent: 100 }, { yPercent: 0, duration: 1.4, stagger: 0.1 })
    .fromTo(eye, { scale: 0, rotate: -180 }, { scale: 1, rotate: 0, duration: 1.4, ease: "back.out(1.6)" }, 0.25)
}

/* ─────────────────────── process track (lg+) ──────────────────── */

function processTrack() {
  const track = all("[data-process-track]")[0]
  const section = track?.closest<HTMLElement>("[data-section]")
  if (!track || !section) return
  const distance = () => track.scrollWidth - track.clientWidth
  if (distance() <= 0) return

  gsap.set(track, { scrollSnapType: "none", overflow: "hidden" })
  gsap.to(track, {
    scrollLeft: distance,
    ease: "none",
    scrollTrigger: {
      // pin when the section's top reaches the viewport top — or, if the section
      // is taller than the viewport, once the whole track is on screen
      trigger: section,
      start: () => {
        const top = section.getBoundingClientRect().top + scrollY
        if (section.offsetHeight <= innerHeight) return top
        const trackBottom = track.getBoundingClientRect().bottom + scrollY
        return Math.max(top, trackBottom - innerHeight + 24)
      },
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  })
}

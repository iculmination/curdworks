"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

// Register once, client-side only.
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

// selectors are shared across pages, so an empty match is expected
gsap.config({ nullTargetWarn: false })
gsap.defaults({ ease: "expo.out", duration: 1.1 })

export { gsap, ScrollTrigger, SplitText, useGSAP }

/** Matches the CSS gate set by the inline script in <head>. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)"

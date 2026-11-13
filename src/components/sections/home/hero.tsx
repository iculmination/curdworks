import { visuals } from "@/content/visuals"
import { Fragment } from "react"
import { ArrowDownIcon } from "lucide-react"

import { ButtonLink } from "@/components/brand/button-link"
import { CircleBadge } from "@/components/brand/circle-badge"
import { Eyebrow } from "@/components/brand/eyebrow"
import { HoleCluster } from "@/components/brand/holes"
import { ImageSlot, type ImageShape } from "@/components/brand/image-slot"
import { Marquee } from "@/components/brand/marquee"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import type { HomeDict } from "@/content/types"
import { href, type Locale } from "@/i18n/config"

/* Inline images inside the headline: first a pill, then a round "eye". */
const inlineShapes: { shape: ImageShape; ratio: string; width: string }[] = [
  { shape: "pill", ratio: "2.1/1", width: "w-[1.7em]" },
  { shape: "hole", ratio: "1", width: "w-[0.82em]" },
]

/** Rough width of a line in em: ~0.36em per glyph + inline image widths. */
function lineEm(line: string) {
  const parts = line.split("{img}")
  const text = parts.join("").replace(/[*|]/g, "")
  return text.length * 0.36 + (parts.length - 1) * 1.8
}

/** Renders text where "|" becomes a break on mobile and a space from md up. */
function SoftBreaks({ text }: { text: string }) {
  return text.split("|").map((seg, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          <br className="md:hidden" />
          <span className="max-md:hidden"> </span>
        </>
      )}
      <Rich text={seg} />
    </Fragment>
  ))
}

function HeroTitle({ lines, images }: { lines: string[]; images: string[] }) {
  let imgIndex = 0
  // Shrink the type if the longest line would overflow (long German words).
  // Mobile measures each "|" segment separately; desktop measures whole lines.
  const emLg = Math.max(...lines.map(lineEm))
  const emSm = Math.max(...lines.flatMap((l) => l.split("|")).map(lineEm))
  return (
    <h1
      className="display-hero hero-fit accent-em"
      style={{ "--em-sm": emSm.toFixed(2), "--em-lg": emLg.toFixed(2) } as React.CSSProperties}
      data-hero-title
    >
      {lines.map((line, li) => (
        <span key={li} className="block whitespace-nowrap" data-hero-line={li}>
          {line.split("{img}").map((part, pi, arr) => {
            const showImage = pi < arr.length - 1
            const i = imgIndex
            if (showImage) imgIndex++
            const cfg = inlineShapes[i % inlineShapes.length]
            return (
              <Fragment key={pi}>
                <SoftBreaks text={part} />
                {showImage && (
                  <span
                    data-hero-image={i}
                    className={`mx-[0.04em] inline-block -translate-y-[0.06em] align-middle ${cfg.width}`}
                  >
                    <ImageSlot label={images[i] ?? ""} visual={visuals.home.hero[i]} shape={cfg.shape} ratio={cfg.ratio} priority />
                  </span>
                )}
              </Fragment>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export function HomeHero({ t, lang }: { t: HomeDict["hero"]; lang: Locale }) {
  return (
    <Section
      theme="cream"
      fullscreen
      name="hero"
      className="justify-between pt-[calc(var(--header-h)+2.5rem)] pb-0"
    >
      <HoleCluster
        holes={[
          { x: 95, y: 42, size: 16, tone: "muted" },
          { x: 72, y: 30, size: 3, tone: "muted" },
          { x: 4, y: 88, size: 7, tone: "muted" },
        ]}
      />

      <Container className="flex flex-1 flex-col gap-10">
        <div data-hero-fade className="flex flex-wrap items-center justify-between gap-4">
          <Eyebrow index="01">{t.eyebrow}</Eyebrow>
          <p className="mono-label text-muted-foreground">{t.meta}</p>
        </div>

        <div className="my-auto">
          <HeroTitle lines={t.titleLines} images={t.titleImages} />
        </div>

        <div className="grid items-end gap-10 pb-10 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-6 xl:col-span-5">
            <p data-hero-fade className="lead text-pretty text-muted-foreground">{t.lead}</p>
            <div data-hero-fade className="flex flex-wrap gap-3">
              <ButtonLink href="#process" size="lg" arrow>
                {t.primaryCta}
              </ButtonLink>
              <ButtonLink href={href(lang, "/about#visit")} variant="outline" size="lg">
                {t.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div data-hero-fade className="hidden items-end justify-end gap-8 lg:col-span-5 lg:col-start-8 lg:flex">
            <a href="#process" className="mono-label flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowDownIcon className="size-4" /> {t.scrollHint}
            </a>
            <CircleBadge text={t.badge} className="w-36 xl:w-40" />
          </div>
        </div>
      </Container>

      <Marquee
        items={t.marquee}
        className="theme-rind display-3 bg-background py-5 text-foreground"
        duration={35}
      />
    </Section>
  )
}

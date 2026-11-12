import { ButtonLink } from "@/components/brand/button-link"
import { Eyebrow } from "@/components/brand/eyebrow"
import { ImageSlot } from "@/components/brand/image-slot"
import { Quote } from "@/components/brand/quote"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import type { HomeDict } from "@/content/types"
import { href, type Locale } from "@/i18n/config"

/* Floating "eyes" around the headline on large screens */
const floating = [
  "lg:absolute lg:top-0 lg:left-0 lg:w-[15vw] lg:max-w-60",
  "lg:absolute lg:top-[18%] lg:right-0 lg:w-[19vw] lg:max-w-80",
  "lg:absolute lg:bottom-0 lg:left-[8%] lg:w-[9vw] lg:max-w-36",
]

export function HomeVisit({ t, lang }: { t: HomeDict["visit"]; lang: Locale }) {
  return (
    <Section theme="wax" fullscreen name="visit">
      <Container className="flex flex-col gap-24">
        <div className="relative flex flex-col items-center gap-10 text-center lg:min-h-[70svh] lg:justify-center">
          <div className="grid w-full max-w-md grid-cols-3 items-center gap-4 lg:contents">
            {t.images.map((label, i) => (
              <ImageSlot key={label} label={label} shape="hole" compact className={floating[i]} />
            ))}
          </div>

          <Eyebrow index={t.index}>{t.eyebrow}</Eyebrow>
          <h2 className="display-hero accent-em max-w-[11ch] text-balance">
            <Rich text={t.title} />
          </h2>
          <p className="lead max-w-xl text-pretty text-muted-foreground">{t.lead}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={href(lang, "/about#visit")} size="lg" arrow>
              {t.primaryCta}
            </ButtonLink>
            <ButtonLink href={href(lang, "/careers")} variant="outline" size="lg">
              {t.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-12 border-t border-border pt-16 md:grid-cols-3">
          {t.quotes.map((q) => (
            <Quote key={q.text} quote={q} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

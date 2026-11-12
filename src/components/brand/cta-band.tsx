import { ButtonLink } from "./button-link"
import { HoleCluster } from "./holes"
import { Rich } from "./rich"
import { Container, Section, type SectionTheme } from "./section"
import type { CtaBandData } from "@/content/types"
import { href, type Locale } from "@/i18n/config"

/** Closing call-to-action band used at the bottom of inner pages. */
export function CtaBand({ t, lang, theme = "rind" }: { t: CtaBandData; lang: Locale; theme?: SectionTheme }) {
  return (
    <Section theme={theme} name="cta">
      <HoleCluster
        holes={[
          { x: 92, y: 30, size: 16, tone: "outline" },
          { x: 48, y: 90, size: 5, tone: "muted" },
        ]}
      />
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-3xl flex-col gap-6">
          <h2 className="display-1 accent-em text-balance">
            <Rich text={t.title} />
          </h2>
          <p className="lead text-pretty text-muted-foreground">{t.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={href(lang, t.primary.href)} size="lg" arrow>
            {t.primary.label}
          </ButtonLink>
          <ButtonLink href={href(lang, t.secondary.href)} variant="outline" size="lg">
            {t.secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}

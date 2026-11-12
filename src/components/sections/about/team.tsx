import { ButtonLink } from "@/components/brand/button-link"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { TeamCard } from "@/components/brand/team-card"
import type { AboutDict } from "@/content/types"
import { href, type Locale } from "@/i18n/config"

export function AboutTeam({ t, lang }: { t: AboutDict["team"]; lang: Locale }) {
  return (
    <Section theme="cream" name="team">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index={t.index}
            eyebrow={t.eyebrow}
            title={<Rich text={t.title} />}
            lead={t.lead}
            className="max-w-4xl"
          />
          <ButtonLink href={href(lang, "/careers")} variant="outline" arrow className="self-start lg:self-end">
            {t.cta}
          </ButtonLink>
        </div>

        {/* Middle column drops down for an editorial rhythm */}
        <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {t.members.map((m) => (
            <li key={m.name} className="lg:[&:nth-child(3n+2)]:translate-y-20">
              <TeamCard member={m} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

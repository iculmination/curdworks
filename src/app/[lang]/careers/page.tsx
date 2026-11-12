import { Section, Container } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { getDictionary } from "@/i18n/dictionaries"

// Placeholder — real content lands in the next stage.
export default async function CareersPage({ params }: PageProps<"/[lang]/careers">) {
  const { lang } = await params
  const t = await getDictionary(lang)
  return (
    <Section fullscreen name="careers-placeholder">
      <Container>
        <SectionHeading as="h1" eyebrow="WIP" title={t.nav.careers} />
      </Container>
    </Section>
  )
}

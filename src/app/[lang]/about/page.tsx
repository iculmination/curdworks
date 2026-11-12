import { Section, Container } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { getDictionary } from "@/i18n/dictionaries"

// Placeholder — real content lands in the next stage.
export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params
  const t = await getDictionary(lang)
  return (
    <Section fullscreen name="about-placeholder">
      <Container>
        <SectionHeading as="h1" eyebrow="WIP" title={t.nav.about} />
      </Container>
    </Section>
  )
}

import { Section, Container } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Rich } from "@/components/brand/rich"
import { getDictionary } from "@/i18n/dictionaries"

// Placeholder — landing sections land in the next stage.
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  const t = await getDictionary(lang)
  return (
    <Section fullscreen name="home-placeholder">
      <Container>
        <SectionHeading as="h1" eyebrow="WIP" title={<Rich text={t.meta.tagline} />} lead={t.meta.description} />
      </Container>
    </Section>
  )
}

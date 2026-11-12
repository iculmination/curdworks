import { ButtonLink } from "@/components/brand/button-link"
import { ProductCard } from "@/components/brand/product-card"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import type { HomeDict } from "@/content/types"
import { href, type Locale } from "@/i18n/config"

export function HomeCollection({ t, lang }: { t: HomeDict["collection"]; lang: Locale }) {
  return (
    <Section theme="cream" fullscreen name="collection">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index={t.index}
            eyebrow={t.eyebrow}
            title={<Rich text={t.title} />}
            lead={t.lead}
            className="max-w-4xl"
          />
          <ButtonLink href={href(lang, "/technologies")} variant="outline" arrow className="self-start lg:self-end">
            {t.cta}
          </ButtonLink>
        </div>

        {/* Staggered grid: every second card drops down on wide screens */}
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:pb-16">
          {t.products.map((p) => (
            <li key={p.name} className="xl:even:translate-y-16" data-product>
              <ProductCard product={p} className="h-full" />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

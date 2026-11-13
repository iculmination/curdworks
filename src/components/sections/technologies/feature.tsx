import { visuals } from "@/content/visuals"
import { ImageSlot } from "@/components/brand/image-slot"
import { Rich } from "@/components/brand/rich"
import { Container, Section, type SectionTheme } from "@/components/brand/section"
import { SpecList } from "@/components/brand/spec-list"
import type { TechFeatureData } from "@/content/types"
import { cn } from "@/lib/utils"

/** One technology: image with a round detail inset + text, specs. Alternates sides. */
export function TechFeature({
  f,
  reversed,
  theme,
  specsLabel,
}: {
  f: TechFeatureData
  reversed: boolean
  theme: SectionTheme
  specsLabel: string
}) {
  return (
    <Section id={f.id} theme={theme} name={`tech-${f.id}`}>
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className={cn("relative lg:col-span-6", reversed && "lg:order-2 lg:col-start-7")}>
          <ImageSlot label={f.image} visual={visuals.technologies.features[f.id]?.main} ratio="4/5" className="rounded-[2.5rem]" />
          <div
            className={cn(
              "absolute -bottom-8 w-[38%] rounded-full bg-background p-2",
              reversed ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"
            )}
          >
            <ImageSlot label={f.detailImage} visual={visuals.technologies.features[f.id]?.detail} shape="circle" />
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col gap-8 lg:col-span-5",
            reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"
          )}
        >
          <div className="flex items-end gap-4">
            <span
              className="font-display text-[clamp(4rem,7vw,6.5rem)] leading-[0.8] tracking-[-0.06em] text-accent"
              style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
            >
              {f.number}
            </span>
            <span className="mono-label pb-2 text-muted-foreground">{f.name}</span>
          </div>
          <h2 className="display-1 accent-em text-balance">
            <Rich text={f.title} />
          </h2>
          <p className="lead text-pretty text-muted-foreground">{f.text}</p>
          <ul className="flex flex-col gap-3">
            {f.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="hole mt-1.5 size-3 shrink-0 bg-accent" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-border p-6">
            <p className="mono-label text-accent">{specsLabel}</p>
            <SpecList specs={f.specs} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

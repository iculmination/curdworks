import { Marquee } from "@/components/brand/marquee"
import { Section } from "@/components/brand/section"
import type { HomeDict } from "@/content/types"

export function HomePress({ t }: { t: HomeDict["press"] }) {
  return (
    <Section theme="rind" name="press" className="py-10 md:py-12">
      <p className="mono-label container-site mb-6 text-muted-foreground">{t.label}</p>
      <Marquee items={t.names} className="display-2 italic" duration={50} separator="✦" />
    </Section>
  )
}

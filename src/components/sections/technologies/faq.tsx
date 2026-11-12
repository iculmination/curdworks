import { MailIcon } from "lucide-react"

import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { TechDict } from "@/content/types"

export function TechFaq({ t }: { t: TechDict["faq"] }) {
  return (
    <Section theme="cream" name="faq">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading index={t.index} eyebrow={t.eyebrow} title={<Rich text={t.title} />} lead={t.lead} />
          <div className="flex flex-col items-start gap-4 rounded-[1.75rem] bg-card p-6">
            <p className="text-muted-foreground">{t.contactText}</p>
            <a href="mailto:lab@curdworks.example" className={cn(buttonVariants({ variant: "outline" }))}>
              <MailIcon className="size-4" />
              {t.contactCta}
            </a>
          </div>
        </div>

        <Accordion className="lg:col-span-7 lg:col-start-6">
          {t.items.map((item, i) => (
            <AccordionItem key={item.q} value={`q${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}

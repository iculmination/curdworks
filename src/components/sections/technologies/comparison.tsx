import { BigIndex } from "@/components/brand/big-index"
import { Rich } from "@/components/brand/rich"
import { Container, Section } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { TechDict } from "@/content/types"

export function TechComparison({ t }: { t: TechDict["comparison"] }) {
  const [, oldCol, newCol] = t.columns
  return (
    <Section theme="cave" fullscreen name="comparison">
      <BigIndex className="-top-10 -right-6">{t.index}</BigIndex>
      <Container className="flex flex-col gap-14">
        <SectionHeading
          index={t.index}
          eyebrow={t.eyebrow}
          title={<Rich text={t.title} />}
          lead={t.lead}
          className="max-w-4xl"
        />

        {/* Desktop: table with the Curdworks column highlighted */}
        <div className="hidden md:block">
          <Table className="text-base">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-1/4" />
                <TableHead className="mono-label h-14 w-[37.5%] text-muted-foreground">{oldCol}</TableHead>
                <TableHead className="mono-label h-14 w-[37.5%] rounded-t-2xl bg-accent px-5 text-accent-foreground">
                  {newCol}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {t.rows.map(([aspect, old, ours], i) => (
                <TableRow key={aspect} className="hover:bg-foreground/[0.03]">
                  <TableCell className="py-5 font-display text-xl">{aspect}</TableCell>
                  <TableCell className="py-5 whitespace-normal text-muted-foreground">{old}</TableCell>
                  <TableCell
                    className={`bg-accent/12 px-5 py-5 whitespace-normal ${i === t.rows.length - 1 ? "rounded-b-2xl" : ""}`}
                  >
                    {ours}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile: one card per row */}
        <ul className="flex flex-col gap-3 md:hidden">
          {t.rows.map(([aspect, old, ours]) => (
            <li key={aspect} className="flex flex-col gap-3 rounded-3xl bg-card p-5">
              <p className="display-3">{aspect}</p>
              <p className="text-sm text-muted-foreground">
                <span className="mono-label mb-1 block">{oldCol}</span>
                {old}
              </p>
              <p className="text-sm">
                <span className="mono-label mb-1 block text-accent">{newCol}</span>
                {ours}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

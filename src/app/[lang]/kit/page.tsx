import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import { BigIndex } from "@/components/brand/big-index"
import { ButtonLink, ArrowBadge } from "@/components/brand/button-link"
import { Eyebrow } from "@/components/brand/eyebrow"
import { HoleCluster } from "@/components/brand/holes"
import { ImageSlot } from "@/components/brand/image-slot"
import { JobCard } from "@/components/brand/job-card"
import { Logo } from "@/components/brand/logo"
import { Marquee } from "@/components/brand/marquee"
import { ProcessStep } from "@/components/brand/process-step"
import { ProductCard } from "@/components/brand/product-card"
import { Quote } from "@/components/brand/quote"
import { Section, Container, type SectionTheme } from "@/components/brand/section"
import { SectionHeading } from "@/components/brand/section-heading"
import { SpecList } from "@/components/brand/spec-list"
import { Stat } from "@/components/brand/stat"
import { TimelineItem } from "@/components/brand/timeline-item"

export const metadata: Metadata = {
  title: "UI Kit",
  robots: { index: false, follow: false },
}

/* ------------------------------------------------------------------ */

const colors = [
  { name: "Cream", token: "cream", note: "Base surface", cls: "bg-cream text-cave" },
  { name: "Paper", token: "paper", note: "Cards / alt surface", cls: "bg-paper text-cave" },
  { name: "Cave", token: "cave", note: "Ink & dark sections", cls: "bg-cave text-cream" },
  { name: "Rind", token: "rind", note: "Primary accent", cls: "bg-rind text-paper" },
  { name: "Wax", token: "wax", note: "Highlight / accent on dark", cls: "bg-wax text-cave" },
  { name: "Mold", token: "mold", note: "Cool detail, sparingly", cls: "bg-mold text-paper" },
]

const themes: SectionTheme[] = ["cream", "paper", "cave", "rind", "wax"]

const demoStep = {
  number: "03",
  title: "Cutting the curd",
  text: "Harp-shaped knives slice the set curd into grains. Grain size decides everything: rice-sized for alpine hard cheese, walnut-sized for soft.",
  specs: [
    { label: "Grain", value: "3–5 mm" },
    { label: "Temp", value: "32 °C" },
    { label: "Time", value: "18 min" },
  ],
  image: "Curd harp cutting through a copper vat",
}

const demoProduct = {
  name: "Hochalm 24",
  family: "Alpine hard",
  tagline: "Twenty-four months in the cave. Crystals you can hear.",
  specs: [
    { label: "Aged", value: "24 months" },
    { label: "Milk", value: "Raw cow, hay-fed" },
    { label: "Fat i.d.m.", value: "50 %" },
  ],
  image: "Cracked wheel of aged alpine cheese",
  tone: "wax" as const,
}

const sectionLink = "mono-label rounded-full border border-border px-3 py-1.5 hover:bg-foreground hover:text-background"

function KitBlock({
  id,
  index,
  title,
  children,
  theme = "cream",
}: {
  id: string
  index: string
  title: string
  children: React.ReactNode
  theme?: SectionTheme
}) {
  return (
    <Section id={id} theme={theme} className="border-t border-border py-20">
      <Container className="flex flex-col gap-12">
        <Eyebrow index={index}>{title}</Eyebrow>
        {children}
      </Container>
    </Section>
  )
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mono-label text-muted-foreground">{children}</p>
}

/* ------------------------------------------------------------------ */

export default function KitPage() {
  return (
    <>
      {/* Intro */}
      <Section theme="cream" className="pt-40">
        <HoleCluster
          className="hidden md:block"
          holes={[
            { x: 82, y: 45, size: 22, tone: "accent" },
            { x: 94, y: 70, size: 8, tone: "muted" },
            { x: 66, y: 78, size: 4, tone: "muted" },
          ]}
        />
        <Container className="flex flex-col gap-10">
          <SectionHeading
            as="h1"
            eyebrow="Design system · v0.1"
            title={
              <>
                The <em>Curdworks</em> UI kit
              </>
            }
            lead="shadcn/ui primitives re-skinned for the brand, plus a layer of editorial components built for this site. Internal page — not indexed."
          />
          <nav className="flex flex-wrap gap-2">
            {["colors", "themes", "type", "buttons", "forms", "interactive", "brand", "patterns"].map((s) => (
              <a key={s} href={`#${s}`} className={sectionLink}>
                {s}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      {/* Colors */}
      <KitBlock id="colors" index="01" title="Colors">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {colors.map((c) => (
            <div key={c.token} className={`flex aspect-[3/4] flex-col justify-between rounded-3xl p-5 ring-1 ring-foreground/10 ${c.cls}`}>
              <span className="mono-label opacity-70">--brand-{c.token}</span>
              <div>
                <p className="display-3">{c.name}</p>
                <p className="text-sm opacity-70">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </KitBlock>

      {/* Themes */}
      <KitBlock id="themes" index="02" title="Section themes">
        <p className="lead max-w-2xl text-muted-foreground">
          Each <code className="font-mono text-sm">&lt;Section theme=&quot;…&quot;&gt;</code> remaps the semantic
          tokens, so the same components adapt automatically. The landing page alternates them to feel like moving
          between rooms.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {themes.map((t) => (
            <div key={t} className={`theme-${t} flex flex-col gap-5 rounded-3xl bg-background p-6 text-foreground ring-1 ring-foreground/10`}>
              <Eyebrow index="00">{t}</Eyebrow>
              <p className="display-3 accent-em">
                Aged <em>slowly</em>
              </p>
              <p className="text-sm text-muted-foreground">Muted body text on this surface.</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="accent">Accent</Button>
                <Button size="sm" variant="outline">Outline</Button>
              </div>
            </div>
          ))}
        </div>
      </KitBlock>

      {/* Typography */}
      <KitBlock id="type" index="03" title="Typography">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <Caption>display-hero · Fraunces (SOFT 100, WONK 1)</Caption>
            <p className="display-hero accent-em">
              Grown, <em>not</em> made.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Caption>display-1</Caption>
              <p className="display-1 accent-em">
                From milk to <em>masterpiece</em>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Caption>display-2</Caption>
              <p className="display-2">The cave never sleeps</p>
              <Caption>display-3</Caption>
              <p className="display-3">Twenty-four months of patience</p>
            </div>
          </div>
          <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-3">
            <div className="flex flex-col gap-2">
              <Caption>lead · Instrument Sans</Caption>
              <p className="lead">
                Every wheel carries a sensor tag. We know its temperature, humidity and pH from the vat to the day it
                leaves the cave.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Caption>body</Caption>
              <p>
                Rennet, cultures and time do the real work. Our job is to give them perfect, repeatable conditions —
                and then to step aside and wait. Patience is the only ingredient we cannot buy.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Caption>mono-label · JetBrains Mono</Caption>
              <p className="mono-label">Cave 03 · 12.4 °C · 94 % RH</p>
              <p className="font-mono text-sm">pH 5.21 → 5.34 / day 14</p>
            </div>
          </div>
        </div>
      </KitBlock>

      {/* Buttons & badges */}
      <KitBlock id="buttons" index="04" title="Buttons & badges">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">XS</Button>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" variant="outline" aria-label="Arrow">
              <ArrowBadge className="size-auto bg-transparent text-current" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Caption>ButtonLink + arrow →</Caption>
            <ButtonLink href="#" arrow>
              Explore the cave
            </ButtonLink>
            <ButtonLink href="#" variant="accent" size="lg" arrow>
              Book a tour
            </ButtonLink>
            <ButtonLink href="#" variant="outline" arrow>
              See all jobs
            </ButtonLink>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="rind">Rind</Badge>
            <Badge variant="wax">Wax</Badge>
            <Badge variant="mold">Mold</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="secondary">Secondary</Badge>
          </div>
        </div>
      </KitBlock>

      {/* Forms */}
      <KitBlock id="forms" index="05" title="Form controls">
        <form className="grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="kit-name">Full name</Label>
            <Input id="kit-name" placeholder="Ada Affineur" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="kit-email">Email</Label>
            <Input id="kit-email" type="email" placeholder="ada@curdworks.de" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Department</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cave">Cave & affinage</SelectItem>
                <SelectItem value="lab">Microbiology lab</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="kit-invalid">Invalid state</Label>
            <Input id="kit-invalid" aria-invalid defaultValue="not-an-email" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="kit-msg">Why cheese?</Label>
            <Textarea id="kit-msg" placeholder="Tell us about the first cheese that changed your mind…" />
          </div>
        </form>
      </KitBlock>

      {/* Interactive */}
      <KitBlock id="interactive" index="06" title="Tabs · Accordion · Table · Dialog · Tooltip">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Caption>Tabs</Caption>
            <Tabs defaultValue="hard">
              <TabsList>
                <TabsTrigger value="hard">Hard</TabsTrigger>
                <TabsTrigger value="soft">Soft</TabsTrigger>
                <TabsTrigger value="blue">Blue</TabsTrigger>
              </TabsList>
              <TabsContent value="hard" className="pt-4 text-base text-muted-foreground">
                Pressed, cooked curds; aged 6–36 months.
              </TabsContent>
              <TabsContent value="soft" className="pt-4 text-base text-muted-foreground">
                Unpressed, bloomy rind; ready in 4–8 weeks.
              </TabsContent>
              <TabsContent value="blue" className="pt-4 text-base text-muted-foreground">
                Pierced with steel needles so Penicillium roqueforti can breathe.
              </TabsContent>
            </Tabs>
            <Tabs defaultValue="all">
              <TabsList variant="line">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="cave">Cave</TabsTrigger>
                <TabsTrigger value="lab">Lab</TabsTrigger>
              </TabsList>
            </Tabs>

            <Caption>Dialog & tooltip</Caption>
            <div className="flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Senior Affineur (m/f/d)</DialogTitle>
                    <DialogDescription>
                      Lead the turning, brushing and grading of 2,400 wheels in Cave 03.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" />}>Hover me</TooltipTrigger>
                <TooltipContent>Relative humidity in Cave 03</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Caption>Accordion</Caption>
            <Accordion>
              <AccordionItem value="a">
                <AccordionTrigger>Is raw-milk cheese safe?</AccordionTrigger>
                <AccordionContent>
                  Yes — with 60+ days of ageing, strict herd health and lab testing of every batch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Why do some cheeses have holes?</AccordionTrigger>
                <AccordionContent>
                  Propionibacteria release CO₂ during warm-room ripening. The gas gathers into the famous eyes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Caption>Table</Caption>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stage</TableHead>
                  <TableHead>Traditional</TableHead>
                  <TableHead>Curdworks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Temp control</TableCell>
                  <TableCell>± 3 °C</TableCell>
                  <TableCell>± 0.2 °C</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wheel turning</TableCell>
                  <TableCell>Manual, weekly</TableCell>
                  <TableCell>Robotic, daily</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </KitBlock>

      {/* Brand components */}
      <KitBlock id="brand" index="07" title="Brand components">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Caption>Logo</Caption>
            <Logo className="text-6xl" />
          </div>

          <div className="flex flex-col gap-4">
            <Caption>ImageSlot — rect · arch · circle · hole · pill</Caption>
            <div className="grid grid-cols-2 items-end gap-4 md:grid-cols-5">
              <ImageSlot label="Copper vat, top view" ratio="4/5" />
              <ImageSlot label="Cheesemaker portrait" ratio="3/4" shape="arch" />
              <ImageSlot label="Wheel macro" shape="circle" />
              <ImageSlot label="Emmental eye macro" shape="hole" />
              <ImageSlot label="Cave corridor" ratio="1/2" shape="pill" />
            </div>
          </div>

          <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-border p-8 md:grid-cols-4">
            <HoleCluster
              holes={[
                { x: 100, y: 0, size: 12, tone: "muted" },
                { x: 0, y: 100, size: 5, tone: "accent" },
              ]}
            />
            <Stat value="2,400" label="wheels ripening in Cave 03 right now" />
            <Stat value="12.4" unit="°C" label="cave temperature, held to ±0.2 °C" />
            <Stat value="94" unit="%" label="relative humidity" />
            <Stat value="180" unit="days" label="average affinage time" />
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Caption>SpecList</Caption>
              <SpecList
                specs={[
                  { label: "Milk", value: "Raw cow, hay-fed" },
                  { label: "Rennet", value: "Traditional calf" },
                  { label: "Aged", value: "24 months" },
                  { label: "Cave", value: "03 · sandstone" },
                ]}
              />
            </div>
            <div className="relative flex min-h-64 items-end overflow-hidden rounded-3xl border border-border p-8">
              <BigIndex className="-top-10 -right-6">02</BigIndex>
              <Caption>BigIndex — outlined section number behind content</Caption>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Caption>Marquee</Caption>
            <Marquee
              className="display-2 border-y border-border py-6"
              items={["Raw milk", "Living cultures", "Copper vats", "Sandstone caves", "Patience"]}
            />
          </div>
        </div>
      </KitBlock>

      {/* Patterns */}
      <KitBlock id="patterns" index="08" title="Patterns">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProcessStep step={demoStep} />
          <ProductCard product={demoProduct} />
          <div className="flex flex-col justify-center rounded-3xl border border-border p-8">
            <Quote
              quote={{
                text: "The closest thing to a Swiss watch that you can eat.",
                author: "M. Keller",
                source: "Feinschmecker Monthly",
              }}
            />
          </div>
        </div>
        <ul>
          <TimelineItem
            entry={{
              year: "1987",
              title: "A barn, a vat, a stubborn idea",
              text: "Founder Lena Brandt starts making cheese from her neighbours' milk in a converted hay barn.",
              image: "Archive photo of the original barn",
            }}
          />
        </ul>
        <div>
          <JobCard
            job={{
              id: "affineur",
              title: "Senior Affineur",
              department: "Cave",
              location: "Hochalm, DE",
              type: "Full-time",
              summary: "Lead the turning, brushing and grading of 2,400 wheels in our sandstone cave.",
            }}
          />
        </div>
      </KitBlock>

      <SectionThemeStrip />
    </>
  )
}

/** Shows a cave-themed Section with heading + CTA, as it will look on the landing. */
function SectionThemeStrip() {
  return (
    <Section theme="cave" fullscreen name="kit-cave-demo">
      <BigIndex className="-right-10 -bottom-16">03</BigIndex>
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading
          index="03"
          eyebrow="Inside the cave"
          title={
            <>
              Where time is the <em>main</em> ingredient
            </>
          }
          lead="A full-height cave section — preview of the landing rhythm."
        />
        <div className="flex flex-col items-start gap-8">
          <ImageSlot label="Endless shelves of wheels in a dim sandstone cave" ratio="16/10" className="w-full" />
          <ButtonLink href="#" variant="accent" size="lg" arrow>
            Take the tour
          </ButtonLink>
        </div>
      </Container>
    </Section>
  )
}

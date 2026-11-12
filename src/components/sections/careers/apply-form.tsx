"use client"

import { useEffect, useId, useRef, useState } from "react"
import { CheckIcon, PaperclipIcon } from "lucide-react"

import { ArrowBadge } from "@/components/brand/button-link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import type { CareersDict } from "@/content/types"
import { scrollToTarget } from "@/components/motion/smooth-scroll"
import { APPLY_EVENT, OPEN_APPLICATION } from "./apply-bus"

type Props = {
  t: CareersDict["apply"]
  positions: { value: string; label: string }[]
}

/** UI-only application form (no backend yet). */
export function ApplyForm({ t, positions }: Props) {
  const id = useId()
  const nameRef = useRef<HTMLInputElement>(null)
  const [position, setPosition] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const items = [...positions, { value: OPEN_APPLICATION, label: t.fields.openPosition }]

  // The job sheet / open-application button ask us to preselect a position
  useEffect(() => {
    function onApply(e: Event) {
      setSent(false)
      setPosition((e as CustomEvent<string>).detail)
      // wait for the sheet to close before scrolling
      window.setTimeout(() => {
        const section = document.getElementById("apply")
        if (section) scrollToTarget(section)
        nameRef.current?.focus({ preventScroll: true })
      }, 120)
    }
    window.addEventListener(APPLY_EVENT, onApply)
    return () => window.removeEventListener(APPLY_EVENT, onApply)
  }, [])

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-6 rounded-[2rem] bg-card p-8 md:p-12">
        <span className="hole grid size-16 place-items-center bg-accent text-accent-foreground">
          <CheckIcon className="size-7" />
        </span>
        <h3 className="display-2">{t.success.title}</h3>
        <p className="max-w-lg text-pretty text-muted-foreground">{t.success.text}</p>
        <Button
          variant="outline"
          onClick={() => {
            setSent(false)
            setPosition(null)
            setFileName(null)
          }}
        >
          {t.success.reset}
        </Button>
      </div>
    )
  }

  const f = t.fields
  return (
    <form
      className="grid gap-6 rounded-[2rem] bg-card p-6 sm:grid-cols-2 md:p-10"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <Field label={f.name} htmlFor={`${id}-name`}>
        <Input ref={nameRef} id={`${id}-name`} name="name" required autoComplete="name" />
      </Field>
      <Field label={f.email} htmlFor={`${id}-email`}>
        <Input id={`${id}-email`} name="email" type="email" required autoComplete="email" />
      </Field>

      <Field label={f.position} htmlFor={`${id}-position`}>
        <Select name="position" items={items} value={position} onValueChange={(v) => setPosition(v as string | null)} required>
          <SelectTrigger id={`${id}-position`} className="w-full">
            <SelectValue placeholder={f.positionPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {items.map((p) => (
              <SelectItem key={p.value} value={p.value}>
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label={f.link} htmlFor={`${id}-link`} optional={f.optional}>
        <Input id={`${id}-link`} name="link" type="url" placeholder={f.linkPlaceholder} />
      </Field>

      <Field label={f.message} htmlFor={`${id}-message`} className="sm:col-span-2">
        <Textarea id={`${id}-message`} name="message" required rows={5} placeholder={f.messagePlaceholder} />
      </Field>

      {/* CV "dropzone" */}
      <label
        htmlFor={`${id}-cv`}
        className="flex cursor-pointer items-center gap-4 rounded-3xl border border-dashed border-foreground/25 p-5 transition-colors hover:border-accent hover:bg-accent/5 has-focus-visible:ring-3 has-focus-visible:ring-ring/50 sm:col-span-2"
      >
        <span className="hole grid size-12 shrink-0 place-items-center bg-background">
          <PaperclipIcon className="size-4" />
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate font-medium">{fileName ?? f.cv}</span>
          <span className="text-sm text-muted-foreground">{f.cvHint}</span>
        </span>
        <input
          id={`${id}-cv`}
          name="cv"
          type="file"
          accept="application/pdf"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-(--accent)" />
        {f.consent}
      </label>

      <Button type="submit" variant="accent" size="lg" className="justify-self-start sm:col-span-2">
        {t.submit}
        <ArrowBadge variant="accent" large />
      </Button>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  optional,
  className,
  children,
}: {
  label: string
  htmlFor: string
  optional?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {optional && <span className="font-normal text-muted-foreground">({optional})</span>}
      </Label>
      {children}
    </div>
  )
}

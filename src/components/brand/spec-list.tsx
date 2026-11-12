import { cn } from "@/lib/utils"

export type Spec = { label: string; value: string }

/** Technical "spec sheet": label ······ value */
export function SpecList({ specs, className }: { specs: Spec[]; className?: string }) {
  return (
    <dl className={cn("flex flex-col gap-2.5 font-mono text-[0.8rem]", className)}>
      {specs.map((s) => (
        <div key={s.label} className="flex items-baseline gap-2">
          <dt className="text-muted-foreground uppercase tracking-wider">{s.label}</dt>
          <span aria-hidden className="leader" />
          <dd className="text-right">{s.value}</dd>
        </div>
      ))}
    </dl>
  )
}

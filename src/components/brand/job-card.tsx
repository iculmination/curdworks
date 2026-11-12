import { ArrowUpRightIcon, MapPinIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type JobData = {
  id: string
  title: string
  department: string
  location: string
  type: string
  summary: string
}

/** A job listing row. Rendered as a button so the page can open details. */
export function JobCard({
  job,
  className,
  ...props
}: { job: JobData } & React.ComponentProps<"button">) {
  return (
    <button
      data-reveal
      type="button"
      className={cn(
        "group relative grid w-full gap-4 border-t border-border py-7 text-left transition-colors outline-none hover:bg-foreground/[0.03] focus-visible:ring-3 focus-visible:ring-ring/50 md:grid-cols-[minmax(0,6fr)_minmax(0,3fr)_minmax(0,2fr)_auto] md:items-center md:gap-8 md:px-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2 pr-14 md:pr-0">
        <h3 className="display-3 transition-colors group-hover:text-accent">{job.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{job.summary}</p>
      </div>
      <Badge variant="outline" className="w-fit">{job.department}</Badge>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground md:flex-col">
        <span className="inline-flex items-center gap-1.5"><MapPinIcon className="size-3.5" />{job.location}</span>
        <span className="inline-flex items-center gap-1.5"><ClockIcon className="size-3.5" />{job.type}</span>
      </div>
      <span className="absolute top-7 right-0 grid size-10 place-items-center rounded-full md:static md:size-12 border border-foreground/20 transition-all duration-300 group-hover:rotate-45 group-hover:bg-foreground group-hover:text-background">
        <ArrowUpRightIcon className="size-4" />
      </span>
    </button>
  )
}

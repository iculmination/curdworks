import { cn } from "@/lib/utils"
import { Eyebrow } from "./eyebrow"

type Props = {
  index?: string
  eyebrow?: string
  /** Supports <em> for the italic accent word — pass a ReactNode */
  title: React.ReactNode
  lead?: React.ReactNode
  size?: "1" | "2"
  align?: "start" | "center"
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  size = "1",
  align = "start",
  className,
  as: Tag = "h2",
}: Props) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "accent-em text-balance",
          size === "1" ? "display-1" : "display-2"
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p className={cn("lead max-w-2xl text-pretty text-muted-foreground", align === "center" && "mx-auto")}>
          {lead}
        </p>
      )}
    </header>
  )
}

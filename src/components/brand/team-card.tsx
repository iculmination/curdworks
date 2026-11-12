import { cn } from "@/lib/utils"
import { ImageSlot } from "./image-slot"

export type TeamCardData = { name: string; role: string; note: string; image: string }

/** Portrait in an arch + name, role and a personal note. */
export function TeamCard({ member, className }: { member: TeamCardData; className?: string }) {
  return (
    <article className={cn("group flex flex-col gap-5", className)}>
      <ImageSlot label={member.image} ratio="1/1" shape="arch" />
      <div className="flex flex-col gap-1.5">
        <p className="mono-label text-accent">{member.role}</p>
        <h3 className="display-3">{member.name}</h3>
      </div>
      <p className="border-t border-border pt-4 text-sm text-pretty text-muted-foreground">{member.note}</p>
    </article>
  )
}

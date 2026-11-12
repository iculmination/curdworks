import { useId } from "react"
import { cn } from "@/lib/utils"

/**
 * Round "stamp" with text running along a circle and a cheese eye in the
 * middle. Static for now — rotation will be added with the animation pass.
 */
export function CircleBadge({ text, className }: { text: string; className?: string }) {
  const id = useId()
  return (
    <div data-circle-badge className={cn("relative grid aspect-square place-items-center", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full" aria-hidden>
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-mono text-[13px] uppercase">
          <textPath href={`#${id}`} textLength="486" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="hole size-[38%] bg-accent" aria-hidden />
      <span className="sr-only">{text}</span>
    </div>
  )
}

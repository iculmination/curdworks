import { Fragment } from "react"

/**
 * Renders dictionary strings with a tiny markup: *word* → <em>word</em>
 * (the italic serif accent). Keeps content files plain strings.
 */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  )
}

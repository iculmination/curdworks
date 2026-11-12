"use client"

import { useState } from "react"
import { CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Dictionary } from "@/content/types"

/** UI-only newsletter signup (no backend yet). */
export function NewsletterForm({ t }: { t: Dictionary["footer"]["newsletter"] }) {
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <p role="status" className="flex items-center gap-3 text-accent">
        <CheckIcon className="size-5" /> {t.success}
      </p>
    )
  }

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {t.emailLabel}
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder={t.placeholder}
        autoComplete="email"
        className="sm:flex-1"
      />
      <Button type="submit" variant="accent" className="h-12">
        {t.submit}
      </Button>
    </form>
  )
}

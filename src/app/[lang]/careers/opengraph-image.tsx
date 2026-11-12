import { ogAlt, ogContentType, ogSize, renderOg } from "@/lib/og"

type Props = { params: Promise<{ lang: string }> }

export async function generateImageMetadata({ params }: { params?: Promise<{ lang?: string }> | { lang?: string } }) {
  const { lang } = (await params) ?? {}
  return [{ id: "card", alt: await ogAlt(lang, "careers"), size: ogSize, contentType: ogContentType }]
}

export default async function Image({ params }: Props) {
  const { lang } = await params
  return renderOg(lang, "careers")
}

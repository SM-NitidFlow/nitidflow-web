import type { Metadata } from "next"
import { SITE_URL, site } from "./site"

type PageMetaInput = {
  title: string
  description: string
  /** Ruta absoluta desde la raíz, p. ej. "/agentes-ia". Usar "/" para la home. */
  path: string
  /** Título alternativo para Open Graph si debe diferir del title. */
  ogTitle?: string
  ogDescription?: string
  noindex?: boolean
}

/**
 * Genera metadata única por página: title, description, canonical, OG y Twitter.
 * Spec §26 / §27.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noindex,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
    },
  }
}

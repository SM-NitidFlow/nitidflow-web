import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { landings } from "@/lib/landings"
import { sectorPages } from "@/lib/sectores"
import { articles } from "@/lib/articulos"
import { casosPublicables } from "@/lib/casos"

/**
 * Sitemap generado a partir de las mismas fuentes que las páginas, así que
 * añadir una landing o un artículo lo incluye sin tocar este archivo.
 * Las páginas legales quedan fuera: van con noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const fixed: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/sectores`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/casos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/recursos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/sobre-nitidflow`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  const landingEntries: MetadataRoute.Sitemap = landings.map((landing) => ({
    url: `${SITE_URL}${landing.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const sectorEntries: MetadataRoute.Sitemap = sectorPages.map((sector) => ({
    url: `${SITE_URL}${sector.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  // Sólo entran los casos autorizados por el cliente: los demás van noindex.
  const casoEntries: MetadataRoute.Sitemap = casosPublicables.map((caso) => ({
    url: `${SITE_URL}/casos/${caso.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/recursos/${article.slug}`,
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }))

  return [
    ...fixed,
    ...landingEntries,
    ...sectorEntries,
    ...casoEntries,
    ...articleEntries,
  ]
}

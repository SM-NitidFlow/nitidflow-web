/**
 * Genera lib/brand-paths.generated.ts a partir de simple-icons.
 *
 * simple-icons queda como dependencia de desarrollo: los paths se inlinean
 * en el fichero generado, así que en runtime no hay dependencia ni
 * peticiones a terceros.
 *
 *   node scripts/generate-brand-paths.mjs
 */
import * as si from "simple-icons"
import { readFileSync, writeFileSync } from "node:fs"

const SI_VERSION = JSON.parse(
  readFileSync(new URL("../node_modules/simple-icons/package.json", import.meta.url), "utf8"),
).version

/** Nombre que usamos en lib/site.ts -> slug de simple-icons */
const MAP = {
  WhatsApp: "whatsapp",
  Gmail: "gmail",
  "Google Sheets": "googlesheets",
  HubSpot: "hubspot",
  Shopify: "shopify",
  Stripe: "stripe",
  Notion: "notion",
  Airtable: "airtable",
  n8n: "n8n",
  Make: "make",
  Claude: "claude",
  Gemini: "googlegemini",
  // Herramientas que aparecen en los casos
  Netlify: "netlify",
}

const all = Object.values(si).filter((v) => v && v.slug && v.path)
const bySlug = new Map(all.map((i) => [i.slug, i]))

const entries = []
const missing = []

for (const [name, slug] of Object.entries(MAP)) {
  const icon = bySlug.get(slug)
  if (!icon) {
    missing.push(`${name} (${slug})`)
    continue
  }
  entries.push({ name, title: icon.title, slug, path: icon.path })
}

if (missing.length > 0) {
  console.error("No encontrados en simple-icons:", missing.join(", "))
  process.exit(1)
}

const body = entries
  .map(
    (e) =>
      `  ${JSON.stringify(e.name)}: {\n` +
      `    // ${e.title} · simple-icons/${e.slug}\n` +
      `    path: ${JSON.stringify(e.path)},\n` +
      `  },`,
  )
  .join("\n")

const out = `// GENERADO AUTOMÁTICAMENTE. No editar a mano.
// Fuente: simple-icons v${SI_VERSION} (paquete CC0-1.0)
// Regenerar con: node scripts/generate-brand-paths.mjs
//
// Los paths son los logotipos oficiales de cada marca, en un único trazo y
// pensados para un viewBox de 24x24. Los logotipos son marcas registradas de
// sus respectivos titulares; se usan aquí para indicar compatibilidad técnica
// y no implican vinculación ni patrocinio.

export type BrandPath = { path: string }

export const brandPaths: Record<string, BrandPath> = {
${body}
}
`

writeFileSync(new URL("../lib/brand-paths.generated.ts", import.meta.url), out)
console.log(`Generados ${entries.length} paths oficiales:`)
for (const e of entries) console.log(`  ${e.name.padEnd(15)} ${e.slug}`)

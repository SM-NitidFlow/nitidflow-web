import type { ReactNode } from "react"
import { brandPaths } from "@/lib/brand-paths.generated"

/**
 * Glifos monocromos de las herramientas compatibles.
 *
 * La mayoría son los logotipos OFICIALES, tomados de simple-icons (paquete
 * CC0-1.0) y generados a lib/brand-paths.generated.ts en tiempo de
 * desarrollo. Van inline: en runtime no hay dependencia ni peticiones a
 * terceros, y la política de cookies depende de que siga siendo así.
 *
 * Tres marcas — Slack, Salesforce y OpenAI — no están en simple-icons porque
 * sus titulares pidieron la retirada de sus iconos. Para esas usamos glifos
 * propios simplificados, marcados abajo como tales.
 *
 * En todos los casos los logotipos son marcas registradas de sus titulares.
 * Aquí sólo indican compatibilidad técnica: no implican vinculación,
 * patrocinio ni partnership — spec §8 / §38.
 */

/**
 * Glifos propios para las marcas ausentes de simple-icons. No son los
 * logotipos oficiales: son marcas gráficas simplificadas dibujadas para
 * leerse a 18 px en un único color.
 */
const ownGlyphs: Record<string, ReactNode> = {
  Slack: (
    <>
      {/*
        Cuatro cápsulas disjuntas en molinillo, cada una desplazada media
        anchura respecto al eje: eso deja el hueco central en cruz y las
        cuñas diagonales, que es lo que hace legible la marca.
      */}
      <rect x="8.4" y="1.8" width="3.2" height="9.8" rx="1.6" />
      <rect x="12.4" y="8.4" width="9.8" height="3.2" rx="1.6" />
      <rect x="12.4" y="12.4" width="3.2" height="9.8" rx="1.6" />
      <rect x="1.8" y="12.4" width="9.8" height="3.2" rx="1.6" />
    </>
  ),

  Salesforce: (
    <>
      <circle cx="8.2" cy="13.4" r="4.2" />
      <circle cx="12.6" cy="10.4" r="5.2" />
      <circle cx="17.4" cy="13.2" r="4" />
      <rect x="4" y="13.2" width="16" height="4.2" rx="2.1" />
    </>
  ),

  OpenAI: (
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      transform="translate(12 12)"
    >
      <rect x="-3.3" y="-9.2" width="6.6" height="18.4" rx="3.3" />
      <rect
        x="-3.3"
        y="-9.2"
        width="6.6"
        height="18.4"
        rx="3.3"
        transform="rotate(60)"
      />
      <rect
        x="-3.3"
        y="-9.2"
        width="6.6"
        height="18.4"
        rx="3.3"
        transform="rotate(120)"
      />
    </g>
  ),
}

export function hasBrandGlyph(name: string) {
  return name in brandPaths || name in ownGlyphs
}

/** true si el glifo es el logotipo oficial de la marca. */
export function isOfficialBrandGlyph(name: string) {
  return name in brandPaths
}

export function BrandGlyph({
  name,
  className = "size-[18px]",
}: {
  name: string
  className?: string
}) {
  const official = brandPaths[name]
  const own = ownGlyphs[name]

  if (!official && !own) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {official ? <path d={official.path} /> : own}
    </svg>
  )
}

import type { Landing } from "@/lib/landings/types"
import { inmobiliarias } from "./inmobiliarias"
import { clinicas } from "./clinicas"
import { ecommerceSector } from "./ecommerce"
import { despachos } from "./despachos"
import { pymes } from "./pymes"

/** Páginas de sector. Solo existen las que tienen contenido propio — spec §23 */
export const sectorPages: Landing[] = [
  inmobiliarias,
  clinicas,
  ecommerceSector,
  despachos,
  pymes,
]

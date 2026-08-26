import type { Caso } from "./types"
import { bestgarden } from "./bestgarden"

/**
 * Casos publicados. Un caso sólo debe entrar aquí cuando el cliente ha
 * autorizado publicarlo con su nombre — spec §17 / §38.
 */
export const casos: Caso[] = [bestgarden]

export const casoBySlug = new Map(casos.map((c) => [c.slug, c]))

/** Casos con permiso del cliente: los únicos que se indexan y enlazan. */
export const casosPublicables = casos.filter((c) => c.permisoCliente)

export type { Caso }

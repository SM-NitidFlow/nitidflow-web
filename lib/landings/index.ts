import type { Landing } from "./types"
import { automatizacionIa } from "./automatizacion-ia"
import { agentesIa } from "./agentes-ia"
import { automatizacionVentas } from "./automatizacion-ventas"
import { automatizacionAtencionCliente } from "./automatizacion-atencion-cliente"
import { automatizacionWhatsapp } from "./automatizacion-whatsapp"
import { automatizacionMarketing } from "./automatizacion-marketing"
import { automatizacionAdministrativa } from "./automatizacion-administrativa"
import { automatizacionFacturacion } from "./automatizacion-facturacion"
import { automatizacionEcommerce } from "./automatizacion-ecommerce"
import { automatizacionCrm } from "./automatizacion-crm"
import { automatizacionN8n } from "./automatizacion-n8n"
import { iaParaEmpresas } from "./ia-para-empresas"

/**
 * Todas las landings comerciales. El sitemap lee de aquí, así que añadir
 * una landing nueva la incluye automáticamente.
 */
export const landings: Landing[] = [
  automatizacionIa,
  agentesIa,
  automatizacionVentas,
  automatizacionAtencionCliente,
  automatizacionWhatsapp,
  automatizacionMarketing,
  automatizacionAdministrativa,
  automatizacionFacturacion,
  automatizacionEcommerce,
  automatizacionCrm,
  automatizacionN8n,
  iaParaEmpresas,
]

export const landingBySlug = new Map(
  landings.map((landing) => [landing.slug, landing]),
)

export type { Landing }

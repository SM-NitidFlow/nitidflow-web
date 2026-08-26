import { NextResponse } from "next/server"

/**
 * Recepción de leads del formulario — spec §39.
 *
 * No acopla la web a ningún proveedor: reenvía el lead a un webhook
 * configurable (n8n, CRM, Zapier…). La URL y el token viven en variables
 * de entorno, nunca en el repositorio.
 *
 * Si el webhook no está configurado, la ruta devuelve error explícito.
 * Un lead perdido en silencio es peor que un formulario que avisa.
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type LeadPayload = {
  nombre: string
  empresa: string
  email: string
  web: string
  proceso: string
  personas: string
  consentimiento: boolean
  /** Campo trampa: si viene relleno, es un bot. */
  _honey?: string
  /** Marca de tiempo de render del formulario, para descartar envíos instantáneos. */
  _t?: number
}

const MAX_LENGTHS: Record<string, number> = {
  nombre: 120,
  empresa: 160,
  email: 200,
  web: 300,
  proceso: 4000,
  personas: 40,
}

function isEmail(value: string) {
  // Validación deliberadamente laxa: rechazar lo evidente sin descartar
  // direcciones válidas poco habituales.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  let body: Partial<LeadPayload>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo de la petición no válido." },
      { status: 400 },
    )
  }

  // Trampas antibot: no revelamos que se han detectado.
  const honey = clean(body._honey)
  const renderedAt = typeof body._t === "number" ? body._t : 0
  const tooFast = renderedAt > 0 && Date.now() - renderedAt < 2500

  if (honey || tooFast) {
    return NextResponse.json({ ok: true })
  }

  const lead = {
    nombre: clean(body.nombre),
    empresa: clean(body.empresa),
    email: clean(body.email),
    web: clean(body.web),
    proceso: clean(body.proceso),
    personas: clean(body.personas),
    consentimiento: body.consentimiento === true,
  }

  const errores: Record<string, string> = {}

  if (!lead.nombre) errores.nombre = "Indica tu nombre."
  if (!lead.email) errores.email = "Indica un email de contacto."
  else if (!isEmail(lead.email)) errores.email = "Ese email no parece válido."
  if (!lead.proceso) errores.proceso = "Cuéntanos qué proceso quieres automatizar."
  if (!lead.consentimiento)
    errores.consentimiento = "Necesitamos tu consentimiento para poder responderte."

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = lead[field as keyof typeof lead]
    if (typeof value === "string" && value.length > max) {
      errores[field] = `Este campo admite como máximo ${max} caracteres.`
    }
  }

  if (Object.keys(errores).length > 0) {
    return NextResponse.json({ ok: false, errores }, { status: 422 })
  }

  const webhook = process.env.LEAD_WEBHOOK_URL

  if (!webhook) {
    // Fallo explícito y visible: el lead no se pierde en silencio.
    console.error(
      "[lead] LEAD_WEBHOOK_URL no está configurada. El lead NO se ha entregado:",
      { email: lead.email, empresa: lead.empresa },
    )
    return NextResponse.json(
      {
        ok: false,
        error:
          "El formulario no está conectado todavía. Escríbenos directamente a hola@nitidflow.com y lo vemos.",
      },
      { status: 503 },
    )
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }

  if (process.env.LEAD_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...lead,
        origen: "web",
        recibidoEn: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!response.ok) {
      console.error("[lead] El webhook respondió", response.status)
      return NextResponse.json(
        {
          ok: false,
          error:
            "No hemos podido registrar tu mensaje. Escríbenos a hola@nitidflow.com y lo resolvemos.",
        },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error("[lead] Error al entregar el lead:", error)
    return NextResponse.json(
      {
        ok: false,
        error:
          "No hemos podido registrar tu mensaje. Escríbenos a hola@nitidflow.com y lo resolvemos.",
      },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}

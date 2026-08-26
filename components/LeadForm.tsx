"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"

type Estado = "inicial" | "enviando" | "enviado" | "error"

const inputClass =
  "w-full rounded-card border border-line bg-surface px-3.5 py-2.5 text-[0.9375rem] outline-none transition-colors placeholder:text-muted/70 focus:border-accent/50"

/**
 * Enlaza el campo con su pista y con su mensaje de error, para que un
 * lector de pantalla los anuncie junto a la etiqueta — spec §34.
 */
function describedBy(id: string, opts: { hint?: boolean; error?: boolean }) {
  const ids = [
    opts.hint ? `${id}-hint` : null,
    opts.error ? `${id}-error` : null,
  ].filter(Boolean)
  return ids.length > 0 ? ids.join(" ") : undefined
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium tracking-tight">
        {label}
        {required ? (
          <span aria-hidden="true" className="ml-1 text-accent">
            *
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal text-muted">opcional</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-[0.75rem] leading-snug text-muted">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[0.8125rem] text-accent">
          {error}
        </p>
      ) : null}
    </div>
  )
}

/** Formulario corto — spec §29. Seis campos y un consentimiento, no quince. */
export function LeadForm() {
  const [estado, setEstado] = useState<Estado>("inicial")
  const [errores, setErrores] = useState<Record<string, string>>({})
  const [errorGeneral, setErrorGeneral] = useState<string | null>(null)
  const renderedAt = useRef<number>(0)

  const idNombre = useId()
  const idEmpresa = useId()
  const idEmail = useId()
  const idWeb = useId()
  const idProceso = useId()
  const idPersonas = useId()
  const idConsent = useId()

  useEffect(() => {
    renderedAt.current = Date.now()
  }, [])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setEstado("enviando")
    setErrores({})
    setErrorGeneral(null)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.get("nombre"),
          empresa: data.get("empresa"),
          email: data.get("email"),
          web: data.get("web"),
          proceso: data.get("proceso"),
          personas: data.get("personas"),
          consentimiento: data.get("consentimiento") === "on",
          _honey: data.get("_honey"),
          _t: renderedAt.current,
        }),
      })

      const result = (await response.json()) as {
        ok: boolean
        errores?: Record<string, string>
        error?: string
      }

      if (result.ok) {
        setEstado("enviado")
        form.reset()
        return
      }

      setEstado("error")
      if (result.errores) setErrores(result.errores)
      if (result.error) setErrorGeneral(result.error)
    } catch {
      setEstado("error")
      setErrorGeneral(
        "No hemos podido enviar el formulario. Escríbenos a hola@nitidflow.com y lo vemos.",
      )
    }
  }

  if (estado === "enviado") {
    return (
      <div
        role="status"
        className="rounded-panel border border-accent/25 bg-surface p-8 shadow-soft"
      >
        <p className="type-h3">Gracias.</p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Analizaremos tu proceso y nos pondremos en contacto contigo. Si
          mientras tanto quieres añadir algo, responde directamente a{" "}
          <a
            href="mailto:hola@nitidflow.com"
            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            hola@nitidflow.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setEstado("inicial")}
          className="mt-6 text-sm font-medium text-ink underline-offset-4 hover:text-accent hover:underline"
        >
          Enviar otro proceso
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-8"
    >
      <div className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={idNombre} label="Nombre" error={errores.nombre} required>
            <input
              id={idNombre}
              name="nombre"
              type="text"
              autoComplete="name"
              maxLength={120}
              className={inputClass}
              placeholder="Tu nombre"
              aria-invalid={Boolean(errores.nombre)}
              aria-describedby={describedBy(idNombre, {
                error: Boolean(errores.nombre),
              })}
            />
          </Field>

          <Field id={idEmpresa} label="Empresa" error={errores.empresa}>
            <input
              id={idEmpresa}
              name="empresa"
              type="text"
              autoComplete="organization"
              maxLength={160}
              className={inputClass}
              placeholder="Nombre de la empresa"
              aria-invalid={Boolean(errores.empresa)}
              aria-describedby={describedBy(idEmpresa, {
                error: Boolean(errores.empresa),
              })}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={idEmail} label="Email" error={errores.email} required>
            <input
              id={idEmail}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              className={inputClass}
              placeholder="tu@empresa.com"
              aria-invalid={Boolean(errores.email)}
              aria-describedby={describedBy(idEmail, {
                error: Boolean(errores.email),
              })}
            />
          </Field>

          <Field id={idWeb} label="Web" error={errores.web}>
            <input
              id={idWeb}
              name="web"
              type="text"
              inputMode="url"
              autoComplete="url"
              maxLength={300}
              className={inputClass}
              placeholder="empresa.com"
              aria-invalid={Boolean(errores.web)}
              aria-describedby={describedBy(idWeb, {
                error: Boolean(errores.web),
              })}
            />
          </Field>
        </div>

        <Field
          id={idProceso}
          label="¿Qué proceso quieres automatizar?"
          hint="Cuéntalo como lo contarías por teléfono. Cómo se hace hoy, quién lo hace y cuántas veces."
          error={errores.proceso}
          required
        >
          <textarea
            id={idProceso}
            name="proceso"
            rows={5}
            maxLength={4000}
            className={`${inputClass} resize-y`}
            placeholder="Ejemplo: cuando entra un lead por la web, alguien lo mira, lo pasa al CRM a mano y escribe un WhatsApp. Son unos 20 al día."
            aria-describedby={describedBy(idProceso, {
              hint: true,
              error: Boolean(errores.proceso),
            })}
            aria-invalid={Boolean(errores.proceso)}
          />
        </Field>

        <Field
          id={idPersonas}
          label="¿Cuántas personas participan hoy en el proceso?"
          error={errores.personas}
        >
          <input
            id={idPersonas}
            name="personas"
            type="text"
            inputMode="numeric"
            maxLength={40}
            className={inputClass}
            placeholder="Ej.: 2, o «depende del día»"
            aria-invalid={Boolean(errores.personas)}
            aria-describedby={describedBy(idPersonas, {
              error: Boolean(errores.personas),
            })}
          />
        </Field>

        {/* Campo trampa para bots: oculto y sin foco. */}
        <div aria-hidden="true" className="hidden">
          <label htmlFor="_honey">No rellenar</label>
          <input id="_honey" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label
            htmlFor={idConsent}
            className="flex cursor-pointer items-start gap-3 text-[0.8125rem] leading-relaxed text-muted"
          >
            <input
              id={idConsent}
              name="consentimiento"
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 accent-[var(--color-accent)]"
              aria-invalid={Boolean(errores.consentimiento)}
              aria-describedby={
                errores.consentimiento ? `${idConsent}-error` : undefined
              }
            />
            <span>
              He leído la{" "}
              <Link
                href="/legal/privacidad"
                className="text-ink underline decoration-line underline-offset-2 transition-colors hover:decoration-accent"
              >
                política de privacidad
              </Link>{" "}
              y acepto que Nitidflow trate mis datos para responder a esta
              consulta.
            </span>
          </label>
          {errores.consentimiento ? (
            <p
              id={`${idConsent}-error`}
              role="alert"
              className="mt-1.5 text-[0.8125rem] text-accent"
            >
              {errores.consentimiento}
            </p>
          ) : null}
        </div>

        {errorGeneral ? (
          <p
            role="alert"
            className="rounded-card border border-accent/25 bg-accent/[0.06] px-4 py-3 text-[0.8125rem] leading-relaxed text-ink-soft"
          >
            {errorGeneral}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={estado === "enviando"}
            className="group inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-6 py-3.5 text-[0.9375rem] font-medium text-white shadow-soft transition-all duration-200 hover:bg-ink-soft hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
          >
            {estado === "enviando" ? "Enviando…" : "Analizar mi proceso"}
            {estado === "enviando" ? null : (
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            )}
          </button>
          <p className="text-[0.75rem] leading-snug text-muted">
            Sin compromiso. Te contestamos una persona, no una secuencia
            automática.
          </p>
        </div>
      </div>
    </form>
  )
}

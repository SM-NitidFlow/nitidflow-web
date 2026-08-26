"use client"

import { useId, useMemo, useState } from "react"
import Link from "next/link"

const WEEKS_PER_YEAR = 52

const eur = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

const num = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 })

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min
  return Math.min(Math.max(value, min), max)
}

function NumberField({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
}: {
  label: string
  hint?: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  suffix?: string
}) {
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium tracking-tight">
        {label}
      </label>
      {hint ? (
        <p className="mt-1 text-[0.75rem] leading-snug text-muted">{hint}</p>
      ) : null}
      <div className="mt-2 flex items-center gap-2 rounded-card border border-line bg-surface px-3 py-2.5 focus-within:border-accent/40">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) =>
            onChange(clamp(event.target.valueAsNumber, min, max))
          }
          className="w-full bg-transparent text-base font-medium tabular-nums outline-none"
        />
        {suffix ? (
          <span className="shrink-0 text-sm text-muted">{suffix}</span>
        ) : null}
      </div>
    </div>
  )
}

/** Calculadora de coste del trabajo manual — spec §13 */
export function ROICalculator() {
  const [hours, setHours] = useState(8)
  const [rate, setRate] = useState(22)
  const [people, setPeople] = useState(3)
  const [automatable, setAutomatable] = useState(60)
  const sliderId = useId()

  const result = useMemo(() => {
    const weeklyHours = hours * people
    const weeklyCost = weeklyHours * rate
    const annualHours = weeklyHours * WEEKS_PER_YEAR
    const annualCost = weeklyCost * WEEKS_PER_YEAR
    const share = automatable / 100

    return {
      weeklyHours,
      weeklyCost,
      monthlyCost: annualCost / 12,
      annualCost,
      recoverableHoursYear: annualHours * share,
      recoverableCostYear: annualCost * share,
    }
  }, [hours, rate, people, automatable])

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
      <div className="rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-7">
        <div className="flex flex-col gap-5">
          <NumberField
            label="Horas manuales por semana"
            hint="Tiempo que una persona dedica al proceso cada semana."
            value={hours}
            onChange={setHours}
            min={1}
            max={40}
            suffix="h"
          />
          <NumberField
            label="Coste aproximado por hora"
            hint="Coste bruto para la empresa, no el salario neto."
            value={rate}
            onChange={setRate}
            min={5}
            max={150}
            suffix="€/h"
          />
          <NumberField
            label="Número de empleados implicados"
            hint="Cuántas personas participan hoy en ese proceso."
            value={people}
            onChange={setPeople}
            min={1}
            max={100}
            suffix="pers."
          />

          <div>
            <label
              htmlFor={sliderId}
              className="flex items-baseline justify-between gap-3 text-sm font-medium tracking-tight"
            >
              <span>Parte del proceso automatizable</span>
              <span className="tabular-nums text-accent">{automatable}%</span>
            </label>
            <p className="mt-1 text-[0.75rem] leading-snug text-muted">
              Este valor lo decides tú. No asumimos un ahorro fijo: depende de
              cuánto del proceso pueda ejecutarse sin criterio humano.
            </p>
            <input
              id={sliderId}
              type="range"
              min={0}
              max={100}
              step={5}
              value={automatable}
              onChange={(event) =>
                setAutomatable(event.target.valueAsNumber)
              }
              className="mt-3 w-full accent-[var(--color-accent)]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-panel border border-line bg-ink p-6 text-white sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
          Coste del trabajo manual
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <dt className="text-[0.8125rem] text-dark-muted">Coste semanal</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
              {eur.format(result.weeklyCost)}
            </dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-dark-muted">Coste mensual</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
              {eur.format(result.monthlyCost)}
            </dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-dark-muted">Coste anual</dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-accent">
              {eur.format(result.annualCost)}
            </dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-dark-muted">
              Horas al año en este proceso
            </dt>
            <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
              {num.format(result.weeklyHours * WEEKS_PER_YEAR)} h
            </dd>
          </div>
        </dl>

        <div className="mt-7 rounded-card border border-dark-line bg-white/[0.04] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Si automatizas el {automatable}%
          </p>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <p className="text-xl font-semibold tabular-nums tracking-tight">
              {num.format(result.recoverableHoursYear)} h/año
            </p>
            <p className="text-xl font-semibold tabular-nums tracking-tight text-accent">
              {eur.format(result.recoverableCostYear)}/año
            </p>
          </div>
          <p className="mt-2 text-[0.75rem] leading-snug text-dark-muted">
            Horas que dejan de consumirse en tareas repetitivas, valoradas al
            coste por hora que has indicado.
          </p>
        </div>

        <p className="mt-6 text-[0.75rem] leading-relaxed text-white/45">
          Estimación orientativa. El ahorro real depende del proceso y del
          nivel de automatización alcanzable.
        </p>

        <Link
          href="/contacto"
          className="group mt-6 inline-flex items-center justify-center gap-2 rounded-pill bg-white px-5 py-3 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-white/90"
        >
          Quiero automatizar este proceso
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  )
}

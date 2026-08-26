import Link from "next/link"
import { Section, SectionHeader } from "./Section"
import { Cta } from "./Cta"
import { ScrollReveal } from "./ScrollReveal"
import { casos } from "@/lib/casos"

/**
 * Case studies en la home — spec §17.
 * Muestra el caso más reciente con lo que se puede afirmar y, con la misma
 * claridad, lo que todavía no. Sin cifras inventadas.
 */
export function CaseStudies() {
  const caso = casos[0]

  if (!caso) return null

  return (
    <Section id="casos" tone="surface" className="border-y border-line">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <ScrollReveal>
          <SectionHeader
            eyebrow={`Caso · ${caso.sector}`}
            title={caso.h1}
            lead={caso.excerpt}
            align="left"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href={`/casos/${caso.slug}`}>Leer el caso</Cta>
            <Cta href="/casos" variant="secondary">
              Todos los casos
            </Cta>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="rounded-panel border border-line bg-bg p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Lo que el caso cuenta
            </p>
            <ul className="mt-5 flex flex-col">
              {[
                "El problema, contado como lo contaría el cliente",
                "Cómo era el proceso antes, paso a paso",
                "Qué se automatizó y qué se dejó en manos de personas",
                "Las herramientas reales conectadas",
                "Qué se puede afirmar con datos, y qué todavía no",
                "Qué salió mal y qué regla salió de ahí",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line py-3 text-sm text-ink-soft last:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.75rem] leading-relaxed text-muted">
              No publicamos horas ahorradas ni impacto económico mientras no
              haya una medición del proceso anterior con la que comparar.{" "}
              <Link
                href={`/casos/${caso.slug}`}
                className="text-ink underline decoration-line underline-offset-2 transition-colors hover:decoration-accent"
              >
                En el caso está dicho explícitamente
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}

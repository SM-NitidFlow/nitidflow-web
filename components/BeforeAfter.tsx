import { Section, SectionHeader } from "./Section"
import { AutomationWorkflow } from "./AutomationWorkflow"
import { ScrollReveal } from "./ScrollReveal"
import { automatedFlow, manualFlow } from "@/lib/agents"

/** Antes / después — spec §12 */
export function BeforeAfter() {
  return (
    <Section id="como-funciona" tone="surface" className="border-y border-line">
      <ScrollReveal className="flex justify-center">
        <SectionHeader
          eyebrow="Antes y después"
          title="De horas de trabajo manual a un workflow automático."
          lead="El mismo proceso, contado dos veces: como se hace hoy en la mayoría de empresas y como queda cuando se automatiza."
        />
      </ScrollReveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <ScrollReveal>
          <div className="h-full rounded-panel border border-line bg-bg p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Antes
              </h3>
              <span className="rounded-pill border border-line bg-surface px-2.5 py-1 text-[0.6875rem] text-muted">
                Manual · depende de una persona
              </span>
            </div>

            <ol className="mt-6 flex flex-col gap-px">
              {manualFlow.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-3 border-b border-line py-3 last:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    className="w-5 shrink-0 font-mono text-[0.6875rem] text-muted"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="h-full rounded-panel border border-accent/20 bg-bg p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Después
              </h3>
              <span className="rounded-pill border border-accent/25 bg-accent/8 px-2.5 py-1 text-[0.6875rem] text-accent">
                Automatizado · con Nitidflow
              </span>
            </div>

            <div className="mt-6">
              <AutomationWorkflow
                steps={automatedFlow}
                ariaLabel="El mismo proceso, automatizado"
                dense
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-10" delay={0.1}>
        <p className="text-center text-base font-medium tracking-tight">
          Menos trabajo manual. Más velocidad. Menos errores.
        </p>
      </ScrollReveal>
    </Section>
  )
}

import Link from "next/link"
import { Badge } from "./Badge"
import { Breadcrumbs } from "./Breadcrumbs"
import { Container } from "./Container"
import { Cta } from "./Cta"
import { FAQ } from "./FAQ"
import { FinalCTA } from "./FinalCTA"
import { IntegrationCard } from "./IntegrationCard"
import { JsonLd } from "./JsonLd"
import { ProcessSteps } from "./ProcessSteps"
import { AutomationWorkflow } from "./AutomationWorkflow"
import { Section, SectionHeader } from "./Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"
import { serviceSchema } from "@/lib/schema"
import { integrations } from "@/lib/site"
import type { Landing } from "@/lib/landings/types"

function categoryFor(name: string) {
  return integrations.find((tool) => tool.name === name)?.category ?? "Integración"
}

/**
 * Plantilla común de las landings comerciales — spec §43.
 * La estructura se repite; el contenido de cada landing es propio y
 * resuelve una intención concreta, no el mismo texto con otra keyword.
 */
export function LandingPage({ landing }: { landing: Landing }) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: landing.h1,
          description: landing.metaDescription,
          path: landing.slug,
          serviceType: landing.serviceType,
        })}
      />

      {/* HERO */}
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={
              landing.breadcrumbParent
                ? [
                    landing.breadcrumbParent,
                    { name: landing.shortName, path: landing.slug },
                  ]
                : [{ name: landing.shortName, path: landing.slug }]
            }
          />

          <div className="max-w-3xl">
            <Badge>{landing.eyebrow}</Badge>
            <h1 className="type-hero mt-6">{landing.h1}</h1>
            <p className="type-lead mt-6 max-w-2xl">{landing.subheadline}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href="/contacto">{landing.ctaLabel}</Cta>
              <Cta href="#workflow" variant="secondary">
                Ver el flujo
              </Cta>
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEMA */}
      <Section tone="surface" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="El problema"
              title={landing.problem.title}
              align="left"
            />
            <div className="mt-6 flex flex-col gap-4">
              {landing.problem.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-panel border border-line bg-bg p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Señales de que toca automatizarlo
              </p>
              <ul className="mt-5 flex flex-col">
                {landing.problem.signals.map((signal) => (
                  <li
                    key={signal}
                    className="flex items-start gap-3 border-b border-line py-3 text-sm text-ink-soft last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CÓMO FUNCIONA */}
      <Section>
        <ScrollReveal className="flex justify-center">
          <SectionHeader
            eyebrow="Cómo funciona"
            title={landing.how.title}
            lead={landing.how.lead}
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ol"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {landing.how.steps.map((step, index) => (
            <ScrollRevealItem as="li" key={step.title} className="h-full">
              <div className="card-hover h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
                <p className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      {/* WORKFLOW VISUAL */}
      <Section id="workflow" tone="surface" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="El flujo"
              title={landing.workflow.title}
              lead={landing.workflow.lead}
              align="left"
            />
            <div className="mt-8">
              <Cta href="/contacto" variant="secondary">
                {landing.ctaLabel}
              </Cta>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden rounded-panel border border-line bg-bg shadow-soft">
              <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
                <p className="truncate font-mono text-[0.6875rem] text-muted">
                  workflow · {landing.workflow.label}
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-pill border border-accent/25 bg-accent/8 px-2 py-0.5 text-[0.6875rem] font-medium text-accent">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent status-pulse"
                  />
                  Activo
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <AutomationWorkflow
                  steps={landing.workflow.steps}
                  ariaLabel={landing.workflow.title}
                  dense
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* QUÉ AUTOMATIZAMOS */}
      <Section>
        <ScrollReveal className="flex justify-center">
          <SectionHeader
            eyebrow="Qué automatizamos"
            title={landing.cases.title}
            lead={landing.cases.lead}
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {landing.cases.items.map((item) => (
            <ScrollRevealItem as="li" key={item.title} className="h-full">
              <div className="card-hover h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
                <h3 className="text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      {/* INTEGRACIONES */}
      <Section tone="surface" className="border-y border-line">
        <ScrollReveal className="flex justify-center">
          <SectionHeader
            eyebrow="Integraciones"
            title={landing.integrations.title}
            lead={landing.integrations.lead}
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {landing.integrations.names.map((name) => (
            <ScrollRevealItem as="li" key={name}>
              <IntegrationCard name={name} category={categoryFor(name)} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <p className="mt-8 text-center text-[0.8125rem] text-muted">
          Compatible con herramientas como estas. Sin partnerships oficiales:
          las marcas pertenecen a sus titulares.
        </p>
      </Section>

      {/* BENEFICIOS + LÍMITES */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Qué cambia"
              title={landing.benefits.title}
              align="left"
            />
            <ul className="mt-8 flex flex-col gap-5">
              {landing.benefits.items.map((item) => (
                <li key={item.title} className="border-l-2 border-accent pl-5">
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {landing.limits.title}
              </p>
              <ul className="mt-5 flex flex-col">
                {landing.limits.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3 text-sm text-ink-soft last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 font-mono text-xs text-muted"
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.75rem] leading-relaxed text-muted">
                Decir esto por adelantado sale más barato que descubrirlo a
                mitad de proyecto.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <ProcessSteps />

      {/* ENLACES INTERNOS */}
      <Section tone="surface" className="border-y border-line">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Seguir por aquí"
            title="Relacionado con esto"
            align="left"
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {landing.related.map((item) => (
            <ScrollRevealItem as="li" key={item.href} className="h-full">
              <Link
                href={item.href}
                className="card-hover group flex h-full flex-col rounded-panel border border-line bg-bg p-6 shadow-soft"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-accent"
                >
                  Ver <span>→</span>
                </span>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      <FAQ
        items={landing.faq}
        title="Preguntas frecuentes"
        eyebrow="Antes de decidir"
      />

      <FinalCTA
        title={landing.finalCta.title}
        lead={landing.finalCta.lead}
        label={landing.finalCta.label}
      />
    </>
  )
}

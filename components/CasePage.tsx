import Link from "next/link"
import { AutomationWorkflow } from "./AutomationWorkflow"
import { Badge } from "./Badge"
import { BrandGlyph, hasBrandGlyph } from "./BrandGlyph"
import { Breadcrumbs } from "./Breadcrumbs"
import { Container } from "./Container"
import { Cta } from "./Cta"
import { FinalCTA } from "./FinalCTA"
import { Section, SectionHeader } from "./Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"
import type { Caso } from "@/lib/casos/types"

export function CasePage({ caso }: { caso: Caso }) {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Casos", path: "/casos" },
              { name: caso.cliente, path: `/casos/${caso.slug}` },
            ]}
          />

          <div className="max-w-3xl">
            <Badge>Caso · {caso.sector}</Badge>
            <h1 className="type-hero mt-6">{caso.h1}</h1>
            <p className="type-lead mt-6 max-w-2xl">{caso.subheadline}</p>

            <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Cliente
                </dt>
                <dd className="mt-2 text-[0.9375rem] font-medium tracking-tight">
                  {caso.cliente}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Sector
                </dt>
                <dd className="mt-2 text-[0.9375rem] font-medium tracking-tight">
                  {caso.sector}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  En producción desde
                </dt>
                <dd className="mt-2 text-[0.9375rem] font-medium tracking-tight">
                  {caso.enProduccionDesde}
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* PROBLEMA */}
      <Section tone="surface" className="border-y border-line" width="narrow">
        <ScrollReveal>
          <SectionHeader
            eyebrow="El problema"
            title={caso.problema.title}
            align="left"
          />
          <div className="mt-6 flex flex-col gap-4">
            {caso.problema.body.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* ANTES / AHORA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-6">
          <ScrollReveal>
            <div className="h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                  {caso.antes.title}
                </h2>
                <span className="rounded-pill border border-line bg-bg px-2.5 py-1 text-[0.6875rem] text-muted">
                  Antes
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {caso.antes.lead}
              </p>
              <ol className="mt-6 flex flex-col">
                {caso.antes.pasos.map((paso, index) => (
                  <li
                    key={paso}
                    className="flex items-start gap-3 border-b border-line py-3 last:border-b-0"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 w-5 shrink-0 font-mono text-[0.6875rem] text-muted"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink-soft">{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-panel border border-accent/20 bg-surface p-6 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {caso.ahora.title}
                </h2>
                <span className="rounded-pill border border-accent/25 bg-accent/8 px-2.5 py-1 text-[0.6875rem] text-accent">
                  Ahora
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {caso.ahora.lead}
              </p>
              <div className="mt-6 rounded-card border border-line bg-bg p-3">
                <AutomationWorkflow
                  steps={caso.ahora.steps}
                  ariaLabel={caso.ahora.title}
                  dense
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* DECISIONES */}
      <Section tone="surface" className="border-y border-line">
        <ScrollReveal className="flex justify-center">
          <SectionHeader
            eyebrow="Diseño"
            title={caso.decisiones.title}
            lead={caso.decisiones.lead}
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caso.decisiones.items.map((item) => (
            <ScrollRevealItem as="li" key={item.title} className="h-full">
              <div className="card-hover h-full rounded-panel border border-line bg-bg p-6 shadow-soft">
                <h3 className="text-base font-semibold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      {/* HERRAMIENTAS */}
      <Section width="narrow">
        <ScrollReveal>
          <SectionHeader eyebrow="Stack" title="Herramientas conectadas" align="left" />
        </ScrollReveal>

        <ScrollRevealGroup as="ul" className="mt-10 flex flex-col">
          {caso.herramientas.map((h) => (
            <ScrollRevealItem as="li" key={h.nombre}>
              <div className="flex items-center gap-4 border-b border-line py-4">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-card border border-line bg-surface text-ink-soft"
                >
                  {hasBrandGlyph(h.nombre) ? (
                    <BrandGlyph name={h.nombre} />
                  ) : (
                    <span className="text-[0.6875rem] font-bold tracking-tight">
                      {h.nombre.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.9375rem] font-medium tracking-tight">
                    {h.nombre}
                  </span>
                  <span className="block text-[0.8125rem] text-muted">
                    {h.papel}
                  </span>
                </span>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      {/* MEDIBLE / PENDIENTE */}
      <Section tone="surface" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Resultado"
              title={caso.medible.title}
              lead={caso.medible.lead}
              align="left"
            />
            <ul className="mt-8 flex flex-col gap-5">
              {caso.medible.items.map((item) => (
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
            <div className="rounded-panel border border-line bg-bg p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {caso.pendiente.title}
              </p>
              <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
                {caso.pendiente.lead}
              </p>
              <ul className="mt-5 flex flex-col">
                {caso.pendiente.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3 text-sm leading-relaxed text-ink-soft last:border-b-0"
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
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* INCIDENCIA */}
      {caso.incidencia ? (
        <Section width="narrow">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Honestidad"
              title={caso.incidencia.title}
              align="left"
            />
            <div className="mt-6 flex flex-col gap-4">
              {caso.incidencia.body.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </Section>
      ) : null}

      {/* RELACIONADO */}
      <Section tone="surface" className="border-y border-line">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Seguir por aquí"
            title="Relacionado con este caso"
            align="left"
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caso.related.map((item) => (
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

        <ScrollReveal className="mt-10" delay={0.1}>
          <Cta href="/casos" variant="secondary">
            Todos los casos
          </Cta>
        </ScrollReveal>
      </Section>

      <FinalCTA
        title="¿Tu proceso se parece a este?"
        lead="Si tienes la lógica en un Excel y la decisión ocurre lejos de él, la conversación es corta."
        label="Analizar mi proceso"
      />
    </>
  )
}

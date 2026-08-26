import Link from "next/link"
import { Badge } from "@/components/Badge"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Container } from "@/components/Container"
import { FinalCTA } from "@/components/FinalCTA"
import { Section, SectionHeader } from "@/components/Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal"
import { UseCaseGrid } from "@/components/UseCaseGrid"
import { pageMetadata } from "@/lib/seo"
import { casos } from "@/lib/casos"

export const metadata = pageMetadata({
  title: "Casos de automatización",
  description:
    "Casos reales de automatización de procesos: el problema, cómo se hacía antes, qué se automatizó, con qué herramientas y qué se puede medir de verdad.",
  path: "/casos",
})

const formato = [
  {
    title: "El problema",
    description:
      "Contado como lo contaría el cliente, no como lo contaría un vendedor.",
  },
  {
    title: "El proceso anterior",
    description: "Paso a paso, con quién hacía cada cosa.",
  },
  {
    title: "Qué se automatizó",
    description:
      "Y qué se dejó deliberadamente en manos de personas, que suele ser la parte interesante.",
  },
  {
    title: "Herramientas conectadas",
    description: "Los sistemas reales implicados, con sus limitaciones.",
  },
  {
    title: "Qué se puede medir",
    description: "Y, con la misma claridad, qué todavía no.",
  },
  {
    title: "Qué salió mal",
    description:
      "Un caso sin esta sección no es un caso: es un folleto.",
  },
]

export default function CasosPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs items={[{ name: "Casos", path: "/casos" }]} />
          <div className="max-w-3xl">
            <Badge>Casos</Badge>
            <h1 className="type-hero mt-6">Casos de automatización</h1>
            <p className="type-lead mt-6 max-w-2xl">
              Sin porcentajes redondos ni logos difusos. Cada caso cuenta el
              problema, el sistema que se construyó y qué se puede afirmar con
              datos — incluido lo que todavía no.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="border-y border-line">
        <ScrollRevealGroup as="ul" className="flex flex-col gap-4">
          {casos.map((caso) => (
            <ScrollRevealItem as="li" key={caso.slug}>
              <Link
                href={`/casos/${caso.slug}`}
                className="card-hover group block rounded-panel border border-line bg-bg p-6 shadow-soft sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-muted">
                  <span className="font-medium text-accent">{caso.sector}</span>
                  <span aria-hidden="true">·</span>
                  <span>En producción desde {caso.enProduccionDesde}</span>
                </div>

                <h2 className="mt-3 type-h3">{caso.h1}</h2>
                <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-muted">
                  {caso.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5 group-hover:text-accent motion-reduce:group-hover:gap-1.5"
                  >
                    Leer el caso <span>→</span>
                  </span>
                  {caso.permisoCliente ? null : (
                    <span className="rounded-pill border border-line bg-surface px-2.5 py-1 text-[0.6875rem] text-muted">
                      Sin indexar hasta la autorización del cliente
                    </span>
                  )}
                </div>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      <Section>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Compromiso"
            title="Qué contiene cada caso."
            lead="El formato está decidido de antemano precisamente para no poder elegir después qué métrica queda mejor."
            align="left"
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {formato.map((item) => (
            <ScrollRevealItem as="li" key={item.title} className="h-full">
              <div className="h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
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

      <UseCaseGrid
        tone="surface"
        title="Tipos de automatización que trabajamos"
        lead="Cada uno con su proceso, su flujo y sus límites explicados."
      />

      <FinalCTA
        title="¿Quieres ser el siguiente caso?"
        lead="Si tu proceso encaja y aceptas que se publique con datos medidos, hay margen en el precio. El descuento va escrito en el presupuesto, no de regalo silencioso."
        label="Hablar con Nitidflow"
      />
    </>
  )
}

import Link from "next/link"
import { Badge } from "@/components/Badge"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Container } from "@/components/Container"
import { FinalCTA } from "@/components/FinalCTA"
import { Section } from "@/components/Section"
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal"
import { pageMetadata } from "@/lib/seo"
import { sectorPages } from "@/lib/sectores"

export const metadata = pageMetadata({
  title: "Sectores: automatización con IA por tipo de empresa",
  description:
    "Qué se automatiza en inmobiliarias, clínicas, ecommerce, despachos profesionales y pymes. Cada sector con su cuello de botella y sus restricciones propias.",
  path: "/sectores",
})

export default function SectoresPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs items={[{ name: "Sectores", path: "/sectores" }]} />
          <div className="max-w-3xl">
            <Badge>Por sector</Badge>
            <h1 className="type-hero mt-6">Automatización por sector</h1>
            <p className="type-lead mt-6 max-w-2xl">
              El proceso que ahoga a una inmobiliaria no es el que ahoga a una
              clínica. Estas páginas existen porque cada sector tiene su cuello
              de botella y sus restricciones propias, no para repetir el mismo
              texto cambiando una palabra.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="border-y border-line">
        <ScrollRevealGroup
          as="ul"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sectorPages.map((sector) => (
            <ScrollRevealItem as="li" key={sector.slug} className="h-full">
              <Link
                href={sector.slug}
                className="card-hover group flex h-full flex-col rounded-panel border border-line bg-bg p-6 shadow-soft"
              >
                <h2 className="type-h3">{sector.shortName}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {sector.subheadline}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:text-accent"
                >
                  Ver sector <span>→</span>
                </span>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <p className="mt-10 text-center text-[0.8125rem] text-muted">
          Si tu sector no está aquí es porque todavía no tenemos contenido
          propio que aportar sobre él, no porque no podamos trabajarlo.
        </p>
      </Section>

      <FinalCTA
        title="¿Tu sector no está en la lista?"
        lead="Cuéntanos a qué se dedica tu empresa y qué proceso repetís. El criterio para decidir es el mismo en cualquier sector."
        label="Analizar mi empresa"
      />
    </>
  )
}

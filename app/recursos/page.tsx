import Link from "next/link"
import { Badge } from "@/components/Badge"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Container } from "@/components/Container"
import { FinalCTA } from "@/components/FinalCTA"
import { Section } from "@/components/Section"
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal"
import { pageMetadata } from "@/lib/seo"
import { articles } from "@/lib/articulos"

export const metadata = pageMetadata({
  title: "Recursos sobre automatización con IA",
  description:
    "Artículos sobre automatización de procesos con IA, agentes, herramientas y cómo decidir qué merece la pena automatizar en una empresa.",
  path: "/recursos",
})

const fecha = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
})

export default function RecursosPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs items={[{ name: "Recursos", path: "/recursos" }]} />
          <div className="max-w-3xl">
            <Badge>Recursos</Badge>
            <h1 className="type-hero mt-6">Cómo pensamos esto</h1>
            <p className="type-lead mt-6 max-w-2xl">
              Artículos con criterio para decidir: qué automatizar, qué no, y
              cómo distinguir una propuesta razonable de una que suena bien.
              Escritos para que sirvan aunque no nos contrates.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="border-y border-line">
        <ScrollRevealGroup as="ul" className="flex flex-col gap-4">
          {articles.map((article) => (
            <ScrollRevealItem as="li" key={article.slug}>
              <Link
                href={`/recursos/${article.slug}`}
                className="card-hover group block rounded-panel border border-line bg-bg p-6 shadow-soft sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-muted">
                  <span className="font-medium text-accent">
                    {article.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.date}>
                    {fecha.format(new Date(article.date))}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingMinutes} min de lectura</span>
                </div>

                <h2 className="mt-3 type-h3">{article.title}</h2>
                <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-muted">
                  {article.excerpt}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5 group-hover:text-accent motion-reduce:group-hover:gap-1.5"
                >
                  Leer <span>→</span>
                </span>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Section>

      <FinalCTA
        title="¿Tu caso no está escrito aquí?"
        lead="Cuéntanoslo. Muchas de estas páginas salieron de una conversación con alguien que preguntó algo concreto."
        label="Hablar con Nitidflow"
      />
    </>
  )
}

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArticleBody } from "@/components/ArticleBody"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Container } from "@/components/Container"
import { FinalCTA } from "@/components/FinalCTA"
import { JsonLd } from "@/components/JsonLd"
import { Section } from "@/components/Section"
import { articleBySlug, articles } from "@/lib/articulos"
import { articleSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"

const fecha = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
})

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articleBySlug.get(slug)

  if (!article) {
    return pageMetadata({
      title: "Artículo no encontrado",
      description: "Este artículo no existe o ha cambiado de dirección.",
      path: `/recursos/${slug}`,
      noindex: true,
    })
  }

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/recursos/${article.slug}`,
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articleBySlug.get(slug)

  if (!article) notFound()

  const otros = articles.filter((item) => item.slug !== article.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          path: `/recursos/${article.slug}`,
          date: article.date,
          updated: article.updated,
          author: article.author,
        })}
      />

      <article>
        <section className="relative overflow-hidden pb-4 pt-8 sm:pt-10">
          <div aria-hidden="true" className="brand-glow" />
          <Container width="narrow" className="relative z-10">
            <Breadcrumbs
              items={[
                { name: "Recursos", path: "/recursos" },
                { name: article.title, path: `/recursos/${article.slug}` },
              ]}
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-muted">
              <span className="font-medium text-accent">{article.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={article.date}>
                {fecha.format(new Date(article.date))}
              </time>
              <span aria-hidden="true">·</span>
              <span>{article.readingMinutes} min de lectura</span>
            </div>

            <h1 className="type-h2 mt-4">{article.h1 ?? article.title}</h1>
            <p className="type-lead mt-5">{article.excerpt}</p>
          </Container>
        </section>

        <Section width="narrow" className="pt-6 sm:pt-8">
          <ArticleBody blocks={article.blocks} />

          <div className="mt-14 rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Sobre esto trabajamos
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {article.related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-bg px-3.5 py-2 text-sm transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {item.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="surface" className="border-y border-line" width="narrow">
          <h2 className="type-h3">Seguir leyendo</h2>
          <ul className="mt-6 flex flex-col">
            {otros.map((item) => (
              <li key={item.slug} className="border-b border-line last:border-b-0">
                <Link
                  href={`/recursos/${item.slug}`}
                  className="group flex flex-col gap-1 py-4"
                >
                  <span className="text-[0.9375rem] font-medium tracking-tight transition-colors group-hover:text-accent">
                    {item.title}
                  </span>
                  <span className="text-[0.8125rem] text-muted">
                    {item.category} · {item.readingMinutes} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </article>

      <FinalCTA />
    </>
  )
}

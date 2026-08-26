import Link from "next/link"
import { Section, SectionHeader } from "./Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"
import { Icon } from "@/lib/icons"
import { useCases } from "@/lib/site"

/** Casos de uso enlazados a landings SEO — spec §15 / §40 */
export function UseCaseGrid({
  exclude,
  title = "¿Qué quieres automatizar?",
  lead = "Cada bloque es un proceso concreto, con su propia página, su propio workflow y su propio criterio de cuándo merece la pena.",
  tone = "surface",
}: {
  exclude?: string
  title?: string
  lead?: string
  tone?: "light" | "surface"
}) {
  const items = useCases.filter((item) => item.slug !== exclude)

  return (
    <Section
      id="casos-de-uso"
      tone={tone}
      className={tone === "surface" ? "border-y border-line" : ""}
    >
      <ScrollReveal className="flex justify-center">
        <SectionHeader eyebrow="Casos de uso" title={title} lead={lead} />
      </ScrollReveal>

      <ScrollRevealGroup
        as="ul"
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.05}
      >
        {items.map((item) => (
          <ScrollRevealItem as="li" key={item.slug} className="h-full">
            <Link
              href={item.slug}
              className="card-hover group flex h-full flex-col rounded-panel border border-line bg-bg p-6 shadow-soft"
            >
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-card border border-line bg-surface text-ink-soft transition-colors group-hover:text-accent"
              >
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span
                aria-hidden="true"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-all duration-200 group-hover:gap-2.5 group-hover:text-accent motion-reduce:group-hover:gap-1.5"
              >
                Ver cómo
                <span>→</span>
              </span>
            </Link>
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>
    </Section>
  )
}

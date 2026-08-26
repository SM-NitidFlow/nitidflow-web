import Link from "next/link"
import { Check, Headphones, Megaphone, Settings2, TrendingUp } from "lucide-react"
import { Section, SectionHeader } from "./Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"

const solutions = [
  {
    icon: TrendingUp,
    title: "Ventas",
    items: [
      "Captura de leads",
      "Cualificación",
      "Follow-up",
      "CRM",
      "Agendamiento",
      "Propuestas",
    ],
    cta: { label: "Automatizar ventas", href: "/automatizacion-ventas" },
  },
  {
    icon: Headphones,
    title: "Atención al cliente",
    items: [
      "WhatsApp",
      "Email",
      "FAQ",
      "Soporte",
      "Routing",
      "Escalado a humanos",
    ],
    cta: {
      label: "Automatizar atención",
      href: "/automatizacion-atencion-cliente",
    },
  },
  {
    icon: Settings2,
    title: "Operaciones",
    items: [
      "Facturación",
      "Documentos",
      "Data entry",
      "Reporting",
      "Notificaciones",
    ],
    cta: {
      label: "Automatizar operaciones",
      href: "/automatizacion-administrativa",
    },
  },
  {
    icon: Megaphone,
    title: "Marketing",
    items: [
      "Lead generation",
      "Email marketing",
      "Contenido",
      "Campañas",
      "Reporting",
    ],
    cta: { label: "Automatizar marketing", href: "/automatizacion-marketing" },
  },
]

/** Soluciones — spec §10 */
export function SolutionsSection() {
  return (
    <Section id="soluciones" tone="surface" className="border-y border-line">
      <ScrollReveal className="flex justify-center">
        <SectionHeader
          eyebrow="Soluciones"
          title="Automatizamos procesos que mueven tu negocio."
          lead="Cuatro áreas donde el trabajo repetitivo se acumula y donde una automatización bien diseñada se nota desde la primera semana."
        />
      </ScrollReveal>

      <ScrollRevealGroup
        as="ul"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {solutions.map((solution) => (
          <ScrollRevealItem as="li" key={solution.title} className="h-full">
            <div className="card-hover flex h-full flex-col rounded-panel border border-line bg-bg p-6 shadow-soft">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-card border border-line bg-surface text-ink-soft"
              >
                <solution.icon className="size-[18px]" />
              </span>
              <h3 className="mt-5 type-h3">{solution.title}</h3>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {solution.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-3.5 shrink-0 text-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={solution.cta.href}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                {solution.cta.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  →
                </span>
              </Link>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>
    </Section>
  )
}

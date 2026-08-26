import {
  Database,
  FileText,
  Mail,
  MessageCircle,
  BarChart3,
  UserPlus,
} from "lucide-react"
import { Section, SectionHeader } from "./Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"

const problems = [
  {
    icon: UserPlus,
    title: "Leads",
    description: "Captura, cualificación y seguimiento automático.",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Clasificación, respuestas y routing automático.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atención, cualificación y seguimiento.",
  },
  {
    icon: Database,
    title: "CRM",
    description: "Actualización automática de contactos y oportunidades.",
  },
  {
    icon: FileText,
    title: "Documentos",
    description: "Extracción y procesamiento de información.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Datos recopilados y reportes generados automáticamente.",
  },
]

/** Problema — spec §9 */
export function ProblemSection() {
  return (
    <Section id="problema">
      <ScrollReveal className="flex justify-center">
        <SectionHeader
          eyebrow="El punto de partida"
          title={
            <>
              Demasiado trabajo manual.
              <br />
              <span className="text-muted">Demasiado poco tiempo.</span>
            </>
          }
          lead="Tu equipo no debería estar copiando datos, respondiendo las mismas preguntas, actualizando CRMs o persiguiendo leads manualmente."
        />
      </ScrollReveal>

      <ScrollRevealGroup
        as="ul"
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {problems.map((item) => (
          <ScrollRevealItem as="li" key={item.title}>
            <div className="card-hover h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-card border border-line bg-bg text-ink-soft"
              >
                <item.icon className="size-[18px]" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">
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
  )
}

import { Section, SectionHeader } from "./Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"

const steps = [
  {
    number: "01",
    title: "Descubrimos",
    description:
      "Analizamos cómo trabaja tu empresa y detectamos procesos repetitivos con potencial de automatización.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Diseñamos el workflow, los agentes, las integraciones y la lógica necesarios.",
  },
  {
    number: "03",
    title: "Implementamos",
    description:
      "Construimos y conectamos la automatización con tus herramientas.",
  },
  {
    number: "04",
    title: "Optimizamos",
    description:
      "Monitorizamos el sistema y mejoramos continuamente su rendimiento.",
  },
]

/** Proceso — spec §14 */
export function ProcessSteps({
  title = "De proceso manual a sistema automatizado.",
  lead = "Cuatro fases. Ninguna empieza escribiendo código: empieza entendiendo cómo trabajáis hoy.",
}: {
  title?: string
  lead?: string
}) {
  return (
    <Section id="proceso">
      <ScrollReveal className="flex justify-center">
        <SectionHeader eyebrow="Cómo trabajamos" title={title} lead={lead} />
      </ScrollReveal>

      <ScrollRevealGroup
        as="ol"
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step) => (
          <ScrollRevealItem as="li" key={step.number} className="h-full">
            <div className="card-hover h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
              <p className="font-mono text-sm text-accent">{step.number}</p>
              <h3 className="mt-4 type-h3">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>
    </Section>
  )
}

import { Section, SectionHeader } from "./Section"
import { ROICalculator } from "./ROICalculator"
import { ScrollReveal } from "./ScrollReveal"

/** Sección de la calculadora — spec §13 */
export function ROISection({
  title = "¿Cuánto te cuesta seguir haciéndolo manualmente?",
  lead = "Pon los números de tu propio proceso. El cálculo se hace aquí, en tu navegador, y no se envía a ningún sitio.",
}: {
  title?: string
  lead?: string
}) {
  return (
    <Section id="calculadora">
      <ScrollReveal className="flex justify-center">
        <SectionHeader eyebrow="Coste real" title={title} lead={lead} />
      </ScrollReveal>

      <ScrollReveal className="mt-14" delay={0.1}>
        <ROICalculator />
      </ScrollReveal>
    </Section>
  )
}

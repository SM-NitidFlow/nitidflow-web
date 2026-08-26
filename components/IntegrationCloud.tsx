import { Section, SectionHeader } from "./Section"
import { IntegrationCard } from "./IntegrationCard"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"
import { integrations } from "@/lib/site"

/** Trust / stack — spec §8 */
export function IntegrationCloud() {
  return (
    <Section id="integraciones" tone="surface" className="border-y border-line">
      <ScrollReveal className="flex justify-center">
        <SectionHeader
          eyebrow="Compatible con tu stack"
          title="Conectamos la IA con las herramientas que ya utilizas."
          lead="No necesitas migrar de sistema para empezar a automatizar. Trabajamos sobre lo que tu empresa ya tiene en marcha."
        />
      </ScrollReveal>

      <ScrollRevealGroup
        as="ul"
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {integrations.map((tool) => (
          <ScrollRevealItem as="li" key={tool.name}>
            <IntegrationCard name={tool.name} category={tool.category} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealGroup>

      <p className="mt-8 text-center text-[0.8125rem] text-muted">
        Compatible con herramientas como estas. Los nombres y marcas
        pertenecen a sus respectivos titulares; Nitidflow no mantiene
        partnerships oficiales con ellas.
      </p>
    </Section>
  )
}

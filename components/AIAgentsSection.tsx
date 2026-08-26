import { Section, SectionHeader } from "./Section"
import { AIAgentCard } from "./AIAgentCard"
import { Cta } from "./Cta"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal"
import { agents } from "@/lib/agents"

/** Agentes de IA — spec §11 */
export function AIAgentsSection() {
  return (
    <Section id="agentes-ia" className="overflow-hidden">
      <div aria-hidden="true" className="brand-glow opacity-60" />

      <div className="relative z-10">
        <ScrollReveal className="flex justify-center">
          <SectionHeader
            eyebrow="Agentes de IA"
            title={
              <>
                No necesitas otro empleado.
                <br />
                <span className="text-muted">Necesitas un agente de IA.</span>
              </>
            }
            lead="Agentes capaces de interpretar información, tomar decisiones y ejecutar acciones dentro de tus herramientas."
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-14 grid gap-5 lg:grid-cols-3"
          stagger={0.1}
        >
          {agents.map((agent) => (
            <ScrollRevealItem as="li" key={agent.name} className="h-full">
              <AIAgentCard agent={agent} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal className="mt-12 flex justify-center" delay={0.1}>
          <Cta href="/agentes-ia">Explorar agentes IA</Cta>
        </ScrollReveal>
      </div>
    </Section>
  )
}

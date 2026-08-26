import { Bot, CalendarDays, Database, HardDrive, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ComponentType } from "react"
import { Section, SectionHeader } from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import { BrandGlyph } from "./BrandGlyph"

/** Los nodos de marca usan su glifo; los genéricos, un icono de lucide. */
const WhatsAppNode = ({ className }: { className?: string }) => (
  <BrandGlyph name="WhatsApp" className={className} />
)

const SlackNode = ({ className }: { className?: string }) => (
  <BrandGlyph name="Slack" className={className} />
)

function Node({
  icon: IconComponent,
  label,
  accent = false,
}: {
  icon: LucideIcon | ComponentType<{ className?: string }>
  label: string
  accent?: boolean
}) {
  return (
    <div
      className={`flex flex-col items-center gap-1.5 rounded-card border bg-surface px-2 py-2.5 text-center shadow-soft sm:flex-row sm:gap-2 sm:px-3 sm:py-2.5 sm:text-left ${
        accent ? "border-accent/25" : "border-line"
      }`}
    >
      <IconComponent
        aria-hidden="true"
        className={`size-4 shrink-0 ${accent ? "text-accent" : "text-ink-soft"}`}
      />
      <span className="text-[0.6875rem] font-medium leading-tight tracking-tight sm:text-[0.8125rem]">
        {label}
      </span>
    </div>
  )
}

const branches = [
  { top: { icon: Database, label: "CRM" }, bottom: { icon: HardDrive, label: "Base de datos" } },
  { top: { icon: WhatsAppNode, label: "WhatsApp" }, bottom: { icon: CalendarDays, label: "Calendario" } },
  { top: { icon: Mail, label: "Email" }, bottom: { icon: SlackNode, label: "Slack" } },
]

/** Integraciones — spec §16 */
export function IntegrationsDiagram() {
  return (
    <Section id="tu-stack">
      <ScrollReveal className="flex justify-center">
        <SectionHeader
          eyebrow="Integraciones"
          title="Tu stack. Automatizado."
          lead="No necesitas cambiar todas tus herramientas. Conectamos las que ya utilizas y dejamos que cada dato viva donde le corresponde."
        />
      </ScrollReveal>

      <ScrollReveal className="mt-14" delay={0.1}>
        <div className="mx-auto max-w-3xl rounded-panel border border-line bg-surface p-5 shadow-soft sm:p-8">
          {/* Nodo raíz */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-card border border-accent/25 bg-accent/[0.06] px-4 py-2.5">
              <Bot aria-hidden="true" className="size-4 text-accent" />
              <span className="text-sm font-semibold tracking-tight text-accent">
                Capa de IA y orquestación
              </span>
            </div>
          </div>

          {/* Conector raíz → bus */}
          <div aria-hidden="true" className="mx-auto h-6 w-px bg-line" />

          {/* Bus horizontal con tres bajadas */}
          <div aria-hidden="true" className="grid grid-cols-3">
            <div className="h-px border-t border-line" />
            <div className="h-px border-t border-line" />
            <div className="h-px border-t border-line" />
          </div>
          <div aria-hidden="true" className="grid grid-cols-3">
            {branches.map((branch) => (
              <div key={branch.top.label} className="flex justify-center">
                <div className="h-6 w-px bg-line" />
              </div>
            ))}
          </div>

          {/* Ramas */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {branches.map((branch) => (
              <div key={branch.top.label} className="flex flex-col items-stretch">
                <Node icon={branch.top.icon} label={branch.top.label} accent />
                <div aria-hidden="true" className="mx-auto h-5 w-px bg-line" />
                <Node icon={branch.bottom.icon} label={branch.bottom.label} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}

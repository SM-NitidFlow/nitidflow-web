import type { CSSProperties } from "react"
import {
  Bot,
  CalendarCheck,
  Database,
  Inbox,
  MessageCircle,
  RotateCw,
} from "lucide-react"
import { AutomationWorkflow, type WorkflowStep } from "./AutomationWorkflow"

/**
 * Workflow del hero — spec §7 / §36.
 * Es una interfaz simulada con fines ilustrativos: lo que muestra no son
 * métricas de ningún cliente. Las cards flotantes van marcadas como
 * decorativas para lectores de pantalla.
 */
const heroSteps: WorkflowStep[] = [
  {
    icon: <Inbox />,
    title: "Lead capturado",
    description: "Formulario web · entrada registrada",
    status: "complete",
  },
  {
    icon: <Bot />,
    title: "Agente IA",
    description: "Analiza la consulta y cualifica el interés",
    status: "complete",
  },
  {
    icon: <Database />,
    title: "CRM actualizado",
    description: "Contacto y oportunidad creados",
    status: "complete",
  },
  {
    icon: <MessageCircle />,
    title: "WhatsApp enviado",
    description: "Primer contacto con contexto del lead",
    status: "processing",
  },
  {
    icon: <RotateCw />,
    title: "Follow-up automático",
    description: "Programado si no hay respuesta",
    status: "waiting",
  },
  {
    icon: <CalendarCheck />,
    title: "Reunión agendada",
    description: "Hueco confirmado en el calendario",
    status: "waiting",
  },
]

function FloatingCard({
  title,
  detail,
  meta,
  accent = false,
  className = "",
  delay = 0,
  float = 6,
}: {
  title: string
  detail: string
  meta?: string
  accent?: boolean
  className?: string
  delay?: number
  float?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={`card-in pointer-events-none absolute w-[12rem] rounded-card border border-line bg-surface/95 px-3.5 py-3 shadow-float backdrop-blur-sm ${className}`}
      style={
        {
          "--in-delay": `${delay}s`,
          "--float": `${float}px`,
        } as CSSProperties
      }
    >
      <div className="card-float">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[0.8125rem] font-semibold tracking-tight">
            {title}
          </p>
          <span
            className={`size-1.5 shrink-0 rounded-full ${
              accent ? "bg-accent status-pulse" : "bg-ink/25"
            }`}
          />
        </div>
        <p className={`mt-1 text-xs ${accent ? "text-accent" : "text-muted"}`}>
          {detail}
        </p>
        {meta ? (
          <p className="mt-2 border-t border-line pt-2 text-[0.6875rem] leading-snug text-muted">
            {meta}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto mt-14 w-full max-w-5xl sm:mt-16">
      {/* Panel de producto simulado */}
      <div
        className="card-in relative z-10 mx-auto w-full max-w-lg overflow-hidden rounded-panel border border-line bg-surface shadow-float"
        style={{ "--in-delay": "0.2s" } as CSSProperties}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line bg-bg/60 px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
            <span className="size-2 rounded-full bg-line" />
          </div>
          <p className="truncate font-mono text-[0.6875rem] text-muted">
            workflow · captacion-de-leads
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-pill border border-accent/25 bg-accent/8 px-2 py-0.5 text-[0.6875rem] font-medium text-accent">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent status-pulse"
            />
            Activo
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <AutomationWorkflow
            steps={heroSteps}
            ariaLabel="Ejemplo de flujo automatizado: de lead capturado a reunión agendada"
            dense
          />
        </div>
      </div>

      {/* Cards flotantes — solo desktop, decorativas */}
      <FloatingCard
        title="Agente IA"
        detail="En ejecución"
        meta="Analiza, decide y ejecuta en tus herramientas"
        accent
        delay={0.6}
        float={7}
        className="left-0 top-20 hidden lg:block"
      />
      <FloatingCard
        title="CRM"
        detail="✓ Actualizado"
        delay={0.8}
        float={9}
        className="right-0 top-10 hidden lg:block"
      />
      <FloatingCard
        title="WhatsApp"
        detail="✓ Mensaje enviado"
        delay={1}
        float={6}
        className="right-4 bottom-28 hidden lg:block"
      />
    </div>
  )
}

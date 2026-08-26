import type { CSSProperties, ReactNode } from "react"

export type WorkflowStep = {
  icon: ReactNode
  title: string
  description: string
  status?: "waiting" | "processing" | "complete"
}

const statusLabel: Record<NonNullable<WorkflowStep["status"]>, string> = {
  waiting: "En espera",
  processing: "Procesando",
  complete: "Completado",
}

function StatusPill({ status }: { status: NonNullable<WorkflowStep["status"]> }) {
  const isProcessing = status === "processing"
  const isComplete = status === "complete"

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-pill border px-2 py-0.5 text-[0.6875rem] font-medium ${
        isProcessing
          ? "border-accent/25 bg-accent/8 text-accent"
          : "border-line bg-bg text-muted"
      }`}
    >
      {isComplete ? (
        <span aria-hidden="true">✓</span>
      ) : (
        <span
          aria-hidden="true"
          className={`size-1.5 rounded-full ${
            isProcessing ? "bg-accent status-pulse" : "bg-muted/50"
          }`}
        />
      )}
      {statusLabel[status]}
    </span>
  )
}

/** Conector vertical: la línea se dibuja y un dot la recorre. Todo en CSS. */
function Connector({ index }: { index: number }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-8 w-px sm:h-9"
      style={{ "--flow-delay": `${index * 0.28}s` } as CSSProperties}
    >
      <span className="flow-line absolute inset-0 block bg-line" />
      <span className="flow-dot absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-accent" />
    </div>
  )
}

/**
 * Workflow de automatización reutilizable — spec §35.
 * Server Component: cero JavaScript de cliente. Siempre vertical,
 * nunca genera overflow horizontal.
 */
export function AutomationWorkflow({
  steps,
  className = "",
  ariaLabel = "Flujo de automatización",
  dense = false,
}: {
  steps: WorkflowStep[]
  className?: string
  ariaLabel?: string
  dense?: boolean
}) {
  return (
    <ol className={`reveal-group flex flex-col ${className}`} aria-label={ariaLabel}>
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col">
          {index > 0 ? <Connector index={index - 1} /> : null}
          <div
            className={`card-hover flex items-start gap-3 rounded-card border border-line bg-surface shadow-soft ${
              dense ? "px-3.5 py-3" : "px-4 py-3.5"
            }`}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-[0.625rem] border border-line bg-bg text-ink-soft [&>svg]:size-4"
            >
              {step.icon}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                {/* Sin truncate: en móvil ocultaba parte del título, y su
                    white-space:nowrap forzaba el ancho mínimo del contenedor. */}
                <p className="min-w-0 text-sm font-semibold leading-snug tracking-tight">
                  {step.title}
                </p>
                {step.status ? <StatusPill status={step.status} /> : null}
              </div>
              <p className="mt-0.5 text-[0.8125rem] leading-snug text-muted">
                {step.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

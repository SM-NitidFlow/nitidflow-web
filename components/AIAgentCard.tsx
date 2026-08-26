import type { ReactNode } from "react"
import { AutomationWorkflow, type WorkflowStep } from "./AutomationWorkflow"

export type AgentCardData = {
  name: string
  description: string
  tools: string[]
  steps: WorkflowStep[]
  status?: string
}

/** Card de agente IA: nombre, descripción, workflow, tools y estado — spec §35 */
export function AIAgentCard({
  agent,
  footer,
}: {
  agent: AgentCardData
  footer?: ReactNode
}) {
  return (
    <article className="card-hover flex h-full flex-col rounded-panel border border-line bg-surface p-5 shadow-soft sm:p-6">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {agent.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {agent.description}
          </p>
        </div>
        {agent.status ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-pill border border-accent/25 bg-accent/8 px-2 py-0.5 text-[0.6875rem] font-medium text-accent">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent status-pulse"
            />
            {agent.status}
          </span>
        ) : null}
      </header>

      <div className="mt-5 rounded-card border border-line bg-bg p-3">
        <AutomationWorkflow
          steps={agent.steps}
          ariaLabel={`Flujo del ${agent.name}`}
          dense
        />
      </div>

      <div className="mt-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">
          Herramientas
        </p>
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {agent.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-pill border border-line bg-bg px-2.5 py-1 text-[0.75rem] text-ink-soft"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>

      {footer ? <div className="mt-auto pt-5">{footer}</div> : null}
    </article>
  )
}

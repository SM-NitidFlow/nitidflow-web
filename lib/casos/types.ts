import type { ReactNode } from "react"

export type CaseStep = { title: string; description: string }

export type CaseWorkflowStep = {
  icon: ReactNode
  title: string
  description: string
  status?: "waiting" | "processing" | "complete"
}

export type Caso = {
  slug: string
  /** Cliente. Publicar un caso con nombre requiere su permiso por escrito. */
  cliente: string
  sector: string
  /** true cuando el cliente ha autorizado publicar el caso con su nombre. */
  permisoCliente: boolean
  metaTitle: string
  metaDescription: string
  h1: string
  subheadline: string
  /** Resumen para la tarjeta del listado */
  excerpt: string
  /** En producción desde… */
  enProduccionDesde: string

  problema: { title: string; body: string[] }

  antes: { title: string; lead: string; pasos: string[] }

  ahora: {
    title: string
    lead: string
    label: string
    steps: CaseWorkflowStep[]
  }

  decisiones: { title: string; lead: string; items: CaseStep[] }

  herramientas: { nombre: string; papel: string }[]

  /** Sólo hechos comprobables. Nada estimado, nada redondeado a ojo. */
  medible: { title: string; lead: string; items: CaseStep[] }

  /** Lo que todavía no se puede afirmar, dicho explícitamente. */
  pendiente: { title: string; lead: string; items: string[] }

  /** Qué salió mal. Un caso sin esto no es un caso, es un folleto. */
  incidencia?: { title: string; body: string[] }

  related: { label: string; href: string; description: string }[]
}

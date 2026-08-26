import type { ReactNode } from "react"
import type { FaqItem } from "@/lib/faq"

export type LandingStep = { title: string; description: string }

export type LandingWorkflowStep = {
  icon: ReactNode
  title: string
  description: string
  status?: "waiting" | "processing" | "complete"
}

export type Landing = {
  /** Ruta absoluta, p. ej. "/automatizacion-ventas" */
  slug: string
  /** Nombre corto para breadcrumbs y enlaces internos */
  shortName: string
  /** Nivel intermedio del breadcrumb, p. ej. Sectores para /sectores/clinicas */
  breadcrumbParent?: { name: string; path: string }
  /** <title> de la página */
  metaTitle: string
  metaDescription: string
  /** Único H1 de la página */
  h1: string
  subheadline: string
  eyebrow: string
  /** serviceType del Service schema */
  serviceType: string
  /** CTA principal de esta landing */
  ctaLabel: string

  problem: {
    title: string
    body: string[]
    signals: string[]
  }

  how: {
    title: string
    lead: string
    steps: LandingStep[]
  }

  workflow: {
    title: string
    lead: string
    label: string
    steps: LandingWorkflowStep[]
  }

  cases: {
    title: string
    lead: string
    items: LandingStep[]
  }

  integrations: {
    title: string
    lead: string
    names: string[]
  }

  benefits: {
    title: string
    items: LandingStep[]
  }

  /** Límites honestos: qué NO resuelve esta automatización. */
  limits: {
    title: string
    items: string[]
  }

  faq: FaqItem[]

  /** Enlaces internos a otras páginas comerciales — spec §40 */
  related: { label: string; href: string; description: string }[]

  finalCta: { title: string; lead: string; label: string }
}

import type { ReactNode } from "react"
import { Badge } from "./Badge"
import { Breadcrumbs } from "./Breadcrumbs"
import { Container } from "./Container"
import { Section } from "./Section"

/** Marca un dato que la empresa debe completar antes de publicar. */
export function Pendiente({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-accent/12 px-1.5 py-0.5 font-medium text-ink-soft">
      {children}
    </mark>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="type-h3">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  )
}

export function LegalPage({
  title,
  h1,
  slug,
  intro,
  children,
}: {
  title: string
  h1: string
  slug: string
  intro: string
  children: ReactNode
}) {
  return (
    <>
      <section className="relative overflow-hidden pb-4 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow opacity-50" />
        <Container width="narrow" className="relative z-10">
          <Breadcrumbs
            items={[
              { name: "Legal", path: "/legal/aviso-legal" },
              { name: title, path: slug },
            ]}
          />
          <Badge>Legal</Badge>
          <h1 className="type-h2 mt-6">{h1}</h1>
          <p className="type-lead mt-5">{intro}</p>
        </Container>
      </section>

      <Section width="narrow" className="pt-10 sm:pt-12">
        <div
          role="note"
          className="mb-12 rounded-panel border border-accent/25 bg-surface p-5 shadow-soft sm:p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Pendiente de completar antes de publicar
          </p>
          <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">
            Los datos <Pendiente>resaltados</Pendiente> son marcadores. Deben
            sustituirse por los datos registrales reales y el texto debe
            revisarlo un profesional antes de que esta web esté accesible al
            público. Publicar información legal inventada o incompleta es peor
            que no tener la página.
          </p>
        </div>

        {children}

        <p className="mt-14 text-[0.8125rem] text-muted">
          Última actualización: <Pendiente>fecha de revisión</Pendiente>.
        </p>
      </Section>
    </>
  )
}

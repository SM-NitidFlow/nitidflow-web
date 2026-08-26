import { Badge } from "./Badge"
import { Container } from "./Container"
import { Cta } from "./Cta"
import { HeroVisual } from "./HeroVisual"

/** Hero de la homepage — spec §7 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pb-4 pt-14 sm:pt-20">
      <div aria-hidden="true" className="brand-glow" />
      <div aria-hidden="true" className="tech-grid" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Badge>Automatización con IA</Badge>

          <h1 className="type-hero mt-6">
            Automatiza tu empresa.
            <br />
            <span className="text-muted">No tus empleados.</span>
          </h1>

          <p className="type-lead mt-6 max-w-xl">
            Diseñamos automatizaciones y agentes de IA que ejecutan tareas,
            conectan tus herramientas y eliminan procesos manuales.
          </p>

          <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Cta href="/contacto" className="w-full sm:w-auto">
              Analizar mi empresa
            </Cta>
            <Cta href="#como-funciona" variant="secondary" className="w-full sm:w-auto">
              Ver cómo funciona
            </Cta>
          </div>

          <p className="mt-5 text-[0.8125rem] text-muted">
            Sin compromiso · 30 min · Identificamos oportunidades reales de
            automatización
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}

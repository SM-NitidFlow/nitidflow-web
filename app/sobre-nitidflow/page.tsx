import Link from "next/link"
import { Badge } from "@/components/Badge"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Container } from "@/components/Container"
import { FinalCTA } from "@/components/FinalCTA"
import { Section, SectionHeader } from "@/components/Section"
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Sobre Nitidflow",
  description:
    "Quiénes somos y cómo trabajamos: automatización con IA para pymes españolas, con los datos en infraestructura del cliente y precio por entregable.",
  path: "/sobre-nitidflow",
})

const principios = [
  {
    title: "El servidor y los datos son del cliente",
    description:
      "La orquestación se ejecuta, por defecto, en infraestructura vuestra. No en una plataforma nuestra a la que quedaríais atados y por la que pasarían los datos de vuestros clientes.",
  },
  {
    title: "Revisión humana antes de lo irreversible",
    description:
      "Nada que se envíe a un cliente final, se facture o se cierre sale sin que una persona lo haya podido ver. La automatización propone; la consecuencia la asume alguien.",
  },
  {
    title: "Precio por entregable, no por horas",
    description:
      "Cada automatización se presupuesta como una pieza con alcance definido. Si hay descuento, va escrito en el presupuesto: nada gratis en silencio.",
  },
  {
    title: "No automatizar antes de tener el problema",
    description:
      "Un proceso que ocurre tres veces al mes no justifica un sistema. Decirlo pronto es parte del trabajo, aunque reduzca la factura.",
  },
  {
    title: "Cumplimiento antes que elegancia técnica",
    description:
      "RGPD, requisitos de facturación y obligaciones del sector van por delante de la solución más bonita. En España esto no es un detalle: es el marco.",
  },
  {
    title: "Una sola fuente de verdad por dato",
    description:
      "Cada dato tiene un sistema que manda sobre él. Las capas intermedias son ventanas o bandejas de entrada, nunca copias sincronizadas que acabarán divergiendo.",
  },
]

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs items={[{ name: "Sobre Nitidflow", path: "/sobre-nitidflow" }]} />
          <div className="max-w-3xl">
            <Badge>Sobre nosotros</Badge>
            <h1 className="type-hero mt-6">
              Diseñamos automatizaciones a medida.
            </h1>
            <p className="type-lead mt-6 max-w-2xl">
              Nitidflow es una consultora española de automatización de
              procesos con IA. Trabajamos con pymes: empresas donde el proceso
              importante depende de una persona y donde un proyecto de doce
              meses no es una opción.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Cómo trabajamos"
              title="Pocos clientes, procesos concretos."
              align="left"
            />
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Somos un equipo pequeño y eso condiciona cómo trabajamos: no
                podemos llevar veinte proyectos a la vez, así que elegimos
                pocos y nos metemos a fondo. En la práctica eso significa que
                hablas con quien construye, no con un gestor de cuenta.
              </p>
              <p>
                Empezamos siempre por un proceso. No por un diagnóstico global
                de la empresa ni por un plan de transformación digital: por el
                proceso que más veces al día ocurre y que tiene criterio
                identificable. Ponerlo en producción enseña más sobre vuestros
                sistemas que tres semanas de análisis.
              </p>
              <p>
                Y dejamos las cosas documentadas para que podáis mantenerlas.
                Una automatización que solo entiende quien la escribió no es un
                activo, es una dependencia.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-panel border border-line bg-bg p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Lo que no somos
              </p>
              <ul className="mt-5 flex flex-col">
                {[
                  "Una agencia de marketing que además hace bots",
                  "Una agencia de una única herramienta",
                  "Un proveedor de software que os vende licencias",
                  "Un equipo que dice sí a todo para cerrar el proyecto",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3 text-sm text-ink-soft last:border-b-0"
                  >
                    <span aria-hidden="true" className="mt-0.5 font-mono text-xs text-muted">
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.8125rem] leading-relaxed text-muted">
                Si lo que buscáis es a alguien que confirme un plan ya decidido,
                probablemente no encajemos. Cuestionar la premisa es parte de lo
                que hacemos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="flex justify-center">
          <SectionHeader
            eyebrow="Principios"
            title="Seis decisiones que no negociamos."
            lead="No son valores de folleto: son reglas que condicionan lo que aceptamos construir y cómo lo construimos."
          />
        </ScrollReveal>

        <ScrollRevealGroup
          as="ul"
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {principios.map((item) => (
            <ScrollRevealItem as="li" key={item.title} className="h-full">
              <div className="card-hover h-full rounded-panel border border-line bg-surface p-6 shadow-soft">
                <h3 className="type-h3">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal className="mt-14" delay={0.1}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-relaxed text-muted">
              ERP y CRM conviven. No recomendamos sustituir uno por otro, ni que
              uno haga el trabajo del otro. Es el error más caro que hemos visto
              en proyectos de este tipo.
            </p>
            <p className="mt-6 text-sm text-muted">
              ¿Dudas concretas?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              >
                {site.email}
              </a>{" "}
              o mira{" "}
              <Link
                href="/casos"
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              >
                qué publicaremos como casos
              </Link>
              .
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <FinalCTA
        title="¿Encajamos?"
        lead="La forma rápida de averiguarlo es contarnos un proceso concreto y ver qué te decimos."
        label="Hablar con Nitidflow"
      />
    </>
  )
}

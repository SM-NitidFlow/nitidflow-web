import { Badge } from "@/components/Badge"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Container } from "@/components/Container"
import { LeadForm } from "@/components/LeadForm"
import { Section } from "@/components/Section"
import { ScrollReveal } from "@/components/ScrollReveal"
import { pageMetadata } from "@/lib/seo"
import { site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Cuéntanos qué proceso quieres automatizar. Primera conversación de 30 minutos sin compromiso para identificar si hay algo que merezca la pena.",
  path: "/contacto",
})

const expectativas = [
  {
    title: "Una conversación de 30 minutos",
    description:
      "Sobre cómo trabajáis hoy. No una demo de producto ni una presentación de capacidades.",
  },
  {
    title: "Te decimos también qué no automatizar",
    description:
      "Si el proceso que planteas no lo justifica, lo diremos. Sale más barato para los dos.",
  },
  {
    title: "Precio por entregable",
    description:
      "Si hay proyecto, se presupuesta con alcance definido y precio conocido antes de empezar. No por horas abiertas.",
  },
  {
    title: "Sin secuencia de seguimiento",
    description:
      "Contesta una persona. Si no encaja, no vas a recibir cinco correos automáticos después.",
  },
]

export default function ContactoPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-8 sm:pt-10">
        <div aria-hidden="true" className="brand-glow" />
        <Container className="relative z-10">
          <Breadcrumbs items={[{ name: "Contacto", path: "/contacto" }]} />
          <div className="max-w-3xl">
            <Badge>Primera conversación</Badge>
            <h1 className="type-hero mt-6">
              Cuéntanos qué quieres automatizar.
            </h1>
            <p className="type-lead mt-6 max-w-2xl">
              Con saber cómo se hace hoy el proceso, quién lo hace y cuántas
              veces ocurre, se puede decir bastante rápido si hay algo que
              merezca la pena.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="border-y border-line">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <ScrollReveal>
            <LeadForm />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="lg:pt-2">
              <h2 className="type-h3">Qué puedes esperar</h2>
              <ul className="mt-7 flex flex-col gap-6">
                {expectativas.map((item) => (
                  <li key={item.title} className="border-l-2 border-accent pl-5">
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-panel border border-line bg-bg p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Si prefieres el correo
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 inline-block text-base font-medium tracking-tight underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {site.email}
                </a>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
                  Funciona igual de bien. El formulario solo evita el ir y venir
                  de las primeras preguntas.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}

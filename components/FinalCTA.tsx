import Link from "next/link"
import { Section } from "./Section"
import { ScrollReveal } from "./ScrollReveal"

/** CTA final sobre fondo oscuro — spec §19 */
export function FinalCTA({
  title = "¿Qué proceso te está haciendo perder tiempo?",
  lead = "Cuéntanos cómo lo haces hoy. Te diremos qué podríamos automatizar y qué no merece la pena tocar.",
  label = "Analizar mi proceso",
  href = "/contacto",
}: {
  title?: string
  lead?: string
  label?: string
  href?: string
}) {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-14rem] z-0 h-[28rem]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--color-accent) 26%, transparent) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <ScrollReveal className="relative z-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="type-h2">{title}</h2>
          <p className="type-lead mt-5 text-dark-muted">{lead}</p>

          <Link
            href={href}
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-pill bg-white px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-white/90"
          >
            {label}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            >
              →
            </span>
          </Link>

          <p className="mt-5 text-[0.8125rem] text-white/45">
            Primera conversación sin compromiso.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  )
}

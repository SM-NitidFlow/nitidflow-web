import { Section, SectionHeader } from "./Section"
import { JsonLd } from "./JsonLd"
import { ScrollReveal } from "./ScrollReveal"
import { faqSchema } from "@/lib/schema"
import type { FaqItem } from "@/lib/faq"

/**
 * FAQ — spec §18.
 * Usa <details>/<summary>: contenido siempre presente en el HTML,
 * accesible por teclado y sin JavaScript. Emite FAQPage schema porque
 * las preguntas y respuestas están visibles en la propia página (§26).
 */
export function FAQ({
  items,
  title = "Preguntas frecuentes",
  lead,
  eyebrow = "Dudas razonables",
  tone = "light",
  withSchema = true,
}: {
  items: FaqItem[]
  title?: string
  lead?: string
  eyebrow?: string
  tone?: "light" | "surface"
  withSchema?: boolean
}) {
  return (
    <Section
      id="faq"
      tone={tone}
      className={tone === "surface" ? "border-y border-line" : ""}
      width="narrow"
    >
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}

      <ScrollReveal>
        <SectionHeader eyebrow={eyebrow} title={title} lead={lead} align="left" />
      </ScrollReveal>

      <ScrollReveal className="mt-10" delay={0.08}>
        <div className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-[0.9375rem] font-medium tracking-tight marker:content-none">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-line text-muted transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                >
                  <svg viewBox="0 0 12 12" className="size-2.5" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-9 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}

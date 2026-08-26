import Link from "next/link"
import { Badge } from "@/components/Badge"
import { Container } from "@/components/Container"
import { useCases } from "@/lib/site"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="brand-glow opacity-60" />
      <Container className="relative z-10" width="narrow">
        <Badge>Error 404</Badge>
        <h1 className="type-h2 mt-6">Esta página no existe.</h1>
        <p className="type-lead mt-5">
          Puede que el enlace esté mal, o que hayamos movido la página. Estas son
          las que más se buscan:
        </p>

        <ul className="mt-10 flex flex-wrap gap-2">
          {useCases.slice(0, 6).map((item) => (
            <li key={item.slug}>
              <Link
                href={item.slug}
                className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-surface px-3.5 py-2 text-sm shadow-soft transition-colors hover:border-accent/40 hover:text-accent"
              >
                {item.title}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/"
            className="font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Contacto
          </Link>
        </div>
      </Container>
    </section>
  )
}

import Link from "next/link"
import { Container } from "./Container"
import { footerColumns, site } from "@/lib/site"

/** Footer oscuro — spec §20 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
          <div className="max-w-xs">
            <p className="text-[0.9375rem] font-bold tracking-[0.14em]">
              NITIDFLOW
            </p>
            <p className="mt-3 text-sm leading-relaxed text-dark-muted">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm text-white/85 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {site.email}
            </a>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                {column.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-dark-line py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>
            Automatización con IA para empresas · España
          </p>
        </div>
      </Container>
    </footer>
  )
}

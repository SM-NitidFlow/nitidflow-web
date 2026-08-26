import Link from "next/link"
import { JsonLd } from "./JsonLd"
import { breadcrumbSchema } from "@/lib/schema"

export type Crumb = { name: string; path: string }

/** Breadcrumbs visibles + BreadcrumbList schema — spec §26 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Inicio", path: "/" }, ...items]

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Ruta de navegación" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-ink-soft">
                    {crumb.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={crumb.path}
                      className="transition-colors hover:text-ink"
                    >
                      {crumb.name}
                    </Link>
                    <span aria-hidden="true" className="text-line">
                      /
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

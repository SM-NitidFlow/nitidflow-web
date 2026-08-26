import Link from "next/link"
import type { ReactNode } from "react"
import type { Block } from "@/lib/articulos/types"

/**
 * Renderiza texto con enlaces en sintaxis [texto](/ruta).
 * Deliberadamente limitado: solo enlaces. No es un parser de Markdown,
 * y eso evita añadir una dependencia para lo que hace falta — spec §42.
 */
function withLinks(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const [, label, href] = match
    const isInternal = href.startsWith("/")

    nodes.push(
      isInternal ? (
        <Link
          key={`link-${key++}`}
          href={href}
          className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`link-${key++}`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {label}
        </a>
      ),
    )

    lastIndex = pattern.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`

        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} className="mt-6 type-h3 first:mt-0">
                {block.text}
              </h2>
            )

          case "h3":
            return (
              <h3
                key={key}
                className="mt-2 text-base font-semibold tracking-tight"
              >
                {block.text}
              </h3>
            )

          case "ul":
            return (
              <ul key={key} className="flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{withLinks(item)}</span>
                  </li>
                ))}
              </ul>
            )

          case "ol":
            return (
              <ol key={key} className="flex flex-col gap-2.5">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 w-5 shrink-0 font-mono text-xs text-accent"
                    >
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{withLinks(item)}</span>
                  </li>
                ))}
              </ol>
            )

          case "callout":
            return (
              <aside
                key={key}
                className="rounded-panel border border-accent/20 bg-surface p-5 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {block.title}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {withLinks(block.text)}
                </p>
              </aside>
            )

          case "quote":
            return (
              <blockquote
                key={key}
                className="border-l-2 border-accent pl-5 text-lg leading-relaxed tracking-tight text-ink-soft"
              >
                {withLinks(block.text)}
              </blockquote>
            )

          default:
            return (
              <p key={key} className="text-base leading-relaxed text-muted">
                {withLinks(block.text)}
              </p>
            )
        }
      })}
    </div>
  )
}

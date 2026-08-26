import type { CSSProperties, ReactNode } from "react"

/**
 * Bloque que aparece al entrar en viewport. Es un Server Component:
 * no envía JavaScript. La transición la aplica CSS y el cambio de estado
 * lo hace <RevealScope /> — spec §31 / §32.
 */
export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "li" | "section"
}) {
  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}s` }
    : undefined

  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}

/** Contenedor con stagger: los hijos directos entran escalonados. */
export function ScrollRevealGroup({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  /** Aceptado por compatibilidad; el escalonado lo define el CSS. */
  stagger?: number
  as?: "div" | "ul" | "ol"
}) {
  return <Tag className={`reveal-group ${className}`}>{children}</Tag>
}

/** Hijo directo de un ScrollRevealGroup. */
export function ScrollRevealItem({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "li"
}) {
  return <Tag className={className}>{children}</Tag>
}

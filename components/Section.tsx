import type { ReactNode } from "react"
import { Container } from "./Container"

export function Section({
  children,
  id,
  className = "",
  tone = "light",
  width = "default",
  as: Tag = "section",
}: {
  children: ReactNode
  id?: string
  className?: string
  tone?: "light" | "surface" | "dark"
  width?: "default" | "narrow" | "wide"
  as?: "section" | "div"
}) {
  const toneClass =
    tone === "dark"
      ? "bg-ink text-white"
      : tone === "surface"
        ? "bg-surface"
        : ""

  return (
    <Tag
      id={id}
      className={`relative py-20 sm:py-24 lg:py-28 ${toneClass} ${className}`}
    >
      <Container width={width}>{children}</Container>
    </Tag>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
  headingLevel = 2,
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: "center" | "left"
  tone?: "light" | "dark"
  headingLevel?: 1 | 2 | 3
}) {
  const Heading = `h${headingLevel}` as "h1" | "h2" | "h3"
  const alignClass =
    align === "center" ? "text-center mx-auto items-center" : "text-left"
  const leadTone = tone === "dark" ? "text-dark-muted" : "text-muted"

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading className={headingLevel === 1 ? "type-hero" : "type-h2"}>
        {title}
      </Heading>
      {lead ? (
        <p className={`type-lead ${leadTone}`}>{lead}</p>
      ) : null}
    </div>
  )
}

import Link from "next/link"
import type { ReactNode } from "react"

type Variant = "primary" | "secondary" | "inverse" | "quiet"

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft shadow-soft hover:shadow-lift",
  secondary:
    "border border-line bg-surface text-ink hover:border-ink/25 shadow-soft",
  inverse: "bg-white text-ink hover:bg-white/90",
  quiet: "text-ink hover:text-accent underline-offset-4 hover:underline",
}

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  arrow?: boolean
}) {
  const base =
    variant === "quiet"
      ? "inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      : "group inline-flex items-center justify-center gap-2 rounded-pill px-5 py-3 text-[0.9375rem] font-medium transition-all duration-200"

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {arrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        >
          →
        </span>
      ) : null}
    </Link>
  )
}
